const axios = require('axios');

const cheerio = require('cheerio');

const express = require('express');

const app = express();

app.use = express.json();

const url = 'https://www.espn.com/soccer/';

axios(url)
  .then((response) => {
    const html = response.data;
    console.log(html);
    const $ = cheerio.load(html);
    const articles = [];

    $('.headlineStack', html).each(function () {
      // $(".name", html).each(function () { // .thumbnail
      const title = $(this).text();
      const url = $(this).find('.headlineStack_listContainer');
      // const url = $(this).find('a').attr('href');
      articles.push({
        // articles.push({
        title,
        url,
      });
    });
    console.log(articles);
  })
  .then((err) => {
    console.log(err);
  });

const port = 3000;

const start = async () => {
  try {
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
