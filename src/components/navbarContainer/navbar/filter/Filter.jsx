import React, {useState} from 'react';
import style from './Filter.module.css';
import FilterForm from './filterForm/FilterForm';

const Filter = ({watchMovieByYear, page}) => {
    const [filterDialog, openFilterDialog] = useState(false);
    const [arrowIcon, setArrowIcon] = useState('fas fa-angle-right');

    const getFilterByYearValue = (value) => {
        //get new movie by year
        watchMovieByYear(page, value.dateFrom, value.dateTo);
        //close filter dialog
        openFilterDialog(!filterDialog);
        //replace icon filter
        setArrowIcon('fas fa-angle-right');
    }
    
    const clickOnFilter = () => {
        //open filter dialog
        openFilterDialog(!filterDialog);
        //replace icon filter
        const replaceIcon = filterDialog? 'fas fa-angle-right' : 'fas fa-angle-down'
        setArrowIcon(replaceIcon);
    }

    return (
        <div>
            <li onClick={clickOnFilter} className={style.menuItem}>
                <span>Filter</span>
                <i className={arrowIcon}></i>
            </li>
            
            {filterDialog?
                <FilterForm onSubmit={getFilterByYearValue}/>
             : ""}
        </div>
    )
}
  
export default Filter;