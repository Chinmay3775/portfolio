import React, { useState, useRef } from 'react';

/* ─── Toggle Form Visibility ──────────────────────────── */
const SHOW_FORM = false; // ❌ false → hides right side form

const Contact = () => {
  const formRef = useRef(null);
  const [status, setStatus] = useState('idle');
  const [toast, setToast] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      setToast({
        type: 'success',
        msg: 'Thanks! I’ll get back to you soon 🚀',
      });
      e.target.reset();
    } catch (err) {
      setToast({
        type: 'error',
        msg: 'Something went wrong.',
      });
    } finally {
      setStatus('idle');
      setTimeout(() => setToast(null), 5000);
    }
  };

  return (
    <section id="contact" className="container">
      {toast && (
        <div className={`toast ${toast.type}`}>
          {toast.type === 'success' ? '🚀' : '❌'} {toast.msg}
        </div>
      )}

      <h2
        className="section-title reveal"
        style={{
          textAlign: 'center',
          width: '100%',
          marginBottom: '2.5rem',
        }}
      >
        Let's Work Together
      </h2>

      <div
        className="contact-container reveal"
        style={{
          display: 'grid',
          gridTemplateColumns: SHOW_FORM ? '1fr 1fr' : '1fr',
          gap: '2rem',
        }}
      >
        {/* Left Side */}
        <div className="contact-info">
          <h3>Get In Touch</h3>
          <p>
            Ready to bring your ideas to life? Whether you have a
            question, want to collaborate on a project, or just want to
            say hi — let's connect!
          </p>

          <div className="contact-methods">
            <div className="method">
              <div className="method-icon">✉</div>
              <div className="method-text">
                <span>Email</span>
                <a href="mailto:keripalechinmay@gmail.com">
                  keripalechinmay@gmail.com
                </a>
              </div>
            </div>

            <div className="method">
              <div className="method-icon">📞</div>
              <div className="method-text">
                <span>Phone</span>
                <a href="tel:+919130091352">
                  +91 9130091352
                </a>
              </div>
            </div>

            <div className="method">
              <div className="method-icon">📍</div>
              <div className="method-text">
                <span>Location</span>
                <p>Pune, Maharashtra, India</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Form (Hidden) */}
        {SHOW_FORM && (
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="contact-form"
          >
            <div className="input-group">
              <div className="form-field">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="form-input"
                  placeholder="Your Name"
                  required
                />
              </div>

              <div className="form-field">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="form-input"
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>

            <div className="form-field">
              <label htmlFor="subject" className="form-label">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                className="form-input"
                placeholder="Collaboration / Job Opportunity"
                required
              />
            </div>

            <div className="form-field">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows="4"
                className="form-input"
                placeholder="Hi Chinmay..."
                required
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="submit-btn"
            >
              {status === 'sending'
                ? 'Sending...'
                : 'Send Message →'}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact;