import React, {useState} from "react";
// import style from "../../Authors/Authors.module.css";
import style from './Paginator.module.css';
import arrow from '../../../assets/img/prevNextArrow.svg';

const Paginator = ({totalCount, usersForPage, currentPage, onChangeCurrentPage, portionSize = 15}) => {
    const initPortionNumber = Math.ceil(currentPage / portionSize);
    let [portionNumber, setPortionNumber] = useState(initPortionNumber);
    let totalPagesCount = Math.ceil(totalCount / usersForPage);
    let totalPortionsCount = Math.ceil(totalPagesCount / portionSize);

    let pages = [];
    for (let i = 1; i <= totalPagesCount; i++) {
        pages.push(i);
    }
    let leftPortionBorder = (portionNumber - 1) * portionSize + 1;
    let rightPortionBorder = portionNumber * portionSize;

    return (
        <div className={style.paginator}>
            { portionNumber > 1 ?
                <button className={style.paginator__prevBtn} onClick={() => setPortionNumber(portionNumber - 1)}>
                    <img className={style.prevArr} src={arrow} alt={'Previous'}/>
                </button>
                : <span></span>
            }
            <ul>
                {
                    pages
                        .filter(page => page >= leftPortionBorder && page <= rightPortionBorder)
                        .map(page => <span key={page} className={currentPage === page ? style.clicked : style.default}
                                               onClick={() => onChangeCurrentPage(page)}>{page}</span>)
                }
            </ul>
            { portionNumber < totalPortionsCount ?
                <button className={style.paginator__nextBtn} onClick={() => setPortionNumber(portionNumber + 1)}>
                    <img className={style.nextArr} src={arrow} alt={'Next'}/>
                </button>
                : <span></span>
            }
        </div>
    )
}

export default Paginator;