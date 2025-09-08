// function getElement(id){
//     const element = document.getElementById(id);
//     return element;
// }


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

