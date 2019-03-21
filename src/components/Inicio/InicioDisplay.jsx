import React from 'react';
import { Row, Col, Menu,Card} from 'antd';
import './styles.css'
const { Meta } = Card;

const InicioDisplay = ({scroll,top,products,goToId}) =>{

    return(
        <div className='InicioDisplay'>
            <div className="parallax"/>
            <Row id='menu' gutter={16} className={scroll > top ? "fixed-nav" : "menuContainer"}>
                <Col span={24}>
                    <img src={require('../../../src/assets/images/logo.png')} alt='logo' className='logo'/>
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
            <section id='about' className='about'>
                <Row className='title'>
                    <Col span={24}>
                        <img src={require('../../../src/assets/images/line2.png')} alt='line' className='linea'/>
                        <span className='aboutTitle'>Acerca de Bonni-to</span>
                        <img src={require('../../../src/assets/images/line2.png')} alt='line' className='lineaDerecha'/>
                    </Col>
                </Row>
                <Row className='history'>
                    <Col>
                        <p className='historyDescription'>
                            <b>Bonni-To diseño mx </b> es una marca mexicana que busca fomentar la lectura con sus separadores originales. <br/><br/>
                            Están basados en temas de actualidad y nostalgia. Ya sea que sean de películas, series, libros o caricaturas siempre hay uno para quien guste de la lectura. <br/><br/>
                            Con su <b>#asísíleo</b>  pretende que los niños, jóvenes y adultos nunca se olviden de que leyendo puedes abrir puertas a otros mundos.<br/><br/>
                            Además de los separadores buscamos también desarrollar objetos decorativos que sean objetos de diseño que hagan de tu hogar un lugar bonito y agradable.<br/>
                        </p>
                    </Col>
                </Row>
            </section>

            <section id='products' className='products'>
                <Row className='title'>
                    <Col>
                        <img src={require('../../../src/assets/images/line2.png')} alt='line' className='linea'/>
                        <span className='aboutTitle'>Productos</span>
                        <img src={require('../../../src/assets/images/line2.png')} alt='line' className='lineaDerecha'/>
                    </Col>
                </Row>
                <Row className='productsList'>
                    {products.map((p, key)=>{
                        let src = 'https://res.cloudinary.com/perlavianey/image/upload/v1553136831/bonni-to/'.concat(p.imageURL);
                        return <Card className="productCard"
                                  key={key}
                                  hoverable
                                  title={p.name}
                                  bordered='true'
                                  cover={<img alt="productPic" className='productImage' src={src}/>}>
                                <Meta title={p.name}/>
                        </Card>
                    })}
                </Row>
            </section>
        </div>
    )

};

export default InicioDisplay;