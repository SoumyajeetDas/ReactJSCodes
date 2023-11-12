import axios from 'axios';
import React, { useState } from 'react'

export default function Create() {

    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [lang, setLang] = useState("");

    async function saveUser() {
        // console.table({ name, age, lang });

        let data = { name, age, lang };

        // let res = await fetch("https://localhost:44386/api/Employee/create", {
        //     method: "POST",
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(data)
        // });


        /* 1st Techbnique */
        // let res = await axios.post('https://localhost:44386/api/Employee/create',{...data});
        //Here ...data is passed in Json Format only by default



        /* 2nd Techbnique */
        let res = await axios({
            url:'https://localhost:44386/api/Employee/create',
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            data : JSON.stringify(data) // You have to use data only here otherwise it will throw 415 error.

        })

        console.log('In Post', res);



        if (res.status === 201)
            alert("Saved " + res.status);

        else {
            alert("Not saved");
        }
    }

    return (
        <>

            <div className="container">
                <div className="row">
                    <div className="col-md-6 m-auto">

                        <div class="mb-3">
                            <label for="name" class="form-label">Name</label>
                            <input type="text" class="form-control" id="name" onChange={(n) => setName(n.target.value)} />

                        </div>
                        <div class="mb-3">
                            <label for="age" class="form-label">Age</label>
                            <input type="number" class="form-control" id="age" onChange={(n) => setAge(n.target.value)} />
                        </div>
                        <div class="mb-3">
                            <select class="form-select" aria-label="Default select example" onChange={(n) => setLang(n.target.value)}>
                                <option>Open this select menu</option>
                                <option value="JS">Javascript</option>
                                <option value="Python">Python</option>
                                <option value="C#">C#</option>
                            </select>
                        </div>
                        <button type="submit" onClick={saveUser} class="btn btn-primary">Submit</button>

                    </div>
                </div>
            </div>

        </>
    )
}
