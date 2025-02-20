const http = require("http");
const port = process.env.PORT || 5001;
// http://localhost:5001/welcome should return a status code 200 with a welcome message of your choice in html format

// http://localhost:5001/redirect should redirect the request to '/redirected' by using 302 as the status code / the redirected page should return a redirected message of your choice

// http://localhost:5001/cache should return 'this resource was cached' in html format and set the cache max age to a day

// http://localhost:5001/cookie should return 'cookies… yummm' in plain text and set 'hello=world' as a cookie

// For other routes, such as http://localhost:5001/other, this exercise should return a status code 404 with '404 - page not found' in html format

// Define routes
const routes = [
  "welcome",
  "redirect",
  "redirected",
  "cache",
  "cookie",
  "other",
];

const server = http.createServer((req, res) => {
  const path = req.url.slice(1);

  if (path === "welcome") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>Welcome to the Node Routing Exercise!</h1>");
    res.end();
    return;
  } else if (path === "redirect") {
    res.writeHead(302, { Location: "/redirected" });
    res.end();
    return;
  } else if (path === "redirected") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>You have been redirected successfully!</h1>");
    res.end();
    return;
  } else if (path === "cache") {
    res.writeHead(200, {
      "Content-Type": "text/html",
      "Cache-Control": "max-age=86400",
    });
    res.write("<h1>This resource was cached!</h1>");
    res.end();
    return;
  } else if (path === "cookie") {
    res.writeHead(200, {
      "Content-Type": "text/plain; charset=utf-8",
      "Set-Cookie": "hello=world",
    });
    res.write("cookies… yummm");
    res.end();
    return;
  } else if (path === "other") {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.write("<h1>404 - Page Not Found</h1>");
    res.end();
    return;
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.write("<h1>404 - Page Not Found</h1>");
    res.end();
    return;
  }
});

// Start the server
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
