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

const saveCartItem = (key, value) => {
  const cart = JSON.parse(localStorage.getItem("cart")) || {};
  cart[key] = value;
  localStorage.setItem("cart", JSON.stringify(cart));
};
const getCart = (key) => {
  const cart = localStorage.getItem("cart");
  if (key && cart) {
    const parsedCart = JSON.parse(cart);
    return parsedCart[key]
  }
  return cart ? JSON.parse(cart) : {};
};
const cleanCart = (key) => {
  if(key){
    const cart = JSON.parse(localStorage.getItem("cart"));
    delete cart[key];
    localStorage.setItem("cart", JSON.stringify(cart));
  } else {localStorage.removeItem("cart")}
};

export default { saveDataStorage, getDataStorage, removeDataStorage, saveCartItem, getCart, cleanCart };
