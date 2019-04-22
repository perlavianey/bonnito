import React from 'react';
import { Row, Col, Menu} from 'antd';
import './styles.css'
import {Link} from 'react-router-dom'

const InicioDisplay = ({categories=[],goToId}) =>{

    return(
        <div className='InicioDisplay'>

            <Row id='menu' gutter={16} className="fixed-nav menuContainer">
                <Col span={8}>
                    <img src={require('../../../src/assets/images/logo.png')} alt='logo' className='logo'/>
                </Col>
                <Col span={16} className='colMenu' >
                    <Menu mode="horizontal" className='menu'>
                        <Menu.Item key="aboutUs" className='menuItem' onClick={goToId}>
                            <i className="fas fa-home"></i> Acerca de Bonni-to
                        </Menu.Item>
                        <Menu.Item key="products" className='menuItem' onClick={goToId}>
                            <i className="far fa-bookmark"></i> Productos
                        </Menu.Item>
                        <Menu.Item key="events" className='menuItem' onClick={goToId}>
                            <i className="far fa-calendar-check"></i> Eventos
                        </Menu.Item>
                        <Menu.Item key="contact" className='menuItem' onClick={goToId}>
                            <i className="fas fa-at"></i> Contacto
                        </Menu.Item>
                    </Menu>
                </Col>
            </Row>
            <div className="parallax"/>
            <section id='about' className='about'>
                <Row className='title'>
                    <Col span={5}>
                        <div className='divider'>
                            <img src={require('../../../src/assets/images/patron-01.png')} alt='triangles' className=''/>
                        </div>
                    </Col>
                    <Col span={14}>
                        <span className='aboutTitle'>Acerca de Bonni-to</span><br/>
                        <p className='historyDescription'>
                            <b>Bonni-To diseño mx </b> es una marca mexicana que busca fomentar la lectura con sus separadores originales. <br/><br/>
                            Están basados en temas de actualidad y nostalgia. Ya sea que sean de películas, series, libros o caricaturas siempre hay uno para quien guste de la lectura. <br/><br/>
                            Con su <b>#asísíleo</b>  pretende que los niños, jóvenes y adultos nunca se olviden de que leyendo puedes abrir puertas a otros mundos.<br/><br/>
                            Además de los separadores buscamos también desarrollar objetos decorativos que sean objetos de diseño que hagan de tu hogar un lugar bonito y agradable.<br/>
                        </p>
                    </Col>
                    <Col span={5}>
                        <div className='divider'>
                            <img src={require('../../../src/assets/images/patron-01.png')} alt='triangles' className=''/>
                        </div>
                    </Col>
                </Row>
            </section>

            <section id='products' className='products ss-style-doublediagonal'>
                <Row className='title'>
                    <Col span={7}>
                        <div className='divider'/>
                    </Col>
                    <Col span={10}>
                        <span className='aboutTitle'>Productos</span>
                    </Col>
                    <Col span={7}>
                        <div className='divider'/>
                    </Col>
                </Row>
                <Row className='productsList'>
                    <div className="grid">
                    {categories.map((category, key)=>{
                    return <Link to={`/category/${category.id}`} key={key}><figure className="effect-ruby">
                        <img src={require(`../../../src/assets/images/categorias${category.imagePath}`)} alt='CategoryImg' className='categoryImage'/>
                        <figcaption>
                            <h2><span>{category.name}</span></h2>
                            <p>{category.description}</p>
                        </figcaption>
                    </figure></Link>
                    })}
                    </div>
                </Row>
            </section>
            <section id='events' className='events'>
                <Row className='title'>
                    <Col span={7}>
                        <div className='divider'/>
                    </Col>
                    <Col span={10}>
                        <span className='aboutTitle'>Eventos</span>
                    </Col>
                    <Col span={7}>
                        <div className='divider'/>
                    </Col>
                </Row><br/><br/><br/>
            </section>
        </div>
    )

};

export default InicioDisplay;