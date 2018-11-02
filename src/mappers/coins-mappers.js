export default item => {
  return {
    id: item.Id,
    name: item.CoinName,
    imageUrl: item.ImageUrl,
    symbol: item.Symbol
  };
};
