import "../styles/contact.css";

function sendMessage(event) {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const name = formData.get("name");
  const email = formData.get("email");
  const subject = formData.get("subject");
  const message = formData.get("message");
  const body = `From: ${name}\nReply to: ${email}\n\n${message}`;
  window.location.href = `mailto:wubadelderbe@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function Contact() {
  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="contact-panel">
          <div className="contact-copy">
            <p className="contact-eyebrow"><span /> CONTACT <span className="contact-count">— 04</span></p>
            <h2>Have a question?<br /><span>Send me a note.</span></h2>
            <p className="contact-intro">
              If you’d like to discuss something I’m building, share feedback, or talk about learning web development, email is the best way to reach me.
            </p>
            <a className="contact-primary-link" href="mailto:wubadelderbe@gmail.com">
              Email me directly <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="contact-side">
            <form className="contact-form" onSubmit={sendMessage}>
              <label>
                <span>Your name</span>
                <input name="name" type="text" autoComplete="name" placeholder="Name" required />
              </label>
              <label>
                <span>Email address</span>
                <input name="email" type="email" autoComplete="email" placeholder="you@example.com" required />
              </label>
              <label>
                <span>Subject</span>
                <input name="subject" type="text" placeholder="What would you like to discuss?" required />
              </label>
              <label>
                <span>Message</span>
                <textarea name="message" rows="4" placeholder="Write your message..." required />
              </label>
              <button className="contact-primary-link" type="submit">
                Open email app <span aria-hidden="true">↗</span>
              </button>
              <p className="contact-form-note">Your email app will open with the message ready to send.</p>
            </form>

            <div className="contact-socials">
              <p className="contact-card-label">ELSEWHERE</p>
              <a className="contact-github-link" href="https://github.com/Wubadel12" target="_blank" rel="noreferrer">
                GitHub <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </div>
        <footer className="site-footer">
          <a href="#home" className="footer-brand" aria-label="Back to home">W<span>.</span></a>
          <p>Designed and built by Wubadel.</p>
          <a href="mailto:wubadelderbe@gmail.com">Email <span aria-hidden="true">↗</span></a>
        </footer>
      </div>
    </section>
  );
}

export default Contact;
