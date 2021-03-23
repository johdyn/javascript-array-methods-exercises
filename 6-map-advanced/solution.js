const tvShows = [
  {
    title: "True Detective",
    publishingYear: 2014,
    rating: 9,
    watched: false,
  },
  {
    title: "The Boys",
    publishingYear: 2019,
    rating: 8.7,
    watched: true,
  },
  {
    title: "Game of Thrones",
    publishingYear: 2011,
    rating: 9.3,
    watched: true,
  },
  {
    title: "Mr. Robot",
    publishingYear: 2015,
    rating: 8.5,
    watched: false,
  },
  {
    title: "Chernobyl",
    publishingYear: 2019,
    rating: 9.4,
    watched: true,
  },
  {
    title: "Money Heist",
    publishingYear: 2017,
    rating: 8.3,
    watched: true,
  },
  {
    title: "Dark",
    publishingYear: 2017,
    rating: 8.8,
    watched: false,
  },
];

// Your code below

const map1 = tvShows.map((x) => x.title);
const map2 = tvShows.map((x) => `${x.title}, ${x.rating}`);
const map3 = tvShows.map((x) =>
  x.rating >= 9 ? x.title.toUpperCase() : x.title.toLowerCase()
);

let map4 = tvShows.map((x) => {
  if (x.rating >= 9) {
    return x.title.toUpperCase();
  } else {
    return x.title.toLowerCase();
  }
});

const map5 = tvShows.map((tvshow) => {
  return {
    title: tvshow.title,
    rating: tvshow.rating,
  };
});

console.log(map1);
console.log(map2);
console.log(map3);
console.log(map4);
console.log(map5);
