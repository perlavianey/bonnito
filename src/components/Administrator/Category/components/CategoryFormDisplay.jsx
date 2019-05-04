import React from 'react';
import {Modal,Form,Input} from "antd";

const CategoryFormDisplay = ({onCancel,handleAddCategory,handleEditCategory,handleCancelAdding,onInputChange,action,name,description,imagePath}) =>{
    return(
        <Modal
            title={action==='add'?'Agregar categoría':'Editar categoría'}
            visible={true}
            onOk={action==='add'?handleAddCategory:handleEditCategory}
            onCancel={onCancel}>
            <Form layout="vertical" onSubmit={action==='add'?handleAddCategory:handleEditCategory}>
                <Form.Item label="Nombre">
                    <Input onChange={onInputChange} name='name' value={name}/>
                </Form.Item>
                <Form.Item label="Descripción">
                    <Input onChange={onInputChange} type="textarea" name='description' value={description} />
                </Form.Item>
                <Form.Item label="Ruta de la imagen principal">
                    <Input onChange={onInputChange} name='imagePath' value={imagePath}/>
                </Form.Item>
            </Form>
        </Modal>
    )

};

export default CategoryFormDisplay;