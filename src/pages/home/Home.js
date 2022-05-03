import "./Home.css";
import { Link } from "react-router-dom";
import HoverText from "../../components/HoverText/HoverText";

function Home() {
  return (
    <div class="home-wrapper">
      <div>
        <HoverText
          text={<h1 className="sliding-text">Hello.</h1>}
          altText={
            <h1 className="sliding-text">
              <Link to="/about">About</Link>
            </h1>
          }
        />
        <HoverText
          text={<h1 className="blue-color sliding-text">I am</h1>}
          altText={
            <h1 className="blue-color sliding-text">
              <Link to="/work">Work</Link>
            </h1>
          }
        />
        <HoverText
          text={<h1 className="blue-color sliding-text">Sai Krishna!</h1>}
          altText={
            <h1 className="blue-color sliding-text">
              <Link to="/contact">Contact me</Link>
            </h1>
          }
        />
      </div>
    </div>
  );
}

export default Home;
