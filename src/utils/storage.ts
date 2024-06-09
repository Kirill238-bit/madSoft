import { Test } from "../types/test";

const STORAGE_KEY = 'test-data';

export const getStoredTest = (): Test | null => {
  const storedData = localStorage.getItem(STORAGE_KEY);
  return storedData ? JSON.parse(storedData) : null;
};

export const storeTest = (test: Test) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(test));
};