// Создайте и запустите приложение React, выводящее информацию о вашей любимой книге в браузер
// Например: название книги, ФИО автора, жанр книги, 
// количество страниц, несколько рецензий на неё
// При разработке нужно использовать функциональные компоненты и синтаксис JSX

import './FavoriteBook.css'

class Book 
{
    title;
    fullNameAuthor;
    genre;
    pageCount;
    comments;
    imgSrc;

    /**
     * @param {string} title 
     * @param {string} fullNameAuthor 
     * @param {string} genre 
     * @param {number} pageCount 
     */
    constructor(title, fullNameAuthor, genre, pageCount, imgSrc)
    {
        this.title = title;
        this.fullNameAuthor = fullNameAuthor;
        this.genre = genre;
        this.pageCount = pageCount;
        this.imgSrc = imgSrc;
        this.comments = new Map();
    }

    /**
     * Добавляет комментарий к книге
     * @param {string} comment 
     */
    AddComment(name, comment)
    {
        this.comments.set(name, comment);
    }
}

export function GetBook()
{
    const book = GetBookObject();
    return(
        <div>
            {GetBookHtml(book)}
        </div>
    )
}


function GetBookHtml(book)
{
    return(
            <div className="book-card">
                <img className='cover' src="https://loveread.com.ua/pic/1/4/7/3/1/3//147313-cover.jpg" alt="Book cover" />
                <div>Title: {book.title}</div>
                <div>Full Name Author: {book.fullNameAuthor}</div>
                <div>Genre: {book.genre}</div>
                <div>Number of pages: {book.pageCount}</div>
                <div className="comments-container">
                    <div>Комментарии:</div>
                    {
                        Array.from(book.comments).map((comment) => {
                            return GetCommentHtml(comment[0], comment[1])
                        })
                    }
                </div>
            </div>
        )
}

function GetCommentHtml(name, commentText)
{
    return(
        <div className="comment">
            <b>{name}</b>
            <p>{commentText}</p>
        </div>
    )
}

function GetBookObject()
{
    const book = new Book('Мать учения', 'Думагой Курмаич', 'Fantasy', 940);
    book.AddComment('Алексей', 'Очень продуманная книга, мне понравилось');
    book.AddComment('Алёна', 'Слишком затянуто');
    book.AddComment('Tomas', 'Don\'t listen to Alena');

    return book;
}