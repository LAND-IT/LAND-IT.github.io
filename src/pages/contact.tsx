import React from "react";
import emailjs from "@emailjs/browser";
import Layout from "@theme/Layout";
import { Card } from "primereact/card";
import styles from "./contact.module.css";
import {Button} from "primereact/button";
import { translate } from "@docusaurus/Translate";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from 'primereact/inputtextarea';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ContactForm() {
const formRef = React.useRef(null);

const sendEmail = (e: React.FormEvent) => {
e.preventDefault();

if (!formRef.current) return;

emailjs.sendForm(
  "service_dgcajms",
  "template_612fwgm",
  formRef.current,
  "ZB9BlZB1tJ4fZ14zW"
)
.then(() => {
  toast.dismiss();
  toast.success(translate({ id: "contact.success" }), {
    hideProgressBar: true,
    autoClose: 3000,
    theme: "colored"
  });

  formRef.current?.reset();
})
.catch(() => {
  toast.dismiss();
  toast.error(translate({ id: "contact.error" }), {
    hideProgressBar: true,
    autoClose: 3000,
    theme: "colored"
  });
});

};

return ( <Layout title={translate({id:"contact.contact"})}> <main> <div className="container margin-vert--lg">
      <Card title={translate({id:"contact.contact"})} className={styles.card}>
        <form ref={formRef} onSubmit={sendEmail} className={styles.form}>

          <label className={styles.fieldLabel}>{translate({id:"contact.name"})}</label>
          <InputText name="name" required />

          <label className={styles.fieldLabel}>{translate({id:"contact.email"})}</label>
          <InputText type="email" name="email" required />

          <label className={styles.fieldLabel}>{translate({id:"contact.message"})}</label>
          <InputTextarea name="message" rows={5} required />

          <Button type="submit" className="p-button-text">{translate({id:"contact.send"})}</Button>

        </form>

      </Card>
      <ToastContainer />
    </div>
  </main>
</Layout>
);
}
