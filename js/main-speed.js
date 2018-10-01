document.getElementById('convertButton').addEventListener('click', speedConveert);

function speedConveert(){
  let inputVal = document.getElementById('lbsInput').value;
  let unitVal = document.getElementById('inputGroupSelect04').value;

  if(unitVal === "milePerHour"){
    mileConvert(inputVal)
  }else if(unitVal === "kilometerPerHour"){
    klhConvert(inputVal)
  }else{
    metirConvert(inputVal)
  }
  
}

function mileConvert(speedVal){
  document.getElementById('output').innerHTML = `
    <div class="card bg-primary mb-2 mt-3 p-2">
    <div class="card-block">
      <h4>Kilometer per Hour:</h4>
      <div id="gramsOutput">${(Number(speedVal) * 1.609344 ).toFixed(3)}</div>
    </div>
  </div>

  <div class="card bg-success mb-2 p-2">
    <div class="card-block">
      <h4>Meter per Hour:</h4>
      <div id="kgOutput">${(speedVal * 1609.344).toFixed(3)}</div>
    </div>
  </div>
  `;
}

function klhConvert(speedVal){
  document.getElementById('output').innerHTML = `
    <div class="card bg-primary mb-2 mt-3 p-2">
    <div class="card-block">
      <h4>Mile per Hour:</h4>
      <div id="gramsOutput">${(Number(speedVal) / 0.6213711922).toFixed(3)}</div>
    </div>
  </div>

  <div class="card bg-success mb-2 p-2">
    <div class="card-block">
      <h4>Meter per Hour:</h4>
      <div id="kgOutput">${speedVal * 1000}</div>
    </div>
  </div>
  `;
}

function metirConvert(speedVal){
  document.getElementById('output').innerHTML = `
    <div class="card bg-primary mb-2 mt-3 p-2">
    <div class="card-block">
      <h4>Kilometer per Hour:</h4>
      <div id="gramsOutput">${(Number(speedVal) / 1000).toFixed(3)}</div>
    </div>
  </div>

  <div class="card bg-success mb-2 p-2">
    <div class="card-block">
      <h4>Meter per Hour:</h4>
      <div id="kgOutput">${speedVal / 1609.344}</div>
    </div>
  </div>
  `;
}