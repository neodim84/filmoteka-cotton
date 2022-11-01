export const genreTitle = async (genreID, genres) => {
  try {
    const filter = await genres.filter(genre => genreID.includes(genre.id));
    const map = await filter.map(item => item.name);
    const arr = [];
    for (let index = 0; index <= map.length; index++) {
      const element = map[index];
      arr.push(element);
    }

    if (arr.length > 2) {
      return (arrToShow = arr.slice(0, 2).join(', ').concat(', Other'));
    }

    return (arrToShow = arr.slice(0, arr.length - 1).join(', '));
  } catch (error) {
    console.log(error);
  }
};
