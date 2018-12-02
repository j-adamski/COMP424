function template2 (){

  canvas.clear().renderAll();


  var text = new fabric.IText('Full Name', {
    fontFamily: 'Delicious_500',
    top: 50,
    fontSize: 45,
    hasBorders: true,
    hasControls: true,
    cornerStyle: 'circle',
    lockRotation: true,
    hasControls: true,
    lockUniScaling: true,
    hasRotatingPoint: false,
  });



  canvas.add(text);
  canvas.renderAll();



}
