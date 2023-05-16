document.querySelector('a').addEventListener('click', function(event) {
  event.preventDefault(); // prevent default action of following the link

  // get the href of the link
  var href = event.target.getAttribute('href');

  // create an anchor element with the download attribute
  var downloadLink = document.createElement('a');
  downloadLink.href = href;
  downloadLink.download = 'Govardhan Resume.pdf';

  // simulate a click on the anchor element
  downloadLink.click();
});