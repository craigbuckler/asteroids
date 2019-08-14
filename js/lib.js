// library code

// event debouncing (delay passes without event reoccurring)
export function eventDebounce(element, event, callback, delay) {

  delay = delay || 300;
  let debounce;
  element.addEventListener(event, function (e) {
    if (debounce) clearInterval(debounce);
    debounce = setTimeout(function () { callback(e); }, delay);
  }, false);

}


// event throttling (will call every delay period regardless of event occurances)
export function eventThrottle(element, event, callback, delay) {

  delay = delay || 300;
  let throttle, latest;
  element.addEventListener(event, function (e) {
    if (throttle) {
      latest = e; // latest event
    }
    else {

      // prevent new events and callback
      throttle = setTimeout(function () {
        throttle = null;
        if (latest) callback(latest);
      }, delay);
      callback(e);

    }
  }, false);

}