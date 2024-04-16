import Notiflix from 'notiflix';

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

document.querySelector('.form').addEventListener('submit', function (event) {
  event.preventDefault();
  const delay = parseInt(this.elements['delay'].value);
  const step = parseInt(this.elements['step'].value);
  const amount = parseInt(this.elements['amount'].value);

  for (let i = 0; i < amount; i++) {
    const currentDelay = delay + i * step;
    createPromise(i + 1, currentDelay)
      .then(result => {
        const { position, delay } = result;
        Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(error => {
        const { position, delay } = error;
        Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`);
      });
  }
});