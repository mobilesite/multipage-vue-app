let result ={};

if(typeof window.addEventListener === 'function'){
  result.bindEvent = function (el, event, fn){
    el.addEventListener(event, function(e){
      if(fn(e) === false){
        e.preventDefault();
        e.cancelBubble = true;
      }
    }, false);
  };

  result.removeEvent = function (el, event, fn){
    el.removeEventListener(event, fn, false);
  };
} else if(typeof document.attachEvent === 'function'){
  result.bindEvent = function(el, event, fn){
    el.attachEvent('on'+event, function(e){
      if(fn(e) === false){
        window.event.cancelBubble = true;
        return false;
      }
    });
  };

  result.removeEvent = function (el, event, fn){
    el.detachEvent('on'+event, fn);
  };
} else{
  result.bindEvent = function (el, event, fn){
    el['on'+event] = fn;
  };

  result.removeEvent = function (el, event, fn){
    el['on'+event] = null;
  };
};

export default result;
