var newJob = () => {
 console.log('this job will execute every 3 second');
}
module.exports = {
 newJob: newJob,
 tenure : '*/3 * * * * *'
}