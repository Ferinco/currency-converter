const apiKey = 'kMXxXFD5oM9NNjAclnnBEgiB6WmGCPN8aWPf8ymi';
const apiUrl = `https://api.freecurrencyapi.com/v1/latest?apikey=${apiKey}`;

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    const inputSelect = document.getElementById("input-select")
    for (const CurrencyCode in data ) {
      const option = document.createElement('option');
      option.value = CurrencyCode;
      option.textContent = `${CurrencyCode}`;
      inputSelect.appendChild(option);
      
    }
  })
  .catch(error => {
    // Handle any errors
    console.error('Error:', error);
  });

const input = document.getElementById("input")
 let screen = document.getElementById("screen")
const convertBtn = document.getElementById("convertBtn")
screen.style.marginLeft = "-2000px"
screen.style.transition = "0.5s"

convertBtn.addEventListener("click", (e)=>{
  e.preventDefault()
  let inputValue = input.value.trim()
  console.log(inputValue)
  outputValue = inputValue * 750
  screen.style.marginLeft = "0px"
  screen.innerHTML = `${outputValue}`
})
