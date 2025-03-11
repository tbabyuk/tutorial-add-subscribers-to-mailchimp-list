"use server"


const mailchimp = require("@mailchimp/mailchimp_marketing");

mailchimp.setConfig({
  apiKey: "YOUR_API_KEY",
  server: "YOUR_SERVER_PREFIX",
});

async function run() {
  const response = await mailchimp.ping.get();
  console.log(response);
}

run();