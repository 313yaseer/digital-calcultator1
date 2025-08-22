let powerOn = false;

function togglePower() {
  const display = document.getElementById('display');
  const powerBtn = document.getElementById('power-btn');

  powerOn = !powerOn;
  display.value = powerOn ? '' : '';

  // Change button color depending on ON/OFF state
  if (powerOn) {
    powerBtn.classList.remove("bg-red-500", "hover:bg-red-600");
    powerBtn.classList.add("bg-green-500", "hover:bg-green-600");
  } else {
    powerBtn.classList.remove("bg-green-500", "hover:bg-green-600");
    powerBtn.classList.add("bg-red-500", "hover:bg-red-600");
  }
}


    function appendValue(value) {
      if (!powerOn) return;
      document.getElementById('display').value += value;
    }

    function clearDisplay() {
      if (!powerOn) return;
      document.getElementById('display').value = '';
    }

    function calculate() {
      if (!powerOn) return;
      try {
        document.getElementById('display').value = eval(document.getElementById('display').value);
      } catch {
        document.getElementById('display').value = 'Error';
      }
    }
    function togglePower() {
  const display = document.getElementById('display');
  const powerBtn = document.getElementById('power-btn');

  powerOn = !powerOn;
  display.value = powerOn ? '' : '';

  if (powerOn) {
    powerBtn.classList.remove("bg-red-500", "hover:bg-red-600");
    powerBtn.classList.add("bg-green-500", "hover:bg-green-600");
    display.classList.add("screen-on");  // Turn on glow animation
  } else {
    powerBtn.classList.remove("green-500", "hover:bg-green-600");
    powerBtn.classList.add("bg-red-500", "hover:bg-red-600");
    display.classList.remove("screen-on"); //  Remove glow animation
  }
}
