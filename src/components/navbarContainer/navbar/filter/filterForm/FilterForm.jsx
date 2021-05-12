import React, {useState} from 'react';
import style from './FilterForm.module.css';
import {Field, reduxForm} from 'redux-form';

const Form = ({type, component, name, description, searchMovie = ()=>{}}) => {

    return (
            <label>{description}
              <Field onChange={()=>{searchMovie(true)}} name={name} type={type} component={component}/>
            </label>
    )
}

const FilterForm = (props) => {
    const [searchByYear, searchMovie] = useState(false);
    
    return (
           <form onSubmit={props.handleSubmit} className={style.filterByYear}>
              <h5>Release Dates</h5>
              <Form searchMovie={searchMovie} type="date" component="input" name="dateFrom" description="from"/>
              <Form type="date" component="input" name="dateTo" description="to"/>
              {searchByYear?
               <button type='submit'>Search</button>
               :
               " "
              }
           </form>
    )
}

export default reduxForm({form: "filterForm"})(FilterForm);