export function totalPhoneBill(bill){
  let call = 2.75;
  let sms = 0.65;
  let callCount = 0;
  let smsCount = 0;

  let billArr = bill.split(",");
  
  for(let i in billArr){
    let trimmed = billArr[i].trim();
      if(trimmed.includes("call")){
        callCount += 1;
    }else if(trimmed.includes("sms")){
      smsCount += 1;
    }
  }
  
  let total = callCount*call + smsCount*sms;
  return "R"+total.toFixed(2);
}
console.log(totalPhoneBill('call, sms, call, sms, sms'))