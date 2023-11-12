import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Home() {

    const [data, setData] = useState([]);
    const navigate = useNavigate();

    const fetchdata = async () => {

        console.log('Token', localStorage.getItem('login'))
        let url = "https://localhost:44326/api/Employee";

        let data = await fetch(url, {
            method: 'GET',
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('login')
            }

        });
        // console.log(data)


        if (data.status === 401) {
            alert("Not Authorized");
            navigate('/login')
        }

        else {
            let dataJson = await data.json();

            setData(dataJson);

            console.table(dataJson);
        }


        // let data = await fetch(url);

    }

    useEffect(() => {
        fetchdata();
        // eslint-disable-next-line
    }, [])
    return (

        <div className="container my-5">
            <div className="row">
                <div className="col-md-6 m-auto">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Name</th>
                                <th scope="col">Age</th>
                                <th scope="col">Lang</th>
                            </tr>
                        </thead>
                        <tbody>

                            {data.map((value, i) =>

                                <tr key={i}>
                                    <th scope="row">{value.id}</th>
                                    <td>{value.name}</td>
                                    <td>{value.age}</td>
                                    <td>{value.lang}</td>
                                </tr>
                            )}


                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
