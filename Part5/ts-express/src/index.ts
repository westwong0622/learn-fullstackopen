import express from "express";
import diaryRouter from './routes/diaries';
import diagnoseRouter from './routes/diagnoses';

const app = express();
app.use(express.json());

const PORT = 3000;

app.get("/ping", (_req, res) => { 
  console.log('someone pinged here');
  res.send("pong");
});

app.use('/api/diaries', diaryRouter);
app.use('/api/diagnoses', diagnoseRouter);
  
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
