import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import { fetchContacts } from 'redux/contacts/operations';
import { selectLoading, selectError } from 'redux/contacts/selectors';
import css from './Contacts.module.css';


export default function Tasks() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
    <h1 className={css.text}>Phonebook</h1>
    <ContactForm  />
    <h2  className={css.text}>Contacts</h2>
    <Filter />
    {isLoading && !error && <b>Request in progress...</b>}
    <ContactList />
    </div>
  )
}
