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
        let view = `
        ${post.edges.map(post => `
            <div class="group relative">
                <div
                class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                    <img src="" alt="" class="w-full">
                </div>
                <div class="mt-4 flex justify-between">
                    <h3 class="text-sm text-gray-700">
                        <span aria-hidden="true" class="absolute inset-0"></span>
                    title
                    </h3>
                </div>
            </div>
        `)}

        `;
    } catch (e) {

    }
})();