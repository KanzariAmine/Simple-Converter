document.getElementById('convertButton').addEventListener('click', weightConvert);



function weightConvert(){
  let inputValue = document.getElementById('lbsInput').value;
  let selectId = document.getElementById('inputGroupSelect04')
  let selectValue= selectId[selectId.selectedIndex].value;

  if(selectValue === 'pounds'){
    poundsConvert(inputValue);  
  }else if(selectValue === 'kilogramme'){
    kilogrammeConvert(inputValue);
  }else if(selectValue === 'gramme'){
    grammeConvert(inputValue);
  }else{
    ouncesConvert(inputValue)
  }
 
}

function poundsConvert(numValue){
  document.getElementById('output').style.visibility = 'visible';
  document.getElementById('output').innerHTML = `
  <div class="card bg-primary mb-2 mt-3 p-2">
  <div class="card-block">
    <h4>Grams:</h4>
    <div id="gramsOutput">${numValue / 0.0022046}</div>
  </div>
</div>

<div class="card bg-success mb-2 p-2">
  <div class="card-block">
    <h4>Kilograms:</h4>
    <div id="kgOutput">${numValue / 2.2046}</div>
  </div>
</div>

<div class="card bg-danger mb-2 p-2">
    <div class="card-block">
      <h4>Ounces:</h4>
      <div id="ozOutput">${numValue * 16}</div> 
    </div>
</div>
  `;
}

function kilogrammeConvert(numValue){
  document.getElementById('output').style.visibility = 'visible';
  document.getElementById('output').innerHTML = `

          <div class="card bg-primary mb-2 mt-3 p-2">
            <div class="card-block">
              <h4>Grams:</h4>
              <div id="gramsOutput">${numValue * 1000}</div>
            </div>
          </div>

          <div class="card bg-success mb-2 p-2">
            <div class="card-block">
              <h4>Pounds:</h4>
              <div id="lbOutput">${numValue / 0.45359237}</div>
            </div>
          </div>

          <div class="card bg-danger mb-2 p-2">
              <div class="card-block">
                <h4>Ounces:</h4>
                <div id="ozOutput">${numValue * 35.274}</div> 
              </div>
          </div>
    
`;
}
function grammeConvert(numValue){
  document.getElementById('output').style.visibility = 'visible';
  document.getElementById('output').innerHTML = `

        <div class="card bg-primary mb-2 mt-3 p-2">
        <div class="card-block">
          <h4>Kilogramme:</h4>
          <div id="kgOutput">${numValue / 1000}</div>
        </div>
      </div>

      <div class="card bg-success mb-2 p-2">
        <div class="card-block">
          <h4>Pounds:</h4>
          <div id="lbOutput">${numValue / 453.59237}</div>
        </div>
      </div>

      <div class="card bg-danger mb-2 p-2">
          <div class="card-block">
            <h4>Ounces:</h4>
            <div id="ozOutput">${numValue / 28.34952}</div> 
          </div>
      </div>
  `;
}

function ouncesConvert(numValue){
  document.getElementById('output').style.visibility = 'visible';
  document.getElementById('output').innerHTML = `
        <div class="card bg-primary mb-2 mt-3 p-2">
        <div class="card-block">
          <h4>Gramme:</h4>
          <div id="kgOutput">${numValue * 28.34952}</div>
        </div>
      </div>

      <div class="card bg-success mb-2 p-2">
        <div class="card-block">
          <h4>Kilogramme:</h4>
          <div id="lbOutput">${numValue / 1000}</div>
        </div>
      </div>

      <div class="card bg-danger mb-2 p-2">
          <div class="card-block">
            <h4>Pounds:</h4>
            <div id="ozOutput">${numValue / 16}</div> 
          </div>
      </div>
  `;
}







// function convert(e){
//   document.getElementById('output').style.visibility = 'visible';
//   let lbs = e.target.value;
//   document.getElementById('gramsOutput').innerHTML = lbs / 0.0022046;
//   document.getElementById('kgOutput').innerHTML = lbs / 2.2046;
//   document.getElementById('ozOutput').innerHTML = lbs * 16;
// }