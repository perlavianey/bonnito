import React from 'react';
import {Button,Modal,Row,Col} from "antd";
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
            <p>Lista de Categorías</p>
            <div className='buttonAddContainer'>
                <Button className='buttonAdd' shape='round' type="primary" icon="plus" onClick={onAddCategory}>Agregar</Button>
            </div>

            <section>
                <div className="categoriesTable">
                    <Row className='headerTable'>
                        <Col span ={18}>Nombre</Col>
                        <Col span={6}>Acciones</Col>
                    </Row>
                    {categories.map((category, key)=>{
                        return <Row className='category' key={key}>
                                <Col span ={18}>{category.name}</Col>
                                <Col span={6}><i className="fas fa-pen" onClick={()=>onEditCategory(category)}/><i className="fas fa-trash" onClick={()=>onDeleteCategory(category)}/></Col>
                            </Row>
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
                className='ModalCategory'
                title='Eliminar categoría'
                visible={true}
                width={350}
                okText='Eliminar'
                cancelText='Cancelar'
                okButtonProps={{shape:'round'}}
                cancelButtonProps={{shape:'round'}}
                onOk={handleDeleteCategory}
                onCancel={onCancelDeleteCategory}>
                <p>¿Realmente deseas borrar la categoría <b>{deletingCategory.name}</b>?</p>
                </Modal>}
        </div>
    )

};

export default AdminCategoryDisplay;