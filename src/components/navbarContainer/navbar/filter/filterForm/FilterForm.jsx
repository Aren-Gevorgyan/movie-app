import React from 'react';
import style from './FilterForm.module.css';
import {Field, reduxForm} from 'redux-form';

const Form = ({type, component, name, description}) => {
    return (
            <label>{description}
              <Field name={name} type={type} component={component}/>
            </label>
    )
}

const FilterForm = (props) => {
    
    return (
           <form onSubmit={props.handleSubmit} className={style.filterByYear}>
              <Form type="date" component="input" name="dateFrom" description="from"/>
              <Form type="date" component="input" name="dateTo" description="to"/>
              <button type='submit'>Search</button>
           </form>
    )
}
  
export default reduxForm({form: "filterForm"})(FilterForm);