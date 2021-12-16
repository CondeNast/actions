const core = require("@actions/core");

try {
  const text           = core.getInput("text");
  const sanitized_text = text.replace(/[^a-zA-Z0-9_.-]/g,"-");
  core.setOutput("sanitized_text", sanitized_text);
} catch (error) {
  core.setFailed(error.message);
}
