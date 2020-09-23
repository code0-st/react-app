import React from 'react';
import Author from './Author/Author';
import style from './Popular.module.css'

const PopularAuthors = (props) => {
    const popularAuthorsElements = props.popularAuthors.
        map(author => <Author key={author.id} imgSrc={author.imgSrc} name={author.name} />)
    return (
        <div className={style.popularAuthors}>
            <div className={style.popular}>Лучшие авторы</div>
            <ul className={style.list}>
                {popularAuthorsElements}
            </ul>
        </div>
    );
}

export default PopularAuthors;