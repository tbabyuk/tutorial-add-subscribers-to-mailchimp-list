"use server"


const mailchimp = require("@mailchimp/mailchimp_marketing");


mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER_PREFIX,
});


export const addSubscriber = async (formData) => {
  const email = formData.get("email")
  const firstName = formData.get("firstName")
  const lastName = formData.get("lastName")
  try {
    await mailchimp.lists.addListMember(process.env.MAILCHIMP_AUDIENCE_ID, {
      email_address: email,
      status: "subscribed",
      merge_fields: {
        FNAME: firstName,
        LNAME: lastName,
      }
    });
    return {successMessage: `Success! ${email} was successfully subscribed to our newsletter!`}
  } catch (error) {
    console.log(error.response)
    if(error.response.body.title === "Member Exists") {
      return {errorMessage: `Ooops! It looks like the email ${email} is already subscribed to our newsletter!`}
    } else {
      return {errorMessage: `Ooops! There was a problem subscribing ${email} to our newsletter!`}
    }
  }
}