import React from 'react';
import ContactForm from './ContactForm';

const Contact = () => {
    return (
        <section id="contact" className="py-12 bg-teal-50">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-8 text-teal-800">Let's Work Together</h2>
                <ContactForm/>
            </div>
        </section>
    );
};

export default Contact;
