"use strict"

async function getRandomImage() {
    const client_id = "mTST8ba9ZACUAsiazk7eyseTsiL2K2ePemOndP1o4Xw";
    const endpoint = `https://api.unsplash.com/photos/random/?client_id=${client_id}`;
    try {
        const response = await fetch(endpoint);
        const returnedData = await response.json()
        const receivedPhotoUrl = returnedData.urls.regular;
        console.log("Image URL:", receivedPhotoUrl);
        const imgDiv = document.getElementById("background-img");
        imgDiv.style.backgroundImage = `url(${receivedPhotoUrl})`;
    } catch (error) {
        console.error(error)
    }
}

getRandomImage();

/* const elements = {
    quote: document.getElementById("quote"),
    author: document.getElementById("author"),
};

const quotes = [
    {
        quote: "Grief is the price we pay for love.",
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

setTimeout(loopThroughQuotes, 3000); */