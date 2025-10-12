async function fetchData(url){
    const response = await fetch(url);
        if(!response.ok){
            throw new Error("Could not fetch resource");
        }
        const data = await response.json();
        console.log(data);
}

fetchData("https://pokeapi.co/api/v2/pokemon/mewtwo")