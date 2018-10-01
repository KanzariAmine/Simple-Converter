document.getElementById('convertButton').addEventListener('click',timeConvert)

function timeConvert(){
  let inputVal = $('#lbsInput').val();
  let unitVal = $('#inputGroupSelect04').val();

  if(unitVal === 'millisecond'){
    mliSencondConvert(inputVal)
  }else if(unitVal === 'second'){
    secConvert(inputVal);
  }else if(unitVal === 'minut'){
    minConvert(inputVal)
  }else{
    hrConvert(inputVal)
  }
  
}

function mliSencondConvert(timeVal){
  //document.getElementById('output').style.visibility = 'visible';

  document.getElementById('output').innerHTML = `
  <div class="card bg-primary mb-2 mt-3 p-2">
  <div class="card-block">
    <h4>Second:</h4>
    <div id="secondOutput">${(timeVal / 1000).toFixed(3)}</div>
  </div>
</div>

<div class="card bg-success mb-2 p-2">
  <div class="card-block">
    <h4>Minut:</h4>
    <div id="minutOutput">${(timeVal / 60000).toFixed(3)}</div>
  </div>
</div>

<div class="card bg-danger mb-2 p-2">
    <div class="card-block">
      <h4>Hour:</h4>
      <div id="hourOutput">${(timeVal / 360000).toFixed(3)}</div> 
    </div>
</div>
  `;
}

function secConvert(timeVal){
  document.getElementById('output').innerHTML = `
  <div class="card bg-primary mb-2 mt-3 p-2">
  <div class="card-block">
    <h4>Millisecond:</h4>
    <div id="secondOutput">${timeVal * 1000}</div>
  </div>
</div>

<div class="card bg-success mb-2 p-2">
  <div class="card-block">
    <h4>Minut:</h4>
    <div id="minutOutput">${timeVal / 60}</div>
  </div>
</div>

<div class="card bg-danger mb-2 p-2">
    <div class="card-block">
      <h4>Hour:</h4>
      <div id="hourOutput">${timeVal / 3600}</div> 
    </div>
</div>
  `;
}

function minConvert(timeVal){
  document.getElementById('output').innerHTML = `
  <div class="card bg-primary mb-2 mt-3 p-2">
  <div class="card-block">
    <h4>Millisecond:</h4>
    <div id="secondOutput">${timeVal * 60000}</div>
  </div>
</div>

<div class="card bg-success mb-2 p-2">
  <div class="card-block">
    <h4>Second:</h4>
    <div id="minutOutput">${timeVal * 60}</div>
  </div>
</div>

<div class="card bg-danger mb-2 p-2">
    <div class="card-block">
      <h4>Hour:</h4>
      <div id="hourOutput">${timeVal / 60}</div> 
    </div>
</div>
  `;
}

function hrConvert(timeVal){
  document.getElementById('output').innerHTML = `
  <div class="card bg-primary mb-2 mt-3 p-2">
  <div class="card-block">
    <h4>Millisecond:</h4>
    <div id="secondOutput">${timeVal * 3600000}</div>
  </div>
</div>

<div class="card bg-success mb-2 p-2">
  <div class="card-block">
    <h4>Second:</h4>
    <div id="minutOutput">${timeVal * 3600}</div>
  </div>
</div>

<div class="card bg-danger mb-2 p-2">
    <div class="card-block">
      <h4>Minut:</h4>
      <div id="hourOutput">${timeVal * 60}</div> 
    </div>
</div>
  `;
}