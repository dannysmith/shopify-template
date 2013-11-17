
/* Detect Mac/PC - Being used as subpixel-antialiased rendering
on Mac Webkit.
-------------------------------------------------------------- */
if (navigator.userAgent.indexOf('Mac OS X') !== -1) {
  document.body.className += " mac";
} else {
  document.body.className += " pc";
}

// ************* Place any jQuery/helper plugins in here ******************** //