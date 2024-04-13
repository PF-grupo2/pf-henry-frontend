### USO DEL LOCAL STORAGE

Se crearon unas funciones dentro de `src/Componentes/utils/storage/index.js`, para acceder a ellos importar `utilsStorage` en donde se vaya a utilizar o se necesite de trabajar con el localStorage, de la siguiente manera:

```jsx
import { utilsStorage } from "../utils";
```

Dicho objeto cuenta con 3 métodos:

- `saveDataStorage(key,value)` => Este método se encargará de guardar en el local storage lo recibido en value, en el caso del carrito de compra, value sería el array de productos elegidos por el usuario, key representaría el nombre con el que se lo identificaría en el localStorage, usarlo cuando el usuario agrega un item al carrito, lo elimina, aumenta o disminuye la cantidad.

- `getDataStorage(key)` => Este método se encargará de obtener del local storage la información guardado con la key que se pasa como parámetro.

- `rempveDataStorage(key)` => Este método se encargará de eliminar del local storage la información guardado con la key que se pasa como parámetro.

---

Usarlo cuando cargue la aplicación para guardar en el local storage el carrito de compras obtenido de la base de datos, cada que el usuario añada o elimine un item, cuando el usuario modifique la cantidad de productos a obtener.

Nota: Combinar con los métodos para el manejo del carrito en la base de datos para mantener siempre sincronizado el carrito del localStorage con el de la base de datos.

---

Adicional a lo del localStorage se añadió al .env dos variables de conexión para la base de datos deployada y la local. Por ahora no es de utilidad pero si alguien desea usarla puede irse al archivo base.api.js y ver como se obtendría la conexión dependiendo del entorno (desarrollo o producción) en el que se encuentren.

---

NO hice yo las implementaciones del storage porque simplemente no entendí el flujo de trabajo. 🫠
