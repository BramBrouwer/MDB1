
var lastX,lastY,lastZ;
var moveCounter = 0;






$( document ).ready(function() {
    navigator.accelerometer.watchAcceleration(gotMovement, errHandler,{frequency:200});
    console.log("accwatch started");
});


function gotMovement(a) {
	if(!lastX) {
		lastX = a.x;
		lastY = a.y;
		lastZ = a.z;
		return;
	}

	var deltaX, deltaY, deltaZ;
	deltaX = Math.abs(a.x-lastX);
	deltaY = Math.abs(a.y-lastY);
	deltaZ = Math.abs(a.z-lastZ);

	if(deltaX + deltaY + deltaZ > 3) {
		moveCounter++;
	} else {
		moveCounter = Math.max(0, --moveCounter);
	}

	if(deltaX !=0 || deltaY != 0 || deltaZ != 0) console.log(deltaX,deltaY,deltaZ,moveCounter);

	if(moveCounter > 1) { alert("shake"); moveCounter=0; }

	lastX = a.x;
	lastY = a.y;
	lastZ = a.z;

}