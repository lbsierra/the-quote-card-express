"use strict"

const elements = {
    quote: document.getElementById("quote"),
    author: document.getElementById("author"),
};

const quotes = [
    {
        quote: "Grief if the price we pay for love.",
        author: "Queen Elizabeth II",
    },

    {
        quote: "It's not a lie if you believe it.",
        author: "George Costanza",
    },

    {
        quote: "For small creatures such as we, the vastness is bearable only through love.",
        author: "Carl Sagan",
    }
]

function loopThroughQuotes() {
    let quoteIndex = 0;
    setInterval(() => {
        if (quoteIndex < quotes.length) {
            elements.quote.textContent = quotes[quoteIndex].quote;
            elements.author.textContent = quotes[quoteIndex].author;
            quoteIndex++;
        } else {
            quoteIndex = 0;
        }
    }, 3000);
}

setTimeout(loopThroughQuotes, 3000);