const express = require("express");
const app = express();
const port = process.env.PORT || 5001;

// http://localhost:5001/form should return a form with input elements for username, email, and submit button

// http://localhost:5001/submit should return all the data the user entered

// Landing page
app.get("/", (req, res) => {
  res.status(200).send("Form Exercise");
});

// Form page
app.get("/form", (req, res) => {
  res.status(200).send(`
      <form action="/submit" method="get">
        <label for="name">Name:</label><br>
        <input type="text" id="name" name="name"><br><br>
  
        <label for="email">Email:</label><br>
        <input type="email" id="email" name="email"><br><br>
  
        <label for="comments">Comments:</label><br>
        <textarea id="comments" name="comments"></textarea><br><br>
  
        <label for="newsletter">Subscribe to newsletter:</label>
        <input type="checkbox" id="newsletter" name="newsletter" value="yes"><br><br>
  
        <input type="submit" value="Submit">
      </form>
    `);
});

app.get("/submit", (req, res) => {
  const name = req.query.name || "N/A";
  const email = req.query.email || "N/A";
  const comments = req.query.comments || "n/a";
  const newsletter = req.query.newsletter
    ? "Yes, sign me up for the newsletter."
    : "No, thank you.";

  res.status(200).send(`
      <p>Name: ${name}</p>
      <p>Email: ${email}</p>
      <p>Comments: ${comments}</p>
      <p>Newsletter: ${newsletter}</p>
    `);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
