function Bank(initialBalance) {
  let balance = initialBalance;

  function CheckBalance() {
    return balance;
  }

  function Deposit(depositAmount) {
    return balance + depositAmount;
  }

  return { CheckBalance, Deposit };
}


const bank = Bank(1000);
console.log(bank.CheckBalance())