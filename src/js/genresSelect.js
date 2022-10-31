export const genreTitle = (genreID, genres) => {
  const filter = genres.filter(genre => genreID.includes(genre.id));
  const map = filter.map(item => item.name);
  const arr = [];
  for (let index = 0; index <= map.length; index++) {
    const element = map[index];
    arr.push(element);
  }

  if (arr.length > 3) {
    return (arrToShow = arr.slice(0, 3).join(', ').concat(', Other'));
  }

  return (arrToShow = arr.slice(0, arr.length - 1).join(', '));
};
