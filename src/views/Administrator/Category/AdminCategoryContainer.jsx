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

    addCategory = () => this.setState({addingCategory:true});

    editCategory = (category) => this.setState({editingCategory:category});

    deleteCategory = () =>{
        const categoriesRef = firebase.database().ref(`/category/${this.state.deletingCategory.id}`);
        categoriesRef.remove().then(()=>this.closeDeleteCategory())
    };

    handleDeleteCategory = (category) => this.setState({deletingCategory:category});

    closeAddCategory = () => this.setState({addingCategory:false});

    closeEditingCategory = () => this.setState({editingCategory:false});

    closeDeleteCategory = () => this.setState({deletingCategory:false});

    onInputChange = (e) => this.setState({form:{...this.state.form,[e.target.name]:e.target.value}});

    render() {
        const {categories,addingCategory,editingCategory,deletingCategory}=this.state;
        return (
            <AdminCategoryDisplay
                categories={categories}
                onAddCategory={this.addCategory}
                onEditCategory={(category)=>this.editCategory(category)}
                onDeleteCategory={(category)=>this.handleDeleteCategory(category)}
                addingCategory = {addingCategory}
                editingCategory={editingCategory}
                deletingCategory={deletingCategory}
                handleCancelEditing={this.closeEditingCategory}
                handleCancelAdding={this.closeAddCategory}
                handleDeleteCategory={(category)=>this.deleteCategory(category)}
                onCancelDeleteCategory={this.closeDeleteCategory}
                onInputChange={this.onInputChange}
            />
        );
    }
}

export default AdminCategoryContainer;
