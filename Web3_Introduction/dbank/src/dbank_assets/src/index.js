import {dbank} from "../../declarations/dbank";

window.addEventListener("load", async function (){
  // console.log("finished loading");
  update();
})


document.querySelector("form").addEventListener("submit", async (event)=>{
  event.preventDefault();

  const button = event.target.querySelector("#submit-btn");
  
  const inputTopUp = document.getElementById("input-amount").value;
  const inputWithdrawal = document.getElementById("withdrawal-amount").value;
  //wait for user type and submit the amount
  button.setAttribute("disabled", true);

  if (inputTopUp != ""){
    await dbank.topUp(parseFloat(inputTopUp));
  }
  
  if (inputWithdrawal != ""){
    await dbank.withdrawl(parseFloat(inputWithdrawal));
  }
  
  update()
  //when user has finished type amount and click a button submit
  button.removeAttribute("disabled");
  document.getElementById("input-amount").value = "";
  document.getElementById("withdrawal-amount").value = "";
})

async function update(){
  await dbank.compound();
  const currentBalance = await dbank.checkBalance();
  document.querySelector("#value").innerHTML = currentBalance.toFixed(2);
}