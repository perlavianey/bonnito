import React from 'react';
import {Link} from "react-router-dom";

const Administrator = () =>{

    return(
        <div className='Administrator'>
            <h1>Panel de administración</h1>
            <Link to={`/admin/categories`}>Categorías</Link>
        </div>
    )

};

export default Administrator;