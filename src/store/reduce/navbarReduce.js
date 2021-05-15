const initialState = {
  genresItem: [{ id: 'genre1', genre: 'Action', genreId: 28 }, { id: 'genre2', genre: 'Animation', genreId: 16 },
    { id: 'genre3', genre: 'Comedy', genreId: 35 }, { id: 'genre4', genre: 'Crime', genreId: 80 },
    { id: 'genre5', genre: 'Documentary', genreId: 99 }, { id: 'genre6', genre: 'Drama', genreId: 18 },
    { id: 'genre7', genre: 'Family', genreId: 10751 }, { id: 'genre8', genre: 'History', genreId: 36 },
    { id: 'genre9', genre: 'Horror', genreId: 27 }, { id: 'genre10', genre: 'Music', genreId: 10402 },
    { id: 'genre11', genre: 'Mystery', genreId: 9648 }, { id: 'genre12', genre: 'Romance', genreId: 10749 },
    { id: 'genre13', genre: 'Science Fiction', genreId: 878 }, { id: 'genre14', genre: 'TV Movie', genreId: 10770 },
    { id: 'genre15', genre: 'Thriller', genreId: 53 }, { id: 'genre16', genre: 'War', genreId: 10752 },
    { id: 'genre17', genre: 'Western', genreId: 37 }, { id: 'genre18', genre: 'Adventure', genreId: 12 },
    { id: 'genre19', genre: 'Fantasy', genreId: 14 },
  ],
};

const navbarReduce = (state = initialState, action) => {
  switch (action.type) {
    default: return state;
  }
};

export default navbarReduce;
