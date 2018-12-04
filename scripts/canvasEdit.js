

function Addtext() {
canvas.add(new fabric.IText('Tap and Type', {
  left: 50,
  top: 50,
  fontFamily: 'arial black',
  fill: '#333',
  fontSize: 50
}));
}


function deleteObjects(){
var activeObject = canvas.getActiveObject();
canvas.remove(activeObject);
}
