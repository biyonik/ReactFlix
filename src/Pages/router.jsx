import LoginPage from "./LoginPage/Login.Page.jsx";
import SignUpPage from "./SignUpPage/Signup.Page.jsx";
import PlayerPage from "./PlayerPage/Player.Page.jsx";
import TvShowPage from "./TvShowPage/TvShow.Page.jsx";
import NetflixPage from "./NetflixPage/Netflix.Page.jsx";
import MoviePage from "./MoviePage/Movie.Page.jsx";

const routes = [
    {
        path: '/',
        element: <NetflixPage />
    },
    {
        path: '/login',
        element: <LoginPage />
    },
    {
        path: '/signup',
        element: <SignUpPage />
    },
    {
        path: '/player',
        element: <PlayerPage />
    },
    {
        path: '/tv',
        element: <TvShowPage />
    },
    {
        path: '/movie',
        element: <MoviePage />
    }
];

export default routes;
