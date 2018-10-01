document.getElementById('convertButton').addEventListener('click', tempConvert);


function tempConvert(){
  let inputVal = document.getElementById('lbsInput').value;
  let unitVal = document.getElementById('inputGroupSelect04').value;

  if(unitVal === 'fahrenheit'){
    fahrenheitConvert(inputVal)
    console.log(Number(inputVal) + 460.67)
  }
}

function fahrenheitConvert(numValue){
  document.getElementById('output').innerHTML = `
    <div class="card bg-primary mb-2 mt-3 p-2">
    <div class="card-block">
      <h4>Rankine:</h4>
      <div id="gramsOutput">${Number(numValue) + 459.67 }</div>
    </div>
  </div>

  <div class="card bg-success mb-2 p-2">
    <div class="card-block">
      <h4>Celsius:</h4>
      <div id="kgOutput">${((numValue-32) / 1.8).toFixed(3)}</div>
    </div>
  </div>

  <div class="card bg-danger mb-2 p-2">
      <div class="card-block">
        <h4>Kelvin:</h4>
        <div id="ozOutput">${((Number(numValue) + 459.67)  / 1.8).toFixed(3)}</div> 
      </div>
  </div>
  `;
}