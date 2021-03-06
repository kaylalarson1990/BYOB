exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("show")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("show").insert([
        {
          title: "The Office",
          date: "March 24, 2005",
          tv_source: "Netflix",
          cover_image:
            "https://m.media-amazon.com/images/M/MV5BMTgzNjAzMDE0NF5BMl5BanBnXkFtZTcwNTEyMzM3OA@@._V1_UY268_CR7,0,182,268_AL_.jpg"
        },
        {
          title: "Stranger Things",
          date: "July 15, 2016",
          tv_source: "Netflix",
          cover_image:
            "https://pbs.twimg.com/profile_images/1141764757839634432/dyrfxzTV.jpg"
        },
        {
          title: "The OA",
          date: "December 16, 2016",
          tv_source: "Netflix",
          cover_image:
            "http://seriexpert.com.br/wp-content/uploads/2016/12/OA-696x411.jpg"
        },
        {
          title: "Friends",
          date: "September 22, 1994",
          tv_source: "Netflix",
          cover_image:
            "https://m.media-amazon.com/images/M/MV5BNDVkYjU0MzctMWRmZi00NTkxLTgwZWEtOWVhYjZlYjllYmU4XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"
        },
        {
          title: "Handmaid's Tale",
          date: "April 26, 2017",
          tv_source: "Hulu",
          cover_image:
            "https://i.ytimg.com/sh/vEQdsO-JmQW4Kl1UO2MImg/market.jpg"
        },
        {
          title: "Black Mirror",
          date: "December 4, 2011",
          tv_source: "Netflix",
          cover_image:
            "https://www.endemolshinegroup.com/wp-content/uploads/2018/05/Black-mirror-for-web.png"
        },
        {
          title: "Orange is the New Black",
          date: "July 11, 2013",
          tv_source: "Netflix",
          cover_image:
            "https://images-na.ssl-images-amazon.com/images/I/51I5yhhBHiL._SY445_.jpg"
        },
        {
          title: "Imposters",
          date: "February 7, 2017",
          tv_source: "Netflix",
          cover_image:
            "https://m.media-amazon.com/images/M/MV5BNzYzMTY2MzYyNF5BMl5BanBnXkFtZTgwMjE2NDMzNTM@._V1_.jpg"
        },
        {
          title: "The Act",
          date: "March 20, 2019",
          tv_source: "Hulu",
          cover_image:
            "https://m.media-amazon.com/images/M/MV5BZDVkYzAwMDUtZmRlMC00ZGE4LWFkNDktYjE0YjcxYzgxOTU5XkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_.jpg"
        },
        {
          title: "Broadchurch",
          date: "March 4, 2013",
          tv_source: "Netflix",
          cover_image:
            "https://upload.wikimedia.org/wikipedia/en/thumb/5/59/Broadchurch_Series_3.png/220px-Broadchurch_Series_3.png"
        },
        {
          title: "Parks and Rec",
          date: "April 9, 2009",
          tv_source: "Netflix",
          cover_image:
            "https://upload.wikimedia.org/wikipedia/en/thumb/d/d1/Parks_and_Recreation_Season_6_Box_Art.jpg/220px-Parks_and_Recreation_Season_6_Box_Art.jpg"
        },
        {
          title: "Silicon Valley",
          date: "April 6, 2014",
          tv_source: "Hulu",
          cover_image:
            "https://images-na.ssl-images-amazon.com/images/I/91WkV6-KBAL._RI_.jpg"
        },
        {
          title: "Dear White People",
          date: "April 28, 2017",
          tv_source: "Netflix",
          cover_image:
            "https://m.media-amazon.com/images/M/MV5BMTU3NTg0NDY3N15BMl5BanBnXkFtZTgwMTYxMTIzNTM@._V1_SY1000_CR0,0,735,1000_AL_.jpg"
        },
        {
          title: "True Detective",
          date: "January 12, 2014",
          tv_source: "HBO",
          cover_image:
            "https://vignette.wikia.nocookie.net/cinemorgue/images/f/fd/True_Detective.jpg/revision/latest?cb=20160307003214"
        },
        {
          title: "Snowfall",
          date: "July 5, 2017",
          tv_source: "Hulu",
          cover_image:
            "https://ib1.hulu.com/user/v3/artwork/ce0d176c-8a89-454d-bed4-b91ad2e0d6e6?base_image_bucket_name=image_manager&base_image=781fc77f-9620-4388-96c6-cc9ab56bdcbd&size=400x600&format=jpeg"
        },
        {
          title: "Claws",
          date: "June 11, 2017",
          tv_source: "Hulu",
          cover_image:
            "https://m.media-amazon.com/images/M/MV5BYjdkYWVmMGYtMzQ3YS00MmE0LWEyNWItNzM4ZjBhMzVhMTE3XkEyXkFqcGdeQXVyODQyNDU2MTU@._V1_.jpg"
        },
        {
          title: "Big Little Lies",
          date: "February 19, 2017",
          tv_source: "HBO",
          cover_image:
            "https://images-na.ssl-images-amazon.com/images/I/917HST0bueL._SX300_.jpg"
        },
        {
          title: "Veep",
          date: "April 22, 2012",
          tv_source: "HBO",
          cover_image:
            "https://m.media-amazon.com/images/M/MV5BOWE3MDgzZGYtOTY5Mi00ZThhLWEyYjMtZDI4N2QwZmNlOTIzXkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_.jpg"
        },
        {
          title: "Insecure",
          date: "October 9, 2016",
          tv_source: "HBO",
          cover_image:
            "https://m.media-amazon.com/images/M/MV5BMjMyMTIxNzU2NV5BMl5BanBnXkFtZTgwNDQxMzEyNjM@._V1_.jpg"
        },
        {
          title: "Seinfield",
          date: "July 5, 1989",
          tv_source: "Netflix",
          cover_image:
            "https://m.media-amazon.com/images/M/MV5BZjZjMzQ2ZmUtZWEyZC00NWJiLWFjM2UtMzhmYzZmZDcxMzllXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg"
        },
        {
          title: "Entourage",
          date: "July 18, 2004",
          tv_source: "HBO",
          cover_image:
            "https://images-na.ssl-images-amazon.com/images/I/41hHm2eBbvL.jpg"
        },
        {
          title: "Sex and the City",
          date: "June 6, 1998",
          tv_source: "HBO",
          cover_image:
            "https://m.media-amazon.com/images/M/MV5BNGEyNDRjM2QtY2VlYy00OWRhLWI4N2UtZTM4NDc0MGM0YzBkXkEyXkFqcGdeQXVyNjk1Njg5NTA@._V1_.jpg"
        },
        {
          title: "Madmen",
          date: "July 19, 2007",
          tv_source: "Netflix",
          cover_image:
            "https://m.media-amazon.com/images/M/MV5BMjMwNzk5Nzg2OV5BMl5BanBnXkFtZTgwMjg1OTk1NDE@._V1_.jpg"
        },
        {
          title: "Breaking Bad",
          date: "January 20, 2008",
          tv_source: "Netflix",
          cover_image:
            "https://static0.srcdn.com/wordpress/wp-content/uploads/2019/01/Breaking-Bad-Movie-Characters.jpg"
        },
        {
          title: "Bates Motel",
          date: "March 18, 2013",
          tv_source: "Netflix",
          cover_image:
            "https://vignette.wikia.nocookie.net/batesmotel/images/d/d5/Season2.jpg/revision/latest?cb=20141103233619"
        },
        {
          title: "Girls",
          date: "May 12, 2018",
          tv_source: "HBO",
          cover_image:
            "https://hbowatch.com/wp-content/uploads/2016/01/GirlsofGIRLS.jpg"
        },
        {
          title: "Schitts Creek",
          date: "January 13, 2015",
          tv_source: "Netflix",
          cover_image:
            "https://i.ytimg.com/sh/zHT7rJoHumdd4AqongsW9g/market.jpg"
        },
        {
          title: "The Sinner",
          date: "August 2, 2017",
          tv_source: "Netflix",
          cover_image:
            "https://resizing.flixster.com/eefS4ufoBOj9ZHSsDL_znSoATic=/206x305/v1.dDszMjUxODM7ajsxODEzODsxMjAwOzIwMDA7MzAwMA"
        },
        {
          title: "Arrested Development",
          date: "November 2, 2003",
          tv_source: "Netflix",
          cover_image:
            "https://m.media-amazon.com/images/M/MV5BNTFlYTE2YTItZmQ1NS00ZWQ5LWI3OGUtYTQzNDMyZmEyYTZjXkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_.jpg"
        },
        {
          title: "Chernobyl",
          date: "May 6, 2019",
          tv_source: "HBO",
          cover_image:
            "https://upload.wikimedia.org/wikipedia/en/a/a7/Chernobyl_2019_Miniseries.jpg"
        },
        {
          title: "Dark",
          date: "December 1, 2017",
          tv_source: "Netflix",
          cover_image:
            "https://static.next-episode.net/tv-shows-images/huge/dark.jpg"
        },
        {
          title: "Game of Thrones",
          date: "April 17, 2011",
          tv_source: "HBO",
          cover_image:
            "https://i.ytimg.com/sh/ow8-ZftRoZelY710tvO45Q/market.jpg"
        },
        {
          title: "The Path",
          date: "March 30, 2016",
          tv_source: "Hulu",
          cover_image:
            "https://m.media-amazon.com/images/M/MV5BMjQ4MzMzNzUyN15BMl5BanBnXkFtZTgwODU2NTI0NDM@._V1_.jpg"
        },
        {
          title: "Sherlock",
          date: "July 25, 2010",
          tv_source: "Netflix",
          cover_image:
            "https://images-na.ssl-images-amazon.com/images/I/51j90UOkX-L._SY445_.jpg"
        },
        {
          title: "Dexter",
          date: "October 1, 2006",
          tv_source: "Netflix",
          cover_image:
            "https://m.media-amazon.com/images/M/MV5BMTM5MjkwMTI0MV5BMl5BanBnXkFtZTcwODQwMTc0OQ@@._V1_.jpg"
        }
      ]);
    });
};
