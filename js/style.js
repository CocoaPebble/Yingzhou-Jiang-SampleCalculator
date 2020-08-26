class Calculator {
  constructor(currentOperandTextElement) {
    this.currentOperandTextElement = currentOperandTextElement;
    this.init();
  }

  init() {
    this.currentOperand = '';
    this.hasCalculated = undefined;
  }

  delete() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1)
  }

  compute() {
    try {
      let op = this.currentOperand;
      op = op.replace('×', '*').replace('÷', '/');
      var value = mexp.eval(op);
      // console.log(op);
      console.log(value);

      if (value === 'Infinity') {
        throw (alert('Cannot divided by 0!!!'))
      }

      this.currentOperand = value;
      this.hasCalculated = true;

    } catch (error) {
      alert('Expression error!')
      this.init()
    }
  }

  appendNumber(number) {
    const len = this.currentOperand.length;

    if (isNaN(Number(number)) && isNaN(Number(this.currentOperand.charAt(len - 1)))) return;
    if (this.currentOperand === '' && number === '0') return;
    if (this.hasCalculated === true) {
      this.init();
    }

    this.currentOperand = this.currentOperand.toString() + number.toString();
  }

  updateDisplay() {
    this.currentOperandTextElement.innerText = this.currentOperand;
  }
}

const numberButtons = document.querySelectorAll('[data-number]');
const equalButtons = document.querySelector('[data-equal]');
const deleteButtons = document.querySelector('[data-delete]');
const currentOutput = document.querySelector('[data-output]');

const calculator = new Calculator(currentOutput);

numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.appendNumber(button.innerText)
    calculator.updateDisplay()
  })
});

equalButtons.addEventListener('click', button => {
  calculator.compute()
  calculator.updateDisplay()
});

deleteButtons.addEventListener('click', button => {
  calculator.delete()
  calculator.updateDisplay()
});
