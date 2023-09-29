import Notiflix from 'notiflix';

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {

        resolve
        resolve({ position, delay });
      } else {

        reject
        reject({ position, delay });
      }
    }, delay);
  });
}
document.querySelector('.form').addEventListener('submit', (e) => {
  e.preventDefault();

  let delay = parseInt(e.target.elements.delay.value);
  let step = parseInt(e.target.elements.step.value);
  const amount = parseInt(e.target.elements.amount.value);

  if (isNaN(delay) || isNaN(step) || isNaN(amount)) {
    Notiflix.Notify.failure('Please enter valid numbers');
    return;
  }

  for (let i = 0; i < amount; i += 1) {
    createPromise(i + 1, delay)
      .then(result => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${result.position} in ${result.delay}ms`);
      })
      .catch(error => {
        Notiflix.Notify.failure(`❌ Rejected promise ${error.position} in ${error.delay}ms`);
      });

    delay += step;
  }
});