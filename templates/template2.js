
function template2 (){




  canvas.clear().renderAll();



  var rect_border = new fabric.Rect({
    top: 15,
    stroke: 'black',
    strokeWidth: 0,
    width: 800,
    height: 230,
    fill: 'white',

  });

  var fullname = new fabric.IText('LARRY GREY', {
    fontFamily: 'Courier',
    top: 60,
    fontSize: 65,
    hasBorders: true,
    hasControls: true,
    cornerStyle: 'circle',
    lockRotation: true,
    hasControls: true,
    lockUniScaling: true,
    hasRotatingPoint: false,
  });

  var details = new fabric.IText('City, State       (000) 000-0000       e-mail@yahoo.com', {
    fontFamily: 'Courier',
    top: 160,
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
      fontFamily: 'Courier',
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
        top: 275,
        width: 950,
        height: 27,
        fill:'rgba(112, 91, 91, 0.1)',
        stroke:'black'
      });



      var education_info = new fabric.IText('University name', {
        fontFamily: 'Courier',
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


      var education_info2 = new fabric.IText('Degree Type & Major/Minors & year earned', {
        fontFamily: 'Courier',
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


      var education_info3 = new fabric.IText('University name', {
        fontFamily: 'Courier',
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


      var education_info4 = new fabric.IText('Degree Type & Major/Minors & year earned', {
        fontFamily: 'Courier',
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


//-------------------------------------------------------------------------------------------------------------

var skills = new fabric.IText('SKILLS', {
  fontFamily: 'Courier',
  top: 460,
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
    top: 460,
    width: 950,
    height: 27,
    fill:'rgba(112, 91, 91, 0.1)',
    stroke:'black'
  });

  var skill_details = new fabric.IText('Skill, Skill, Skill, Skill,  Skill, Skill, Skill, Skill,Skill, Skill\nSkill, Skill, Skill, Skill, Skill, Skill, Skill, Skill, Skill, Skill', {
    fontFamily: 'Courier',
    top: 505,
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

  // --------------------------------------------------------------------------------------------------

  var projects = new fabric.IText('PROJECTS', {
    fontFamily: 'Courier',
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

    var rect4 = new fabric.Rect({
      top: 575,
      width: 950,
      height: 27,
      fill:'rgba(112, 91, 91, 0.1)',
      stroke:'black'
    });



    var project_name = new fabric.IText('Project 1', {
      fontFamily: 'Courier',
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


    var project_details = new fabric.IText('Detals Details DetailsDetals Details DetailsDetals Details Details\nDetals Details DetailsDetals Details Details DetailsDetals Details Details\nDetals Details DetailsDetals Details DetailsDetals Details Details ', {
      fontFamily: 'Courier',
      top: 640,
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

    var project1_date = new fabric.IText('2017', {
      fontFamily: 'Courier',
      top: 620,
      left: 960,
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


    var project_name1 = new fabric.IText('Project 2', {
      fontFamily: 'Courier',
      top: 720,
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

    var project2_date = new fabric.IText('2016', {
      fontFamily: 'Courier',
      top: 720,
      left: 960,
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


    var project_details1 = new fabric.IText('Detals Details DetailsDetals Details DetailsDetals Details Details\nDetals Details Details DetailsDetals Details DetailsDetals Details Details\nDetals Details DetailsDetals Details Details Details Details ', {
      fontFamily: 'Courier',
      top: 740,
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

//---------------------------------------------------------------------------------------------------



var experience = new fabric.IText('EXPERIENCE', {
  fontFamily: 'Courier',
  top: 830,
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
    top: 830,
    width: 950,
    height: 27,
    fill:'rgba(112, 91, 91, 0.1)',
    stroke:'black'
  });

  var job = new fabric.IText('Job Title', {
    fontFamily: 'Courier',
    top: 865,
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

  var job_date = new fabric.IText('Date - Date', {
    fontFamily: 'Courier',
    top: 865,
    left: 893,
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


      var job_location = new fabric.IText('Company Name & Location', {
        fontFamily: 'Courier',
        top: 885,
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



  var job_details = new fabric.IText('• Description description description description description description\n• Description description description description description description\n• Description description description description description description ', {
    fontFamily: 'Courier',
    top: 910,
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

//--------------------------------------------------------------------------------------------------------------

var job2 = new fabric.IText('Job Title', {
  fontFamily: 'Courier',
  top: 990,
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

var job_date2 = new fabric.IText('Date - Date', {
  fontFamily: 'Courier',
  top: 990,
  left: 893,
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


    var job_location2 = new fabric.IText('Company Name & Location', {
      fontFamily: 'Courier',
      top: 1010,
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



var job_details2 = new fabric.IText('• Description description description description description description\n• Description description description description description description\n• Description description description description description description ', {
  fontFamily: 'Courier',
  top: 1035,
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


//-----------------------------------------------------------------------------------



var job3 = new fabric.IText('Job Title', {
  fontFamily: 'Courier',
  top: 1115,
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

var job_date3 = new fabric.IText('Date - Date', {
  fontFamily: 'Courier',
  top: 1115,
  left: 893,
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


    var job_location3 = new fabric.IText('Company Name & Location', {
      fontFamily: 'Courier',
      top: 1135,
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



var job_details3 = new fabric.IText('• Description description description description description description\n• Description description description description description description\n• Description description description description description description ', {
  fontFamily: 'Courier',
  top: 1160,
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

  canvas.add( rect_border,fullname, details)
  canvas.add(rect2, education)
  canvas.add(education_info, education_info2, education_info3, education_info4)
  canvas.add(skills, rect3, skill_details)
  canvas.add(projects, rect4, project_name, project_details, project_name1, project_details1, project1_date, project2_date)
  canvas.add(experience, rect5, job, job_date, job_details,job_location)
  canvas.add(job2, job_date2,job_details2, job_location2)
  canvas.add(job3,job_date3,job_details3,job_location3)
  rect4.centerH();
  rect5.centerH();
  fullname.centerH();
  rect3.centerH();
  details.centerH();
  rect_border.centerH();
  rect2.centerH();

  canvas.renderAll();



}
