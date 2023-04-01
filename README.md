# Curso de React js Comisión 39575 Coderhouse:
### Profesor: Santiago Salkin.
### Alumno: Gamez Maximiliano.

#### Descripcion : 
En el curso de React de la plataforma Coderhouse, nos fue propuesto un proyecto de un ecommerse a elección.
En este caso mi elección esta orientada a una tienda con productos para celiacos , la empresa es de un amigo que actualmente tiene 4 productos y proximamente estara sumando mas a su fabrica.

### Creación del proyecto:

El proyecto fue dividido en dos pre-entregas, y una tercera entrega, que es el proyecto terminado;

Las consignas fueron las siguientes:

### Pre-entrega 1:

#### Consigna.
    ✓   Crea una carpeta dentro de src llamada 
    components que contenga la 
    implementación del componente NavBar 
    dentro del archivo NavBar.js. Su funcionalidad 
    es la de renderizar una barra de menú 
    (Navbar).
#### Se debe entregar.
    ✓   Brand (título/nombre de la tienda) 
    ✓   Un listado de categorías clickeables 
    ✓   Incorpora alguna librería de estilos con 
    bootstrap/materialize u otro de tu 
    preferencia (opcional).

### Pre-entrega 2:

#### Consigna.
    Conﬁgura en App.js el routing usando un BrowserRouter. 
    de tu aplicación con react-router-dom.
#### Componentes:
    1.      Navbar con cart
    2.      Catálogo
    3.      Detalle de product

### Se debe entregar.
    ✓   Rutas a conﬁgurar
    ‘/’ navega a <ItemListContainer />
    ‘/category/:id’  <ItemListContainer />
    ‘/item/:id’ navega a <ItemDetailContainer /> 
    ✓   Links a conﬁgurar
    Clickear en el brand debe navegar a ‘/’
    Clickear un Item.js debe navegar a /item/:id
    Clickear en una categoría del navbar debe 
    navegar a /category/:categoryId

### Entrega del Proyeco finalizado:
#### Consigna
    ✓ Desarrollarás una app de un e-commerce 
    para poder vender productos de un rubro a 
    elección
    Componentes:
    1.     Navbar
    2.     Catálogo
    3.     Detalle de producto
    4.     CartContext
    5.     CartWidget
#### Se debe entregar
    ✓   NavBar
    ✓   CartWidget
    ✓   ItemListContainer
    ✓   ItemList
    ✓   ItemDetailContainer 
    ✓   ItemDetail
           ○     ItemQuantitySelector 
           ○     Description
           ○     AddItemButton 
    ✓   Checkout
           ○     Brief (detalle de compra)


# ____________________________________

### Dependencias e instalaciones utilizadas:
#### dependencies:

    "@testing-library/jest-dom": "^5.16.5",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "firebase": "^9.17.2",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.8.2",
    "react-scripts": "5.0.1",
    "web-vitals": "^2.1.4",
    "react-toastify": "^9.1.1",
  
  ### Navegabilidad: 

    - NavBar:
        - 1 Home y Logo se Renderizan todos los productos.
            - 1.1 Click al boton ver detalles de cada una de las tarjetas nos envia al detalle del producto.
        - 2 Botones de categoria 'Productos','Para su mesa' y 'Para cocinar', renderizara los productos de dicha categoria.
            - 2.1 Click al boton "Ver detalles" de cada una de las tarjetas nos envia al detalle del producto.
        - 3 Icono Carrito.
            - 3.1 Por defecto vacio.
            - 3.2 Carrito con productos cargados.
              - 3.2.1 Arrow-up, agrega productos  en + 1  al carrito, hasta la cantidad de stock maxima del producto.
              - Arrow-down remueve productos del producto, si es menor a 1 elimina el producto.
              - 3.2.2 Icono 'Garbage' elmina el producto del carrito.
              - 3.2.3 Boton 'Vaciar carrito', vacia el carrito por completo dejandolo por default.
              - 3.2.4 En la parte inferior aparece detallado el total de la compra
              - 3.2.5 Boton 'Finalizar compra' nos redirige a Checkout.
            -     
    - Detalle de producto:
        - 1 Accediendo a traves del boton ver detalles de las tarjetas.
            - 1.1 Arrou-up y Arrow-Down: Agragaran o restaran unidades al producto a comprar.
            - 1.2 Boton Agregar al carrito: Para agregar el producto al carrito.
    - CheckOut:
        - 1 boton 'Pagar' despues de llenar el formulario envia los datos la compra a Firestore: Productos comprados (con su nombre, cantidad, precio y subtotal), la cantidad total de productos comprados, el monto total , y la fecha y hora de la compra.
    - Footer :
        - 1 En el footer esta el contacto tanto el instagram real de la empresa como el mail para contratar sus productos
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
