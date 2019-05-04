import React from 'react';
import { Row, Col, Menu} from 'antd';

const AdminNavbarDisplay = ({closeSession}) =>{

    return(
        <div className='AdminNavbarDisplay'>
            <Row id='menu' gutter={16} className="fixed-nav menuContainer">
                <Col span={8}>
                    <img src={require('../../../../src/assets/images/logo.png')} alt='logo' className='logo'/>
                </Col>
                <Col span={16} className='colMenu' >
                    <Menu mode="horizontal" className='menu'>
                        <Menu.Item key="closeSession" className='menuItem' onClick={closeSession}>
                            <i className="fas fa-home"></i> Acerca de Bonni-to
                        </Menu.Item>
                    </Menu>
                </Col>
            </Row>
        </div>
    )

};

export default AdminNavbarDisplay;