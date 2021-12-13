const quotes = 
     ['If our lives are already written, it would take a courageous man to change the script.']
const getRandomQuote = () => {
    let randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
    return `${randomQuote}`
}
console.log(getRandomQuote(quotes));