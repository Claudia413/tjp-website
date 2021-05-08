require("dotenv").config();
const { SENDGRID_API_KEY, FROM_EMAIL_ADDRESS, CONTACT_TO_EMAIL_ADDRESS } = process.env;
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(SENDGRID_API_KEY);

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed", headers: { Allow: "POST" } };
  }

  const data = JSON.parse(event.body);
  console.log("evnt", event);
  if (!data.message || !data.contactName || !data.contactEmail) {
    return { statusCode: 422, body: "Name, email, and message are required." };
  }

  const msg = {
    to: CONTACT_TO_EMAIL_ADDRESS, // Change to your recipient
    from: FROM_EMAIL_ADDRESS, // Change to your verified sender
    subject: "New message from website contact form",
    text: `${data.message}`,
    html: `<strong>${data.message}</strong>`,
  };
  try {
    await sgMail.send(msg);
  } catch (error) {
    console.error(JSON.stringify(error, null, 2));
    return {
      statusCode: 422,
      body: `error: ${error}`,
    };
  }
  console.log("Email sent");
  return { statusCode: 200, body: "Your message was successfully sent!" };
};
