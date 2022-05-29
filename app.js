const express = require("express");
const postBank = require("./postBank");
const app = express();
const PORT = 1337;
  app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});

const morgan = require("morgan");
const res = require("express/lib/response");
  app.use(morgan("dev"));
  app.use(express.static('public'))
const posts= postBank.list();

  app.get("/posts/:id", (req, res) => {
  console.log (req.params.id);
  const id = req.params.id;
  const post = postBank.find(id);
  if (!post.id){
  res.status (404)
  }
let thisPart = `<a href="/posts${post.id}">${post.title}</a>`;
let html = `<!DOCTYPE html>
<html>
<head>
<title>Wizard News</title>
<link rel="stylesheet" href="/style.css" />
</head>
<body>
<header><img src="/logo.png"/>Wizard News</header>
<div class="not-found">
<p>Accio Page! 
... Page Not Found</p>
<img src="/dumbledore-404.gif" />
  </div>
<div class="news-list">
<header><img src="/logo.png"/>Wizard News</header>
    ${posts.map(post => `
      <div class='news-item'>
        <p>
          <span class="news-position">${post.id}. ▲</span>${post.title}
          <small>(by ${post.name})</small>
        </p>
        <small class="news-info">
          ${post.upvotes} upvotes | ${post.date}
        </small>
      </div>`
    ).join('')}
  </div>
</body>
</html>`;
res.send(html);

const post1 = postBank.find.apply(id);
});
