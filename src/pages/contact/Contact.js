import HomeLink from "../../components/HomeLink/HomeLink";
import { useState } from 'react';
import { toast } from 'react-toastify';

import "./Contact.css";

function Contact() {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setStatus("Sending...");
      const { name, email, message } = e.target.elements;
      let details = {
        content: "Knock knock, New message!",
        embeds:[{
          title: `From: ${name.value}`,
          description: message.value,
          footer: {
            text: `Email: ${email.value}`
          }
        }]
      };
      await fetch("https://discord.com/api/webhooks/971226686324633662/6v15liPNO6A5tnxUyRjECBJXk-9A7b_xTR1N6uwoKpV0qte-PTjBxs23Ly8ais4d-f1u", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(details),
      });
      e.target.reset();
      toast.success("Thank you, I'll reach out to you soon!", {
        position: toast.POSITION.TOP_CENTER
      });
    } catch(e) {
      toast.error("Sorry, there seems to be some technical difficulties. Please reach to me via other means of communication.", {
        position: toast.POSITION.TOP_CENTER
      });
    }
    setStatus("Submit");
  };
  return (
    <div className="page-wrapper contact-wrapper">
      <HomeLink />
      <h2>Contact</h2>
      <form
        className="contact-form"
        onSubmit={handleSubmit}
      >
        <p>
          <input type="text" name="name" placeholder="Name" required/>
        </p>
        <p>
          <input type="email" name="email" placeholder="Email" email="true" required/>
        </p>
        <p>
          <textarea name="message" placeholder="Hello Sai..." required></textarea>
        </p>
        <p>
          <button type="submit">{status}</button>
        </p>
      </form>
    </div>
  );
}

export default Contact;
