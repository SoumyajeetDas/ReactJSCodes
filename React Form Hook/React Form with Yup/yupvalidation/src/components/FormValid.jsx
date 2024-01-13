/* eslint-disable prettier/prettier */
import {
    Button,
    FormControl,
    FormControlLabel,
    FormGroup,
    FormHelperText,
    FormLabel,
    Radio,
    RadioGroup,
    TextField,
    Typography,
} from '@mui/material';
import React from 'react';
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'

// Creating schema of shape
const schema = yup.object().shape({
    firstname: yup.string().required("Please enter the first name"),
    lastname: yup.string().required("Please enter the last name"),
    gender: yup.string().required("Please provide the gender").oneOf(['female', 'male', 'other']),
    email: yup.string().email().required("Please enter the last name"),
    age: yup.number().positive().integer().min(18).required("Please provide the age"),
    password: yup.string().min(4).max(15).required("Pleaee provide a password"),
    confirmPassword: yup.string().
        oneOf([yup.ref("password")], "Your confirm password does not match the actual password")
        .required("Please provide a confirm password")
})

const FormValid = () => {

    const { register, control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data) => {
        console.table(data)
    }

    return (
        <div>

            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <FormControl variant="standard" fullWidth>
                    <FormLabel sx={{ textAlign: "center", m: "2rem 0" }}>
                        <Typography variant='h4' color="secondary" sx={{ textDecoration: "underline" }}>
                            Form with react-hook-form & yup
                        </Typography>
                    </FormLabel>
                    <FormGroup sx={{ gap: "2rem", alignContent: "center" }}>
                        <FormGroup row sx={{
                            gap: {
                                md: "1rem",
                                xs: "2rem"
                            }
                        }}>
                            <TextField
                                id="firstname"
                                label="First Name"
                                variant="outlined"
                                {...register("firstname")}
                                error={!!errors?.firstname}
                                helperText={errors?.firstname?.message}
                                sx={{
                                    width: {
                                        md: "300px",
                                        xs: "100%"
                                    }
                                }}

                            />
                            <TextField
                                id="lastname"
                                label="Last Name"
                                variant="outlined"
                                {...register("lastname")}
                                error={!!errors?.lastname}
                                helperText={errors?.lastname?.message}
                                sx={{
                                    width: {
                                        md: "300px",
                                        xs: "100%"
                                    }
                                }}
                            />
                        </FormGroup>
                        <FormGroup row sx={{
                            gap: {
                                md: "0rem",
                                xs: "2rem"
                            },
                            justifyContent: "space-between",
                        }}>

                            <FormGroup>
                                <FormLabel error={errors?.gender}>Gender</FormLabel>
                                <FormControl error={errors?.gender}>
                                    <RadioGroup id="radio" row>
                                        <FormControlLabel value="female" control={<Radio {...register("gender")} />} label="Female" />
                                        <FormControlLabel value="male" control={<Radio {...register("gender")} />} label="Male" />
                                        <FormControlLabel value="other" control={<Radio {...register("gender")} />} label="Other" />
                                    </RadioGroup>
                                    {errors.gender && <FormHelperText>{errors?.gender?.message}</FormHelperText>}
                                </FormControl>
                            </FormGroup>

                            <TextField
                                id="age"
                                label="Age"
                                variant="outlined"
                                type="number"
                                {...register("age")}
                                error={!!errors?.age}
                                helperText={errors?.age?.message}
                                sx={{
                                    width: {
                                        md: "300px",
                                        xs: "100%"
                                    }
                                }}
                            />
                        </FormGroup>

                        <FormGroup>
                            <TextField
                                id="email"
                                label="Email"
                                variant="outlined"
                                type="email"
                                {...register("email")}
                                error={!!errors?.email}
                                helperText={errors?.email?.message}
                                fullWidth
                            />
                        </FormGroup>
                        <FormGroup row sx={{
                            gap: {
                                md: "1rem",
                                xs: "2rem"
                            }
                        }}>
                            <TextField
                                id="password"
                                label="Password"
                                variant="outlined"
                                type="password"
                                {...register("password")}
                                error={!!errors?.password}
                                helperText={errors?.password?.message}
                                sx={{
                                    width: {
                                        md: "300px",
                                        xs: "100%"
                                    }
                                }}
                            />
                            <TextField
                                id="cnfpassword"
                                label="Confirm Password"
                                variant="outlined"
                                type="password"
                                {...register("confirmPassword")}
                                error={!!errors?.confirmPassword}
                                helperText={errors?.confirmPassword?.message}
                                sx={{
                                    width: {
                                        md: "300px",
                                        xs: "100%"
                                    }
                                }}
                            />
                        </FormGroup>
                        <FormGroup row sx={{ justifyContent: "center" }}>

                            <Button sx={{ mt: "2rem" }} type='submit' variant="outlined" fullWidth>Submit</Button>
                        </FormGroup>

                    </FormGroup>



                </FormControl>
            </form>
            <DevTool control={control} />
        </div>
    );
};

export default FormValid;
