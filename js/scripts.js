class Bank {
    constructor (balance){
        this.balance = balance;
    }

    deposit(amount, balanceValue){
        this.balance += amount;

        console.log(`deposited: $${amount}`)
        console.log({balance: this.balance});
        balanceValue = document.getElementById('balance').innerText = `$ ${this.balance}`
    }
    withdraw(amount, balanceValue){
        // guard clause
        if(this.balance - amount <= 0){
            console.log(`❌ You cant't withdraw more than your balance`)
            console.log({balance: this.balance});
            balanceValue = document.getElementById('balance').innerText = `$ ${this.balance}`
            return
        }
        this.balance -= amount;

        console.log(`withdrew $${amount}`)
        balanceValue = document.getElementById('balance').innerText = `$ ${this.balance}`

        console.log({balance: this.balance});
    }
}


jobAccount = new Bank (100)

console.log(jobAccount.balance)
jobAccount.deposit(100)
jobAccount.deposit(100)
jobAccount.withdraw(100)
jobAccount.withdraw(100)
jobAccount.withdraw(200)
jobAccount.deposit(10000)
jobAccount.deposit(10000)
jobAccount.deposit(10000)
jobAccount.withdraw(20000)
jobAccount.withdraw(6000)
jobAccount.withdraw(6000)


const depositBtn = document.getElementById('deposit')
const withdrawBtn = document.getElementById('withdraw')
const inputAmount = document.getElementById('inputAmount')
const balanceValue = document.getElementById('balance')

depositBtn.onclick = () => {
    let amount = Number(inputAmount.value)
    jobAccount.deposit(amount)
    // balanceValue.innerText = jobAccount.balance
}
withdrawBtn.onclick = () => {
    let amount = Number(inputAmount.value)
    jobAccount.withdraw(amount)
    // balanceValue.innerText = jobAccount.balance

}
  
