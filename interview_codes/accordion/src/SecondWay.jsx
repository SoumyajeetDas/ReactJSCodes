import React from "react";
import Accordion from "./Accordion";

const SecondWay = () => {
  return (
    <Accordion>
      {[...Array(5)].map((_, i) => (
        <Accordion.Item key={i} i={i}>
          <Accordion.Header>
            <h3>Accord</h3>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
              numquam a eius natus nisi culpa dignissimos repellat itaque
              incidunt vel autem voluptate, fugiat similique nemo ducimus
              consequuntur. Excepturi, dolores ducimus.{" "}
            </p>
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
};

export default SecondWay;
