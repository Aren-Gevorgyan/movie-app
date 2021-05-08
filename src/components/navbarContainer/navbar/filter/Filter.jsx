import React, {useState} from 'react';
import style from './Filter.module.css';
import FilterForm from './filterForm/FilterForm';

const Filter = (props) => {
    const [filterDialog, openFilterDialog] = useState(false);
  
    return (
        <div>
            <li onClick={()=>openFilterDialog(!filterDialog)} className={style.menuItem}>
                <span>Filter</span>
                <i className='fas fa-angle-right'></i>
            </li>
            
            {filterDialog?
                <FilterForm/>
             : ""}
        </div>
    )
}
  
export default Filter;