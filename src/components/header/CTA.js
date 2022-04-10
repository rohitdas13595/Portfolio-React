import React from "react";

import RESUME from "../../assets/resume.pdf";

function CTA() {
  return (
    <div className="cta">
      <a className="btn" href={RESUME} download>Download CV</a>
      <a className="btn btn-primary" href="#contact">Let's Talk</a>
    </div>
  );
}

export default CTA;
