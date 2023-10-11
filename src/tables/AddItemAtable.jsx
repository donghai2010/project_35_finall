import { Button } from "antd";
import { useRef } from "react";

const AddItemTable = () => {

    const nameRef = useRef('');
    const ageRef = useRef('');
    const addressRef = useRef('');
    const tagsRef = useRef('');

    const  addItem = () => {
        const result = {
            name: nameRef.current.value,
            age: ageRef.current.value,
            address: addressRef.current.value,
            tags: tagsRef.current.value
        }
        console.log(result);
    }

    return <>
        <h3 style={{textAlign: 'left'}}>Thêm mới item Table</h3>
        <div className='styleInput'>
            <input ref={nameRef} name='name' placeholder='name' />
            <input ref={ageRef} name='age' placeholder='age' />
            <input ref={addressRef} name='address' placeholder='address'/>
            <input ref={tagsRef} name='tags' placeholder='tags'/>
        </div>
        <Button onClick={() => addItem()}>Add item</Button>
    </>
}
export default AddItemTable;