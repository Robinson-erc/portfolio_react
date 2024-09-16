import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";

export const Newsletter = ({ status, message }) => {
  const [email, setEmail] = useState('');
  const [formStatus, setFormStatus] = useState({});

  useEffect(() => {
    if (status === 'success') clearFields();
  }, [status]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email && email.indexOf("@") > -1) {
      try {
        const response = await fetch("https://us17.api.mailchimp.com/3.0/lists/bee6129665/members", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Basic ${btoa(`apikey:6045c795526a2ee4251fb90f6e6d299e-us17`)}`
          },
          body: JSON.stringify({
            email_address: email,
            status: 'subscribed'
          })
        });
  
        const result = await response.json();
        console.log(result); // Log the response for debugging
  
        if (response.ok) {
          setFormStatus({ success: true, message: 'Subscription successful!' });
        } else {
          setFormStatus({ success: false, message: result.detail || 'Subscription failed. Please try again.' });
        }
      } catch (error) {
        setFormStatus({ success: false, message: `An error occurred: ${error.message}` });
      }
      clearFields();
    }
  }

  const clearFields = () => {
    setEmail('');
  }

  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <Row>
          <Col lg={12} md={6} xl={5}>
            <h3>Subscribe to my Newsletter<br /> & Never miss the latest updates</h3>
            {formStatus.message && <Alert variant={formStatus.success ? "success" : "danger"}>{formStatus.message}</Alert>}
          </Col>
          <Col md={6} xl={7}>
            <form onSubmit={handleSubmit}>
              <div className="new-email-bx">
                <input value={email} type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" />
                <button type="submit">Submit</button>
              </div>
            </form>
          </Col>
        </Row>
      </div>
    </Col>
  )
}
