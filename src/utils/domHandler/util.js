/**
 *
 * @author dennis
 * @email
 * @since  17/10/17
 */

import eventListenerHandler from './eventListenerHandler';

let ret = {};

//事件绑定与解除绑定
ret.bindEvent = eventListenerHandler.bindEvent;
ret.removeEvent = eventListenerHandler.removeEvent;

ret.toDOM = function (htmlStr) {
  /**
   * 简单的将HTML字符串转换成DOM对象
   *
   *  !! 注意，这是不太严谨的转换方法，因为像tr这样的标签是不能作为body的childNode的，所以当遇上这样的标签时，转换结果并不准确
   */
  try{
    if(htmlStr.nodeType === 1){
      return htmlStr;
    } else {
      throw new Error('donHandler: function toDom parameter error');
    }
  } catch(e) {
    if(typeof htmlStr === 'string') {
      let temp = document.createElement('div');
      temp.innerHTML = htmlStr;

      return temp.childNodes[0];

      // 另一种方法
      // let frame = document.createElement('iframe');
      // let el;
      //
      // frame.style.display = 'none';
      // document.body.appendChild(frame);
      // frame.contentDocument.open();
      // frame.contentDocument.write(htmlStr);
      // frame.contentDocument.close();
      // el = frame.contentDocument.body.firstChild;
      // document.body.removeChild(frame);

      // return el;
    }
  }
};

ret.toHTML = function (el) {
  try{
    if(el.nodeType === 1){
      let temp = document.createElement('div');
      temp.appendChild(el);

      return temp.innerHTML;

      // 另一种方法
      // let frame = document.createElement('iframe');
      // let htmlStr;
      //
      // frame.style.display = 'none';
      // document.body.appendChild(frame);
      // frame.contentDocument.open();
      // frame.contentDocument.write('');
      // frame.contentDocument.close();
      // frame.contentDocument.body.appendChild(el);
      // htmlStr = frame.contentDocument.body.innerHTML;
      // document.body.removeChild(frame);
      //
      // return htmlStr;
    } else {
      throw new Error('donHandler: function after parameter error');
    }
  } catch(e) {
    if(typeof el === 'string') {
      return el;
    }
  }
};

ret.after = function(destinationEl, el){
  el = this.toHTML(el);
  destinationEl.insertAdjacentHTML('afterend', el);

  return destinationEl;
};

ret.before = function(destinationEl, el){
  el = this.toDOM(el);
  destinationEl.parentNode.insertBefore(el, destinationEl);

  return destinationEl;
};

ret.append = function(destinationEl, el){
  el = this.toDOM(el);
  destinationEl.appendChild(el);

  return destinationEl;
};

ret.replaceWith = function(oldElement, newElement){
  newElement = this.toDOM(newElement);
  oldElement.parentNode.replaceChild(newElement, oldElement);
};

ret.each = function(els, callback){
  if(typeof els === 'string'){
    els = document.querySelectorAll(els);
  }
  Array.prototype.every.call(els, (el, idx) => {
    return callback.call(el, el, idx) !== false;
  });
};

ret.remove = function(els){
  if(typeof els === 'string'){
    els = document.querySelectorAll(els);
  }

  return this.each(els, function(el, idx){
    if (el.parentNode != null) {
      el.parentNode.removeChild(el);
    };
  })
};

ret.removeElement = function (el) {
  let parent = el.parentNode;

  if(parent) {
    parent.removeChild(el);
  }
};

ret.classReg = function (className) {
  return new RegExp('(^|\\s+)' + className + '(\\s+|$)');
};

ret.hasClass = function(el, className) {
  let reg = this.classReg(className);

  return reg.test(el.className);
};

ret.removeClass = function(el, className){
  let reg = this.classReg(className);

  if (el.classList){
    el.classList.remove(className); //IE10+, Android 3.0+
  } else{
    el.className.replace(reg, ' ');
  }
};

ret.addClass = function(el, className){
  if(!this.hasClass(el, className)){
    if (el.classList){
      el.classList.add(className); //IE10+, Android 3.0+
    } else{
      el.className += ' ' + className;
    }
  }
};

ret.getNodeIndex = function (el) {
  //IE is simplest and fastest
  if(el.sourceIndex){
    return el.sourceIndex - el.parentNode.sourceIndex - 1;
  }
  //other browsers
  let i=0;
  while(el = el.previousElementSibling){
    i++;
  }
  return i;
};

ret.toArray = function (els) {
  return Array.prototype.slice.call(els);
};

ret.trim = function (str) {
  var reg = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

  if(str == null){
    return '';
  }

  str = str + '';

  if(String.prototype.trim){
    return String.prototype.trim.call(str);
  } else{
    return str.replace(reg, '');
  };
};

ret.hasId = function (el, id) {
  id = this.trim(id);
  return el.id === id;
};

ret.hasTag = function (el, tag) {
  tag = this.trim(tag);
  return el.tagName === tag;
};

ret.parent = function (el) {
  let parent = el.parentNode;

  return parent && parent.nodeType !== 11 ? parent : null;
};

ret.parents = function (el, parentsSelector) {
  let selector = this.trim(parentsSelector);

  while(el = this.parent(el)) {
    if(/^./.test(selector)){
      if(this.hasClass(el, selector.substr(1))) {
        return el;
      }
    } else if(/^#/.test(selector)){
      if(this.hasId(el, selector.substr(1))) {
        return el;
      }
    } else {
      if(this.hasTag(el, selector)) {
        return el;
      }
    }
  }
  return null;
};

export default ret;
