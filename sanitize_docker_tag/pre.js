const { exec } = require("child_process");

exec("npm install", (err, stdout, stderr) => {
  console.log("err", err);
  console.log("stdout", stdout);
  console.log("stderr", stderr);
});
