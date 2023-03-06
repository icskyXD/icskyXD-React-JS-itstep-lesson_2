import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
const GeneralPage = () => {
    const location = useLocation();
    const params = useParams()
    
    console.log({ location });
    
    return (
    <>
    <header>
        <Link to='/'>General</Link> <br/>
        <Link to='/posts'>Posts</Link>
    </header>
        <div>
            <Outlet/>
        </div>
    </>
    )
}
 
export default GeneralPage;