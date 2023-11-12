import React from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

type FormDataType = {
  username: string;
  email: string;
  channel: string;
  social:{
    twitter:string,
    facebook:string
  },
  phone:string[],
  age:number,
  dob:Date
};
const YoutubeForm = () => {
  const { register, control, handleSubmit, formState:{errors} } = useForm<FormDataType>();

  const onSubmit = (data: FormDataType) => {
    console.table(data);
  };

  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Form.Group className="mb-3" controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Soumyajeet"
            isInvalid={errors.username?.message? true : false}

            {...register("username", {
              required: {
                value: true,
                message: "Please enter the username",
              },
            })}
          />
          <Form.Control.Feedback type="invalid">
            {errors.username?.message}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="name@example.com"
            isInvalid={errors.email?.message? true : false}
            {...register("email", {
              pattern: {
                value: /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/,
                message: "Invalid Email format",
              },
              required: "Email Required",
            })}
          />
          <Form.Control.Feedback type="invalid">
            {errors.email?.message}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="channel">
          <Form.Label>Channel</Form.Label>
          <Form.Control
            type="text"
            placeholder="Worst Diaries"
            {...register("channel")}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="facebook">
          <Form.Label>Facebook</Form.Label>
          <Form.Control
            type="text"
            placeholder="Facebook profile"
            {...register("social.facebook", {
              required:{
                value:true,
                message:"Enter the facebook account"
              }
            })}
            isInvalid={errors.social?.facebook?.message? true : false}
          />
          <Form.Control.Feedback type="invalid">
            {errors.social?.facebook?.message}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="twitter">
          <Form.Label>Twitter</Form.Label>
          <Form.Control
            type="text"
            placeholder="Twitter Profile"
            {...register("social.twitter", {
              required:{
                value:true,
                message:"Please provide a twitter number"
              }
            })}
            isInvalid={errors.social?.twitter?.message? true : false}
          />
           <Form.Control.Feedback type="invalid">
            {errors.social?.twitter?.message}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="primary">
          <Form.Label>Primary Phone Number</Form.Label>
          <Form.Control
            type="text"
            placeholder="Primary Number"
            {...register("phone.0", {
              required:{
                value:true,
                message:"Please provide the primary number"
              }
            })}
            isInvalid={errors.phone && errors.phone[0]?.message? true : false}
          />
           <Form.Control.Feedback type="invalid">
            {errors.social?.twitter?.message}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="primary">
          <Form.Label>Secondary Phone Number</Form.Label>
          <Form.Control
            type="text"
            placeholder="Secondary Number"
            {...register("phone.1")}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="age">
          <Form.Label>Age</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter your age"
            {...register("age", {
              valueAsNumber:true,
              required:{
                value:true,
                message:"Please enter your age"
              }
            })}
            isInvalid={errors.age?.message? true : false}
          />
          <Form.Control.Feedback type="invalid">
            {errors.age?.message}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="dob">
          <Form.Label>DOB</Form.Label>
          <Form.Control
            type="date"
            placeholder="Enter your date"
            {...register("dob", {
              valueAsDate:true,
              required:{
                value:true,
                message:"Please enter your dob"
              }
            })}
            isInvalid={errors.dob?.message? true : false}
          />
          <Form.Control.Feedback type="invalid">
            {errors.dob?.message}
          </Form.Control.Feedback>
        </Form.Group>
        <Button type="submit" variant="primary">
          Submit
        </Button>
      </Form>
      <DevTool control={control} />
    </div>
  );
};

export default YoutubeForm;
