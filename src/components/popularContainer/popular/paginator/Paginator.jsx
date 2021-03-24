import React from 'react';
import style from './Paginator.module.css';

const Paginator = (props) => {
 
    let pages = [];
    let firstPage = props.currentPage.firstPage;  
    let lastPage = props.currentPage.lastPage;  
 
    const countPage = Math.ceil(props.totalPages / props.countMovie);
    
    //create pages
    (() => {
         for (let i = firstPage; i <= countPage; i++){
              //print four pages
              if(i > lastPage){
                break;
              }else{
                disabledButton();
                pages.push(<span key={i} onClick={()=>{props.getPopularMovie(i)}}
                                 className={style.numberPages}
                                 style={props.page === i? {backgroundColor: "#272F8B"} : {backgroundColor: "#030431"}} >{i}</span>);
              }
         }

         function disabledButton() {
            const ifPageNumberLessOfOne = firstPage <= 1;
            const ifNoPageNumber = countPage <= lastPage;

            if(ifPageNumberLessOfOne){ 
                props.setDisabledNext(true);
            }else if (ifNoPageNumber){
                props.setDisabledPrev(true);
           }
         }

    })();

    const next = () => {
      props.setDisabledNext(false);
      props.setNewPagesNumber({ firstPage: ++lastPage, lastPage: lastPage + 3 })
    }

    const prev = () => {
      props.setDisabledPrev(false);
      props.setNewPagesNumber({ firstPage: lastPage - 7, lastPage: lastPage - 4 })
    }

    return (
        <div className={style.container}>
           
          <div className={style.paginatorContainer}>
              <button onClick={prev} disabled={props.prevButtonDisabled} className={style.previous}>prev</button>
              <div>
                 {pages}
              </div>
              <button onClick={next} disabled={props.nextButtonDisabled} className={style.next}>next</button>
          </div>

        </div>
    )
}

export default Paginator;