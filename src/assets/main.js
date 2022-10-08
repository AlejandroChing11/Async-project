const API = 'https://instagram188.p.rapidapi.com/userpost/2117295831/12/%7Bend_cursor%7D';


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '7ca582198bmsh267140fbf4b34b9p1acda6jsn201e8600c0d1',
		'X-RapidAPI-Host': 'instagram188.p.rapidapi.com'
	}
};

async function fechData(urlApi) {
    const reponse = await fetch(urlApi, options);
    const data = await reponse.json();
    return data;
}

(async () => {
    try {
        const post = await fetchData(API);
        
    } catch (e) {

    }
})();