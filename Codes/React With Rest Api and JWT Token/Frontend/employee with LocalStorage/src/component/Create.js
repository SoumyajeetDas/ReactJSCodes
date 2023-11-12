import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Create() {


    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [lang, setLang] = useState("");
    const navigate = useNavigate();


    const submit = async (e) => {
        e.preventDefault();

        let data = { name, age, lang };


        let res = await fetch("https://localhost:44326/api/Employee/create", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + localStorage.getItem('login')

            },
            body: JSON.stringify(data)
        });

        if (res.status === 401) {

            alert("Not Logged In");
            navigate('/login');
        }

        else if (res.status === 201)
            alert("Saved " + res.status);

        else {
            alert("Not saved");
        }

    }




    return (

        <div className="container">
            <div className="row">
                <div className="col-md-6 m-auto">

                    <form onSubmit={submit}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" className="form-control" id="name" onChange={(n) => setName(n.target.value)} />

                        </div>
                        <div className="mb-3">
                            <label htmlFor="age" className="form-label">Age</label>
                            <input type="number" className="form-control" id="age" onChange={(n) => setAge(n.target.value)} />
                        </div>
                        <div className="mb-3">
                            <select className="form-select" aria-label="Default select example" onChange={(n) => setLang(n.target.value)}>
                                <option>Open this select menu</option>
                                <option value="JS">Javascript</option>
                                <option value="Python">Python</option>
                                <option value="C#">C#</option>
                            </select>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>

    )
}
