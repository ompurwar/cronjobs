/*
* define your function here with the same name as of the file
* if file name is <your jab name>.job.js
* the function would be like 
* var <your job name> = () => {
*  //your code here
* }
*/ 
var hell = () => {
 console.log('this job executes every 2 second :' + new Date());
}

module.exports = {
 hell: hell,
 // define your execution time here
 // Examples : https://github.com/kelektiv/node-cron/tree/master/examples
 tenure:'*/2 * * * * *'// this is for every two second
}