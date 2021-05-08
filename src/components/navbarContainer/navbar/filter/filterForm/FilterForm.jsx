import React from 'react';
import style from './FilterForm.module.css';
import {Field, reduxForm} from 'redux-form';

const Form = ({type}) => {
    return (
        <div className={style.filterByYear}>
            <Field type={type} component="input"/>
        </div> 
    )
}

const FilterForm = (props) => {

    return (
           <form onSubmit={props.heandleSubbmit}>
              <Form type="date"/>
           </form>
    )
}
  
export default reduxForm({form: "filterForm"})(FilterForm);