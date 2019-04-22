import React, {Component} from 'react';
import CategoryDisplay from './CategoryDisplay'
import firebase from '../../firebase'

class CategoryContainer extends Component{

    constructor(props){
        super(props);
        this.state={
            category:{id:this.props.match.params.id}
        };
    }

    componentDidMount() {
        //traer los artículos de la categoría this.state.category
        // const catItems = firebase.database().ref('items');
        // catItems.on('value', (snapshot) => {
        //     let items = snapshot.val();
        //
        //     let newState = [];
        //     for (let item in items) {
        //         newState.push({
        //             id: Number(item),
        //             name: items[item].name,
        //             description:items[item].description,
        //             imagePath:items[item].imagePath
        //         });
        //     }
        //     this.setState({
        //         items: newState
        //     },()=>console.log(this.state.items));
        // });
    }

    render() {

        return (
            <div>
                <CategoryDisplay/>
            </div>
        );
    }
}

export default CategoryContainer;