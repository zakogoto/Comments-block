'use strict';

import { deleteData } from "./services/services";

function deleteComment() {
    let comments = document.querySelector('.comments');

    comments.addEventListener('click', (e) => {
        let deleteBtn = e.target.closest('.comment__delete');
        
        if (!deleteBtn) return;
        let comment = deleteBtn.closest('.comment');

        deleteData(`http://localhost:3000/requests/${comment.id}`);
        comment.remove();

    })
}

export default deleteComment;