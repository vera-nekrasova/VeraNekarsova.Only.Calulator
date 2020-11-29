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

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("window.addEventListener('load', function () {\n  var calcWindow = document.querySelector('.calc__window');\n  var btns = document.querySelectorAll('.calc__btn');\n  var error = document.querySelector('.error');\n  btns.forEach(function (el) {\n    return el.addEventListener('click', function (e) {\n      return btnActions(e.target.innerHTML);\n    });\n  });\n  calcWindow.addEventListener('keydown', btnActive);\n  calcWindow.addEventListener('touchstart', btnActive);\n  calcWindow.addEventListener('input', function () {\n    calcWindow.value = calcWindow.value.replace(/[^\\+\\-\\/\\*\\.\\(\\)\\d]/g, '');\n    error.innerHTML = '';\n  });\n  calcWindow.addEventListener('focusin', function () {\n    return error.innerHTML = '';\n  });\n\n  function btnActions(btn) {\n    error.innerHTML = '';\n\n    if (btn === 'C') {\n      calcWindow.value = '';\n    } else if (btn === '=') {\n      try {\n        var res = eval(calcWindow.value);\n\n        if (res == 'Infinity' || res == '-Infinity') {\n          error.innerHTML = 'Деление на ноль запрещено, измените запись';\n        } else if (res === undefined) {\n          calcWindow.value = '';\n        } else {\n          calcWindow.value = res;\n        }\n      } catch (err) {\n        error.innerHTML = 'Некорректный ввод!!! Измените запись';\n      }\n    } else if (btn === 'CE') {\n      calcWindow.value = calcWindow.value.slice(0, -1);\n      if (calcWindow.value == '') calcWindow.value = '';\n    } else {\n      calcWindow.value += btn;\n    }\n  }\n\n  function btnActive(e) {\n    var activeKey = document.querySelector(\".calc__btn[data-role='\".concat(e.key, \"']\"));\n\n    if (activeKey) {\n      activeKey.animate([{\n        background: '#a0ddff',\n        color: '#624cab'\n      }, {\n        background: '#7189ff',\n        color: '#c1cefe'\n      }], 300);\n    }\n\n    if (e.key === 'Enter') btnActions('=');\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvc2NyaXB0LmpzPzQ0YWQiXSwibmFtZXMiOlsid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNhbGNXaW5kb3ciLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJidG5zIiwicXVlcnlTZWxlY3RvckFsbCIsImVycm9yIiwiZm9yRWFjaCIsImVsIiwiZSIsImJ0bkFjdGlvbnMiLCJ0YXJnZXQiLCJpbm5lckhUTUwiLCJidG5BY3RpdmUiLCJ2YWx1ZSIsInJlcGxhY2UiLCJidG4iLCJyZXMiLCJldmFsIiwidW5kZWZpbmVkIiwiZXJyIiwic2xpY2UiLCJhY3RpdmVLZXkiLCJrZXkiLCJhbmltYXRlIiwiYmFja2dyb3VuZCIsImNvbG9yIl0sIm1hcHBpbmdzIjoiQUFBQUEsTUFBTSxDQUFDQyxnQkFBUCxDQUF3QixNQUF4QixFQUFnQyxZQUFZO0FBQzNDLE1BQUlDLFVBQVUsR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLGVBQXZCLENBQWpCO0FBQ0EsTUFBSUMsSUFBSSxHQUFHRixRQUFRLENBQUNHLGdCQUFULENBQTBCLFlBQTFCLENBQVg7QUFDQSxNQUFJQyxLQUFLLEdBQUdKLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixRQUF2QixDQUFaO0FBRUFDLE1BQUksQ0FBQ0csT0FBTCxDQUFhLFVBQUFDLEVBQUU7QUFBQSxXQUFJQSxFQUFFLENBQUNSLGdCQUFILENBQW9CLE9BQXBCLEVBQTZCLFVBQUNTLENBQUQ7QUFBQSxhQUFPQyxVQUFVLENBQUNELENBQUMsQ0FBQ0UsTUFBRixDQUFTQyxTQUFWLENBQWpCO0FBQUEsS0FBN0IsQ0FBSjtBQUFBLEdBQWY7QUFDQVgsWUFBVSxDQUFDRCxnQkFBWCxDQUE0QixTQUE1QixFQUF1Q2EsU0FBdkM7QUFDQVosWUFBVSxDQUFDRCxnQkFBWCxDQUE0QixZQUE1QixFQUEwQ2EsU0FBMUM7QUFDQVosWUFBVSxDQUFDRCxnQkFBWCxDQUE0QixPQUE1QixFQUFxQyxZQUFZO0FBQ2hEQyxjQUFVLENBQUNhLEtBQVgsR0FBbUJiLFVBQVUsQ0FBQ2EsS0FBWCxDQUFpQkMsT0FBakIsQ0FBeUIsc0JBQXpCLEVBQWlELEVBQWpELENBQW5CO0FBQ0FULFNBQUssQ0FBQ00sU0FBTixHQUFrQixFQUFsQjtBQUNBLEdBSEQ7QUFJQVgsWUFBVSxDQUFDRCxnQkFBWCxDQUE0QixTQUE1QixFQUF1QztBQUFBLFdBQU1NLEtBQUssQ0FBQ00sU0FBTixHQUFrQixFQUF4QjtBQUFBLEdBQXZDOztBQUVBLFdBQVNGLFVBQVQsQ0FBb0JNLEdBQXBCLEVBQXlCO0FBQ3hCVixTQUFLLENBQUNNLFNBQU4sR0FBa0IsRUFBbEI7O0FBQ0EsUUFBSUksR0FBRyxLQUFLLEdBQVosRUFBaUI7QUFDaEJmLGdCQUFVLENBQUNhLEtBQVgsR0FBbUIsRUFBbkI7QUFDQSxLQUZELE1BRU8sSUFBSUUsR0FBRyxLQUFLLEdBQVosRUFBaUI7QUFDdkIsVUFBSTtBQUNILFlBQUlDLEdBQUcsR0FBR0MsSUFBSSxDQUFDakIsVUFBVSxDQUFDYSxLQUFaLENBQWQ7O0FBQ0EsWUFBSUcsR0FBRyxJQUFJLFVBQVAsSUFBcUJBLEdBQUcsSUFBSSxXQUFoQyxFQUE2QztBQUM1Q1gsZUFBSyxDQUFDTSxTQUFOLEdBQWtCLDRDQUFsQjtBQUNBLFNBRkQsTUFFTyxJQUFJSyxHQUFHLEtBQUtFLFNBQVosRUFBdUI7QUFDN0JsQixvQkFBVSxDQUFDYSxLQUFYLEdBQW1CLEVBQW5CO0FBQ0EsU0FGTSxNQUdGO0FBQ0piLG9CQUFVLENBQUNhLEtBQVgsR0FBbUJHLEdBQW5CO0FBQ0E7QUFDRCxPQVZELENBVUUsT0FBT0csR0FBUCxFQUFZO0FBQ2JkLGFBQUssQ0FBQ00sU0FBTixHQUFrQixzQ0FBbEI7QUFDQTtBQUNELEtBZE0sTUFjQSxJQUFJSSxHQUFHLEtBQUssSUFBWixFQUFrQjtBQUN4QmYsZ0JBQVUsQ0FBQ2EsS0FBWCxHQUFtQmIsVUFBVSxDQUFDYSxLQUFYLENBQWlCTyxLQUFqQixDQUF1QixDQUF2QixFQUEwQixDQUFDLENBQTNCLENBQW5CO0FBQ0EsVUFBSXBCLFVBQVUsQ0FBQ2EsS0FBWCxJQUFvQixFQUF4QixFQUE0QmIsVUFBVSxDQUFDYSxLQUFYLEdBQW1CLEVBQW5CO0FBQzVCLEtBSE0sTUFHQTtBQUNOYixnQkFBVSxDQUFDYSxLQUFYLElBQW9CRSxHQUFwQjtBQUNBO0FBQ0Q7O0FBRUQsV0FBU0gsU0FBVCxDQUFtQkosQ0FBbkIsRUFBc0I7QUFDckIsUUFBSWEsU0FBUyxHQUFHcEIsUUFBUSxDQUFDQyxhQUFULGlDQUFnRE0sQ0FBQyxDQUFDYyxHQUFsRCxRQUFoQjs7QUFDQSxRQUFJRCxTQUFKLEVBQWU7QUFDZEEsZUFBUyxDQUFDRSxPQUFWLENBQWtCLENBQ2pCO0FBQUVDLGtCQUFVLEVBQUUsU0FBZDtBQUF5QkMsYUFBSyxFQUFFO0FBQWhDLE9BRGlCLEVBRWpCO0FBQUVELGtCQUFVLEVBQUUsU0FBZDtBQUF5QkMsYUFBSyxFQUFFO0FBQWhDLE9BRmlCLENBQWxCLEVBR0csR0FISDtBQUlBOztBQUNELFFBQUlqQixDQUFDLENBQUNjLEdBQUYsS0FBVSxPQUFkLEVBQXVCYixVQUFVLENBQUMsR0FBRCxDQUFWO0FBQ3ZCO0FBQ0QsQ0FsREQiLCJmaWxlIjoiLi9zcmMvanMvc2NyaXB0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsid2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbiAoKSB7XHJcblx0bGV0IGNhbGNXaW5kb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FsY19fd2luZG93Jyk7XHJcblx0bGV0IGJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FsY19fYnRuJyk7XHJcblx0bGV0IGVycm9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVycm9yJyk7XHJcblxyXG5cdGJ0bnMuZm9yRWFjaChlbCA9PiBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiBidG5BY3Rpb25zKGUudGFyZ2V0LmlubmVySFRNTCkpKTtcclxuXHRjYWxjV2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBidG5BY3RpdmUpO1xyXG5cdGNhbGNXaW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGJ0bkFjdGl2ZSk7XHJcblx0Y2FsY1dpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcclxuXHRcdGNhbGNXaW5kb3cudmFsdWUgPSBjYWxjV2luZG93LnZhbHVlLnJlcGxhY2UoL1teXFwrXFwtXFwvXFwqXFwuXFwoXFwpXFxkXS9nLCAnJyk7XHJcblx0XHRlcnJvci5pbm5lckhUTUwgPSAnJztcclxuXHR9KTtcclxuXHRjYWxjV2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzaW4nLCAoKSA9PiBlcnJvci5pbm5lckhUTUwgPSAnJyk7XHJcblxyXG5cdGZ1bmN0aW9uIGJ0bkFjdGlvbnMoYnRuKSB7XHJcblx0XHRlcnJvci5pbm5lckhUTUwgPSAnJztcclxuXHRcdGlmIChidG4gPT09ICdDJykge1xyXG5cdFx0XHRjYWxjV2luZG93LnZhbHVlID0gJyc7XHJcblx0XHR9IGVsc2UgaWYgKGJ0biA9PT0gJz0nKSB7XHJcblx0XHRcdHRyeSB7XHJcblx0XHRcdFx0bGV0IHJlcyA9IGV2YWwoY2FsY1dpbmRvdy52YWx1ZSk7XHJcblx0XHRcdFx0aWYgKHJlcyA9PSAnSW5maW5pdHknIHx8IHJlcyA9PSAnLUluZmluaXR5Jykge1xyXG5cdFx0XHRcdFx0ZXJyb3IuaW5uZXJIVE1MID0gJ9CU0LXQu9C10L3QuNC1INC90LAg0L3QvtC70Ywg0LfQsNC/0YDQtdGJ0LXQvdC+LCDQuNC30LzQtdC90LjRgtC1INC30LDQv9C40YHRjCc7XHJcblx0XHRcdFx0fSBlbHNlIGlmIChyZXMgPT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRcdFx0Y2FsY1dpbmRvdy52YWx1ZSA9ICcnO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRcdGNhbGNXaW5kb3cudmFsdWUgPSByZXM7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdFx0XHRlcnJvci5pbm5lckhUTUwgPSAn0J3QtdC60L7RgNGA0LXQutGC0L3Ri9C5INCy0LLQvtC0ISEhINCY0LfQvNC10L3QuNGC0LUg0LfQsNC/0LjRgdGMJztcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIGlmIChidG4gPT09ICdDRScpIHtcclxuXHRcdFx0Y2FsY1dpbmRvdy52YWx1ZSA9IGNhbGNXaW5kb3cudmFsdWUuc2xpY2UoMCwgLTEpO1xyXG5cdFx0XHRpZiAoY2FsY1dpbmRvdy52YWx1ZSA9PSAnJykgY2FsY1dpbmRvdy52YWx1ZSA9ICcnO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Y2FsY1dpbmRvdy52YWx1ZSArPSBidG47XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBidG5BY3RpdmUoZSkge1xyXG5cdFx0bGV0IGFjdGl2ZUtleSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jYWxjX19idG5bZGF0YS1yb2xlPScke2Uua2V5fSddYCk7XHJcblx0XHRpZiAoYWN0aXZlS2V5KSB7XHJcblx0XHRcdGFjdGl2ZUtleS5hbmltYXRlKFtcclxuXHRcdFx0XHR7IGJhY2tncm91bmQ6ICcjYTBkZGZmJywgY29sb3I6ICcjNjI0Y2FiJyB9LFxyXG5cdFx0XHRcdHsgYmFja2dyb3VuZDogJyM3MTg5ZmYnLCBjb2xvcjogJyNjMWNlZmUnIH1cclxuXHRcdFx0XSwgMzAwKTtcclxuXHRcdH1cclxuXHRcdGlmIChlLmtleSA9PT0gJ0VudGVyJykgYnRuQWN0aW9ucygnPScpO1xyXG5cdH1cclxufSk7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/script.js\n");

/***/ })

/******/ });