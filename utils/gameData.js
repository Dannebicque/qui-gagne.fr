import games from '~/assets/games.json';

export const getGames = () => {
  console.log(games.games)
  return games.games;
};

export const getGameByTitle = (title) => {
  return games.games.find(game => game.slug.toLowerCase() === title.toLowerCase());
};
