import React from "react";

// components
import Touchable from 'components/Base/Touchable';

// style
import "./contact.scss";

const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

const defaultState = {
  name: "",
  email: "",
  message: "",
  count: 0,
};

class Contact extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {...defaultState};
  }

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => {
        alert("Message sent!");
        this.setState({...defaultState});
      })
      .catch(error => {
        alert(error);
        this.setState({...defaultState});
      });

    e.preventDefault();
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleNext = e => {
    console.log('entro aqui');
    const { count } = this.state;
    this.setState({ count: count + 1 });
    e.preventDefault();
  }

  getIfNextDisabled = () => {
    const {
      name,
      email,
      count,
    } = this.state;
    if (count === 0 && name.length > 3) return false;
    if (count === 1 && email.length > 3) return false;
    return true;
  }

  render() {
    const {
      message,
      count,
    } = this.state;
    console.log(count);
    const showName = count === 0;
    const showEmail = count === 1;
    const showMessage = count === 2;
    const sendDisabled = message.length < 3;
    const nextDisabled = this.getIfNextDisabled();
    return (
      <section className="contact contact_container">
        <h1>Get in touch</h1>
        <p>
          If you wanna get in touch, talk to me about a project collaboration or
          just say hi, fill up the form below or send an email to
          <span>
            <a href="mailto:vargasm.jp@gmail.com"> vargasm.jp@gmail.com </a>
          </span>
          and let&#39;s talk.
        </p>
        <form
          name="contact"
          onSubmit={this.handleSubmit}
        >
          {showName && (
            <div className="form__group field">
              <input type="input" className="form__field" placeholder="Name" name="name" id='name' required onChange={this.handleChange}/>
              <label className="form__label">Fill with your Name</label>
            </div>
          )}
          {showEmail && (
            <div className="form__group field">
              <input type="input" className="form__field" placeholder="Email" name="email" id='email' required onChange={this.handleChange}/>
              <label  className="form__label">Now fill with your Email</label>
            </div>
          )}
          {showMessage && (
            <div className="form__group field">
              <input type="input" className="form__field" placeholder="Message" name="message" id='message' required onChange={this.handleChange}/>
              <label  className="form__label">Now your Message</label>
            </div>
          )}
        </form>
        <div className="button_container">
          <Touchable isDisabled={nextDisabled} onClick={this.handleNext} className="button button_next">Next</Touchable>
          <Touchable isDisabled={sendDisabled} onClick={this.handleSubmit} className="button button_send">Submit your message</Touchable>
        </div>
      </section>
    );
  }
}

export default Contact;
