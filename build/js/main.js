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

eval("window.addEventListener('load', function () {\n  var calcWindow = document.querySelector('.calc__window');\n  var btns = document.querySelectorAll('.calc__btn');\n  var error = document.querySelector('.error');\n  btns.forEach(function (el) {\n    return el.addEventListener('click', function (e) {\n      return btnActions(e.target.innerHTML);\n    });\n  });\n  calcWindow.addEventListener('keydown', btnActive);\n  calcWindow.addEventListener('touchend', btnActive);\n  calcWindow.addEventListener('input', function () {\n    calcWindow.value = calcWindow.value.replace(/[^\\+\\-\\/\\*\\.\\(\\)\\d]/g, '');\n    error.innerHTML = '';\n  });\n  calcWindow.addEventListener('focusin', function () {\n    return error.innerHTML = '';\n  });\n\n  function btnActions(btn) {\n    error.innerHTML = '';\n\n    if (btn === 'C') {\n      calcWindow.value = '';\n    } else if (btn === '=') {\n      try {\n        var res = eval(calcWindow.value);\n\n        if (res == 'Infinity' || res == '-Infinity') {\n          error.innerHTML = 'Деление на ноль запрещено, измените запись';\n        } else if (res === undefined) {\n          calcWindow.value = '';\n        } else {\n          calcWindow.value = res;\n        }\n      } catch (err) {\n        error.innerHTML = 'Некорректный ввод!!! Измените запись';\n      }\n    } else if (btn === 'CE') {\n      calcWindow.value = calcWindow.value.slice(0, -1);\n      if (calcWindow.value == '') calcWindow.value = '';\n    } else {\n      calcWindow.value += btn;\n    }\n  }\n\n  function btnActive(e) {\n    btns.forEach(function (el) {\n      if (e.key == el.dataset.role) {\n        el.animate([{\n          background: '#a0ddff',\n          color: '#624cab'\n        }, {\n          background: '#7189ff',\n          color: '#c1cefe'\n        }], 300);\n      }\n\n      if (e.key === 'Enter') btnAction('=');\n    });\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvc2NyaXB0LmpzPzQ0YWQiXSwibmFtZXMiOlsid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNhbGNXaW5kb3ciLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJidG5zIiwicXVlcnlTZWxlY3RvckFsbCIsImVycm9yIiwiZm9yRWFjaCIsImVsIiwiZSIsImJ0bkFjdGlvbnMiLCJ0YXJnZXQiLCJpbm5lckhUTUwiLCJidG5BY3RpdmUiLCJ2YWx1ZSIsInJlcGxhY2UiLCJidG4iLCJyZXMiLCJldmFsIiwidW5kZWZpbmVkIiwiZXJyIiwic2xpY2UiLCJrZXkiLCJkYXRhc2V0Iiwicm9sZSIsImFuaW1hdGUiLCJiYWNrZ3JvdW5kIiwiY29sb3IiLCJidG5BY3Rpb24iXSwibWFwcGluZ3MiOiJBQUFBQSxNQUFNLENBQUNDLGdCQUFQLENBQXdCLE1BQXhCLEVBQWdDLFlBQVk7QUFDM0MsTUFBSUMsVUFBVSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsZUFBdkIsQ0FBakI7QUFDQSxNQUFJQyxJQUFJLEdBQUdGLFFBQVEsQ0FBQ0csZ0JBQVQsQ0FBMEIsWUFBMUIsQ0FBWDtBQUNBLE1BQUlDLEtBQUssR0FBR0osUUFBUSxDQUFDQyxhQUFULENBQXVCLFFBQXZCLENBQVo7QUFFQUMsTUFBSSxDQUFDRyxPQUFMLENBQWEsVUFBQUMsRUFBRTtBQUFBLFdBQUlBLEVBQUUsQ0FBQ1IsZ0JBQUgsQ0FBb0IsT0FBcEIsRUFBNkIsVUFBQ1MsQ0FBRDtBQUFBLGFBQU9DLFVBQVUsQ0FBQ0QsQ0FBQyxDQUFDRSxNQUFGLENBQVNDLFNBQVYsQ0FBakI7QUFBQSxLQUE3QixDQUFKO0FBQUEsR0FBZjtBQUNBWCxZQUFVLENBQUNELGdCQUFYLENBQTRCLFNBQTVCLEVBQXVDYSxTQUF2QztBQUNBWixZQUFVLENBQUNELGdCQUFYLENBQTRCLFVBQTVCLEVBQXdDYSxTQUF4QztBQUNBWixZQUFVLENBQUNELGdCQUFYLENBQTRCLE9BQTVCLEVBQXFDLFlBQVk7QUFDaERDLGNBQVUsQ0FBQ2EsS0FBWCxHQUFtQmIsVUFBVSxDQUFDYSxLQUFYLENBQWlCQyxPQUFqQixDQUF5QixzQkFBekIsRUFBaUQsRUFBakQsQ0FBbkI7QUFDQVQsU0FBSyxDQUFDTSxTQUFOLEdBQWtCLEVBQWxCO0FBQ0EsR0FIRDtBQUlBWCxZQUFVLENBQUNELGdCQUFYLENBQTRCLFNBQTVCLEVBQXVDO0FBQUEsV0FBTU0sS0FBSyxDQUFDTSxTQUFOLEdBQWtCLEVBQXhCO0FBQUEsR0FBdkM7O0FBRUEsV0FBU0YsVUFBVCxDQUFvQk0sR0FBcEIsRUFBeUI7QUFDeEJWLFNBQUssQ0FBQ00sU0FBTixHQUFrQixFQUFsQjs7QUFDQSxRQUFJSSxHQUFHLEtBQUssR0FBWixFQUFpQjtBQUNoQmYsZ0JBQVUsQ0FBQ2EsS0FBWCxHQUFtQixFQUFuQjtBQUNBLEtBRkQsTUFFTyxJQUFJRSxHQUFHLEtBQUssR0FBWixFQUFpQjtBQUN2QixVQUFJO0FBQ0gsWUFBSUMsR0FBRyxHQUFHQyxJQUFJLENBQUNqQixVQUFVLENBQUNhLEtBQVosQ0FBZDs7QUFDQSxZQUFJRyxHQUFHLElBQUksVUFBUCxJQUFxQkEsR0FBRyxJQUFJLFdBQWhDLEVBQTZDO0FBQzVDWCxlQUFLLENBQUNNLFNBQU4sR0FBa0IsNENBQWxCO0FBQ0EsU0FGRCxNQUVPLElBQUlLLEdBQUcsS0FBS0UsU0FBWixFQUF1QjtBQUM3QmxCLG9CQUFVLENBQUNhLEtBQVgsR0FBbUIsRUFBbkI7QUFDQSxTQUZNLE1BR0Y7QUFDSmIsb0JBQVUsQ0FBQ2EsS0FBWCxHQUFtQkcsR0FBbkI7QUFDQTtBQUNELE9BVkQsQ0FVRSxPQUFPRyxHQUFQLEVBQVk7QUFDYmQsYUFBSyxDQUFDTSxTQUFOLEdBQWtCLHNDQUFsQjtBQUNBO0FBQ0QsS0FkTSxNQWNBLElBQUlJLEdBQUcsS0FBSyxJQUFaLEVBQWtCO0FBQ3hCZixnQkFBVSxDQUFDYSxLQUFYLEdBQW1CYixVQUFVLENBQUNhLEtBQVgsQ0FBaUJPLEtBQWpCLENBQXVCLENBQXZCLEVBQTBCLENBQUMsQ0FBM0IsQ0FBbkI7QUFDQSxVQUFJcEIsVUFBVSxDQUFDYSxLQUFYLElBQW9CLEVBQXhCLEVBQTRCYixVQUFVLENBQUNhLEtBQVgsR0FBbUIsRUFBbkI7QUFDNUIsS0FITSxNQUdBO0FBQ05iLGdCQUFVLENBQUNhLEtBQVgsSUFBb0JFLEdBQXBCO0FBQ0E7QUFDRDs7QUFFRCxXQUFTSCxTQUFULENBQW1CSixDQUFuQixFQUFzQjtBQUNyQkwsUUFBSSxDQUFDRyxPQUFMLENBQWEsVUFBQUMsRUFBRSxFQUFJO0FBQ2xCLFVBQUlDLENBQUMsQ0FBQ2EsR0FBRixJQUFTZCxFQUFFLENBQUNlLE9BQUgsQ0FBV0MsSUFBeEIsRUFBOEI7QUFDN0JoQixVQUFFLENBQUNpQixPQUFILENBQVcsQ0FDVjtBQUFFQyxvQkFBVSxFQUFFLFNBQWQ7QUFBeUJDLGVBQUssRUFBRTtBQUFoQyxTQURVLEVBRVY7QUFBRUQsb0JBQVUsRUFBRSxTQUFkO0FBQXlCQyxlQUFLLEVBQUU7QUFBaEMsU0FGVSxDQUFYLEVBR0csR0FISDtBQUlBOztBQUVELFVBQUlsQixDQUFDLENBQUNhLEdBQUYsS0FBVSxPQUFkLEVBQXVCTSxTQUFTLENBQUMsR0FBRCxDQUFUO0FBQ3ZCLEtBVEQ7QUFVQTtBQUNELENBcEREIiwiZmlsZSI6Ii4vc3JjL2pzL3NjcmlwdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24gKCkge1xyXG5cdGxldCBjYWxjV2luZG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhbGNfX3dpbmRvdycpO1xyXG5cdGxldCBidG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhbGNfX2J0bicpO1xyXG5cdGxldCBlcnJvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lcnJvcicpO1xyXG5cclxuXHRidG5zLmZvckVhY2goZWwgPT4gZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gYnRuQWN0aW9ucyhlLnRhcmdldC5pbm5lckhUTUwpKSk7XHJcblx0Y2FsY1dpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgYnRuQWN0aXZlKTtcclxuXHRjYWxjV2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgYnRuQWN0aXZlKTtcclxuXHRjYWxjV2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24gKCkge1xyXG5cdFx0Y2FsY1dpbmRvdy52YWx1ZSA9IGNhbGNXaW5kb3cudmFsdWUucmVwbGFjZSgvW15cXCtcXC1cXC9cXCpcXC5cXChcXClcXGRdL2csICcnKTtcclxuXHRcdGVycm9yLmlubmVySFRNTCA9ICcnO1xyXG5cdH0pO1xyXG5cdGNhbGNXaW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNpbicsICgpID0+IGVycm9yLmlubmVySFRNTCA9ICcnKTtcclxuXHJcblx0ZnVuY3Rpb24gYnRuQWN0aW9ucyhidG4pIHtcclxuXHRcdGVycm9yLmlubmVySFRNTCA9ICcnO1xyXG5cdFx0aWYgKGJ0biA9PT0gJ0MnKSB7XHJcblx0XHRcdGNhbGNXaW5kb3cudmFsdWUgPSAnJztcclxuXHRcdH0gZWxzZSBpZiAoYnRuID09PSAnPScpIHtcclxuXHRcdFx0dHJ5IHtcclxuXHRcdFx0XHRsZXQgcmVzID0gZXZhbChjYWxjV2luZG93LnZhbHVlKTtcclxuXHRcdFx0XHRpZiAocmVzID09ICdJbmZpbml0eScgfHwgcmVzID09ICctSW5maW5pdHknKSB7XHJcblx0XHRcdFx0XHRlcnJvci5pbm5lckhUTUwgPSAn0JTQtdC70LXQvdC40LUg0L3QsCDQvdC+0LvRjCDQt9Cw0L/RgNC10YnQtdC90L4sINC40LfQvNC10L3QuNGC0LUg0LfQsNC/0LjRgdGMJztcclxuXHRcdFx0XHR9IGVsc2UgaWYgKHJlcyA9PT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdFx0XHRjYWxjV2luZG93LnZhbHVlID0gJyc7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdFx0Y2FsY1dpbmRvdy52YWx1ZSA9IHJlcztcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0XHRcdGVycm9yLmlubmVySFRNTCA9ICfQndC10LrQvtGA0YDQtdC60YLQvdGL0Lkg0LLQstC+0LQhISEg0JjQt9C80LXQvdC40YLQtSDQt9Cw0L/QuNGB0YwnO1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2UgaWYgKGJ0biA9PT0gJ0NFJykge1xyXG5cdFx0XHRjYWxjV2luZG93LnZhbHVlID0gY2FsY1dpbmRvdy52YWx1ZS5zbGljZSgwLCAtMSk7XHJcblx0XHRcdGlmIChjYWxjV2luZG93LnZhbHVlID09ICcnKSBjYWxjV2luZG93LnZhbHVlID0gJyc7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRjYWxjV2luZG93LnZhbHVlICs9IGJ0bjtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGJ0bkFjdGl2ZShlKSB7XHJcblx0XHRidG5zLmZvckVhY2goZWwgPT4ge1xyXG5cdFx0XHRpZiAoZS5rZXkgPT0gZWwuZGF0YXNldC5yb2xlKSB7XHJcblx0XHRcdFx0ZWwuYW5pbWF0ZShbXHJcblx0XHRcdFx0XHR7IGJhY2tncm91bmQ6ICcjYTBkZGZmJywgY29sb3I6ICcjNjI0Y2FiJyB9LFxyXG5cdFx0XHRcdFx0eyBiYWNrZ3JvdW5kOiAnIzcxODlmZicsIGNvbG9yOiAnI2MxY2VmZScgfVxyXG5cdFx0XHRcdF0sIDMwMCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmIChlLmtleSA9PT0gJ0VudGVyJykgYnRuQWN0aW9uKCc9Jyk7XHJcblx0XHR9KTtcclxuXHR9XHJcbn0pOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/script.js\n");

/***/ })

/******/ });