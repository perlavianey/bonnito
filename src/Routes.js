import React from 'react'
import InicioContainer from './views/User/Inicio/InicioContainer'
import CategoryContainer from './views/User/Category/CategoryContainer'
import AdminCategoryContainer from './views/Administrator/Category/AdminCategoryContainer'

const Routes = [
    {
        path: "/inicio",
        name: "Inicio",
        component: InicioContainer,
        layout: "/app",
        hidden: true
    },
    {
        path: "/categories",
        name: "Categories",
        component: AdminCategoryContainer,
        layout: "/auth",
        hidden: true
    }
];

export default Routes;
