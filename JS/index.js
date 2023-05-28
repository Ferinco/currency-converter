
const select = document.querySelectorAll(".select")
const input = document.getElementById("input")
let screen = document.getElementById("screen")
const form = document.getElementById("form")
const currencyBtn = document.getElementById("currencyBtn")
fetch ("https://api.frankfurter.app/currencies")
.then(response => response.json())
.then(data =>{
  console.log(data)
  displayCurrencies(data)
})
function displayCurrencies(data){
  const entries = Object.entries(data)
  for (let i = 0; i < entries.length; i++) {
    select[0].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]}</option>`
    select[1].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]}</option>`
  }
}



const convertBtn = document.getElementById("convertBtn")
screen.style.marginLeft = "-2000px"
screen.style.transition = "0.5s"

convertBtn.addEventListener("click", (e)=>{
  let currency1 = select[0].value
  let currency2 = select[1].value
  let amount = input.value.trim()
  if (currency1 != currency2) {
    convertAmount(currency1, currency2, amount)
    
  }
  else alert("choose dfferent currencies")
})
function  convertAmount(currency1, currency2, amount){
  const host = 'api.frankfurter.app';
fetch(`https://${host}/latest?amount=10&from=${currency1}&to=${currency2}`)
  .then(response => response.json())
  .then(data => {
      screen.style.marginLeft = "0px"
      console.log(data)
      console.log(data.rates)
      answer = amount*(data.rates[currency2])
      console.log(answer)
  screen.innerHTML = `${answer}${currency2}`
  });
}
form.style.display= "none"
form.style.transition = "0.3s"
currencyBtn.addEventListener("click",(e)=>{
  form.style.display = "block"
})
const currencyBtnMobile = document.getElementById("currencyBtnMobile")
currencyBtnMobile.addEventListener("click",(e)=>{
  form.style.display = "block"
   document.querySelector(".banner-right-image").style.display = "none"
   currencyBtnMobile.style.display ="none"
})
cancelForm = document.getElementById("cancelContainer")
cancelForm.addEventListener("click",(e)=>{
  form.style.display=  "none"
  document.querySelector(".banner-right-image").style.display = "block"
  currencyBtnMobile.style.display ="flex"
})