import express from "express";
import calculator from "./calculator";
const app = express();

app.get("/ping", (_req, res) => {
  res.send('pong');
});

app.get("/hello", (_req, res) => {
  res.send("Hello Full Stack");
});

app.post("/calculate", (req, res) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { value1, value2, op } = req.body;

  const result = calculator(value1, value2, op);
  res.send(result);
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
