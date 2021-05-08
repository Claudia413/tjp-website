<template>
  <div class="sign-up">
    <form>
      <!-- people should not fill these in and expect good things -->
      <div
        class="form-fields"
        aria-label="Please leave the following three fields empty"
      >
        <label for="b_name">Name: </label>
        <input
          type="text"
          v-model="b_name"
          name="b_name"
          tabindex="-1"
          value=""
          placeholder="Freddie"
          id="b_name"
        />

        <label for="b_email">Email: </label>
        <input
          type="email"
          v-model="b_email"
          name="b_email"
          tabindex="-1"
          value=""
          placeholder="youremail@gmail.com"
          id="b_email"
        />

        <label for="b_comment">How can we help: </label>
        <textarea
          name="b_comment"
          v-model="b_message"
          tabindex="-1"
          placeholder="Please comment"
          id="b_comment"
        ></textarea>
      </div>
      <!-- Back to normal form fields -->
      <input
        type="text"
        id="name"
        v-model="contactName"
        size="50"
        placeholder="Name"
        class="contact-field"
        aria-label="Name"
      />
      <input
        type="email"
        autocapitalize="off"
        autocorrect="off"
        id="email"
        v-model="contactEmail"
        size="50"
        placeholder="E-mail address"
        class="contact-field"
        aria-label="E-mail address"
      />
      <input
        type="message"
        id="message"
        v-model="contactMessage"
        size="200"
        placeholder="Your message"
        class="contact-field"
        aria-label="Short description of your problem"
      />
      <div class="button" type="submit" @click="sendMessage()">
        click here to send
      </div>
      <article
        v-for="msg in messages"
        :key="msg.text"
        class="message"
        :class="msg.type === 'success' ? 'is-success' : 'is-danger'"
      >
        <div class="message-body">
          {{ msg.text.data }}
        </div>
      </article>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ContactForm",
  data() {
    return {
      messages: [],
      contactName: "",
      contactEmail: "",
      contactMessage: "",
      b_name: "",
      b_email: "",
      b_message: "",
    };
  },
  methods: {
    sendMessage() {
      this.messages = [];
      if (this.b_name === "" && this.b_email === "" && this.b_message === "") {
        this.triggerSendMessageFunction();
      }
    },
    cancelMessage() {
      this.resetForm();
    },
    resetForm() {
      this.messages = [];
      this.contactName = "";
      this.contactEmail = "";
      this.contactMessage = "";
    },
    async triggerSendMessageFunction() {
      try {
        const response = await axios.post(
          "/.netlify/functions/send-contact-email",
          {
            contactName: this.contactName,
            contactEmail: this.contactEmail,
            message: this.contactMessage,
          }
        );
        this.resetForm();
        this.messages.push({ type: "success", text: response });
      } catch (error) {
        console.log("error", error);
        this.messages.push({ type: "error", text: error.response });
      }
    },
  },
};
</script>

<style scoped lang="scss">
form {
  .form-fields {
    left: -9999px;
    position: absolute;
  }
  .contact-field {
    display: block;
    border: none;
    height: 24px;
    width: 256px;
    color: black;
    margin-bottom: 16px;
    padding: 8px;
  }
  label {
    display: flex;
    align-items: center;
    color: blue;
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
    border: 1px solid pink;
    display: inline-block;
    padding: 8px;
    margin-bottom: 20px;
    cursor: pointer;
  }
}
</style>
