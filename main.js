//income inputs
const incomeMainMoney = document.getElementById("income-mainMoney"),
  incomeFreelance = document.getElementById("income-freelance"),
  incomeAnotherMoneyOne = document.getElementById("income-anotherMoneyOne"),
  incomeAnotherMoneyTwo = document.getElementById("income-anotherMoneyTwo");

//outcome inputs
const outcomeFlat = document.getElementById("outcome-flat"),
  outcomeCommunal = document.getElementById("outcome-communal"),
  outcomeProducts = document.getElementById("outcome-products"),
  outcomeOwn = document.getElementById("outcome-own");

//total inputs
const totalAvalaibleMonth = document.getElementById("total-avalaibleMonth"),
  totalAvalaibleDay = document.getElementById("total-avalaibleDay"),
  totalAtYear = document.getElementById("total-atYear");

let totalMonth, totalDay, totalYear;

//money box

const range = document.getElementById("range"),
  saveMoney = document.getElementById("save"),
  spendMoney = document.getElementById("nosave");

let save = 0;
let totalPrecents = 0;

const inputs = document.querySelectorAll(".input");
for (input of inputs) {
  input.addEventListener("input", () => {
    countingAvailableMoney();
    calcPrecents()
  });
}

const strToNum = (str) => (str.value ? parseInt(str.value) : 0);

const countingAvailableMoney = () => {
  const totalPerMonth =
    strToNum(incomeMainMoney) +
    strToNum(incomeFreelance) +
    strToNum(incomeAnotherMoneyOne) +
    strToNum(incomeAnotherMoneyTwo);

    const totalCosts =
    strToNum(outcomeFlat) +
    strToNum(outcomeCommunal) +
    strToNum(outcomeProducts) +
    strToNum(outcomeOwn);

    totalMonth = totalPerMonth - totalCosts
    totalAvalaibleMonth.value = totalMonth
};

range.addEventListener('input', e => {
    const totalPrecentEl = document.getElementById('total-percent')
    totalPrecents = e.target.value
    totalPrecentEl.innerHTML  = totalPrecents
    calcPrecents()

})

const calcPrecents = () => {
    save = ((totalMonth * totalPrecents) / 100).toFixed()
    saveMoney.value = save

    spendMoney.value = totalMonth - save

    totalDay = (spendMoney.value / 30).toFixed()
    totalAvalaibleDay.value = totalDay

    totalYear = save * 12
    totalAtYear.value = totalYear
}