const promtInput = document.getElementById('promtInput');
const terminal = document.getElementById('terminal');
const terminalWindow = document.getElementById('terminalWindow');
const date = document.getElementById('date');

promtInput.focus();
date.innerText = new Date().toDateString()
terminalWindow.addEventListener('click', () => promtInput.focus());

promtInput.addEventListener('keydown', (event) => {
    if (event.key === "Enter") {
        enterCommand(event);
    }
})

const enterCommand = (event) => {
    const promtElement = document.getElementById('promptClone').cloneNode(true);
    promtElement.classList.remove('hidden');
    promtElement.getElementByClassName('promtCloneInput')[0].innerHTML = event.target.value;
    promtElement.setAttribute('id', null);
    promtElement.getElementByClassName('promtCloneContent')[0].appendChild(selectCommandBlock(event.target.value));
    terminal.appendChild(promtElement);
    promtInput.value = '';
    promtInput.scrollIntoView({block: 'start'});
}

