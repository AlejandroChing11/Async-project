const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCX9NJ471o7Wie1DQe94RVIg&part=snippet%2Cid&order=date&maxResults=50';



const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '7ca582198bmsh267140fbf4b34b9p1acda6jsn201e8600c0d1',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fetchData(urlApi) {
    const reponse = await fetch(urlApi, options);
    const data = await reponse.json();
    return data;
};

(async () => {
    
})();
