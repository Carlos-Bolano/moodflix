export const getPlatformLogo = (name: string) => {
  const url =
    name.toLowerCase() === "netflix"
      ? "/logos/netflix-logo.png"
      : name.toLowerCase() === "amazon prime video" ||
        name.toLowerCase() === "amazon prime" ||
        name.toLowerCase() === "prime video" ||
        name.toLowerCase() === "prime"
      ? "/logos/prime-logo.png"
      : name.toLowerCase() === "disney+" || name.toLowerCase() === "disney plus"
      ? "/logos/disney-plus-logo.png"
      : name.toLowerCase() === "hulu"
      ? "/logos/hulu-logo.png"
      : name.toLowerCase() === "hbo max"
      ? "/logos/max-logo.png"
      : name.toLowerCase() === "apple tv" || name.toLowerCase() === "apple tv+"
      ? "/logos/apple-tv-logo.png"
      : name.toLowerCase() === "paramount+" || name.toLowerCase() === "paramount"
      ? "/logos/paramount.svg"
      : null;

  return url;
};
