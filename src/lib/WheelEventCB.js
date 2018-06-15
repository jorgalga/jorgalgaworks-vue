export class WheelEventCB {
  init () {
    // crea el metodo "addWheelListener" global
    // ejemplo: addWheelListener( elem, function( e ) { console.log( e.deltaY ); e.preventDefault(); } );
    (function (window, document) {
      var prefix = ''
      var _addEventListener
      var support
      // detecta el tipo de evento permitido por el navegador
      if (window.addEventListener) {
        _addEventListener = 'addEventListener'
      } else {
        _addEventListener = 'attachEvent'
        prefix = 'on'
      }

      // detecta el tipo de evento wheel manejado por el navegador
      support = 'onwheel' in document.createElement('div') ? 'wheel'
        : document.onmousewheel !== undefined ? 'mousewheel'
          : 'DOMMouseScroll'

      window.addWheelListener = function (elem, callback, useCapture) {
        _addWheelListener(elem, support, callback, useCapture)
        // controlaremos MozMousePixelScroll en Firefox antiguos
        if (support === 'DOMMouseScroll') {
          _addWheelListener(elem, 'MozMousePixelScroll', callback, useCapture)
        }
      }
      function _addWheelListener (elem, eventName, callback, useCapture) {
        elem[ _addEventListener ](prefix + eventName, support === 'wheel' ? callback : function (originalEvent) {
          !originalEvent && (originalEvent = window.event)
          // create a normalized event object
          var event = {
            // keep a ref to the original event object
            originalEvent: originalEvent,
            target: originalEvent.target || originalEvent.srcElement,
            type: 'wheel',
            deltaMode: originalEvent.type === 'MozMousePixelScroll' ? 0 : 1,
            deltaX: 0,
            deltaY: 0,
            deltaZ: 0,
            preventDefault: function () {
              originalEvent.preventDefault
                ? originalEvent.preventDefault()
                : originalEvent.returnValue = false
            }
          }
          // calculate deltaY (and deltaX) according to the event
          if (support === 'mousewheel') {
            event.deltaY = -1 / 40 * originalEvent.wheelDelta
          } else {
            event.deltaY = originalEvent.deltaY || originalEvent.detail
          }
          // it's time to fire the callback
          return callback(event)
        }, useCapture || false)
      }
    })(window, document)
  }
}
