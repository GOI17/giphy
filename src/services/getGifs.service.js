const url = 'https://api.giphy.com/v1/gifs/search';
const apiKey = 'VGmmhNbayxE0nJtASgO93uMMRoEraPbJ';

export default async function getGifs({ query } = '') {
  return fetch(`${url}?api_key=${apiKey}&q=${query}&limit=10&offset=0&rating=pg-13&lang=en`)
    .then((res) => res.json())
    .then((res) => {
      const { data } = res;
      const gifs = data.map(gif => {
        const { type, id, title, images} = gif;
        const { url } = images.downsized;

        return { id, type, title, url };
      });

      return gifs;
    })
    .catch((error) => error);
};
