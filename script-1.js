
const textInput = document.getElementById('text-input');
const transformBtn = document.getElementById('transform-btn');
const output = document.getElementById('output');


transformBtn.addEventListener('click', () => {
  const text = textInput.value;
  
  const selectedAction = document.querySelector('input[name="action"]:checked').value;

  let result = '';

  switch (selectedAction) {
    case 'uppercase':
      result = text.toUpperCase();
      break;

    case 'lowercase':
      result = text.toLowerCase();
      break;

    case 'capitalize':
      result = text
        .toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      break;

    case 'trim':
      result = text.replace(/\s+/g, ' ').trim();
      break;
    case 'remove-numbers':
        // Removes all digits 0-9
        result = text.replace(/\d+/g, '');
        break;

    default:
      result = text;
  }
  output.innerText = result || 'Please enter some text above!';
});