// ! JS/index_module.js 의 모듈 js파일을 받아 올 index.js
// import divide from "/JS/index_module/divide.js";
// import plus from "/JS/index_module/plus.js";
// import multiply from "/JS/index_module/multiply.js";
// import minus from "/JS/index_module/minus.js";
// display 클래스를 가진 요소를 선택합니다.
// const display = document.querySelector('.display');

// // CE 버튼을 클릭하면 0으로 초기화합니다.
// document.querySelector('.button_reset').addEventListener('click', () => {
//   display.textContent = '0';
// });

// // C 버튼을 클릭하면 마지막 입력값을 삭제합니다.
// document.querySelector('.button_reset:last-of-type').addEventListener('click', () => {
//   const currentValue = display.textContent;
//   display.textContent = currentValue.substring(0, currentValue.length - 1);
// });

// // 숫자 버튼을 클릭하면 해당 값을 출력합니다.
// document.querySelectorAll('.button_number').forEach((button) => {
//   button.addEventListener('click', () => {
//     const currentValue = display.textContent;
//     const newValue = button.textContent;
//     display.textContent = currentValue === '0' ? newValue : currentValue + newValue;
//   });
// });

// // 연산자 버튼을 클릭하면 해당 연산을 수행합니다.
// document.querySelectorAll('.button_operator').forEach((button) => {
//   button.addEventListener('click', () => {
//     const currentValue = display.textContent;
//     const operator = button.textContent;

//     // 현재 display에 값이 없는 경우에는 아무것도 하지 않습니다.
//     if (currentValue === '0') {
//       return;
//     }

//     // 현재 display에 값이 있는 경우에는 값을 계산합니다.
//     const [previousValue, currentOperator] = display.dataset.value
//       ? display.dataset.value.split(',')
//       : [currentValue, operator];

//     switch (currentOperator) {
//       case '+':
//         display.textContent = Number(previousValue) + Number(currentValue);
//         break;
//       case '-':
//         display.textContent = Number(previousValue) - Number(currentValue);
//         break;
//       case '×':
//         display.textContent = Number(previousValue) * Number(currentValue);
//         break;
//       case '÷':
//         display.textContent = Number(previousValue) / Number(currentValue);
//         break;
//     }

//     // 다음에 계산할 값을 저장합니다.
//     display.dataset.value = `${display.textContent},${operator}`;
//   });
// });

// // = 버튼을 클릭하면 현재까지의 계산 결과를 출력합니다.
// document.querySelector('.button_operator:last-of-type').addEventListener('click', () => {
//   const currentValue = display.textContent;
//   const [previousValue, currentOperator] = display.dataset.value
//     ? display.dataset.value.split(',')
//     : [currentValue, '+'];

//   switch (currentOperator) {
//     case '+':
//       display.textContent = Number(previousValue) + Number(currentValue);
//       break;
//     case '-':
//       display.textContent = Number(previousValue) - Number(currentValue);
//       break;
//     case '×':
//       display.textContent = Number(previousValue) * Number(currentValue);
//       break;
//     case '÷':
//       display.textContent = Number(previousValue) / Number(currentValue);
//       break;
//   }

//   // 계산 결과를 저장하지 않습니다.
//   display.dataset.value = '';
// });
