import { Button } from "antd";
import axios from "axios";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const AddItemTable = () => {
    const api = 'https://651ffc11906e276284c3d6cc.mockapi.io/api/v1/rocket35';
    const redirecUrl = useNavigate();
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
        const {name , age, address, tags} = result;
        if( name.trim() === '' || age.trim() === '' || address.trim() === '', tags.trim() === '' ){
            console.log("Error: Invalid");
            return;
        }

        axios.post(api, result).then(res => {
            
                alert("Thêm mới thành công!");
                redirecUrl('/table');
            
        }).catch(err => console.log('error', err));
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