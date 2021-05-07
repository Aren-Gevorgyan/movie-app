import React, {useState} from 'react';
import style from './Filter.module.css';

const Filter = (props) => {
    const [filterDialog, openFilterDialog] = useState(false);
  
    return (
        <div>
            <li onClick={()=>openFilterDialog(!filterDialog)} className={style.menuItem}>
                <span>Filter</span>
                <i className='fas fa-angle-right'></i>
            </li>
            
            {filterDialog?
                <div className={style.filterByYear}>
                  <input type='date'/>
                </div> 
             : ""}
        </div>
    )
}
  
export default Filter;