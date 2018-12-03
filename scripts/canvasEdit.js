
function deleteObjects(){
	var activeObject = canvas.getActiveObject();
  canvas.remove(activeObject);
}



function Addtext() {
   canvas.add(new fabric.IText('Click and Type', {
        left: 50,
        top: 100,
        fontFamily: 'arial black',
        fill: '#333',
        fontSize: 50
   }));
   }
