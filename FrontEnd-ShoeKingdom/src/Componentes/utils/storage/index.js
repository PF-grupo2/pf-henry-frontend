const saveDataStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const getDataStorage = (key) => {
  const dataStorage = localStorage.getItem(key);
  return dataStorage ? JSON.parse(dataStorage) : [];
};

const removeDataStorage = (key) => {
  localStorage.removeItem(key);
};

export default { saveDataStorage, getDataStorage, removeDataStorage };
