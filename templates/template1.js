
function template1 (){




  canvas.clear().renderAll();


  var rect = new fabric.Rect({
    top: 0,
    fill: 'rgba(202, 221, 220, 1)',
    width: 1042,
    height: 250,

  });




  var fullname = new fabric.IText('Hannah McEvans', {
    fontFamily: 'Delicious_500',
    top: 95,
    fontSize: 65,
    hasBorders: true,
    hasControls: true,
    cornerStyle: 'circle',
    lockRotation: true,
    hasControls: true,
    lockUniScaling: true,
    hasRotatingPoint: false,
  });

  var details = new fabric.IText('City, State    |   (000) 000-0000    |   e-mail@yahoo.com', {
    fontFamily: 'Times',
    top: 170,
    fontSize: 20,
    hasBorders: true,
    hasControls: true,
    cornerStyle: 'circle',
    lockRotation: true,
    hasControls: true,
    lockUniScaling: true,
    hasRotatingPoint: false,
  });

  var education = new fabric.IText('EDUCATION', {
    fontFamily: 'Tahoma',
    top: 275,
    left: 80,
    fontSize: 20,
    hasBorders: true,
    hasControls: true,
    cornerStyle: 'circle',
    lockRotation: true,
    hasControls: true,
    lockUniScaling: true,
    hasRotatingPoint: false,
  });



    var rect2 = new fabric.Rect({
      top: 300,
      fill: 'rgba(0, 0, 0d, 0)',
      width: 1042,
      height: 3,
    });

        var education_info = new fabric.IText('University name', {
          fontFamily: 'Tahoma',
          top: 320,
          left: 40,
          fontSize: 15,
          fontStyle: 'bold',
          hasBorders: true,
          hasControls: true,
          cornerStyle: 'circle',
          lockRotation: true,
          hasControls: true,
          lockUniScaling: true,
          hasRotatingPoint: false,
        });


        var education_info2 = new fabric.IText('Bachelor of Science in Communications, expected 2020', {
          fontFamily: 'Tahoma',
          top: 340,
          left: 40,
          fontSize: 15,
          hasBorders: true,
          hasControls: true,
          cornerStyle: 'circle',
          lockRotation: true,
          hasControls: true,
          lockUniScaling: true,
          hasRotatingPoint: false,
        });

        var related_course = new fabric.IText('Related Coursework', {
          fontFamily: 'Tahoma',
          top: 380,
          left: 40,
          fontSize: 15,
          fontStyle: 'bold',
          hasBorders: true,
          hasControls: true,
          cornerStyle: 'circle',
          lockRotation: true,
          hasControls: true,
          lockUniScaling: true,
          hasRotatingPoint: false,
        });

        var related_course2 = new fabric.IText('Basic communications, Communications 1, Communications 2, Communications 3, Other Courses', {
          fontFamily: 'Tahoma',
          top: 400,
          left: 40,
          fontSize: 15,
          hasBorders: true,
          hasControls: true,
          cornerStyle: 'circle',
          lockRotation: true,
          hasControls: true,
          lockUniScaling: true,
          hasRotatingPoint: false,
        });



    var skills = new fabric.IText('SKILLS', {
      fontFamily: 'Tahoma',
      top: 450,
      left: 80,
      fontSize: 20,
      hasBorders: true,
      hasControls: true,
      cornerStyle: 'circle',
      lockRotation: true,
      hasControls: true,
      lockUniScaling: true,
      hasRotatingPoint: false,
    });


    var rect4 = new fabric.Rect({
      top: 475,
      fill: 'rgba(0, 0, 0d, 0)',
      width: 1042,
      height: 3,
    });

    var skills2 = new fabric.IText('Skill, Skill, Skill, Skill, Skill, Skill\nSkill, Skill, Skill, Skill, Skill, Skill', {
      fontFamily: 'Tahoma',
      top: 495,
      left: 40,
      fontSize: 15,
      hasBorders: true,
      hasControls: true,
      cornerStyle: 'circle',
      lockRotation: true,
      hasControls: true,
      lockUniScaling: true,
      hasRotatingPoint: false,
    });





    var experience = new fabric.IText('EXPERIENCE', {
      fontFamily: 'Tahoma',
      top: 575,
      left: 80,
      fontSize: 20,
      hasBorders: true,
      hasControls: true,
      cornerStyle: 'circle',
      lockRotation: true,
      hasControls: true,
      lockUniScaling: true,
      hasRotatingPoint: false,
    });


    var rect3 = new fabric.Rect({
      top: 600,
      fill: 'rgba(0, 0, 0d, 0)',
      width: 1042,
      height: 3,
    });





    var experience_title = new fabric.IText('Job Title', {
      fontFamily: 'Tahoma',
      top: 620,
      left: 40,
      fontSize: 15,
      fontStyle: 'bold',
      hasBorders: true,
      hasControls: true,
      cornerStyle: 'circle',
      lockRotation: true,
      hasControls: true,
      lockUniScaling: true,
      hasRotatingPoint: false,
    });


        var experience_date = new fabric.IText('June 2014 - Present', {
          fontFamily: 'Tahoma',
          top: 620,
          left: 820,
          fontSize: 15,
          fontStyle: 'bold',
          hasBorders: true,
          hasControls: true,
          cornerStyle: 'circle',
          lockRotation: true,
          hasControls: true,
          lockUniScaling: true,
          hasRotatingPoint: false,
        });




    var experience_location = new fabric.IText('Company Name & Location', {
      fontFamily: 'Tahoma',
      top: 640,
      left: 40,
      fontSize: 15,
      fontStyle: 'italic',
      hasBorders: true,
      hasControls: true,
      cornerStyle: 'circle',
      lockRotation: true,
      hasControls: true,
      lockUniScaling: true,
      hasRotatingPoint: false,
    });



    var experience2 = new fabric.IText('• Description description description description description description\n• Description description description description description description\n• Description description description description description description', {
      fontFamily: 'Tahoma',
      top: 660,
      left: 40,
      fontSize: 15,
      hasBorders: true,
      hasControls: true,
      cornerStyle: 'circle',
      lockRotation: true,
      hasControls: true,
      lockUniScaling: true,
      hasRotatingPoint: false,
    });


// -----------------------------------------------------------------------------------------


var experience_title2 = new fabric.IText('Job Title', {
  fontFamily: 'Tahoma',
  top: 750,
  left: 40,
  fontSize: 15,
  fontStyle: 'bold',
  hasBorders: true,
  hasControls: true,
  cornerStyle: 'circle',
  lockRotation: true,
  hasControls: true,
  lockUniScaling: true,
  hasRotatingPoint: false,
});


    var experience_date2 = new fabric.IText('Month 2014 - Month 2014', {
      fontFamily: 'Tahoma',
      top: 750,
      left: 820,
      fontSize: 15,
      fontStyle: 'bold',
      hasBorders: true,
      hasControls: true,
      cornerStyle: 'circle',
      lockRotation: true,
      hasControls: true,
      lockUniScaling: true,
      hasRotatingPoint: false,
    });




var experience_location2 = new fabric.IText('Company Name & Location', {
  fontFamily: 'Tahoma',
  top: 770,
  left: 40,
  fontSize: 15,
  fontStyle: 'italic',
  hasBorders: true,
  hasControls: true,
  cornerStyle: 'circle',
  lockRotation: true,
  hasControls: true,
  lockUniScaling: true,
  hasRotatingPoint: false,
});



var experience3 = new fabric.IText('• Description description description description description description\n• Description description description description description description\n• Description description description description description description', {
  fontFamily: 'Tahoma',
  top: 790,
  left: 40,
  fontSize: 15,
  hasBorders: true,
  hasControls: true,
  cornerStyle: 'circle',
  lockRotation: true,
  hasControls: true,
  lockUniScaling: true,
  hasRotatingPoint: false,
});





// -----------------------------------------------------------------------------------------


var experience_title3 = new fabric.IText('Job Title', {
  fontFamily: 'Tahoma',
  top: 880,
  left: 40,
  fontSize: 15,
  fontStyle: 'bold',
  hasBorders: true,
  hasControls: true,
  cornerStyle: 'circle',
  lockRotation: true,
  hasControls: true,
  lockUniScaling: true,
  hasRotatingPoint: false,
});


    var experience_date3 = new fabric.IText('Month 2014 - Month 2014', {
      fontFamily: 'Tahoma',
      top: 880,
      left: 820,
      fontSize: 15,
      fontStyle: 'bold',
      hasBorders: true,
      hasControls: true,
      cornerStyle: 'circle',
      lockRotation: true,
      hasControls: true,
      lockUniScaling: true,
      hasRotatingPoint: false,
    });




var experience_location3 = new fabric.IText('Company Name & Location', {
  fontFamily: 'Tahoma',
  top: 900,
  left: 40,
  fontSize: 15,
  fontStyle: 'italic',
  hasBorders: true,
  hasControls: true,
  cornerStyle: 'circle',
  lockRotation: true,
  hasControls: true,
  lockUniScaling: true,
  hasRotatingPoint: false,
});



var experience4 = new fabric.IText('• Description description description description description description\n• Description description description description description description\n• Description description description description description description', {
  fontFamily: 'Tahoma',
  top: 920,
  left: 40,
  fontSize: 15,
  hasBorders: true,
  hasControls: true,
  cornerStyle: 'circle',
  lockRotation: true,
  hasControls: true,
  lockUniScaling: true,
  hasRotatingPoint: false,
});





// -----------------------------------------------------------------------------------------


var experience_title4 = new fabric.IText('Job Title', {
  fontFamily: 'Tahoma',
  top: 1010,
  left: 40,
  fontSize: 15,
  fontStyle: 'bold',
  hasBorders: true,
  hasControls: true,
  cornerStyle: 'circle',
  lockRotation: true,
  hasControls: true,
  lockUniScaling: true,
  hasRotatingPoint: false,
});


    var experience_date4 = new fabric.IText('Month 2014 - Month 2014', {
      fontFamily: 'Tahoma',
      top: 1010,
      left: 820,
      fontSize: 15,
      fontStyle: 'bold',
      hasBorders: true,
      hasControls: true,
      cornerStyle: 'circle',
      lockRotation: true,
      hasControls: true,
      lockUniScaling: true,
      hasRotatingPoint: false,
    });




var experience_location4 = new fabric.IText('Company Name & Location', {
  fontFamily: 'Tahoma',
  top: 1030,
  left: 40,
  fontSize: 15,
  fontStyle: 'italic',
  hasBorders: true,
  hasControls: true,
  cornerStyle: 'circle',
  lockRotation: true,
  hasControls: true,
  lockUniScaling: true,
  hasRotatingPoint: false,
});



var experience5 = new fabric.IText('• Description description description description description description\n• Description description description description description description\n• Description description description description description description', {
  fontFamily: 'Tahoma',
  top: 1050,
  left: 40,
  fontSize: 15,
  hasBorders: true,
  hasControls: true,
  cornerStyle: 'circle',
  lockRotation: true,
  hasControls: true,
  lockUniScaling: true,
  hasRotatingPoint: false,
});





// -----------------------------------------------------------------------------------------



        var references = new fabric.IText('REFERENCES', {
          fontFamily: 'Tahoma',
          top: 1150,
          left: 80,
          fontSize: 20,
          hasBorders: true,
          hasControls: true,
          cornerStyle: 'circle',
          lockRotation: true,
          hasControls: true,
          lockUniScaling: true,
          hasRotatingPoint: false,
        });


        var rect5 = new fabric.Rect({
          top: 1175,
          fill: 'rgba(0, 0, 0d, 0)',
          width: 1042,
          height: 3,
        });

        var reference1 = new fabric.IText('Full Name', {
          fontFamily: 'Tahoma',
          top: 1205,
          left: 40,
          fontSize: 15,
          fontStyle: 'bold',
          hasBorders: true,
          hasControls: true,
          cornerStyle: 'circle',
          lockRotation: true,
          hasControls: true,
          lockUniScaling: true,
          hasRotatingPoint: false,
        });

        var reference_description = new fabric.IText('Relationship and company etc.', {
          fontFamily: 'Tahoma',
          top: 1225,
          left: 40,
          fontSize: 15,
          fontStyle: 'italic',
          hasBorders: true,
          hasControls: true,
          cornerStyle: 'circle',
          lockRotation: true,
          hasControls: true,
          lockUniScaling: true,
          hasRotatingPoint: false,
        });

        var reference_phone = new fabric.IText('(000) 000-0000', {
          fontFamily: 'Tahoma',
          top: 1245,
          left: 40,
          fontSize: 15,
          hasBorders: true,
          hasControls: true,
          cornerStyle: 'circle',
          lockRotation: true,
          hasControls: true,
          lockUniScaling: true,
          hasRotatingPoint: false,
        });







  canvas.add(education,rect,rect2,rect3, experience,fullname, details, education_info, education_info2,related_course, related_course2, skills, rect4, skills2, experience2, experience_title, experience, rect5, references, experience_location, experience_date, experience3, experience_date2, experience_title2, experience_location2, experience4, experience_date3, experience_title3, experience_location3, experience5, experience_date4, experience_title4, experience_location4);
canvas.add(reference1, reference_description, reference_phone)
  fullname.centerH();
  details.centerH();
  canvas.renderAll();



}
