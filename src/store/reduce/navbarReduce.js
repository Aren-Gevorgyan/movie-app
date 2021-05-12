const initialState = {
    genresItem: [{ id: "genre1", genre: "Action" }, { id: "genre2", genre: "Animation" },
        { id: "genre3", genre: "Comedy" }, { id: "genre4", genre: "Crime" },
        { id: "genre5", genre: "Documentary" }, { id: "genre6", genre: "Drama" },
        { id: "genre7", genre: "Family" }, { id: "genre8", genre: "History" },
        { id: "genre9", genre: "Horror" }, { id: "genre10", genre: "Music" },
        { id: "genre11", genre: "Mystery" }, { id: "genre12", genre: "Romance" },
        { id: "genre13", genre: "Science Fiction" }, { id: "genre14", genre: "TV Movie" },
        { id: "genre15", genre: "Thriller" }, { id: "genre16", genre: "War" },
        { id: "genre17", genre: "Western" }, { id: "genre18", genre: "Adventure" },
        { id: "genre19", genre: "Fantasy" }
    ]
}

const navbarReduce = (state = initialState, action) => {
    switch (action.type) {
        default: return state;
    }
}

export default navbarReduce;