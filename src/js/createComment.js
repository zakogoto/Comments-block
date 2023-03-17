'use strict';

import { getResource } from "./services/services";
import formatDate from "./formatDate";

function Comment(container) {

    let commentsWrapper = document.getElementById(container);

    commentsWrapper.innerHTML = '';

    getResource('http://localhost:3000/requests')
        .then(data => createComment(data));
    
    function createComment(data) {
        // data.sort((a, b) => new Date(a.date) - new Date(b.date))
        data.forEach(({user, date, comment, id}) => {
            const element = document.createElement('div');

            element.classList.add('comment');
            element.setAttribute('id', id)

            let formatedDate = formatDate(date);

            element.innerHTML += `
                <div class="author__trumbnail">
                    <span class="author__avatar">${user.slice(0, 1)}</span>
                </div>
                <div class="comment__main">
                    <div class="comment__header">
                        <h3 class="comment__author">${user}</h3>
                        <h3 class="comment__publish-date">${formatedDate}</h3>
                        
                    </div>
                    <div class="comment__content">${comment}</div>
                    <div class="comment__btns">
                        <span>
                            <svg class="comment__like" width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="#8899a4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                            </svg>
                        </span>
                        <span>
                            <svg class="comment__delete" width="21px" height="21px" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M10 10V16M14 10V16M18 6V18C18 19.1046 17.1046 20 16 20H8C6.89543 20 6 19.1046 6 18V6M4 6H20M15 6V5C15 3.89543 14.1046 3 13 3H11C9.89543 3 9 3.89543 9 5V6"/>
                            </svg>
                        </span>
                    </div>
                </div>
            `;
            commentsWrapper.prepend(element);
        });
    }
}

export default Comment;