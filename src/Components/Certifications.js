import React, { Component } from "react";

class Certifications extends Component {
  render() {
    if (this.props.data) {
      var certifications = this.props.data.certifications.map(function(
        certifications
      ) {
        return (
          <li key={certifications.user}>
            <blockquote>
              <p>{certifications.text}</p>
              <cite>{certifications.user}</cite>
            </blockquote>
          </li>
        );
      });
    }

    return (
      <section id="certifications">
        <div className="text-container">
          <div className="row">
            <div className="two columns header-col">
              <h1>
                <span>Certifications</span>
              </h1>
            </div>

            <div className="ten columns flex-container">
              <ul className="slides">{certifications}</ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Certifications;
