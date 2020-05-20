import React from 'react';

class Contact extends React.Component {

  render() {
    const { 
      admissionDate, 
      avatar,
      company,
      country,
      department,
      id,
      name,
      phone
    } = this.props;

    const date = admissionDate ? admissionDate.split("T")[0] : "---"
    const year = date.split('-')[0];
    const month = date.split('-')[1];
    const day = date.split('-')[2];

    let fmtedDate = day + "/" + month + "/" + year;

    return (
      <article data-testid="contact" className="contact">
        <span className="contact__avatar" >
          <img src={avatar}></img>
        </span>
        <span data-testid="contact-name" className="contact__data">{ id ?  name : "Nome" }</span>
        <span data-testid="contact-phone" className="contact__data">{ id ? phone : "Telefone" }</span>
        <span data-testid="contact-country" className="contact__data">{ id ? country : "País" }</span>
        <span data-testid="contact-date" className="contact__data">{ id ? fmtedDate : "Data de admissão"}</span>
        <span data-testid="contact-company" className="contact__data">{ id ? company : "Empresa"}</span>
        <span data-testid="contact-department" className="contact__data">{ id ? department : "Departamento" }</span>
      </article>
    );
  }
}

export default Contact;
