import React, {Component} from 'react';
import AdminCategoryDisplay from './AdminCategoryDisplay'
import firebase from '../../../firebase'
import toastr from 'toastr';

class AdminCategoryContainer extends Component{

    state={addingCategory: false,form:{}};

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);

        const categoriesRef = firebase.database().ref('category');

        categoriesRef.on('value', (snapshot) => {
            let categories = snapshot.val();
            let categoriesArray = [];
            for (let category in categories) {
                categoriesArray.push({
                    id: category,
                    name: categories[category].name,
                    description:categories[category].description,
                    imagePath:categories[category].imagePath
                });
            }
            this.setState({ categories: categoriesArray });
        });
    }

    addCategory = () => this.setState({addingCategory:true})

    editCategory = (category) => this.setState({editingCategory:category})

    closeAddCategory = () => this.setState({addingCategory:false})

    closeEditingCategory = () => this.setState({editingCategory:false})

    onInputChange = (e) => {
        this.setState({form:{...this.state.form,[e.target.name]:e.target.value}})
    }

    render() {
        const {categories,addingCategory,editingCategory}=this.state;
        return (
            <div>
                <AdminCategoryDisplay
                    categories={categories}
                    onAddCategory={this.addCategory}
                    onEditCategory={(category)=>this.editCategory(category)}
                    addingCategory = {addingCategory}
                    editingCategory={editingCategory}
                    handleCancelEditing={this.closeEditingCategory}
                    handleCancelAdding={this.closeAddCategory}
                    onInputChange={this.onInputChange}
                />
            </div>
        );
    }
}

export default AdminCategoryContainer;
