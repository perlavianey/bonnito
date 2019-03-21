import React, {Component, createRef} from 'react';
import InicioDisplay from './InicioDisplay'

let myRef = null;

class InicioContainer extends Component{



    state={
        scroll:0,
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
        const el = document.getElementById('menu');
        this.setState({top: el.offsetTop, height: el.offsetHeight});
        window.addEventListener('scroll', this.handleScroll);

    }

    componentDidUpdate() {
        this.state.scroll > 600 ?
            document.body.style.paddingTop = `${this.state.height}px` :
            document.body.style.paddingTop = 0;
    }

    goToId=(e)=>{
        switch (e.key) {
            case 'aboutUs':
                this.setState({scroll:800});
                break
            case 'products':
                this.setState({scroll:50});
                break
        }
        console.log(e.key);
    }

    render() {
        const {scroll,top,products}=this.state;
        return (
            <div>
                <InicioDisplay
                    products={products}
                    scroll={scroll}
                    top={top}
                    goToId={this.goToId}
                />
            </div>
        );
    }
}

export default InicioContainer;

