const express = require("express");
const app = express();
const port = process.env.PORT || 5001;

// http://localhost:5001/welcome should return a status code 200 with a welcome message of your choice in html format

app.get("/welcome", (req, res) => {
  res.status(200).send("<h1>Welcome to the Express Routing Exercise!</h1>");
});

// http://localhost:5001/redirect should redirect the request to '/redirected' by using 302 as the status code / the redirected page should return a redirected message of your choice

app.get("/redirect", (req, res) => {
  res.redirect(302, "/redirected");
});

app.get("/redirected", (req, res) => {
  res.status(200).send("<h1>You have been redirected successfully!</h1>");
});

// http://localhost:5001/cache should return 'this resource was cached' in html format and set the cache max age to a day

app.get("/cache", (req, res) => {
  res.set("Cache-Control", "public, max-age=86400");
  res.status(200).send("<h1>This resource was cached!</h1>");
});

// http://localhost:5001/cookie should return 'cookies… yummm' in plain text and set 'hello=world' as a cookie

app.get("/cookie", (req, res) => {
  res.status(200).cookie("hello", "world").send("cookies... yummm");
});

// For other routes, such as http://localhost:5001/other, this exercise should return a status code 404 with '404 - page not found' in html format

app.use((req, res) => {
  res.status(404).send("<h1>404 - Page Not Found</h1>");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
