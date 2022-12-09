// Variables

let btn = document.getElementById('new-quote')
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [
  {
      quote: `“First, solve the problem. Then, write the code.”`,
      person: `John Johnson`
  }, {
      quote:`“Experience is the name everyone gives to their mistakes.” `,
      person: `Oscar Wilde`
  }, {
      quote: `“ In order to be irreplaceable, one must always be different”`,
      person: `Coco Chanel`
  }, {
      quote: `“Java is to JavaScript what car is to Carpet.” `,
      person: `Chris Heilmann`
  }, {
      quote: `“Knowledge is power.”`,
      person: `Francis Bacon`
  }, {
      quote: `“Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday’s code.”`,
      person: `Dan Salomon`
  }, {
      quote: `“Perfection is achieved not when there is nothing more to add, but rather when there is nothing more to take away.”`,
      person: `Antoine de Saint-Exupery`
  }, {
      quote: `“ Code is like humor. When you have to explain it, it’s bad.”`,
      person: `Cory House`
  }, {
      quote: `“Fix the cause, not the symptom.”`,
      person: `Steve Maguire`
  }, {
      quote: `“Optimism is an occupational hazard of programming: feedback is the treatment. “ `,
      person: `Kent Beck`
  }, {
      quote: `“When to use iterative development? You should use iterative development only on projects that you want to succeed.”`,
      person: `Martin Fowler`
  }, {
      quote: `“Simplicity is the soul of efficiency.”`,
      person: `Austin Freeman`
  }, {
      quote: `Before software can be reusable it first has to be usable.”`,
      person: `Ralph Johnson`
  }, {
      quote: `“Make it work, make it right, make it fast.”`,
      person: `Kent Beck`
  }
];

btn.addEventListener("click", () => {
  let random = Math.floor(Math.random()*quotes.length)

  quote.innerText = quotes[random].quote;
  person.innerText = quotes[random].person;
})