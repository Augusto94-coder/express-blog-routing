const express = require("express");
const app = express();
const port = 3000;
const postsRouter = require("./routers/posts");

// Registrazione router con prefisso /posts
app.use("/posts", postsRouter);

app.use(express.static('public'));

app.get("/", (req, res) => {
  res.send("Server attivo. Usa /posts");
});

// Avvio server

app.listen(port, () => {
  console.log(`Server in ascolto su http://localhost:${port}`);
});