import React, { Component } from "react";

class Certifications extends Component {
  render() {
    if (this.props.data) {
      var certifications = this.props.data.certifications.map(function(
        certification
      ) {
        var certificationImage = "images/logo/" + certification.image;
        return (
          <div key={certification.title}>
            <div className="row">
              <div className="four columns">
                <img alt={certification.title} src={certificationImage} />
              </div>
              <div className="eight columns">
                <p>{certification.title}</p>
                <a href={certification.url} alt={certification.title}>
                  View Certificate
                </a>
              </div>
            </div>
          </div>
        );
      });
    }

    return (
      <section id="certifications">
        <div className="text-container">
          <div className="row">
            <div className="four columns header-col">
              <h1>
                <span>Certifications</span>
              </h1>
            </div>

            <div className="eight columns flex-container">{certifications}</div>
          </div>
        </div>
      </section>
    );
  }
}

export default Certifications;
