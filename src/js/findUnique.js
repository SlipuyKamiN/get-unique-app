const refs = {
  form: document.querySelector('[data-form]'),
  textarea: document.querySelector('[data-textarea]'),
  submitButton: document.querySelector('[data-submit-form'),
  resetButton: document.querySelector('[data-reset-form]'),
  display: document.querySelector('[data-unique-display]'),
};

const findUniqueInArray = array => {
  const nonUniqueLetters = array.filter(
    (letter, index, arr) => arr.indexOf(letter) !== index
  );

  const unique = array.filter(
    letter => !nonUniqueLetters.join('').includes(letter)
  );

  return unique[0] || '';
};

const getUniqueLetter = text => {
  words = text.split(' ');

  const uniqueLettersInWord = words.map(word => {
    word = word.split('');

    return findUniqueInArray(word);
  });

  return findUniqueInArray(uniqueLettersInWord);
};

const handleReset = () => {
  refs.display.innerHTML = '?';
  refs.textarea.value = '';
};

const handleFormSubmit = event => {
  event.preventDefault();

  const uniqueLetter = getUniqueLetter(refs.textarea.value);

  refs.display.innerHTML = uniqueLetter || 'Oops, there are no unique letters';
};

refs.resetButton.addEventListener('click', handleReset);
refs.form.addEventListener('submit', handleFormSubmit);
