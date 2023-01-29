function inquireCriminalRecords(cutomerSSN) {
   // check with an external API
   // It will return the number of criminal records that found for this Social Serial Number
   console.log("Calling External API for checking criminal records for SSN: " + cutomerSSN);
   return 0;
}

function checkStatus(cutomerSSN) {
   console.log("Checking status started for: " + cutomerSSN);
   let checkResult = inquireCriminalRecords(cutomerSSN);
   if (checkResult === 0) {
      console.log("checkStatus was Positive");
      return "Positive";
   } else {
      console.log("There was a problem with checkStatus");
      return "Negative";
   }
}

function openBankAccount(cutomerSSN) {
   let checkResult = checkStatus(cutomerSSN);
   if (checkResult === "Positive") {
      // Opens the Account
      console.log("Bank Account created successfully");
   } else {
      console.log("There was a problem On customer check. contact security department for more details");
   }
}

console.clear();
openBankAccount(6525865214);
