<template>
  <div>
    <section class="section navigation">
      <div class="container sub-navigation">
        <a class="section-link" href="#what-is"><h6>What is Physiotherapy?</h6></a>
        <a class="section-link" href="#treatments"><h6>When can we help?</h6></a>
        <a class="section-link" href="#what-to-expect"><h6>What to expect?</h6></a>
        <a class="section-link" href="#techniques"><h6>How do we help?</h6></a>
        <a class="section-link" href="#pricing"><h6>Our prices</h6></a>
        <a class="section-link" href="#acc"><h6>ACC</h6></a>
      </div>
    </section>

    <section v-for="slice in document.slices" :key="slice.id" class="section" :id="slice.primary.section_id">
      <div v-if="slice.slice_type === 'section_of_text'" class="container">
				<h2 class="emphasize green">
            {{ slice.primary.section_title[0].text }}
          </h2>
					<prismic-rich-text :field="slice.primary.section_text"></prismic-rich-text>
      </div>

			<div v-if="slice.slice_type === 'section_with_cards'" class="container">
				<h2 class="emphasize green">
            {{ slice.primary.section_title[0].text }}
				</h2>
				<prismic-rich-text :field="slice.primary.section_intro" />
				<div class="card-grid">
				<IconCard  v-for="(card, index) in slice.items"
          :key="index" :title="card.card_title" :list="card.list" :id="index" :icon="card.icon"></IconCard>
				</div>
			</div>

			<div v-if="slice.slice_type === 'section_of_expandable_blocks'">
				<p>blocks go here</p>
			</div>
    </section>

    <!-- <section class="section techniques" id="techniques">
      <div class="container">
        <h2 class="emphasize green">How can we help?</h2>
        <div class="technique-grid">
          <p
            v-for="(technique, index) in techniques"
            class="button"
            :key="technique.technique"
            :class="techniqueIndex == index ? 'active' : ''"
            @click="techniqueIndex = index"
          >
            {{ technique.technique }}
          </p>
        </div>
        <div class="technique-description">
          <transition name="faderesize" mode="out-in">
            <h6 :key="techniques[techniqueIndex].technique">
              {{ techniques[techniqueIndex].technique }}
            </h6>
          </transition>
          <transition name="faderesize" mode="out-in">
            <p :key="techniques[techniqueIndex].description">
              {{ techniques[techniqueIndex].description }}
            </p>
          </transition>
        </div>
        <div class="technique-accordion">
          <div v-for="(technique, index) in techniques" class="accordion-container" :key="technique.technique">
            <div
              class="accordion-button"
              :class="closedAccordion == false && techniqueIndex == index ? 'active' : ''"
              @click="setTechniqueShown(index)"
            >
              {{ technique.technique }}
              <mdicon name="chevronDown" class="chevron" />
            </div>
            <transition name="appear" mode="out-in">
              <div
                class="accordion-card"
                :key="techniqueIndex + closedAccordion"
                :class="closedAccordion == false && techniqueIndex == index ? 'active' : ''"
              >
                <div class="content">
                  <p>{{ techniques[techniqueIndex].description }}</p>
                </div>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </section> -->

    <section class="section pricing" id="pricing">
      <div class="container">
        <h2 class="emphasize green">Our prices</h2>
        <div>
          <div class="price-table">
            <div class="treatment-title">
              <p>Private Initial Consultation</p>
              <p>Private Follow Up Consultation</p>
              <p>ACC Co-payment per visit</p>
            </div>
            <div class="price">
              <p>$75.00</p>
              <p>$65.00</p>
              <p>$30.00</p>
            </div>
          </div>
          <p class="subtitle">There may be an additional cost for any materials used during your treatment.</p>
        </div>
        <div class="pricing-info">
          <h5>Please note:</h5>
          <ul>
            <li>
              If you are receiving physiotherapy treatment under ACC, or any other insurance company, and they decline the cover of your injury you will be liable for the full cost of your treatment.
            </li>
            <li>
              In the event of non-payment of your account, then this will also include all recovery costs, legal fees and commissions that may occur in obtaining payment of the account.
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import IconCard from "../components/IconCard.vue"

