import React from "react";
import s from "./ContactAfterSubmit.module.css";

export const ContactAfterSubmit = ({ setFormStatus }) => {
  return (
    <>
      <h1 className={s.title}>Спасибо! 🤘</h1>
      <h2 className={s.subtitle}>
        Ваше сообщение отправлено. Я свяжусь с вами совсем скоро!
      </h2>
      <button
        className={s.btn_after}
        onClick={() => {
          setFormStatus(false);
        }}
      >
        send-new-message
      </button>
    </>
  );
};
