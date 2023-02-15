var intialPrice = document.querySelector("#initial-price");
var stockQuantity = document.querySelector("#stock-quantity");
var currentPrice = document.querySelector("#current-price");
var submitBtn = document.querySelector("#submit-btn");
var outputEl = document.querySelector("#output-el");



submitBtn.addEventListener ( 'click',submitHandler);

function submitHandler() {
    var ip =  Number(intialPrice.value);
    var qty = Number(stockQuantity.value);
    var curr = Number(currentPrice.value);
        
    checkProfitAndLoss( ip , qty , curr );
    
}

function checkProfitAndLoss (initial,quantity,current){
 if (initial > current) {
    var loss  = (initial-current) * quantity;
    loss = loss.toFixed(2);

    var lossPercentage = (loss/initial) * 100;
     lossPercentage =  Math.round(lossPercentage.toFixed(2));

 showOutput ( " Hey the loss is " + loss + " and the percent is " + lossPercentage+"%" )



 } else if ( current > initial){
    var profit = (current-initial) * quantity;
    profit = profit.toFixed(2);


    var profitPercentage = (profit/initial) * 100;
    profitPercentage = Math.round(profitPercentage.toFixed(2));

    showOutput  ( " Hey the profit is " + profit + " and the percent is " + profitPercentage+"%" )



    
 } else {
    showOutput ("No pain no gain and no gain no pain");
 }

}


function showOutput(message){
    outputEl.innerHTML = message;
}


