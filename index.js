const newquoteButton = document.querySelector('#js-new-quote')

newquoteButton.addEventListener('click', () =>{
    console.log('Button clicked')
    getQuote();
});
const endpoint = 'https://api.whatdoestrumpthink.com/api/v1/quotes/random'
const spinner = document.querySelector('#js-spinner');
async function getQuote(){
    try{
        spinner.classList.remove('hidden');
        const response = await fetch(endpoint);
        if(!response.ok){
            throw Error(response.statusText);
        }
        const json = await response.json();
        displayQuote(json.message);
    }
    catch(err){
        console.log(err);
        alert('Failed');
    }
    finally{
        spinner.classList.add('hidden');
    }
}
function displayQuote(quote){
    const quoteText = document.querySelector('#js-quote-text');
    quoteText.textContent = quote;
}