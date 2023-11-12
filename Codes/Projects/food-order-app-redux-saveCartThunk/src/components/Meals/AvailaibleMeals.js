import React, { useEffect, useState } from 'react'
import MealItems from './MealItem/MealItems';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MealItemForm from './MealItemForm';
import Spinner from '../../UI/Spinner';



export default function AvailaibleMeals() {


  const [query, setQuery] = useState([]);
  const [loading, setLoading] = useState(true);
  const [apiStatus, setApiStatus] = useState(200);

  const fetchFoodData = async () => {

    try {
      setLoading(true);
      let data = await fetch('http://localhost:5001/api/v1/food');

      if (data.status === 200) {
        let dataJson = await data.json();

        setQuery(dataJson.data.foods);

        // fetch('http://localhost:5001/api/v1/food')
        // .then(data=>{
        //   data.json()
        //   .then(dataJson=>setQuery(dataJson.data.foods))
        // })

        setLoading(false);
      }
      else {
        setApiStatus(500);

        setLoading(false);
      }
    }
    catch(ex){
      setApiStatus(500);
      setLoading(false);
    }
    

  }

  useEffect(() => {
    fetchFoodData();
  }, [])


  return (

    <Container className="p-4 my-3" style={{ borderRadius: "14px", backgroundColor: "white", width: "90%" }}>
      {/* The width 90% will prevent in mobiles to take the Container full screen */}
      <Row>

        {loading && <Spinner />}


        {query.length === 0 ?

          <Col sm={12}>
            <div className="text-center">
              <i>No items present !!</i>
            </div>
          </Col>
          :

          apiStatus !== 200 ?

            <Col sm={12}>
              <div class="text-center text-danger">
                <b><i>Not able to fetch data. Some problem with the backend!!</i></b>
              </div>
            </Col>

            :

            query.map((x =>

              <Col key={x._id} sm={12}>

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <MealItems name={x.name} description={x.description} price={x.price} />
                  <MealItemForm id={x._id} name={x.name} price={x.price} />
                </div>
                <hr />
              </Col>
            ))
        }

      </Row>
    </Container>
  )
}