export default {
  metaInfo: {
    title: "Services",
  },
  data() {
    return {
      techniqueIndex: 0,
      closedAccordion: false,
      document: {
				body: null,
				slices: null
			},
    }
  },
	components: {
		IconCard
	},
  methods: {
    async getContent() {
      const response = await this.$prismic.client.getSingle("services")
      this.document = response.data
			this.document.slices = response.data.body
			console.log('hello?', this.document.slices)
    },
		setTechniqueShown(techniqueId) {
      // Open accordion in same place as already selected after it has been closed
      if (this.techniqueIndex == techniqueId && this.closedAccordion == true) {
        this.setAccordionState(false)
        // Close accordion by choosing same treatment again
      } else if (this.techniqueIndex == techniqueId) {
        this.setAccordionState(true)
        // Open accordion card for a treatment
      } else {
        this.techniqueIndex = techniqueId
        this.setAccordionState(false)
      }
    },
    setAccordionState(bool) {
      this.closedAccordion = bool
    },
  },
  created() {
    this.getContent()
  },
  beforeRouteLeave(to, from, next) {
    this.$store.dispatch("setMobileMenuStateFalse")
    next()
  },

  //   },
  //   data() {
  //     return {
  //       techniqueIndex: 0,
  //       closedAccordion: false,
  //       techniques: [
  //         {
  //           technique: "Education",
  //           description:
  //             "Education is where we provide you with an understanding of what you have injured, why it is injured, how to fix the injury and how to stop it from happening again. If you understand all these aspects it gives you the ability to control your life better and in a safer way.",
  //         },
  //         {
  //           technique: "Manipulation",
  //           description:
  //             'Manipulation means moving joints and the soft tissues such as ligaments and muscles around joints. Techincally manipulation means moving joints in a specific safe way to make them "click" which reduces tension and increases flexibility around those joints.  This technique is often performed in the back and neck. We only use manipulation when necessary and appropriate and we will discuss this option with you first. We mainly utilise joint mobilisation in our treatments which is similar to manipulation but more gentle. Mobilisation is also very effective in reducing tension and increasing flexibility around joints.',
  //         },
  //         {
  //           technique: "Strengthening",
  //           description:
  //             "Strengthening is where we will direct you to perform an activity or exercise to increase specific muscle strength.  These exercises may be aimed at getting individual muscles stronger to correct posture or rehabilitate muscles that have been damaged or become weak from an injury or lack of use. The exercise may involve using rubber bands, weights like at a gym, using your body weight or using equipment such as swiss ball.",
  //         },
  //         {
  //           technique: "Stretching",
  //           description:
  //             "Stretching describes techniques where we try to create better flexibility. Being inflexible does not mean you are unfit.  Over time your body adapts to the activities you do.  If you use your muscles lots in the same way but don't stretch you may become tight in certain muscles and this may lead to muscle imbalance which can lead to injuries. Stretching muscles involves holding postures or positions for half a minute or so, to put the tissues on 'stretch'.  Stretching or lengthening muscles however takes time.  The 'stretch' provides the signal to your body to grow more length in that particular muscle.  So the stretch has to be performed frequently to tell your muscle it needs to grow. Like muscles, nerves too can become tight- again we may specify nerve stretches similar to muscle stretches to get you to grow longer nerves in order to correct your injury and/or reduce your pain and symptoms.",
  //         },
  //         {
  //           technique: "Muscle Balance",
  //           description:
  //             "Muscle balance involves correcting strength and flexibility of muscles that either work together or against each other.  Correcting muscle balance helps correct posture and can reduce the chance of further injury. The main principal of correct muscle balance is to make your body mechanically efficient and to reduce stress on your soft tissues and joints.",
  //         },
  //         {
  //           technique: "Acupuncture",
  //           description:
  //             "What is Acupuncture and how does it work? Acupuncture is a treatment devised by the Ancient Chinese to cure disease and injury. It involves inserting extremely fine needles into areas of the body. Acupuncture has been used in Asia for 5000 years, and now it is being widely used in western medicine. Western medicine research has shown that acupuncture alters body functions acting through the nervous system. This leads to the release of substances which promote healing, restore balance in body systems and relieve pain. What does Acupuncture treatment feel like? Acupuncture is not like getting an injection. The extremely fine needles used are often hardly felt while being inserted. However, you may feel a small prick sensation on insertion of the needle, and get a deep or dull ache around the needle. There is a chance you may get a twitch of the muscle the needle is inserted into. Most people experience no side effects at all, however, you may feel tired or sleepy after treatment, and there is a slight possibility of having a small bruise in the area where the needle was inserted. A small number of people do not respond significantly to acupuncture, but the majority will get some relief. Acupuncture is safe and natural, but if you are pregnant, or are a haemophiliac, have hepatitis or are H.I.V. positive please let us know. What is the procedure for Acupuncture? A number of sterile single use needles (usually around 4 to 8) will be inserted into your skin at various places. Sometimes a needle may be inserted well away from the pain, or even in your ear. The needles may be stimulated by twisting them but often they are left alone. The needles are left in place for a length of time that may vary from less than a minute, up to 30 minutes, depending on the effect that is sought. The needles are then removed and disposed of in a special container, which will be incinerated.",
  //         },
  //         {
  //           technique: "Strapping tape",
  //           description:
  //             "Why use Tape? Rigid tape is used to support a joints or muscles, or to restrict movement and provide feedback to the patient regarding their body position/posture. Flexible tape may also be used to assist in educating the muscles to work correctly to stabilise joints or assist in taking pressure off joints or muscles and allow normal posture and function. Things to be aware of when using tape. You will be asked if you know of any allergy to tape e.g. reaction to sticking plasters. If you report such allergies in the past, then tape will probably not be used on you. If tape is used and you are unhappy with it in any way e.g. itching or burning, please remove the tape. To remove the tape you can try soaking it first e.g. in a shower, and to peel it off slowly with the tape parallel to the skin (not 90 degrees) to prevent tearing of the skin. If you have a mild reaction to the tape it is best to wash the area with water only, not soap as this may increase the reaction.",
  //         },
  //         {
  //           technique: "Ultrasound",
  //           description:
  //             " What is Ultrasound? Ultrasound transmits ultrasonic waves or sound waves. These travel poorly through the air and skin, so a gel is added to increase their absorption, this is placed on the surface of your skin. Ultrasound may be ‘continuous’, resulting in an uninterrupted flow of energy/sound waves, or ‘pulsed’, intermittent interruption of the sound waves. If the ultrasound head is placed in water we can see ripples produced in the water. Most people have heard of diagnostic ultrasound such as that used in pregnancy scans.  This is a similar machine to ours but it has a lower ultrasound intensity and it records the sound waves that bounce back off tissues to create pictures inside the body.  Our machines are some of the newest available on the market.What does Ultrasound do? Ultrasound effects the cells and tissues lying under the skin. The sound waves stimulate the cells, which increases their activity rate. Therefore it ‘kick starts’ the body into healing quicker. It does this through increasing local blood flow, increased cell activity, increased extensibility (the ‘stretchiness’) of tissue, reduced pain, and massaging the tissues under the skin. What you should feel: Generally you will just feel the ultrasound head being massaged across your skin surface. You may feel local warmness under the ultrasound head. Please inform the Physiotherapist if you feel anything other than this i.e. uncomfortable heat, burning pain.",
  //         },
  //         {
  //           technique: "Cryotherapy (ice)",
  //           description:
  //             "What does Ice do?: Application of ice results in changes in the skin, subcutaneous, intramuscular and joint temperature. A decrease in tissue temperature causes a constriction/closing of local blood vessels. This can cause a reduction in swelling that is associated with inflammation and bleeding, thus it can cause a reduction in pain and muscle spasm. Ice should be applied for 15-20 minutes every 1-2 hours following a soft tissue injury. What you should feel: It will feel cold and slightly achy until it goes numb. If it becomes too cold or painful it may cause an ice burn to the skin so care must be taken to avoid this.",
  //         },
  //         {
  //           technique: "Superficial heat (hot pack)",
  //           description:
  //             "Heat is used for pain reduction and promotion of healing. The increased temperature results in an increased blood supply and therefore enhances healing. It may also increase nerve conduction speed, reduce pain, reduce muscle spasm and increase extensibility of tissue (the ability of the tissue to stretch). Make sure you don't burn yourself at home.",
  //         },
  //         {
  //           technique: "EMG Biofeedback",
  //           description:
  //             " What is EMG Biofeedback? EMG stands for electromyography, this means the measurement of electrical activity coming from muscles that are working. This device detects and amplifies the electric signal given off from a contracting muscle. These signals are very small and so this machine is very sensitive. When you do a particular task the machine will then tell us which muscles are working, how much they are working and when they are working.The machine can have either one or two recording electrodes. What you will feel: You will feel nothing abnormal when using this machine, as it only records what your muscles are already doing. The recording electrodes may have gel on them and then they may have to be taped onto the skin to maintain a good electrical contact",
  //         },
  //       ],
  //     };
  //   },
}
</script>

