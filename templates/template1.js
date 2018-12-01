
function template1 (){
  var canvas = new fabric.Canvas('c', { selection: false });
  var grid = 20;

  // add objects

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
  })

  var rect = new fabric.Rect({
    top: 157,
    fill: 'rgba(202, 221, 220, 1)',
    width: 842,
    height: 1086,
  });


  var contact = new fabric.IText('Location  •  E-mail@site.com •  (000) 000-0000', {
    fontFamily: 'Delicious_500',
    top: 115,
    fontSize: 20,
    hasBorders: true,
    hasControls: true,
    cornerStyle: 'circle',
    lockRotation: true,
    hasControls: true,
    lockUniScaling: true,
    hasRotatingPoint: false,
  })

  var education= new fabric.IText('School Name\nDegree type\nAwards, clubs, etc', {
    fontFamily: 'Delicious_500',
    top: 170,
    left: 40,
    fontSize: 20,
    hasBorders: true,
    hasControls: true,
    cornerStyle: 'circle',
    lockRotation: true,
    hasControls: true,
    lockUniScaling: true,
    hasRotatingPoint: false,
  })


  var job= new fabric.IText('Job title\nCompany name and location\n• info info info info\n• info info info info', {
    fontFamily: 'Delicious_500',
    top: 280,
    left: 40,
    fontSize: 20,
    hasBorders: true,
    hasControls: true,
    cornerStyle: 'circle',
    lockRotation: true,
    hasControls: true,
    lockUniScaling: true,
    hasRotatingPoint: false,
  })

  var job1 = new fabric.IText('Job title\nCompany name and location\n• info info info info\n• info info info info', {
    fontFamily: 'Delicious_500',
    top: 435,
    left: 40,
    fontSize: 20,
    hasBorders: true,
    hasControls: true,
    cornerStyle: 'circle',
    lockRotation: true,
    hasControls: true,
    lockUniScaling: true,
    hasRotatingPoint: false,
  })



  canvas.add(rect, text, contact,education,job, job1);
  text.centerH();
  contact.centerH();

  //snap to grid
  canvas.on('object:moving', function(options) {
    options.target.set({
      left: Math.round(options.target.left / grid) * grid,
      top: Math.round(options.target.top / grid) * grid
    });
  });
}
