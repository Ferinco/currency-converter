
const select = document.querySelectorAll(".select")
const input = document.getElementById("input")
let screen = document.getElementById("screen")
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
  // e.preventDefault()
  // let inputValue = input.value.trim()
  // console.log(inputValue)
  // outputValue = inputValue * 750
  // screen.style.marginLeft = "0px"
  // screen.innerHTML = `${outputValue}`
  let currency1 = select[0].value
  let currency2 = select[1].value
  let amount = input.value.trim()
  if (currency1 != currency2) {
    convertAmount(currency1, currency2, amount)
    
  }
  else alert("choose dfferent currencies")
})
