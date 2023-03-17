'use strict';

import Comment from "./createComment";
import form from "./form";
import deleteComment from "./deleteComment";
import likeComment from "./likeComment";

window.addEventListener('DOMContentLoaded', ()=> {
    //validate form
   
    form();
    Comment('commentsBlock');
    deleteComment();
    likeComment();

    
})