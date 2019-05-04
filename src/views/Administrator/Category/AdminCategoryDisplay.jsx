import React from 'react';
import {Button,Modal,Form,Input} from "antd";
import CategoryFormContainer from "./components/CategoryFormContainer";

const AdminCategoryDisplay = ({categories=[],
                              onAddCategory,
                              onEditCategory,
                              onDeleteCategory,
                              addingCategory=false,
                              editingCategory=null,
                              detailingCategory=false,
                              deletingCategory=false,
                              handleCancelAdding,
                              handleCancelEditing,
                              handleDeleteCategory,
                              onCancelDeleteCategory}) =>{

    return(
        <div className='AdminCategoryDisplay'>
            <Button type="primary" icon="plus" onClick={onAddCategory}>Agregar categoría</Button>
            <section>
                <div className="categories">
                    {categories.map((category, key)=>{
                        return <div key={key}>
                                <span>{category.name}</span>
                                <i className="fas fa-pen" onClick={()=>onEditCategory(category)}/>
                                <i className="fas fa-trash" onClick={()=>onDeleteCategory(category)}/>
                            </div>
                    })}
                </div>
            </section>

            {/*Modal para Agregar categoría*/}
            {addingCategory&& <CategoryFormContainer
                action='add'
                cancel={handleCancelAdding}>
                </CategoryFormContainer>}

            {/*Modal para Editar categoría*/}
            {editingCategory&& <CategoryFormContainer
                action='edit'
                editingCategory={editingCategory}
                cancel={handleCancelEditing}>
                </CategoryFormContainer>}

            {/*Modal para Eliminar categoría*/}
            {deletingCategory&&<Modal
                title='Eliminar categoría'
                visible={true}
                onOk={handleDeleteCategory}
                onCancel={onCancelDeleteCategory}>
                <p>¿Realmente deseas borrar la categoría?</p>
                </Modal>}
        </div>
    )

};

export default AdminCategoryDisplay;