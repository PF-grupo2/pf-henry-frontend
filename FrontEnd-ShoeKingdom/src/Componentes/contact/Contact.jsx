import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import validationSchema from '../utils/validations'

const Contact = () => {
  
 
  //Función para manejar el envío del formulario
  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
    setSubmitting(false);
    
  };

  return (
    <div className="container mb-5">
      <div className="row">
        <div className="col-12 text-center py-4 my-4">
          <h1>¿Tienes alguna pregunta?</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-5 d-flex justify-content-center">
          <img src="/assets/contact.jpg" alt="Contact Us" height="400px" width="400px" />
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
  );
};

export default Contact;