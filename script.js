const textBox = document.querySelector('input');
const searchBox = document.querySelector('.search-box');

const clearElement = {
    container: document.querySelector('.clear-container'),
    icon: document.querySelector('#clear-icon'),
    separator: document.querySelector('#separator')
};

let clearElementEnabled = false;
handleClearElement('init');

function handleClearElement(data) {

    if(textBox.value && !clearElementEnabled) {
        clearElementEnabled = true;

        clearElement.icon.style.color = 'rgb(112, 117, 122)';
        clearElement.separator.style.borderColor = 'rgb(223, 225, 229)';

    } else if((!textBox.value && clearElementEnabled) || data === 'init') {
        clearElementEnabled = false;

        clearElement.icon.style.color = '#00000000';
        clearElement.separator.style.borderColor = '#00000000';

    }
}

textBox.addEventListener('focus', () => {
    searchBox.style.boxShadow = '0px 1px 6px rgba(32, 33, 36, .28)';

});

textBox.addEventListener('focusout', () => {
    searchBox.style.boxShadow = 'none';
});

textBox.addEventListener('input', handleClearElement);

function clearTextBox() {
    textBox.value = '';
    handleClearElement('init');
}