const fs = require("fs");
const xpath = require("xpath-html");

const html = fs.readFileSync(`${__dirname}/site-nico.html`, "utf8");

// Images
const img = xpath
    .fromPageSource(html)
    .findElements("//img[starts-with(@src, 'https://12ax7web.s3.amazonaws.com/accounts/1/')]");

// img.forEach(img => console.log(img.toString()));

// Titres
const title = xpath
  .fromPageSource(html)
  .findElements("//div[@class='card-body']//*[@class='card-title']");

title.forEach(title => console.log(title.toString()));
