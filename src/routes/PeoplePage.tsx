import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import apiClientStars from '../common/apiClient';
import { IPeople } from '../common/models'
import { useEffect, useState } from 'react'

const PeoplePage = () => {
    const [person, setPerson] = useState<IPeople[]>([])

    const getPeople = async () => {
        const res = await apiClientStars.get<IPeople[]>('/people/1')
        console.log(res.data);
        setPerson(res.data)
        console.log(person);
        
    }

    useEffect(()=> {
        getPeople()
    },[])

    return (
    <div>
        <button onClick={()=>getPeople()}>12</button>
        <Outlet/>
    </div>
    )
}

export default PeoplePage;
