import React from "react";
import { InputStyle } from "../styles";


export default function Input(props) {
  
  const {register} = props;
  const ValidateEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const ValidateNumber = /^\(?(\d{3})\)?[-]?(\d{3})[-]?(\d{4})$/;
   
  return (
    <>
      <InputStyle type='text' {...register("Name", { required: true, maxLength: 20 })} placeholder='Name' />
      <InputStyle type='text' {...register("Email", { pattern: ValidateEmail })} placeholder='Email' />
      <InputStyle type="number" {...register("Celular", {pattern: ValidateNumber })} placeholder='Celular' />
      <InputStyle type="number" {...register("Edad", { min: 18, max: 100 })} placeholder='Edad' />
    </>
  );
}

