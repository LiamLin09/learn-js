// Define a JavaScript function called logMsg() that can be used to log an error message for any object that contains the property errMsg. 
function logMsg() {
  console.log(`Error message: ${this.errMsg}`);
}

const o1 = {
  val : [1, 2, 3],
  errMsg: 'Error from o1'
}

const o2 = {
  errMsg: 'Error from o2'
};

logMsg.call(o1);
logMsg.call(o2);

