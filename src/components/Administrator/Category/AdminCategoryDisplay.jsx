import React from 'react';
import {Button,Modal,Form,Input} from "antd";
import CategoryFormContainer from "./components/CategoryFormContainer";

const AdminCategoryDisplay = ({categories=[],
                              onAddCategory,
                              onEditCategory,
                              addingCategory=false,
                              editingCategory=null,
                              detailingCategory=false,
                              deletingCatedory=false,
                              handleCancelAdding,
                              handleCancelEditing}) =>{

    return(
        <div className='AdminCategoryDisplay'>
            <Button type="primary" icon="plus" onClick={onAddCategory}>Agregar categoría</Button>
            <section>
                <div className="categories">
                    {categories.map((category, key)=>{
                        return <div key={key}>
                                <span>{category.name}</span>
                                <i className="fas fa-pen"/>
                                <i className="fas fa-trash"></i>
                            </div>
                    })}
                </div>
            </section>

            {/*Modal para Agregar categoría*/}
            {addingCategory&& <CategoryFormContainer
                action='add'
                cancel={handleCancelAdding}
            >
            </CategoryFormContainer>}

            {/*Modal para Editar categoría*/}
            {editingCategory&& <CategoryFormContainer
                action='edit'
                editingCategory={editingCategory}
                cancel={handleCancelEditing}
            >
            </CategoryFormContainer>}
        </div>
    )

};

export default AdminCategoryDisplay;