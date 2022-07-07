import React from "react";

class Feedback extends React.Component {
  state = {};
  render() {
    return (
      <div>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSct1Lr8h_E_cdA-QBpAr-xgP_T241pVcRwsNJR1OlL2mgg08g/viewform?embedded=true"
          width="600"
          height="540"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          title="Feedback"
        >
          Loading…
        </iframe>
      </div>
    );
  }
}

export default Feedback;
