exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("show")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("show").insert([
        { title: "The Office", date: "March 24, 2005", tv_source: "Netflix", cover_image: "https://m.media-amazon.com/images/M/MV5BMTgzNjAzMDE0NF5BMl5BanBnXkFtZTcwNTEyMzM3OA@@._V1_UY268_CR7,0,182,268_AL_.jpg" },
        { title: "Stranger Things", date: "July 15, 2016", tv_source: "Netflix", cover_image: "https://pbs.twimg.com/profile_images/1141764757839634432/dyrfxzTV.jpg" },
        { title: "The OA", date: "December 16, 2016", tv_source: "Netflix", cover_image: "http://seriexpert.com.br/wp-content/uploads/2016/12/OA-696x411.jpg" },
        { title: "Friends", date: "September 22, 1994", tv_source: "Netflix", cover_image: "https://m.media-amazon.com/images/M/MV5BNDVkYjU0MzctMWRmZi00NTkxLTgwZWEtOWVhYjZlYjllYmU4XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg" },
        { title: "Handmaid's Tale", date: "April 26, 2017", tv_source: "Hulu", cover_image: "https://i.ytimg.com/sh/vEQdsO-JmQW4Kl1UO2MImg/market.jpg" },
        { title: "Black Mirror", date: "December 4, 2011", tv_source: "Netflix", cover_image: "https://www.endemolshinegroup.com/wp-content/uploads/2018/05/Black-mirror-for-web.png" },
        { title: "Orange is the New Black", date: "July 11, 2013", tv_source: "Netflix", cover_image: "https://images-na.ssl-images-amazon.com/images/I/51I5yhhBHiL._SY445_.jpg" },
        { title: "Imposters", date: "February 7, 2017", tv_source: "Netflix", cover_image: "https://m.media-amazon.com/images/M/MV5BNzYzMTY2MzYyNF5BMl5BanBnXkFtZTgwMjE2NDMzNTM@._V1_.jpg" },
        { title: "The Act", date: "March 20, 2019", tv_source: "Hulu", cover_image: "https://m.media-amazon.com/images/M/MV5BZDVkYzAwMDUtZmRlMC00ZGE4LWFkNDktYjE0YjcxYzgxOTU5XkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_.jpg" }
      ]);
    });
};
