require("dotenv").config()
const { POSTMARK_API_KEY, FROM_EMAIL_ADDRESS, CONTACT_TO_EMAIL_ADDRESS, NODE_ENV } = process.env
const postmark = require("postmark")

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed", headers: { Allow: "POST" } }
  }

  const data = JSON.parse(event.body)
  // console.log("evnt", event);
  if (!data.message || !data.contactName || !data.contactPhone) {
    return { statusCode: 422, body: "Name, email, and message are required." }
  }

  var client = new postmark.ServerClient(POSTMARK_API_KEY)

  client.sendEmail({
    From: "claudia@stablevariance.com" ?? FROM_EMAIL_ADDRESS,
    To: "claudia@stablevariance.com" ?? CONTACT_TO_EMAIL_ADDRESS,
    Subject: "New message from website contact form",
    TextBody: `Hello, a new form was submitted through your website Tower Junction Physio.

The following information was sent:

Name: ${data.contactName}
Phone-number: ${data.contactPhone}
Message:
${data.message}`,
  })

  try {
    await postmark.sendEmail(msg)
  } catch (error) {
    console.error(error)
    return {
      statusCode: 422,
      body: `Unexpected error occurred while sending email`,
    }
  }
  return { statusCode: 200, body: "Your message was successfully sent!" }
}
