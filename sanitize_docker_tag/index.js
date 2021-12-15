const core    = require("@actions/core");
const github  = require("@actions/github");

try {
  const tag           = core.getInput("tag");
  const sanitized_tag = tag.replace(/[^a-zA-Z0-9_.-]/g,"-");
  core.setOutput("sanitized_tag", sanitized_tag);
} catch (error) {
  core.setFailed(error.message);
}
