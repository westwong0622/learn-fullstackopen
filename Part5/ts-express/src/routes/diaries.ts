import express from "express";
import diaryService from '../services/diaryService';

const router = express.Router();

router.get('/:id', (req, res) => {
  const diary = diaryService.findById(Number(req.params.id));

  if (diary) {
    res.send(diaryService.getNonSensitiveEntries());
  } else {
    res.sendStatus(404);
  }
});

router.post("/", (_req, res) => {
  res.send("Saving a diary!");
});

export default router;
