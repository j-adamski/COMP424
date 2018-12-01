$(document).on("click", "#save", function() {
  var win=window.open();
  win.document.write("<img src='"+canvas.toDataURL()+"'/>");
});
