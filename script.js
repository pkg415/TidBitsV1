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

let votesInteresting = 23;
let votesMindblowing = 23;
let votesFalse = 77;
const text = "Lisbon is the capital of Portugal";

const strTemplateLiteral = `The current fact is ${text}. It is ${calcTidBitAge()} years old.  It is probably ${
  totalUpvotes > votesFalse ? "correct" : "false"
}.`

let totalUpvotes = votesInteresting + votesMindblowing;

const isCorrect = votesFalse < totalUpvotes;

function calcTidBitAge(yearCreated) {
  const currentYear = new Date().getFullYear();
  if (yearCreated > currentYear) alert('no time Travel to future allowed!');
  const age = currentYear - yearCreated;
  return age;
}

const message = 
  totalUpvotes > votesFalse 
  ? "ppl vote yes" 
  : "check more sources...";

  // alert(message);

  // const calcAge2 = (yearGiven) => new Date().getFullYear() - yearGiven;
// const testAge = calcTidBitAge(2019); 
// // console.log(testAge);

// if (votesInteresting === votesMindblowing) {
//   alert('This tidbit is equally interesting & mind-blowing!');
// }
