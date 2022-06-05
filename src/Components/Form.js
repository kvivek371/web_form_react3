import React, { useState } from "react";
import Save from './Save';
import { v1 as uuidv1 } from 'uuid';
import '../style.css';

const Form = () => {

    const [name, setName] = useState("");
    const [department, setDepartment] = useState("");
    const [rating, setRating] = useState('');
    const [data, setData] = useState([]);

    const submitHandler = (e) => {
        e.preventDefault();
        setData([{ name: name, department: department, rating: rating, id: uuidv1()}, ...data]);
            setName('');
            setDepartment('');
            setRating('');
      };


    return(       

        <>
        <form action="" onSubmit={submitHandler}>
            <section className="form__part">
                <div className="header">
                    Feedback - Form                    
                </div>
                <div className="form_field">
                    <label htmlFor="">Enter Employee Name:- </label>
                    <input                    
                    type="text"
                    className="text_field"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required/>

                </div>
                <div className="form_field">
                    <label htmlFor="">Department:- </label>
                    <input
                    type="text"
                    className="dept_field"
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                    required/>
                </div>
                <div className="form_field">
                    <label htmlFor="">Rating:- </label>
                    <input
                    type="number"
                    className="rate_field"
                    max={10}
                    min={0}
                    step={0.5}
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                    required/>
                </div>

                <div>
                    <input type="submit" className="submit_btn" />
                </div>
            </section>
        </form>
        <Save saveData={data}/>
        </>
    )
}

export default Form;