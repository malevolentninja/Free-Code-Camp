const calculator = {
  inputOperand: '0',
  firstOperand: null,
  waitingForOperand: false,
  operator: null
};

function inputDecimalPoint() {
  let dot = '.';
  if (calculator.inputOperand.indexOf(dot) === -1) {
    calculator.inputOperand += dot;
  }

  updateDisplay();
}

function inputDigit(digit) {
  let inputOperand = calculator.inputOperand,
      waitingForOperand = calculator.waitingForOperand;


  if (waitingForOperand) {
    calculator.inputOperand = digit;
    calculator.waitingForOperand = false;
  } else {
    calculator.inputOperand = inputOperand === '0' ? digit : inputOperand + digit;
  }
  console.log(calculator);
  updateDisplay();
}

function handleOperator(nextOperator) {
  let firstOperand = calculator.firstOperand,
      inputOperand = calculator.inputOperand,
      operator = calculator.operator;

  let inputValue = parseFloat(inputOperand);

  if (operator && calculator.waitingForOperand) {
    calculator.operator = nextOperator;
    console.log(calculator);
    return;
  }

  if (firstOperand == null) {
    calculator.firstOperand = inputValue;
  } else if (operator) {
    let currentValue = firstOperand || 0;
    let result = performOperation[operator](currentValue, inputValue);

    calculator.inputOperand = String(result);
    calculator.firstOperand = result;
  }

  calculator.waitingForOperand = true;
  calculator.operator = nextOperator;
  console.log(calculator);
  updateDisplay();
}

function updateDisplay() {
 let display = document.querySelector('.screen');
  display.value = calculator.inputOperand;
};

updateDisplay();

let handleFunction = {
  'all_clear': function all_clear() {
    calculator.inputOperand = '0';
    calculator.firstOperand = null;
    calculator.waitingForOperand = false;
    calculator.operator = null;
  },

  'clear_entry': function clear_entry() {
    let inputOperand = calculator.inputOperand;

    calculator.inputOperand = '0';
  },

  'toggle_sign': function toggle_sign() {
    let inputOperand = calculator.inputOperand;

    calculator.inputOperand = String(parseFloat(inputOperand) * -1);
    calculator.waitingForOperand = false;
    console.log(calculator);
  },

  '%': function _() {
   let inputOperand = calculator.inputOperand;

    calculator.inputOperand = String(parseFloat(inputOperand) / 100);
    calculator.waitingForOperand = false;
    console.log(calculator);
  }
};

let performOperation = {
  '/': function _(prevValue, nextValue) {
    return prevValue / nextValue;
  },

  '*': function _(prevValue, nextValue) {
    return prevValue * nextValue;
  },

  '+': function _(prevValue, nextValue) {
    return prevValue + nextValue;
  },

  '-': function _(prevValue, nextValue) {
    return prevValue - nextValue;
  },

  '=': function _(prevValue, nextValue) {
    return nextValue;
  }
};

function handleKeyDown(event) {
 let key = event.key;


  if (key === 'Enter') {
    key = '=';
  }

  if (key === 'Delete') {
    key = 'all_clear';
  }

  if (key === 'Backspace') {
    key = 'clear_entry';
  }

  if (key === '-' && event.altKey) {
    key = 'toggle_sign';
  }

  if (/\d/.test(key)) {
    inputDigit(key);
    return;
  }

  if (key === '.') {
    inputDecimalPoint();
    return;
  }

  if (key in performOperation) {
    handleOperator(key);
    return;
  }

  if (key in handleFunction) {
    handleFunction[key]();
    updateDisplay();
  }
}

let digits = document.querySelectorAll(".digit");
digits.forEach(function (digit) {
  return digit.addEventListener('click', function (event) {
    let digit = event.target.value;
    inputDigit(digit);
  });
});

let decimal = document.querySelector('.decimal');
decimal.addEventListener('click', inputDecimalPoint);

let operators = document.querySelectorAll('.operator');
operators.forEach(function (operator) {
  return operator.addEventListener('click', function (event) {
    let nextOperator = event.target.value;
    handleOperator(nextOperator);
  });
});

let functionKeys = document.querySelectorAll('.function');
functionKeys.forEach(function (fn) {
  return fn.addEventListener('click', function (event) {
    handleFunction[event.target.value]();
    updateDisplay();
  });
});

document.addEventListener('keydown', handleKeyDown);