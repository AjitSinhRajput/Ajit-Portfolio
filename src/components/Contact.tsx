function Contact() {
  return (
    <section className="contact" id="contact">
      <h2 className="heading ">
        Contact <span className="no-cursor-effect">Me!</span>
      </h2>
      <form id="contactForm" action="#">
        <div className="inputbox no-cursor-effect">
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
        </div>
        <div className="inputbox no-cursor-effect">
          <input type="number" placeholder="Mobile Number" required />
          <input type="text" placeholder="Email Subject" required />
        </div>
        <textarea
          cols={30}
          rows={10}
          placeholder="Your Message"
          required
          className="no-cursor-effect"
        ></textarea>
        <input
          type="submit"
          value="Send Message"
          className="btn no-cursor-effect"
        />
      </form>
    </section>
  );
}

export default Contact;
