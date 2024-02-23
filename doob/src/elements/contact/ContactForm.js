import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Result = () => {
    return (
        <p className="success-message">Your Message has been successfully sent. I will contact you soon.</p>
    )
}

function ContactForm({ props, formStyle }) {
    const [result, showresult] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                'service_kyligvp',
                'template_f1v2z9t',
                e.target,
                'oBxDtP3ZiRDhQt5ZY'
            )
            .then((result) => {
                console.log(result.text);
            },
                (error) => {
                    console.log(error.text);
                }
            );
        e.target.reset();
        showresult(true);
    };

    setTimeout(() => {
        showresult(false);
    }, 5000);

    return (
        <form className={`${formStyle}`} action="" onSubmit={sendEmail}>
            <div className="form-group">
                <input
                    type="text"
                    name="fullname"
                    placeholder="Your Name"
                    required
                />
            </div>

            <div className="form-group">
                <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    required
                />
            </div>

            <div className="form-group">
                <input
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                    required
                />
            </div>


            <div className="form-group">
                <input
                    type="text"
                    name="company"
                    placeholder="Company name"
                    required
                />
            </div>

            <div className="form-group">
                <textarea
                    name="message"
                    placeholder="Your Message"
                    required
                >
                </textarea>
            </div>

            <div className="form-group">
                <button className="btn-default btn-large">Submit Now</button>
            </div>

            <div className="form-group">
                {result ? <Result /> : null}
            </div>
        </form>
    )
}
export default ContactForm;
