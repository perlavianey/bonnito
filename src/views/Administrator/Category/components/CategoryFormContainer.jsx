import React, {Component} from 'react';
import CategoryFormDisplay from '../components/CategoryFormDisplay'
import firebase from '../../../../firebase'
import toastr from 'toastr';

class CategoryFormContainer extends Component{

    constructor(props){
        super(props);
        this.props = props;
        if(props.action==='edit'){
            this.state={
                form:{
                    name:props.editingCategory.name,
                    description:props.editingCategory.description,
                    imagePath:props.editingCategory.imagePath
                }
            }
        }
        else this.state = {
            form:{}
        };
    }

    handleAddCategory = (e) =>{
        e.preventDefault();
        const categoriesRef = firebase.database().ref('category');
        const newCategory = this.state.form;
        categoriesRef.push(newCategory);
        this.props.cancel();
    };

    handleEditCategory = (e)=>{
        e.preventDefault();
        const categoriesRef = firebase.database().ref('category');
        const idCategory = this.props.editingCategory.id, updatedCategory = this.state.form;
        categoriesRef.child(idCategory).update(updatedCategory);
        this.props.cancel();
    }

    onInputChange = (e) => this.setState({form:{...this.state.form,[e.target.name]:e.target.value}});

    render() {
        const {name,description,imagePath} = this.state.form;
        return (
            <div>
                <CategoryFormDisplay
                    action={this.props.action}
                    handleAddCategory={this.handleAddCategory}
                    onInputChange={this.onInputChange}
                    onCancel={this.props.cancel}
                    handleEditCategory={this.handleEditCategory}
                    name={name}
                    description={description}
                    imagePath={imagePath}
                />
            </div>
        );
    }
}

export default CategoryFormContainer;
