const body = document.body;
const btn = document.querySelector('.btn');
const switchBtn = document.querySelector('.switch');

switchBtn.addEventListener('scroll', (e) => {
  const y = e.target.scrollTop;

  if (y > 127) {
    switchBtn.classList.add('active');
    body.style.background = `rgb(${y}, ${y}, ${y})`;
    btn.style.background = `rgb(${y}, ${y}, ${y})`;
    switchBtn.style.background = `rgb(${y - 12}, ${y - 8}, ${y - 6})`;
  } else {
    switchBtn.classList.add('active');
    body.style.background = `rgb(${y + 30}, ${y + 34}, ${y + 38})`;
    btn.style.background = `rgb(${y}, ${y + 8}, ${y + 16})`;
    switchBtn.style.background = `rgb(${y + 20}, ${y + 24}, ${y + 28})`;
  }
});
