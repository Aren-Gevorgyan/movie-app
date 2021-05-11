import React, {useState} from 'react';
import style from './Filter.module.css';
import FilterForm from './filterForm/FilterForm';

const Filter = ({watchMovieByYear, page}) => {
    const [filterDialog, openFilterDialog] = useState(false);

    const getFilterByYearValue = (value) => {
        watchMovieByYear(page, value.dateFrom, value.dateTo);
        openFilterDialog(!filterDialog);
    }
  
    return (
        <div>
            <li onClick={()=>openFilterDialog(!filterDialog)} className={style.menuItem}>
                <span>Filter</span>
                <i className='fas fa-angle-right'></i>
            </li>
            
            {filterDialog?
                <FilterForm onSubmit={getFilterByYearValue}/>
             : ""}
        </div>
    )
}
  
export default Filter;