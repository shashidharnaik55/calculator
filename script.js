 
const info = document.createElement("div");
info.className = "mainbox";

info.innerHTML = `<div class="calculator">
<h2 class="text-center">Calculator</h2>
<input type="text" placeholder="0" id="result" />
<button onclick="clr()">C</button>
<button onclick="del()">CE</button>
<button onclick="display('%')">%</button>
<button onclick="display('/')">/</button>
<button onclick="display('7')">7</button>
<button onclick="display('8')">8</button>
<button onclick="display('9')">9</button>
<button onclick="display('*')">*</button>
<button onclick="display('4')">4</button>
<button onclick="display('5')">5</button>
<button onclick="display('6')">6</button>
<button onclick="display('-')">-</button>
<button onclick="display('1')">1</button>
<button onclick="display('2')">2</button>
<button onclick="display('3')">3</button>
<button onclick="display('+')">+</button>
<button onclick="display('.')">.</button>
<button onclick="display('0')">0</button>
<button onclick="display('00')">00</button>
<button onclick="calculate()">=</button>
</div>`;

document.body.append(info);

let outputScreen = document.querySelector("#result");
function display(num) {
  outputScreen.value += num;
  console.log(outputScreen.value);
}

function calculate() {
  try {
    outputScreen.value = eval(outputScreen.value);
  } catch (error) {
    alert("Invalid Input");
  }
}

function clr() {
  outputScreen.value = "";
}

function del() {
  outputScreen.value = outputScreen.value.slice(0, -1);
}
