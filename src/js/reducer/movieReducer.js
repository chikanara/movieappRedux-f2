import { ADD_MOVIE, DELETE_MOVIE, EDIT_MOVIE } from "../types";

const initialState = {
  movies: [
    {
      id: 0,
      title: "peaky blinders",
      posterUrl: "//pbs.twimg.com/media/ETAoYTMXgAA01qD.jpg",
      rate: 4,
      description:
        "A gangster family epic set in 1900s England, centering on a gang who sew razor blades in the peaks of their caps, and their fierce boss Tommy Shelby.",
      trailer: "https://www.youtube.com/embed/oVzVdvGIC7U",
    },
    {
      id: 1,
      title: "Game of thrones",
      posterUrl:
        "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2015%2F11%2Fjs20-20tease.jpeg",
      rate: 4.7,
      description:
        "Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.",
      trailer: "https://www.youtube.com/embed/gcTkNV5Vg1E",
    },
    {
      id: 2,
      title: "The good doctor",
      posterUrl: "https://pbs.twimg.com/media/EbNkkiTXsAc2o3Y.jpg",
      rate: 4.2,
      description:
        "Shaun Murphy, a young surgeon with autism and Savant syndrome, is recruited into the surgical unit of a prestigious hospital.",
      trailer: "https://www.youtube.com/embed/msJggy8xtmI",
    },
  ],
};
const movieReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_MOVIE:
      return { ...state, movies: [...state.movies, payload] };

    case DELETE_MOVIE:
      return {
        ...state,
        movies: state.movies.filter((el) => el.id !== payload),
      };

    case EDIT_MOVIE:
      return {
        ...state,
        movies: state.movies.map((el) =>
          el.id === payload.id ? { ...el, ...payload } : el
        ),
      };

    default:
      return state;
  }
};

// const obj = {
//     id:0,
//     name:"marco",
//     age:30
// }
// let obj1 = {
//     id:0,
//     name:"marco",
//     age:45
// }
// let obj2 = {...obj,...obj1}     => 
// obj2 = {
//     id:0,
//     name:"marco",
//     age:45,
    
// }

export default movieReducer;
