// function getElement(id){
//     const element = document.getElementById(id);
//     return element;
// }

// const { createElement } = require("react");


// function toggle
function handleToggle(id){
    const handleDonationHistory=document.getElementsByClassName('donation-history-toggle');
    for(const donationHistory of handleDonationHistory){
        donationHistory.style.display ='none';
    }
    document.getElementById(id).style.display='block';


}

// handle button toggle
function handleToggleButton(id){
    const donationHistoryBtns= document.getElementsByClassName('donation-history-btn');
    for(const donationHistoryBtn of donationHistoryBtns){
        donationHistoryBtn.classList.remove('bg-[#b4f461]');
        donationHistoryBtn.classList.add('bg-white')
    }
     document.getElementById(id).classList.remove('bg-white');
    document.getElementById(id).classList.add('bg-[#b4f461]');
}

document.getElementById('btn-donation').addEventListener('click', function(){
    handleToggle('donation-part');
    handleToggleButton('btn-donation');
})

document.getElementById('btn-history').addEventListener('click', function(){
    handleToggle('form-part');
    handleToggleButton('btn-history');
})



// donate money for cart 1
const myAmountElement = document.getElementById("my-amount");
const cartAmountElement = document.getElementById('cart1-amount');
const inputField = document.getElementById('cart1-input-field');
const donateButton = document.getElementById('cart1-donate-btn');

let myAmount = 5500;
let cartAmount = 0;

myAmountElement.textContent=myAmount;
cartAmountElement.textContent=cartAmount;

donateButton.addEventListener('click', () => {
    const donateAmount = parseInt(inputField.value);

     const data= {
        date: new Date().toLocaleTimeString()
    }

    if(isNaN(donateAmount) || donateAmount<=0){
        alert('Please enter a valid positive number for your donation')
        return;
    }

    if(donateAmount> myAmount){
        alert('You do not have enough money.');
        return;
    }


    const historyContainer = document.getElementById('history-container');
    
    const newCart = document.createElement('div');
    newCart.innerHTML = `
    <div class="border-1 border-gray-300 max-w-[1400px] mx-auto p-5 mt-5">
            <h2><span id="donated-amount">${donateAmount}</span> Taka is Donated for famine-2024 at Feni, Bangladesh</h2>

            <input type="text" placeholder="${data.date}" class="input-field input border-none h-6 w-full" />
            
            </div>
    `;
    historyContainer.append(newCart);
                      


    myAmount -= donateAmount;
    cartAmount += donateAmount;

    myAmountElement.textContent=myAmount;
    cartAmountElement.textContent=cartAmount;

    inputField.value='';

    alert(`'Successfully donated  ${donateAmount}'`)
})



// donate money cart 2
const cartAmountElement2 = document.getElementById('cart2-amount');
const inputField2 = document.getElementById('cart2-input-field');
const donateButton2 = document.getElementById('cart2-donate-btn');


myAmountElement.textContent=myAmount;
cartAmountElement2.textContent=cartAmount;

donateButton2.addEventListener('click', () => {
    const donateAmount2 = parseInt(inputField2.value);

     const data= {
        date: new Date().toLocaleTimeString()
    }

    if(isNaN(donateAmount2) || donateAmount2<=0){
        alert('Please enter a valid positive number for your donation')
        return;
    }

    if(donateAmount2> myAmount){
        alert('You do not have enough money.');
        return;
    }


    const historyContainer = document.getElementById('history-container');
    
    const newCart = document.createElement('div');
    newCart.innerHTML = `
    <div class="border-1 border-gray-300 max-w-[1400px] mx-auto p-5 mt-5">
            <h2><span id="donated-amount">${donateAmount2}</span> Taka is Donated for famine-2024 at Feni, Bangladesh</h2>

            <input type="text" placeholder="${data.date}" class="input-field input border-none h-6 w-full" />
            
            </div>
    `;
    historyContainer.append(newCart);
                      


    myAmount -= donateAmount2;
    cartAmount += donateAmount2;

    myAmountElement.textContent=myAmount;
    cartAmountElement2.textContent=cartAmount;

    inputField2.value='';

    alert(`'Successfully donated  ${donateAmount2}'`)
})
// donate money cart 3
const cartAmountElement3 = document.getElementById('cart3-amount');
const inputField3 = document.getElementById('cart3-input-field');
const donateButton3 = document.getElementById('cart3-donate-btn');


myAmountElement.textContent=myAmount;
cartAmountElement3.textContent=cartAmount;

donateButton3.addEventListener('click', () => {
    const donateAmount3 = parseInt(inputField3.value);

     const data= {
        date: new Date().toLocaleTimeString()
    }

    if(isNaN(donateAmount3) || donateAmount3<=0){
        alert('Please enter a valid positive number for your donation')
        return;
    }

    if(donateAmount3> myAmount){
        alert('You do not have enough money.');
        return;
    }


    const historyContainer = document.getElementById('history-container');
    
    const newCart = document.createElement('div');
    newCart.innerHTML = `
    <div class="border-1 border-gray-300 p-5 mt-5">
            <h2><span id="donated-amount">${donateAmount3}</span> Taka is Donated for famine-2024 at Feni, Bangladesh</h2>

            <input type="text" placeholder="${data.date}" class="input-field input border-none h-6 w-full" />
            
            </div>
    `;
    historyContainer.append(newCart);
                      


    myAmount -= donateAmount3;
    cartAmount += donateAmount3;

    myAmountElement.textContent=myAmount;
    cartAmountElement3.textContent=cartAmount;

    inputField3.value='';

    alert(`'Successfully donated  ${donateAmount3}'`)
})
