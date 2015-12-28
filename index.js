var tesseract = require("tesseract")
var tess = new tesseract.BaseApi();

tess.init("eng");
tess.setImage(process.argv[2]);
tess.recognize();
console.log(tess.getText());
tess.end()
