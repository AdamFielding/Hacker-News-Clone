const baseUrl = "https://hacker-news.firebaseio.com/v0";

export const getTopStories = () => {
  fetch(`${baseUrl}/topstories`)
    .then(response => response.json())
    .then(myJson => console.log(JSON.stringify(myJson)));
};
