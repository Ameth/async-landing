const API =
  "https://youtube138.p.rapidapi.com/channel/videos/?id=UCq5jSQyAN-kY0oafDcBUeFg&hl=es&gl=US";

const content = null || document.getElementById("content");

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "1d3a284af7mshad2ccaffd13e0c9p1166d1jsne3aa63559fc5",
    "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
  },
};

const fetchData = async (api) => {
  const res = await fetch(api, options);
  const data = await res.json();
  return data;
};

// fetchData(API)

// Una función que se llama así misma para que se ejecute a penas es creada
(async () => {
  try {
    const videos = await fetchData(API);
    // console.log(videos);
    let views = videos.contents.map((video) => {
      return `<div class="group relative">
        <div
            class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
            <img src="${video.video.thumbnails[3].url}" alt="${video.video.title}" class="w-full" />
        </div>
        <div class="mt-4 flex justify-between">
            <h3 class="text-sm text-gray-700">
                <span aria-hidden="true" class="absolute inset-0"></span>
                ${video.video.title}
            </h3>
        </div>
      </div>`;
    });
    // console.log(views.join(""));
    content.innerHTML = views.join("");
  } catch (error) {
    console.error(error);
  }
})();
