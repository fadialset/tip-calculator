let eachWord = document.getElementById('each');
eachWord.style.display = 'none';
document.getElementById('totalTip').style.display = 'none'

function claculateTip() {
  let billAmount = document.getElementById('billamt').value;
  let serviceQuality = document.getElementById('serviceQual').value;
  let numberOfPeople = document.getElementById('peopleamt').value;
  
  if (billAmount === '' || serviceQuality == 0) {
    alert('pleas enter values');
    return;
  }
  
  if (numberOfPeople === '' || numberOfPeople < 1) {
    numberOfPeople = 1;
    eachWord.style.display = 'none';
  } else {
    eachWord.style.display = 'block';
  }
  
  let totalTip = (billAmount * serviceQuality) / numberOfPeople;
  totalTip = totalTip.toFixed(2);
  
  document.getElementById('totalTip').style.display = 'block';
  document.getElementById('tip').innerText = `TIP AMOUNT $${totalTip}`;
}

document.getElementById('calculate').onclick = function () {
  claculateTip();
};