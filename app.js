const buyPrice = document.querySelector("#buy-price");
const currentPrice = document.querySelector("#current-price");
const stocksQuantity = document.querySelector("#stocks-quantity");
const calcBtn = document.querySelector("#calculate-btn");
const message = document.querySelector("#output");


calcBtn.addEventListener("click", plhandler )

function plhandler(){
    const bp = Number(buyPrice.value);
    const crntP = Number(currentPrice.value);
    const qnt = Number(stocksQuantity.value);
    
    calculateProfitAndLoss(bp, crntP, qnt);
}

function calculateProfitAndLoss(buy, current, qty){
    if (buy > current){
       const loss = ((buy - current)* qty).toFixed(2) ;
       const lossPercentage = ((loss/buy) *100).toFixed(2) ;

       showOutput(`The loss is ${loss} and loss percent is ${lossPercentage} %`) ;
    } 
    else if (current > buy) {
        const profit = ((current - buy)* qty).toFixed(2) ;
        const profitPercentage = ((profit/buy)* 100).toFixed(2) ;

        showOutput(`The proft is ${profit} and profit percent is ${profitPercentage} %`) ;

    }else {
        alert("Fill all the empty fields first to calculate!!");
    }
}

function showOutput(msg){
    message.innerText = msg ;
}
