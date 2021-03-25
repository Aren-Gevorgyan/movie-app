const initialState = {
    menu: [
        { id: 1, name: "Popular", path: "" },
    ]
}

const navbarReduce = (state = initialState, action) => {
    switch (action.type) {
        default: return state;
    }
}

export default navbarReduce;