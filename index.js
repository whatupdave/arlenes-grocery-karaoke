var tesseract = require("tesseract")
  , tess = new tesseract.BaseApi()
  , pix;

// set language
tess.init("eng");
// set image
tess.setImage(process.argv[2]);
// run recognition
tess.recognize();
// get recognized text
console.log(tess.getText());

tess.end()
