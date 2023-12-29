const menuItems = [
  { id: 11, name: "Pythonology", link: "https://pythonology.eu" },
  { id: 12, name: "Section 3", link: "#section3" },
  { id: 13, name: "Section 4", link: "#section4" },
];

const people = [
  {
    id: 21,
    name: "Vahid Nia",
    position: "Developer",
    description: "I am very hard working!",
  },
  {
    id: 22,
    name: "Michael Scott",
    position: "Regional Manager",
    description: "I do not like Toby Flenderson!",
  },
  {
    id: 23,
    name: "Dwight Schrute",
    position: "Sales",
    description: "I am Invincible!",
  },
  {
    id: 24,
    name: "Jim Halpert",
    position: "Sales",
    description: "I love my job.",
  },
];

async function getQuote() {
  const response = await fetch("https://dummyjson.com/quotes/random");
  const data = await response.json();
  console.log(`Quote: ${data.quote}`);

  return `<p> <span class='font-bold'> Author </span>: ${data.author}</p><p><span class='font-bold'>Quote</span>: ${data.quote}</p>`;
}

const footerDate = new Date().getFullYear();
