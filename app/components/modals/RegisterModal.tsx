"use client";

import axios from "axios";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import useRegisterModal from "../hooks/useRegisterModal";
import Modal from "./Modal";
import Heading from "../Heading";
import Input from "../inputs/Input";
import toast from "react-hot-toast"; //Used to handle error and show a message
import Button from "../Button";
import { signIn } from "next-auth/react";

const RegisterModal = () => {
  const registerModal = useRegisterModal(); //created instance of useRegMod function of hooks folder
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  //SubmitHandler from react-hook-form ensures that every field(name email password) is filled or not if any one is unfilled it not let you submit the form
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    axios
      .post("/api/register", data)
      .then(() => {
        registerModal.onClose();
      })
      .catch((error) => {
        toast.error("Something went wrong")
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const bodyContent = (
  <div className="flex flex-col gap-4">
    <Heading title="Welcome to AirBnb" subtitle="Create an account" center/>
    <Input 
    id="email" 
    label="Email" 
    disabled={isLoading} 
    register={register} 
    errors={errors} 
    required
    />
    <Input 
    id="name" 
    label="Name" 
    disabled={isLoading} 
    register={register} 
    errors={errors} 
    required
    />
    <Input 
    id="password"
    type="password" 
    label="Password" 
    disabled={isLoading} 
    register={register} 
    errors={errors} 
    required
    />
  </div>);

  const footerContent = (
    <div className="flex flex-col gap-4 mt-3">
      <hr />
      <Button
        outline 
        label="Continue with Google"
        icon={FcGoogle}
        onClick={() => signIn('google')} 
      />
      <Button
        outline 
        label="Continue with Github"
        icon={AiFillGithub}
        onClick={() => signIn('github')} 
      />
      <div 
        className="
          text-neutral-500 
          text-center 
          mt-4 
          font-light
        "
      >
        <p>Already have an account?
          <span 
            onClick={registerModal.onClose} 
            className="
              text-neutral-800
              cursor-pointer 
              hover:underline
            "
            > Log in</span>
        </p>
      </div>
      </div>
  )

  return (
    <Modal
      disabled={isLoading}
      isOpen={registerModal.isOpen}
      title="Register"
      actionLabel="Continue"
      onClose={registerModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default RegisterModal;
