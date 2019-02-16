var CronJob = require("cron").CronJob;
const fs = require("fs");
const path = require("path");
const directory = "./jobs/";
// rejex to verify wathere is an job file or not
const jobFileExp = /(\.job\.js)$/;

fs.readdir(directory, (err, files) => {
  files.forEach(file => {
    if (jobFileExp.test(file)) {
      let jobFile =  directory+ file.substring(0, file.length - 3);
      let codeToExecute = file.substring(0, file.length - 7);
      let job = require(jobFile)[codeToExecute];
      let tenure = require(jobFile).tenure;
      new CronJob(tenure, job, null, true, "America/Los_Angeles");
    }
  });
});