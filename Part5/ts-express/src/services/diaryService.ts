import diaryData from '../data/diaryentries.json';

import { DiaryEntry } from '../types';

const diaries: Array<DiaryEntry> = diaryData as Array<DiaryEntry>;

const getEntries = (): Array<DiaryEntry> => {
  return diaries;
};

const addEntry = () => {
  return null;
};

export default {
  getEntries,
  addEntry
};
