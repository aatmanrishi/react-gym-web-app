export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'f592e2f097msh4d63e33559c0b83p163512jsncaf7d36f5840',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  },
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'f592e2f097msh4d63e33559c0b83p163512jsncaf7d36f5840',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  },
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();
  console.log(data);

  return data;
};
