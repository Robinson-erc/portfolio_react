import { useState } from "react";
import emailjs from "emailjs-com";

const EMPTY_FORM = {
  firstName: "",
  lastName: "",
  email: "",
  message: "",
};

export const Contact = () => {
  const [formDetails, setFormDetails] = useState(EMPTY_FORM);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({ ...formDetails, [category]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setButtonText("Sending...");

    emailjs
      .send(
        "service_zlmwjze",
        "template_9cozbbk",
        formDetails,
        "UZEk0wKpjd2ehLHEU"
      )
      .then(
        () => {
          setButtonText("Send");
          setFormDetails(EMPTY_FORM);
          setStatus({ success: true, message: "Message sent — I'll get back to you." });
        },
        () => {
          setButtonText("Send");
          setStatus({
            success: false,
            message: "That didn't go through. Email me directly instead.",
          });
        }
      );
  };

  return (
    <section className="section" id="contact">
      <div className="wrap">
        <div className="sec-head">
          <h2>Contact</h2>
          <span className="count">04</span>
        </div>

        <div className="contact-grid">
          <div>
            <p>
              Open to conversations about reporting, data, and .NET work. The form sends
              straight to my inbox, or reach me directly.
            </p>
            <div className="contact-direct">
              <a href="mailto:eric.robinson1128@gmail.com">eric.robinson1128@gmail.com</a>
              <a href="https://www.linkedin.com/in/eric-robinson-jr-841b1023b/">LinkedIn</a>
              <a href="https://github.com/Robinson-erc">GitHub</a>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-grid">
              <input
                type="text"
                value={formDetails.firstName}
                placeholder="First name"
                required
                onChange={(e) => onFormUpdate("firstName", e.target.value)}
              />
              <input
                type="text"
                value={formDetails.lastName}
                placeholder="Last name"
                onChange={(e) => onFormUpdate("lastName", e.target.value)}
              />
              <input
                className="full"
                type="email"
                value={formDetails.email}
                placeholder="Email address"
                required
                onChange={(e) => onFormUpdate("email", e.target.value)}
              />
              <textarea
                className="full"
                rows="6"
                value={formDetails.message}
                placeholder="Message"
                required
                onChange={(e) => onFormUpdate("message", e.target.value)}
              />
              <div className="full">
                <button className="cta" type="submit">
                  {buttonText}
                </button>
              </div>
            </div>
            {status.message && (
              <p className={status.success ? "form-status ok" : "form-status bad"}>
                {status.message}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};
