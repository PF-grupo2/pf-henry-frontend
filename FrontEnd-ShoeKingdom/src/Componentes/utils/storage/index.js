const saveDataStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const getDataStorage = (key) => {
  const dataStorage = localStorage.getItem(key);
  if(key==="token" && !dataStorage) return ""
  return dataStorage ? JSON.parse(dataStorage) : [];
};

const removeDataStorage = (key) => {
  localStorage.removeItem(key);
};

export default { saveDataStorage, getDataStorage, removeDataStorage };
