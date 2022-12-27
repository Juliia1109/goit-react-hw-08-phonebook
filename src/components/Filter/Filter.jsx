 import css from './Filter.module.css'
 import { useDispatch } from 'react-redux';
 import { setFilter } from 'redux/contacts/filterSlice';


export default function Filter() {
  const dispatch = useDispatch();


const onChange = e => {
  dispatch(setFilter(e.currentTarget.value));
};

  return (
    <div className={css.container}>
      <p className={css.text}>  
         Find contacts by name
      </p>  
      <input 
      type="text"  
      onChange={onChange}
      className={css.input} />
    </div>
  );
}


