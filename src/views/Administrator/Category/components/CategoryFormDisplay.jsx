import React from 'react';
import {Modal,Form,Input} from "antd";

const CategoryFormDisplay = ({onCancel,handleAddCategory,handleEditCategory,handleCancelAdding,onInputChange,action,name,description,imagePath}) =>{
    return(
        <Modal
            className='ModalCategory'
            title={action==='add'?'Agregar categoría':'Editar categoría'}
            visible={true}
            width={400}
            okText={action==='add'?'Agregar':'Guardar'}
            cancelText='Cancelar'
            okButtonProps={{shape:'round'}}
            cancelButtonProps={{shape:'round'}}
            onOk={action==='add'?handleAddCategory:handleEditCategory}
            onCancel={onCancel}>
            <Form layout="vertical" onSubmit={action==='add'?handleAddCategory:handleEditCategory}>
                <Form.Item label="Nombre:">
                    <Input onChange={onInputChange} name='name' autoComplete='off' autoFocus={true} value={name}/>
                </Form.Item>
                <Form.Item label="Descripción:">
                    <Input onChange={onInputChange} type="textarea" autoComplete='off' name='description' value={description} />
                </Form.Item>
                <Form.Item label="Ruta de la imagen principal:">
                    <Input onChange={onInputChange} name='imagePath' autoComplete='off' value={imagePath}/>
                </Form.Item>
            </Form>
        </Modal>
    )

};

export default CategoryFormDisplay;