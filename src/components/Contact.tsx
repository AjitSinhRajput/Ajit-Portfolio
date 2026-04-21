import { useForm, ValidationError } from "@formspree/react";
function Contact() {
  const [state, handleSubmit] = useForm("xyznknqo"); // <-- your form ID

  if (state.succeeded) {
    return (
      <section className="contact" id="contact">
        <h2 className="heading">
          Message <span>sent.</span>
        </h2>
        <p className="success-message">
          Thanks. I will get back to you as soon as possible.
        </p>
      </section>
    );
  }
  return (
    <section className="contact" id="contact">
      <div className="contact-panel">
        <p className="section-kicker">Contact</p>
        <h2 className="heading">
          Let's discuss your next <span>software project.</span>
        </h2>
        <p>
          I am open to software engineering, full-stack, Power Platform,
          automation, and cloud-connected product work in Canada or remote.
        </p>
        <div className="contact-links">
          <a href="mailto:asrrajput123ajit@gmail.com">
            <i className="bx bx-envelope"></i>
            asrrajput123ajit@gmail.com
          </a>
          <a href="tel:+13828821874">
            <i className="bx bx-phone"></i>
            +1 382-882-1874
          </a>
          <a href="https://www.linkedin.com/in/ajit-sinh-rajput-7961b5233/">
            <i className="bx bxl-linkedin"></i>
            LinkedIn
          </a>
        </div>
      </div>

      <form id="contactForm" onSubmit={handleSubmit}>
        <div className="inputbox">
          <label>
            Full Name
            <input name="fullName" type="text" placeholder="Your name" required />
          </label>
          <label>
            Email Address
            <input
              name="email"
              type="email"
              placeholder="you@example.com"
              required
            />
          </label>
        </div>
        <div className="inputbox">
          <label>
            Phone
            <input name="mobile" type="tel" placeholder="+1 ..." />
          </label>
          <label>
            Subject
            <input
              name="subject"
              type="text"
              placeholder="Project, role, or opportunity"
              required
            />
          </label>
        </div>
        <label>
          Message
          <textarea
            cols={30}
            rows={8}
            name="message"
            placeholder="Tell me what you are building or hiring for..."
            required
          ></textarea>
        </label>
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button type="submit" disabled={state.submitting} className="btn">
          {state.submitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </section>
  );
}

export default Contact;
