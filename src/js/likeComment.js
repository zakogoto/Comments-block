function likeComment() {
    let comments = document.querySelector('.comments');

    comments.addEventListener('click', (e) => {
        let likeBtn = e.target.closest('.comment__like');
        
        if (!likeBtn) return;
        
        likeBtn.classList.toggle('comment__like_active')


    })
}

export default likeComment;