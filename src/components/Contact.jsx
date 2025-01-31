import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, faCheckCircle, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus('');

    try {
      const response = await fetch('https://portfolio-backend-5gpe.onrender.com/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      
      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
        console.error('Server error:', data.error);
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2>Contact Me</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              disabled={isLoading}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={isLoading}
            />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              className="form-control"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              disabled={isLoading}
            ></textarea>
          </div>
          <button type="submit" className="btn" disabled={isLoading}>
            {isLoading ? (
              <span>
                <FontAwesomeIcon icon={faSpinner} spin /> Sending...
              </span>
            ) : (
              'Send Message'
            )}
          </button>
          {status === 'success' && (
            <p className="status-message success">
              <FontAwesomeIcon icon={faCheckCircle} /> Message sent successfully!
            </p>
          )}
          {status === 'error' && (
            <p className="status-message error">
              <FontAwesomeIcon icon={faExclamationCircle} /> Failed to send message. Please try again.
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
