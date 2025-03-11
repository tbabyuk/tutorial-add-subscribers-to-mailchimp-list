"use server"


const mailchimp = require("@mailchimp/mailchimp_marketing");

mailchimp.setConfig({
  apiKey: "f62f1a52a2eeab4e4023b957dd8046f6-us7",
  server: "us7",
});

async function run() {
  const response = await mailchimp.ping.get();
  console.log(response);
}

run();