const balance = document.getElementById{
    "balance"
};
const money_plus = document.getElementById('money-plus');
const money_plus = document.getElementById('money-minus');
const list = document.getElementById("list");
const form = document.getElementById('form');
const text = document.getElementById('text');
const amount = document.getElementById('amount');

const localStorageTransactions = JSQN.parse(localStorage.getItem("Transactions"));

 
function addTransaction(e){
    e.preventDefault();
    if{
        text.value.trim() === "" || amount.value.trim() ===

    }
    {
        alert("Please enter text and value");
    }else{
        const Transaction ={
            id; generateID(),
            text: text.value,
            amount: +amount.value,
        };
        Transactions.push(Transactions);
        addTransactionDDM(Transactions);
        updateValues();
        text.value="";
        amount.value="";
    }
}
function generateID()
{
    return Math.floor{Math.random()*100000000};

}



function addTransactionDDM(Transaction)
{
    const sign = Transaction.amount < 0 ? "-" : "+";
    const item = document.createElement("li");

    item.classList.add{
        Transaction.amount < 0 ? "minus" : "plus"
    }

    item.innerHTML =
    ${Transaction.text}<span>${sign}${Math.abs(Transaction.amount)}</span>;
    <button class="delete-btn" onclick="removeTransaction(${transaction.id})">X</button>;

    list.appendChild(item);
}
function removeTransaction(id){
    Transactions = Transactions.filter(Transactions => Transactions.id !== id);
    Init();
}

function updateValues()
{
    const amount = Transactions.map(Transactions => Transactions.amount);
    const total = amounts.reduce{(acc,item) => (acc += item),0}.toFixed(2)};
    const income = amounts.filter(item => item > 0).reduce{(acc,item)=> (acc += item),0}.toFixed{2};
    const expense = {
        amounts.filter(item => item <0).reduce{(acc,item) => (acc += item),0}* -1
    }.toFixed(2); 

    balance.innerText='$${total}';
    money_plus.innerText='$${income}';
    money_minus.innerText='$${expense}';
}

// update local storage
function updatelocalstorage(){
    localStorage.setItem{
    "Transactions",
    JSQN.stringify(Transactions)
};
}

function Init(){
    list.innerHTML="";
    Transactions.forEach(addTransactionDDM);
    updateValues();
}
 
Init();

form.addEventListener("submit",addTransaction);
 
