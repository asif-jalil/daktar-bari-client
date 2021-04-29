import React, { useState } from "react";
import "./Contact.css";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";

const Contact = () => {
  const [contactMsg, setContactMsg] = useState({});

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => setContactMsg(data);

  return (
    <section className="contact">
      <Container>
        <div className="section-title">
          <h5>CONTACT US</h5>
          <h3>Always Connect with us </h3>
        </div>
        <div className="contact-form">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <input className="form-control" {...register("email", { required: true, pattern: /\S+@\S+\.\S+/ })} placeholder="Email Address*" />
              {errors.email && <span className="error">This field is required</span>}
            </div>

            <div className="mb-4">
              <input className="form-control" {...register("subject", { required: true })} placeholder="Subject*" />
              {errors.subject && <span className="error">This field is required</span>}
            </div>

            <div className="mb-4">
              <textarea className="form-control" {...register("message", { required: true })} placeholder="Your Messages *" />
              {errors.message && <span className="error">This field is required</span>}
            </div>

            <div className="text-center">
              <button style={{ width: "200px" }} className="button main-btn">
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
