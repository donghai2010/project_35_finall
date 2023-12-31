import { React,useEffect,useState } from "react";
import "./EditTable.css";
import { Modal } from 'antd';


const  EditTable = ({
    isModalOpen,
    setIsModalOpen,
    itemDetail,
    setItemDetail,
    callBackUpdate
}) => {

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [address, setAddress] = useState('');
    const [tags, setTags] = useState('');

    useEffect (() => {
        if(itemDetail) {
            setName(itemDetail?.name);
            setAge(itemDetail?.age);
            setAddress(itemDetail?.address);
            setTags(itemDetail?.tags);
        }

    }, [itemDetail?.id]);
  const handleOk = () => {
    const result = {
        ...itemDetail,
        name,
        age,
        address,
        tags
    }
    console.log("result", result);
    callBackUpdate(result);
    // setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setItemDetail({});
  };
    return (
    <>
      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <div className='styleInput'>
            <input value={name} name='name' placeholder='name' onChange={(e) => setName(e.target.value)} />
            <input value={age} name='age' placeholder='age' onChange={(e) => setAge(e.target.value)}/>
            <input value={address} name='address' placeholder='address' onChange={(e) => setAddress(e.target.value)}/>
            <input value={tags} name='tags' placeholder='tags' onChange={(e) => setTags(e.target.value)}/>
        </div>
      </Modal>
    </>
    )
};
export default EditTable;