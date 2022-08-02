export async function getAllQuotes(){
    const res = await fetch('https://quote.api.fdnd.nl/v1/quote/');
    let fetchedData = await res.json();
    let quotes = fetchedData.data.slice(0,-5);
 
    return quotes;
}