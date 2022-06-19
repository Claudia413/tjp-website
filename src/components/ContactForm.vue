<template>
  <div class="sign-up">
    <form>
      <!-- people should not fill these in and expect good things -->
      <div class="form-fields" aria-label="Please leave the following three fields empty">
        <label for="b_name">Name: </label>
        <input type="text" v-model="b_name" name="b_name" tabindex="-1" value="" placeholder="Freddie" id="b_name" />

        <label for="b_email">Email: </label>
        <input type="email" v-model="b_email" name="b_email" tabindex="-1" value="" placeholder="youremail@gmail.com" id="b_email" />

        <label for="b_comment">How can we help: </label>
        <textarea name="b_comment" v-model="b_message" tabindex="-1" placeholder="Please comment" id="b_comment"></textarea>
      </div>
      <!-- Back to normal form fields -->
      <label for="email">Your name</label>
      <input
        type="text"
        id="name"
        v-model="contactName"
        size="50"
        placeholder="First name Last name"
        :class="contactNameError ? 'contact-field error' : 'contact-field'"
        aria-label="Name"
        @change="contactNameError = false"
      />
      <label for="phone">Your phonenumber</label>
      <input
        type="phone-number"
        autocapitalize="off"
        autocorrect="off"
        id="phone"
        v-model="contactPhone"
        size="50"
        placeholder="027-1234567"
        :class="contactPhoneError ? 'contact-field error' : 'contact-field'"
        aria-label="Phone number used to schedule appointment"
        @change="contactPhoneError = false"
      />
      <label for="message">A short description of how we can help </label>
      <input
        type="message"
        id="message"
        v-model="contactMessage"
        size="200"
        placeholder="I injured my shoulder"
        :class="contactMessageError ? 'contact-field error' : 'contact-field'"
        aria-label="Short description of your problem"
        @change="contactMessageError = false"
      />
      <button type="button" @click="checkForm()">Send</button>
      <article v-for="msg in messages" :key="msg.text.value" class="message" :class="msg.type === 'success' ? 'is-success' : 'is-danger'">
        <div class="message-body">
          <p v-if="msg.type === 'error'">
            Oops. We're very sorry but something went wrong sending your message. Please give us a call instead.
          </p>
          <p v-if="msg.type === 'success'">Message successfully sent! We'll be in touch soon.</p>
        </div>
      </article>
    </form>
  </div>
</template>

<script>
import axios from "axios"

export default {
  name: "ContactForm",
  data() {
    return {
      messages: [],
      contactName: "",
      contactPhone: "",
      contactMessage: "",
      b_name: "",
      b_email: "",
      b_message: "",
      contactNameError: false,
      contactPhoneError: false,
      contactMessageError: false,
    }
  },
  methods: {
    checkForm() {
      this.contactNameError = false
      this.contactPhoneError = false
      this.contactMessageError = false
      if (this.contactName === "") {
        this.contactNameError = true
      }
      if (this.contactPhone === "") {
        this.contactPhoneError = true
      }
      if (this.contactMessage === "") {
        this.contactMessageError = true
      }
      if (this.contactNameError === false && this.contactPhoneError === false && this.contactMessageError === false) {
        this.sendMessage()
      }
    },
    sendMessage() {
      this.messages = []
      if (this.b_name === "" && this.b_email === "" && this.b_message === "") {
        this.triggerSendMessageFunction()
      }
    },
    cancelMessage() {
      this.resetForm()
    },
    resetForm() {
      this.messages = []
      this.contactName = ""
      this.contactPhone = ""
      this.contactMessage = ""
      this.contactNameError = false
      this.contactPhoneError = false
      this.contactMessageError = false
    },
    async triggerSendMessageFunction() {
      try {
        const response = await axios.post("/.netlify/functions/send-contact-email", {
          contactName: this.contactName,
          contactPhone: this.contactPhone,
          message: this.contactMessage,
        })
        this.resetForm()
        this.messages.push({ type: "success", text: response })
      } catch (error) {
        console.log("error", error)
        this.messages.push({ type: "error", text: error.response })
      }
    },
  },
}
</script>

<style scoped lang="scss">
.sign-up {
  margin-bottom: 80px;
}
form {
  .form-fields {
    left: -9999px;
    position: absolute;
  }
  .contact-field {
    display: block;
    border: 2px solid #444444;
    height: 24px;
    width: 256px;
    color: #333333;
    margin-bottom: 16px;
    padding: 8px;
    outline: none;
    &.error {
      border-style: dashed;
      border-color: rgb(216, 40, 40);
    }
    @media screen and(max-width: 768px) {
      width: 80%;
    }
  }
  label {
    display: flex;
    align-items: center;
    font-family: "Karla", sans-serif;
    font-size: 14px;
    margin-bottom: 12px;
    span {
      font-family: inherit;
    }
  }
  input[type="checkbox"] {
    visibility: hidden;
    margin-right: 16px;
  }
  .mt-2 {
    margin-top: 12px;
  }
  .button {
    border: 1px solid #8bb900;
    display: inline-block;
    padding: 8px 40px;
    background-color: #99cc00;
    margin-bottom: 20px;
    cursor: pointer;
    font-size: 14px;
  }
}
.is-success {
  color: #6a8d00;
}
.is-danger {
  color: rgb(216, 40, 40);
}
</style>
