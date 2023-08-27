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

let totalUpvotes = votesInteresting + votesMindblowing;

const strTemplateLiteral = `The current fact is ${text}. It is ${calcTidBitAge()} years old.  It is probably ${totalUpvotes > votesFalse ? "correct" : "false"
  }.`

const isCorrect = votesFalse < totalUpvotes;

function calcTidBitAge(yearCreated) {
  const currentYear = new Date().getFullYear();
  if (yearCreated > currentYear) alert('no time Travel to future allowed!');
  const age = currentYear - yearCreated;
  return age;
}

// const message = 
//   totalUpvotes > votesFalse 
//   ? "ppl vote yes" 
//   : "check more sources...";

  // alert(message);

  // const calcAge2 = (yearGiven) => new Date().getFullYear() - yearGiven;
// const testAge = calcTidBitAge(2019); 
// // console.log(testAge);

// if (votesInteresting === votesMindblowing) {
//   alert('This tidbit is equally interesting & mind-blowing!');
// }


const CATEGORIES = [
  { name: "technology", color: "rgb(196, 242, 242)" },
  { name: "science", color: "#b4dfb4" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#da9fda" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
  { name: "poetry", color: "fffacd" }
];

const allCategories = CATEGORIES.map((el) => el.name);
console.log(allCategories)

const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "society",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
  {
    id: 4,
    text: "You do not have to be good.",
    source: "https://www.vanderbilt.edu/olli/class-materials/2017Summer.MindfulnessWk1.pdf",
    category: "poetry",
    votesInteresting: 967,
    votesMindblowing: 666,
    votesFalse: 0,
    createdIn: 2004,
  },
  {
    id: 5,
    text: "Kubernetes is an open source orchestration software that allows you to run Docker containers & workloads.",
    source: "https://azure.microsoft.com/en-us/solutions/kubernetes-vs-docker/",
    category: "technology",
    votesInteresting: 17,
    votesMindblowing: 0,
    votesFalse: 0,
    createdIn: 2023,
  }
];

const factAges = initialFacts.map((el) => calcTidBitAge(el.createdIn));

