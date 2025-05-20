import { useEffect, useState } from 'react';

const toString = value => {
  return typeof value === 'object' ? JSON.stringify(value) : `${value}`;
};

const tryParse = value => {
  try {
    return JSON.parse(value);
  } catch {
    return value;
  }
};

export function useLocalStorage(key, defaultValue) {
  const getDefault = key => {
    const value = localStorage.getItem(key);
    return value === null ? defaultValue : tryParse(value);
  };

  const [state, setState] = useState(getDefault(key));

  const writeState = value => {
    localStorage.setItem(key, toString(value));
    setState(value);
  };

  useEffect(() => {
    writeState(defaultValue || getDefault(key));
  }, [key]);

  return [state, writeState];
}
