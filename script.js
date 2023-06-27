const promtInput = document.getElementById('promtInput');
const terminal = document.getElementById('terminal');
const terminalWindow = document.getElementById('terminalWindow');
const date = document.getElementById('date');

promtInput.focus();
date.innerText = new Date().toDateString()
terminalWindow.addEventListener('click', () => promtInput.focus());