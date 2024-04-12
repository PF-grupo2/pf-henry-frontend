import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import './Contact.css'

import validationSchema from '../utils/validations'

const Contact = () => {
  
 
  //Función para manejar el envío del formulario
  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
    setSubmitting(false);
    
  };

  return (
    <div>
    <div className="container ">
      <div className="row">
        <div className="col-12 text-center">
          <h1 className='fw-bold mb-4 h2'>¿Tienes alguna pregunta?</h1>
        </div>
      </div>
      <div className="row contact p-5">
        <div className="col-12 col-md-6 d-flex justify-content-center">
          <img className='contact-img' src="/assets/contact.jpg" alt="Contact Us" />
        </div>
        <div className="col-md-6">
          
          <Formik
            initialValues={{
              fullName: '',
              email: '',
              message: '',
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
                <div className="mb-3">
                  <label htmlFor="fullName" className="form-label">Nombre completo</label>
                  <Field type="text" name="fullName" className="form-control" placeholder="Carlos Gutierrez" />
                  <ErrorMessage name="fullName" component="div" className="text-danger" />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Correo electrónico</label>
                  <Field type="email" name="email" className="form-control" placeholder="name@example.com" />
                  <ErrorMessage name="email" component="div" className="text-danger" />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Mensaje</label>
                  <Field as="textarea" name="message" className="form-control" rows="5" />
                  <ErrorMessage name="message" component="div" className="text-danger" />
                </div>
                <button type="submit" className="btn btn-outline-primary" disabled={isSubmitting}>Enviar mensaje</button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>



    </div>



  );
};

export default Contact;