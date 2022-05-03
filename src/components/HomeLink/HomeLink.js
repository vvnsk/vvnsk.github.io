import HoverText from "../HoverText/HoverText";
import { Link } from "react-router-dom";

import "./HomeLink.css";

function HomeLink() {
  return (
    <div className="home-link">
      <HoverText
        text={<strong className="sliding-home-link">Sai Krishna</strong>}
        altText={
          <strong className="sliding-home-link">
            <Link to="/">vinnakota.me</Link>
          </strong>
        }
      />
    </div>
  );
}

export default HomeLink;
