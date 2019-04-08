import React, {Component} from 'react';
import InicioDisplay from './InicioDisplay'

class InicioContainer extends Component{



    state={
        scroll:0,
        categories:[
            {id:1,name:'Ánime',description:'Lo mejor del ánime aquí',imagePath:'/anime/IMG_E3936.JPG'},
            {id:2,name:'Caricaturas',description: 'Porque nunca dejamos de ser niños',imagePath:'/caricaturas/IMG_8425.JPG'},
            {id:3,name:'Frases',description:'Nunca falta una buena frase para comenzar el día',imagePath:'/frases/IMG_0239.JPG'},
            {id:4,name:'Libros',description:'Buenos libros, buena vida',imagePath:'/libros/IMG_0155.JPG'},
            {id:5,name:'Música',description:'Cuando la música suena, el alma vibra',imagePath:'/musica/IMG_E3946.JPG'},
            {id:6,name:'mx', description:'Diseño Mexicano, el mejor del mundo!',imagePath:'/mx/IMG_8104.JPG'},
            {id:7,name:'Películas',description:'¿Cinéfilo? ¡Tienes que ver esto!',imagePath:'/peliculas/IMG_0277.JPG'},
            {id:8,name:'Potterhead',description:'Porque la magia nunca pare...',imagePath:'/potterhead/IMG_0060.JPG'},
            {id:9,name:'videojuegos',description:'',imagePath:'/videojuegos/IMG_0294.JPG'},
            {id:10,name:'retro',description:'',imagePath:'/retro/IMG_0278.JPG'},
            {id:11,name:'heroes',description:'',imagePath:'/heroes_villanos/IMG_0178.JPG'}],
        products:[
            {
                id:0,
                name:'separador1',
                imageURL:'IMG_3932.JPG'
            },
            {
                id:1,
                name:'separador2',
                imageURL:'IMG_0060.JPG'
            },
            {
                id:2,
                name:'separador3',
                imageURL:'IMG_0060.JPG'
            },
            {
                id:3,
                name:'separador4',
                imageURL:'IMG_0061.JPG'
            },
            {
                id:4,
                name:'separador5',
                imageURL:'IMG_0062.JPG'
            }
            ,
            {
                id:5,
                name:'separador6',
                imageURL:'IMG_0069.JPG'
            },
            {
                id:6,
                name:'separador7',
                imageURL:'IMG_0069.JPG'
            }
        ]

    };


    handleScroll = () =>{
        this.setState({scroll: window.scrollY});
    };

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);

    }


    goToId=(e)=>{
        switch (e.key) {
            case 'aboutUs':
                this.setState({scroll:800});
                break
            case 'products':
                this.setState({scroll:50});
                break
            default:
                this.setState({scroll:0})
        }
        console.log(e.key);
    }

    render() {
        const {scroll,products,categories}=this.state;
        return (
            <div>
                <InicioDisplay
                    categories={categories}
                    products={products}
                    scroll={scroll}
                    goToId={this.goToId}
                />
            </div>
        );
    }
}

export default InicioContainer;

