/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/createComment.js":
/*!*********************************!*\
  !*** ./src/js/createComment.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/services */ "./src/js/services/services.js");
/* harmony import */ var _formatDate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formatDate */ "./src/js/formatDate.js");




function Comment(container) {
  let commentsWrapper = document.getElementById(container);
  commentsWrapper.innerHTML = '';
  Object(_services_services__WEBPACK_IMPORTED_MODULE_0__["getResource"])('http://localhost:3000/requests').then(data => createComment(data));
  function createComment(data) {
    // data.sort((a, b) => new Date(a.date) - new Date(b.date))
    data.forEach(_ref => {
      let {
        user,
        date,
        comment,
        id
      } = _ref;
      const element = document.createElement('div');
      element.classList.add('comment');
      element.setAttribute('id', id);
      let formatedDate = Object(_formatDate__WEBPACK_IMPORTED_MODULE_1__["default"])(date);
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
/* harmony default export */ __webpack_exports__["default"] = (Comment);

/***/ }),

/***/ "./src/js/deleteComment.js":
/*!*********************************!*\
  !*** ./src/js/deleteComment.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/services */ "./src/js/services/services.js");



function deleteComment() {
  let comments = document.querySelector('.comments');
  comments.addEventListener('click', e => {
    let deleteBtn = e.target.closest('.comment__delete');
    if (!deleteBtn) return;
    let comment = deleteBtn.closest('.comment');
    Object(_services_services__WEBPACK_IMPORTED_MODULE_0__["deleteData"])(`http://localhost:3000/requests/${comment.id}`);
    comment.remove();
  });
}
/* harmony default export */ __webpack_exports__["default"] = (deleteComment);

/***/ }),

/***/ "./src/js/form.js":
/*!************************!*\
  !*** ./src/js/form.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_services_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/services.js */ "./src/js/services/services.js");
/* harmony import */ var _createComment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createComment */ "./src/js/createComment.js");




function form() {
  let commentForm = document.querySelector('#newCommentForm');
  const message = {
    loading: "img/spinner.svg",
    failure: 'Что-то пошло не так'
  };
  function clearForm(data) {
    data.reset();
  }
  bindPostData(commentForm);
  function bindPostData(form) {
    form.addEventListener('submit', e => post(e));
    document.querySelector('#textAreaComment').addEventListener('keydown', e => {
      if (e.key === 'Enter' && !e.shiftKey) {
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
        formData.set('date', new Date(...date).toJSON());
      }
      const json = JSON.stringify(Object.fromEntries(formData.entries()));
      Object(_services_services_js__WEBPACK_IMPORTED_MODULE_0__["postData"])('http://localhost:3000/requests', json).catch(() => {
        showError(message.failure);
      }).finally(() => {
        clearForm(form);
        statusMessage.remove();
        Object(_createComment__WEBPACK_IMPORTED_MODULE_1__["default"])('commentsBlock');
      });
      function showError(message) {
        let errorBody = document.createElement('div');
        errorBody.textContent = message;
        errorBody.style.cssText = `
                    font-size: 30px;
                    color:#fea0a0;
                    text-transform: uppercase;
                `;
        form.insertAdjacentElement('afterbegin', errorBody);
        setTimeout(() => {
          errorBody.remove();
        }, 2000);
      }
    }
  }
  document.querySelector('#cancel').addEventListener('click', e => {
    e.preventDefault();
    clearForm(commentForm);
  });
}
/* harmony default export */ __webpack_exports__["default"] = (form);

/***/ }),

/***/ "./src/js/formatDate.js":
/*!******************************!*\
  !*** ./src/js/formatDate.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function formatDate(date) {
  let d = new Date(Date.parse(date));
  let today = new Date();
  let arr = [d.getFullYear(), d.getMonth(), d.getDate(), d.getHours(), d.getMinutes()].map(item => item < 10 ? '0' + item : item);
  if (d.getDate() === today.getDate()) {
    return `Сегодня ${arr.slice(3).join(':')}`;
  }
  if (today.getDate() - d.getDate() === 1) {
    return `Вчера ${arr.slice(3).join(':')}`;
  } else {
    return `${arr.slice(0, 3).reverse().join('.')}`;
  }
}
/* harmony default export */ __webpack_exports__["default"] = (formatDate);

/***/ }),

/***/ "./src/js/likeComment.js":
/*!*******************************!*\
  !*** ./src/js/likeComment.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function likeComment() {
  let comments = document.querySelector('.comments');
  comments.addEventListener('click', e => {
    let likeBtn = e.target.closest('.comment__like');
    if (!likeBtn) return;
    likeBtn.classList.toggle('comment__like_active');
  });
}
/* harmony default export */ __webpack_exports__["default"] = (likeComment);

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createComment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createComment */ "./src/js/createComment.js");
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form */ "./src/js/form.js");
/* harmony import */ var _deleteComment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./deleteComment */ "./src/js/deleteComment.js");
/* harmony import */ var _likeComment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./likeComment */ "./src/js/likeComment.js");






window.addEventListener('DOMContentLoaded', () => {
  //validate form

  Object(_form__WEBPACK_IMPORTED_MODULE_1__["default"])();
  Object(_createComment__WEBPACK_IMPORTED_MODULE_0__["default"])('commentsBlock');
  Object(_deleteComment__WEBPACK_IMPORTED_MODULE_2__["default"])();
  Object(_likeComment__WEBPACK_IMPORTED_MODULE_3__["default"])();
});

/***/ }),

/***/ "./src/js/services/services.js":
/*!*************************************!*\
  !*** ./src/js/services/services.js ***!
  \*************************************/
/*! exports provided: postData, getResource, deleteData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postData", function() { return postData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getResource", function() { return getResource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteData", function() { return deleteData; });


const postData = async (url, data) => {
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: data
  });
  if (!res.ok) {
    throw new Error(`Could not fetch ${url}, status ${res.status}`);
  }
  return await res.json();
};
const getResource = async url => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Could not fetch ${url}, status ${res.status}`);
  }
  return await res.json();
};
const deleteData = async url => {
  const res = await fetch(url, {
    method: 'DELETE'
  });
  if (!res.ok) {
    throw new Error(`Could not fetch ${url}, status ${res.status}`);
  }
  return await res.json();
};




/***/ })

/******/ });
//# sourceMappingURL=script.js.map