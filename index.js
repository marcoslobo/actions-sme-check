const core = require('@actions/core');
const github = require('@actions/github');
const httpClient = require('@actions/http-client')

try {
  // `who-to-greet` input defined in action metadata file
  var result = httpClient.get('https://api.github.com/repos/prefeiturasp/SME-NovoSGP/pulls?state=open')
  
  console.log(result);
  
  core.setOutput("sucesso", true);
  // Get the JSON webhook payload for the event that triggered the workflow
  // const payload = JSON.stringify(github.context.payload, undefined, 2)
  // console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}