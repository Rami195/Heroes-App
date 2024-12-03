import { Button, Form } from "react-bootstrap"
import styles from './Login.module.css'
import { FormEvent, useState } from "react"
import { useForm } from "../../../redux/hocks/useForm";
import { useAppDispatch } from "../../../redux/hocks/redux";
import { setLogin } from "../../../redux/slices/auth";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const [showPass,setShowPass]=useState(false);
    const dispatch=useAppDispatch()
    const navigate=useNavigate()

    const {values, handleChange}= useForm({
        user:"",
        password:""
    })
    const {user,password}= values;
    const handleSubmitForm= async(e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        const response= await fetch("/user.json"); 
        const usersData=await response.json()
        const userFound= usersData.users.find((u: {username: String, 
            password: String})=>u.username==user && u.password==password);
        if(userFound){
            dispatch(setLogin(user))
            navigate("/");
        }    
    }

    return (
        <div className={styles.containerLogin}>
           <div className={styles.containerForm}>
           
                <span style={{fontSize:"10vh"}} className="material-symbols-outlined">
                    group
                </span>
         
            <Form onSubmit={handleSubmitForm}>
                <Form.Group className="mb-3">
                    <Form.Label>Usuario</Form.Label>
                    <Form.Control onChange={handleChange} value={user} type="text" name="user" placeholder="Usuario" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control onChange={handleChange} type={showPass ? "text":"password" } value={password}  name="password" placeholder="Contraseña" />
                </Form.Group> 
                <Form.Check
                    type="switch"
                    onChange={()=>{
                        setShowPass(!showPass);
                    }}
                    id="custom-switch"
                    label="Mostrar"
                />
                <div className="d-flex justify-content-center align-item-center mt-2">
                    <Button type="submit" variant="primary">Ingresar</Button>
                </div>
            </Form>

           </div>
        </div>
    )
}
