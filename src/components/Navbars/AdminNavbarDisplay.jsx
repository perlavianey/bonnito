import React from 'react';
import { Row, Col, Menu} from 'antd';

const AdminNavbarDisplay = ({closeSession}) =>{

    return(
        <div className='AdminNavbarDisplay'>
            <div className='logoContainer'>
                <img src={require('../../assets/images/logo.png')} alt='logo' className='logo'/>
            </div>
            <div className='menuContainer' >
                <Menu mode="horizontal" className='menu'>
                    <Menu.Item key="closeSession" className='menuItem' onClick={closeSession}>
                        <i className="fas fa-sign-out-alt"/> Cerrar sesión
                    </Menu.Item>
                </Menu>
            </div>
        </div>
    )

};

export default AdminNavbarDisplay;