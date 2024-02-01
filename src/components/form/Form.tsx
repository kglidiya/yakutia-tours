import React, { ReactNode, useRef, useState } from "react";
import styles from "./Form.module.css";
import Input from "../ui/input/Input";
import { useForm } from "react-hook-form";
import Button from "../ui/button/Button";
import Shoes from "../ui/icons/shoes/Shoes";
import { motion, useScroll, useSpring } from "framer-motion";
import TextArea from "../ui/textarea/TextArea";
import AnimatedPerson from "../ui/animated-person/AnimatedPerson";
import emailjs from "@emailjs/browser";
import Spinner from "../ui/spinner/Spinner";

export default function Form({ text }: { text: string }) {
  const form = useRef<HTMLFormElement | null>(null);
  const [btnText, setBtnText] = useState<string|ReactNode>('Отправить')
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<any>({
    values: {},
  });
  const onSubmit = () => {
    setBtnText(<Spinner/>)
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE as string,
        process.env.REACT_APP_MAILDEV_TEMPLATE as string,
        form.current as HTMLFormElement,
        process.env.REACT_APP_KEY as string
      )
      .then(
        (result: any) => {
          if(result.text === 'OK') {
            setBtnText('Отпралено')
            setTimeout(()=> {
              form.current && form.current.reset()
              setBtnText('Отправить')
            }, 1000)
          } else setBtnText('Ошибка')
        },
        (error: any) => {
          console.log(error.text);
        }
      );
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={styles.wrapper}
      ref={form}
    >
      <h3 className={styles.title}>{text}</h3>
      <AnimatedPerson />
      <div className={styles.inputs}>
        <Input
          type="text"
          name="from_name"
          placeholder="Ваше имя"
          register={register}
          required
          error={errors}
          errorMessage="Заполните все поля"
       
        />
        <Input
          type="text"
          name="from_email"
          placeholder="Контакты"
          register={register}
          required
          error={errors}
          errorMessage="Заполните все поля"
       
        />
        <TextArea
          register={register}
          required
          placeholder="Ваш вопрос"
          name="message"
          error={errors}
          errorMessage="Заполните все поля"
     
        />
        <Button type="submit" text={btnText} fontSize="18px" width="250px"/>
      </div>
    </form>
  );
}
