'use strict';

import { postData } from "./services/services.js";
import Comment from "./createComment";

function form() {
    
    let commentForm = document.querySelector('#newCommentForm');
    
    
    const message = {
            loading: "img/spinner.svg",
            failure: 'Что-то пошло не так'
        };
    function clearForm (data) {
        data.reset();
    }
        
    bindPostData(commentForm);

    function bindPostData(form) {
        form.addEventListener('submit', (e)=> post(e));

        
        document.querySelector('#textAreaComment').addEventListener('keydown', (e)=>{
            if(e.key === 'Enter' && !e.shiftKey){
                post(e);
            }
        });

        function post(e) {
            e.preventDefault();

            const statusMessage = document.createElement('img');
            statusMessage.src = message.loading;
            statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
            `;

            form.insertAdjacentElement('afterbegin', statusMessage);
            
            const formData = new FormData(form);

            if (formData.get('date') === '') {
                formData.set('date', new Date().toJSON());
            } else {
                let date = formData.get('date').split('-');

                formData.set('date', new Date(...date).toJSON())
            }

            const json = JSON.stringify(Object.fromEntries(formData.entries()));

            postData('http://localhost:3000/requests', json)
            .catch(()=> {
                showError(message.failure);
            })
            .finally(()=>{
                clearForm(form);
                statusMessage.remove();
                Comment('commentsBlock');
            });

            function showError(message) {
                let errorBody = document.createElement('div');
                errorBody.textContent = message;
                errorBody.style.cssText = `
                    font-size: 30px;
                    color:#fea0a0;
                    text-transform: uppercase;
                `

                form.insertAdjacentElement('afterbegin', errorBody);

                setTimeout(()=> {
                    errorBody.remove();

                }, 2000)
            }
        }
    }


    document.querySelector('#cancel').addEventListener('click', (e)=> {
        e.preventDefault();
        clearForm(commentForm)
        
    });

}

export default form;