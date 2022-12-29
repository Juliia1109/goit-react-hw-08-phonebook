import React from "react";
import css from './ContactForm.module.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from "redux/contacts/operations";
import { selectContacts } from "redux/contacts/selectors";



export default function ContactForm() {
    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts);
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');



      const handleSubmit=e=> {
        e.preventDefault();
        const contactEl = {
          name: name,
          number: number,
        };
        if (contacts.find(contact => contact.name === contactEl.name)) {
                alert(`${name} is already in contacts`);
                  return;
             }
          dispatch(addContact(contactEl));
          setName('');
          setNumber('');
      }


      
        return (
        <form onSubmit={handleSubmit} className={css.form}>
    <label className={css.label}>
         Name
     <input
         type="text"
         name="name"
         value={ name }
         onChange={e => setName(e.target.value)}
         className={css.input}
         pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
         title="Name may contain only letters, apostrophe, dash        and spaces. For example Adrian, Jacob Mercer, Charles de        Batz de Castelmore d'Artagnan"
         required
       />
    </label>
    <label className={css.label}>
         Number
    <input
         type="tel"
         name="number"
         value={ number }
         onChange={e => setNumber(e.target.value)}
         className={css.input}
         pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.       \s]?\d{1,4}[-.\s]?\d{1,9}"
         title="Phone number must be digits and can contain        spaces, dashes, parentheses and can start with +"
         required
    />
     </label>
     <button className={css.btn}>Add contact</button>
    </form>
        )
      }

