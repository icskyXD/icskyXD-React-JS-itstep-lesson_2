import './styles.css'
import { createBrowserRouter } from 'react-router-dom';
import { PostsPage, GeneralPage, ErrorPage, SinglePostPage, PeoplePage, StarhipsPage, PlanetsPage} from './routes';

const router = createBrowserRouter([
    { 
        path:'/', 
        element: <GeneralPage/>, 
        errorElement: <ErrorPage/>,
        children: [{path: '/posts/:postId', element:<SinglePostPage/>,}]},
    {
        path:'/People',
        element: <PeoplePage/>,
        errorElement: <ErrorPage/>,
        // children: [{path: '/people/:id', element:<SinglePostPage/>,}],
    },
    {
        path:'/Starships',
        element: <StarhipsPage/>,
        errorElement: <ErrorPage/>,
        // children: [{path: '/people/:id', element:<SinglePostPage/>,}],
    },
    {
        path:'/Planets',
        element: <PlanetsPage/>,
        errorElement: <ErrorPage/>,
        // children: [{path: '/people/:id', element:<SinglePostPage/>,}],
    }
]);

export default router;