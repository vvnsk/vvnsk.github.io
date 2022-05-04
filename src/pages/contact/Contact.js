import HomeLink from "../../components/HomeLink/HomeLink";
import "./Contact.css"

function Contact() {
  return (
    <div className="page-wrapper contact-wrapper">
      <HomeLink />
      <h2>Contact</h2>
      <form className="contact-form" name="contact" method="POST" data-netlify="true">
        <p>
          <input type="text" name="name" placeholder="Name" />
        </p>
        <p>
          <input type="email" name="email" placeholder="Email" />
        </p>
        <p>
          <textarea name="message" placeholder="Hello Sai..."></textarea>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </div>
  );
}

export default Contact;