<style lang="scss">
.sub-navigation {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  column-gap: 16px;
  h6 {
    border-bottom: 4px solid #99cc00;
    padding-bottom: 4px;
    cursor: pointer;
    font-size: 16px;
    line-height: 33px;
    color: #1e2e4d;
    font-weight: 600;
    margin: 0;
  }
  .section-link {
    text-decoration: none;
    margin: 16px 0;
    padding-right: 8px;
  }
}
.section {
  margin-bottom: 64px;
}
.h2 {
  font-size: 26px;
  line-height: 48px;
  color: #333333;
	&.emphasize {
    &:after {
      content: "";
      display: block;
      width: 40px;
      height: 4px;
      animation: show 0.4s ease forwards;
    }
    &.green {
      &:after {
        background-color: #99cc00;
      }
    }
    &.white {
      &:after {
        background-color: white;
      }
    }
    @keyframes show {
      from {
        width: 0px;
      }
      to {
        width: 40px;
      }
    }
  }
}
.card-grid {
  display: flex;
  flex-flow: wrap;
  column-gap: 8px;
  row-gap: 32px;
  justify-content: space-between;
}
.technique-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  column-gap: 16px;
  max-width: 80%;
  margin: 0 auto;
  @media screen and(max-width: 911px) {
    column-gap: 8px;
    max-width: 80%;
  }
  @media screen and(max-width: 890px) {
    display: none;
  }
}
.button {
  display: inline-block;
  border: 1px solid #1e2e4d1a;
  padding: 12px 32px;
  margin-right: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &.active {
    background-color: #99cc00;
    color: white;
    border-color: #99cc00;
  }
}
.technique-description {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  h6 {
    color: #99cc00;
    font-size: 20px;
    line-height: 32px;
    margin: 0;
  }
  @media screen and(max-width: 890px) {
    display: none;
  }
}
.technique-accordion {
  display: none;
  .accordion-button {
    width: 100%;
    background-color: white;
    padding: 8px;
    border: 1px solid #1e2e4d1a;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    transition: all 0.2s ease-out;
    &:hover {
      font-weight: 600;
      color: #99cc00;
    }
    &.active {
      color: #99cc00;
      font-weight: 600;
      .chevron {
        transform: rotate(180deg);
      }
    }
    .chevron {
      display: inline-block;
      transition: all 0.3s ease-in-out;
    }
  }
  .accordion-card {
    height: 0;
    overflow: hidden;
    visibility: hidden;
    &.active {
      visibility: visible;
      height: 100%;
      .content {
        display: block;
        transform: scaleY(1);
      }
    }
    .content {
      transform: scaleY(0.1);
      display: none;
      padding: 8px;
    }
  }
  @media screen and(max-width: 890px) {
    display: block;
  }
}

.appear-enter-active {
  animation: grow 0.6s ease-in-out;
}

.appear-leave-active {
  animation: grow 0.4s reverse ease-in-out;
}

@keyframes grow {
  0% {
    max-height: 0;
  }
  100% {
    max-height: 1400px;
  }
}

.price-table {
  display: flex;
  .price {
    font-weight: 600;
  }
}

.pricing {
  h5 {
    margin-bottom: 0;
  }
  ul {
    list-style-type: none;
    padding-left: 0;
    font-size: 14px;
    line-height: 26px;
    li {
      &:before {
        content: "-";
        margin-right: 8px;
      }
    }
  }
}

.treatment-title {
  margin-right: 160px;
}

.faderesize-enter-active {
  transition: all 0.3s ease;
}
.faderesize-leave-active {
  transition: all 0.15s ease-in;
}

.faderesize-enter,
.faderesize-leave-to {
  opacity: 0;
  height: auto;
}
</style>
