import React, { useEffect, useState } from "react";
import { FormStyle } from "../styles";
import { useForm } from "react-hook-form";
import Title from "../atoms/Title";
import Input from "../atoms/Input";
import Button from "../atoms/Button";
import Drawer from "./Drawer";

export default function Form() {
  const { register, handleSubmit, reset } = useForm();
  const [showLightbox, setShowLightbox] = useState(null);

  const onSubmit = (data) => {
    console.log("OnSubmit", data);
    setShowLightbox(data);
    {
      reset();
    }
  };

  useEffect(() => {
    if (showLightbox) {
      setTimeout(function () {
        setShowLightbox(false);
      }, 5000);
    } else {
      return null;
    }
  }, [showLightbox]);

  return (
    <>
      <FormStyle onSubmit={handleSubmit(onSubmit)}>
        <Title />
        <Input register={register} showLightbox={showLightbox} />
        <Button />
      </FormStyle>
      {!showLightbox ? <></> : <Drawer />}
    </>
  );
}
