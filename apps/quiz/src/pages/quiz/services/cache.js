export const retrieve = key => JSON.parse(localStorage.getItem(key));

export const reset = (key) => {
  localStorage.removeItem(key);
};

export const store = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};
