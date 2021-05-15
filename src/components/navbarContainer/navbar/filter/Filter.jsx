import React, {useState, useMemo} from 'react';
import style from './Filter.module.css';
import FilterForm from './filterForm/FilterForm';
import Genres from './genres/Genres';

const Filter = React.memo(({watchMoviesByYear, page, genresItem}) => {

    const [filterDialog, openFilterDialog] = useState(false);
    const [arrowIcon, setArrowIcon] = useState('fas fa-angle-right');

    const getFilterByYearValue = (value) => {
        //get new movie by year
        watchMoviesByYear(page, value.dateFrom, value.dateTo);
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
              <div className={style.dialogFilter}>
                <FilterForm onSubmit={getFilterByYearValue}/>
                <Genres genresItem={genresItem}/>
              </div>   
             : ""}
        </div>
    )
})
  
export default Filter;