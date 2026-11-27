import "../styles/contact.css";

const socialPlatforms = [
  { name: "LinkedIn", icon: <path d="M5.2 3.5a1.7 1.7 0 1 1-3.4 0 1.7 1.7 0 0 1 3.4 0ZM2.1 8h2.9v14H2.1V8Zm6 0h2.8v1.9h.1c.4-.8 1.5-2.2 3.9-2.2 4.2 0 5 2.8 5 6.4V22H17v-7c0-1.7 0-3.8-2.3-3.8s-2.7 1.8-2.7 3.7V22H8.1V8Z" /> },
  { name: "Telegram", icon: <path d="m22 3.2-3.4 17.1c-.3 1.2-1 1.5-2 .9l-5.5-4-2.7 2.6c-.3.3-.5.5-1 .5l.4-5.6L18 6.6c.4-.4-.1-.6-.6-.3L5 14.1l-5.3-1.7c-1.1-.3-1.1-1.1.2-1.6L20.5 3c1-.4 1.8.2 1.5 1.2Z" /> },
  { name: "Instagram", icon: <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.7" r=".8" fill="currentColor" stroke="none" /></> },
  { name: "Twitter", icon: <path d="M22 5.9c-.7.3-1.4.5-2.2.6a3.8 3.8 0 0 0 1.7-2.1c-.7.4-1.5.7-2.4.9a3.8 3.8 0 0 0-6.5 3.5 10.8 10.8 0 0 1-7.9-4 3.8 3.8 0 0 0 1.2 5.1c-.6 0-1.2-.2-1.7-.5v.1a3.8 3.8 0 0 0 3 3.7c-.6.2-1.2.2-1.7.1a3.8 3.8 0 0 0 3.6 2.6A7.7 7.7 0 0 1 3.5 17c-.3 0-.6 0-.9-.1a10.8 10.8 0 0 0 5.9 1.7c7.1 0 11-5.9 11-11v-.5c.7-.4 1.3-1 1.8-1.7Z" /> },
];

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
            <h2>Have an idea?<br /><span>Let’s make it real.</span></h2>
            <p className="contact-intro">
              I’m always glad to meet people who enjoy building thoughtful things for the web.
              Reach out and let’s start a conversation.
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
                Send message <span aria-hidden="true">↗</span>
              </button>
            </form>

            <div className="contact-socials">
              <p className="contact-card-label">FIND ME ON SOCIALS</p>
              <div className="contact-social-list">
                {socialPlatforms.map(({ name, icon }) => (
                  <span className="contact-social-icon" key={name} role="img" aria-label={`${name} profile link coming soon`} title={`${name} profile link coming soon`}>
                    <svg viewBox="0 0 24 24" aria-hidden="true">{icon}</svg>
                  </span>
                ))}
              </div>
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
