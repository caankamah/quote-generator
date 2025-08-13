const quote = document.getElementById("quote");
const author = document.getElementById("author");
const url = 'https://quotes15.p.rapidapi.com/quotes/random/?language_code=en';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'e3e5358141mshc4587935d0ac965p1a0816jsnf049eeeedf83',
		'x-rapidapi-host': 'quotes15.p.rapidapi.com'
	}
};

async function fetchQuote(url, options) {
try {
	const response = await fetch(url, options);
	const result = await response.json();
    console.log(result);
    quote.innerHTML = '"' + result.content + '"';
    author.innerHTML = result.originator.name;
} catch (error) {
	console.error(error);
}
}

fetchQuote(url, options);

function shareToLinkedIn(){
    const share = 'https://youtu.be/FiUVwPYYT5A?si=4DGyoKABX_7t3T6a';
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(share)}&text=` + quote.innerHTML + "  by " + author.innerHTML, '_blank','width=600, height=500');
}

shareToLinkedIn();