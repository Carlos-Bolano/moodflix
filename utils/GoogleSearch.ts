export const createGoogleSearchLink = (movieTitle: string) => {
  const encodedTitle = encodeURIComponent(movieTitle);
  const googleSearchUrl = `https://www.google.com/search?q=${encodedTitle}`;
  return googleSearchUrl;
};
