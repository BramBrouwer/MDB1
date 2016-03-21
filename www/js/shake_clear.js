$(document).ready(function() {
    alert('test');
    // Start watching for shake gestures and call "onShake"
// with a shake sensitivity of 40 (optional, default 30)
shake.startWatch(onShake, 40 ,onError);

// Stop watching for shake gestures
shake.stopWatch();
 });

var onShake = function () {
  // Fired when a shake is detected
  alert('meme');
 console.log('shake detected');
 
};

var onError = function () {
  // Fired when there is an accelerometer error (optional)
};

