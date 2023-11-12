
import { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {

  const [data, setData] = useState(0);
  const [isLoading, setLoading] = useState(false);

  const handleSubmit = async(e)=>{
    e.preventDefault();
    setLoading(true)
    try {
      const xmls = `
        <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"
           xmlns:web="https://www.w3schools.com/xml/">
          <soapenv:Header/>
          <soapenv:Body>
            <web:CelsiusToFahrenheit>
              <web:Celsius>${Number(data)}</web:Celsius>
            </web:CelsiusToFahrenheit>
          </soapenv:Body>
        </soapenv:Envelope>
      `;
  
      const response = await axios.post(
        'https://cors-anywhere.herokuapp.com/https://www.w3schools.com/xml/tempconvert.asmx?wsdl',
        xmls,
        {
          headers: {
            'Access-Control-Allow-Origin':"*",
            'Content-Type': 'text/xml',
          },
        },
      );
        setLoading(false)
      console.log(response);
    } catch (error) {
      setLoading(false)
      console.error(error);
      // throw error;
    }
  }
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type="number" placeholder="Enter the number" onChange={(e)=>setData(e.target.value)}/>
        <button>Enter</button>
      </form>
      <div>{isLoading ? "Loading" : "Data came up"}</div>
    </div>
  );
}

export default App;
