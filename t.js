const parseDate = (time) => {
  const now = new Date(time);
  return now.toLocaleString("pl-PL");
};

console.log(parseDate(1661361366599));
