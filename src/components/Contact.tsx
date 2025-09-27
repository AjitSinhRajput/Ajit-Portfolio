import { useForm, ValidationError } from "@formspree/react";
function Contact() {
  const [state, handleSubmit] = useForm("xyznknqo"); // <-- your form ID

  if (state.succeeded) {
    return (
      <section className="contact" id="contact">
        <h2 className="heading">
          Contact <span className="no-cursor-effect">Me!</span>
        </h2>
        <p className="success-message">
          ✅ Thanks! Your message has been sent.
        </p>
      </section>
    );
  }
  return (
    <section className="contact" id="contact">
      <h2 className="heading ">
        Contact <span className="no-cursor-effect">Me!</span>
      </h2>
      <form id="contactForm" onSubmit={handleSubmit}>
        <div className="inputbox no-cursor-effect">
          <input name="fullName" type="text" placeholder="Full Name" required />
          <input
            name="email"
            type="email"
            placeholder="Email Address"
            required
          />
        </div>
        <div className="inputbox no-cursor-effect">
          <input
            name="mobile"
            type="number"
            placeholder="Mobile Number"
            required
          />
          <input
            name="subject"
            type="text"
            placeholder="Email Subject"
            required
          />
        </div>
        <textarea
          cols={30}
          rows={10}
          name="message"
          placeholder="Your Message"
          required
          className="no-cursor-effect"
        ></textarea>
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <input
          type="submit"
          value={state.submitting ? "Sending..." : "Send Message"}
          disabled={state.submitting}
          className="btn no-cursor-effect"
        />
      </form>
    </section>
  );
}

export default Contact;
