console.log("Hello whirled");

const btn = document.querySelector('.btn-open');
const form = document.querySelector('.main-form');

btn.addEventListener('click', function() {
  console.log("CLICK");
  if(form.classList.contains('hidden')) {
    form.classList.remove('hidden');
    btn.textContent = "Close";
  } 
  else {
    form.classList.add('hidden');
    btn.textContent = "Share a TidBit";
  }
})