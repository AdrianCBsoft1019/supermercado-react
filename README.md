# Fast DRC Supermarket
## Descripcion General
Nuestro proyecto es una recreacion de un supermercado online, teniendo asi opciones para agregar objetos al carrito de compras, tambien que puedan ver una descripcion y una reseña con su calificacion sobre el prodcuto, tambien se necesita una cuenta y que este ingresado para poder comprar en la pagina.

## Tecnologias Utilizadas
- Tailwind por vite: se uso para darle un estilo a la pagina 
- lucide-react: son componentes de react para iconos que usamos para poner en la pagina 
- React-router-dom: se uso para la navegacion en la pagina sin tener que recargar
- libreria react: sin la libreria no hubiesemos hecho la pagina, de ahi se obtiene la estructura y sus componentes
## Estructura de carpetas
```
Fast DRC Supermarket/
│
├─ public/
│  └─vite.svg
|    
├─ src/
│  ├─ assets/               
│  │   └─ img   -> se colocaron las imagenes de los objetos
│  │
│  ├─ components/            # Componentes se pueden reutilizar
│  │   ├─ Boton.jsx          
│  │   ├─ BotonDark.jsx       
│  │   ├─ Carrousel.jsx           
│  │   ├─ CartButton.jsx 
│  │   ├─ CartItem.jsx     
│  │   ├─ Factura.jsx    
│  │   ├─ Footer.jsx
│  │   ├─ Header.jsx
│  │   ├─ Loader.jsx
│  │   ├─ ProductCard.jsx
│  │   ├─ ProductDetail.jsx
│  │   ├─ ProductList.jsx
│  │   ├─ PromoCards.jsx 
│  │   └─ Sobrenosotros.jsx     
│  │
│  ├─ context/      #contexto del carrito de compras
│  │   ├─ AuthContext.jsx
│  │   └─ CartContext.jsx  
│  ├─ data/           # json local
│  │   └─ productos.json  
|  |
|  |
│  ├─ pages/                    # Vistas 
│  │   ├─ Cart.jsx               
│  │   ├─ CartPage.jsx
│  │   ├─ Login.jsx        
│  │   └─ SignIn.jsx           
│  │
│  ├─ services/              # Comunicación con la API 
│  │   └─ super.js
│  │
│  │
│  ├─ App.jsx                # Enrutador principal
│  ├─ index.css               # Renderiza la app dentro del root DOM
│  └─ main.jsx            # Estilos globales 
│  
│
├─ package.json
├─ README.md
└─ vite.config.js
```
## Instrucciones de instalación y ejecución local
1. Lo primero que se va a hacer es clonar el repositorio
 ```bash
  git clone https://github.com/AdrianCBsoft1019/supermercado-react.git
  ```
2. Ya despues de clonar el repositorio se instala las dependecias
 ```bash
  npm install
  ```
3. y por ultimo se inicia el servidor local
 ```bash
  npm run dev
  ```
## Descripción de cada vista
-cartpage.jsx: funciona como la página de control y revisión final del pedido en tu tienda en línea. Su principal rol es consumir el CartContext para mostrar la lista completa de artículos (utilizando CartItem.jsx para cada uno), visualizar los totales financieros (subtotal, envío y total), y gestionar el flujo de pago. Este componente verifica la autenticación del usuario a través del AuthContext antes de permitir la finalización. Cuando el usuario confirma el pago, CartPage simula la transacción, genera la vista de la Factura y, finalmente, vacía el carrito.

- Log In: Es la vista de inicio de sesión, donde permite al usuario autenticarse ingresando su correo y contraseña. Verifica las credenciales contra los usuarios almacenados localmente en el (localStorage). Si son correctas, almacena la sesión y redirige al usuario a la página principal.
  
- Sign In: Es la vista de registro o creación de nueva cuenta; Permitiendo al usuario registrar un nuevo perfil ingresando nombre, correo y contraseña. Valida que el correo no esté ya registrado. Si es nuevo, crea el objeto de usuario y lo guarda en la lista de usuarios en el almacenamiento local (localStorage). Luego, inicia la sesión del nuevo usuario.
  
## Lista de componentes principales y su propósito
- BotonDark : implementa un botón flotante en la esquina inferior derecha que permite al usuario alternar entre el modo claro y el modo oscuro a nivel global en la aplicación usando document.documentElement.classList.
  
- CardItem: Muestra los detalles de un único producto dentro del carrito de compras. Permitiendo al usuario agregar, disminuir o eliminar esa cantidad específica del producto del carrito.
  
- Header: Es la barra de navegación superior de la aplicación, el cual contiene el nombre de nuestro supermercado, el formulario de búsqueda, el ícono del carrito con el contador de ítems, y los enlaces de usuario incluyendo la funcionalidad de salir si llegase a iniciar sesión.
  
- PromoCards: Muestra una sección de tarjetas con promociones especiales como lo son la Navidad, Black Friday, entre otras. Está diseñado para comunicar ofertas del momento o descuentos especiales de manera que se vea visualmente atractiva.
  
- SobreNosotros: Presenta la información institucional del supermercado, como lo son la ubicación, especialidad y objetivos, utilizando un efecto de animación (IntersectionObserver) al ser visible en la página principal.
  
- ProductList: Carga y muestra la lista completa de productos desde productos.json. Incluyendo un sistema de botones de filtrado por categoría (todos, carnes, granos, etc.) para clasificar los productos y de este modo se logre tener una mejor renderización y visión de los mismos.
  
- ProductCard: Representa la tarjeta individual de un producto. Donde este muestra la imagen, nombre, descripción y precio; Permitiendo así, agregar el producto al carrito y ver los detalles en una ventana modal (ProductDetail).
  
- boton.jsx: El Boton es el elemento interactivo básico que se utiliza para que el usuario inicie una acción. Por ejemplo, se usa para "Comprar", "Iniciar Sesión", o "Confirmar".
  
- Carrousel.jsx: El Carrousel es un componente visual que muestra una serie de imágenes, banners o promociones importantes que rotan automáticamente o al hacer clic. Generalmente, se ubica en la parte superior de la página principal para destacar ofertas.
  
- CartButton.jsx: carrito de compras (a menudo un carrito de supermercado o una bolsa de compras). Su función principal es mostrar de forma visible la cantidad de artículos que el usuario ha añadido a su pedido y servir como enlace rápido a la página del carrito.
  
- Factura.jsx: La Factura es el componente que se encarga de generar la vista final del recibo o comprobante de la compra. Se utiliza al completar el proceso de pago para resumir los artículos, costos, impuestos y los detalles de la transacción.
  
- Footer.jsx: El Footer es la sección que se ubica en la parte inferior de la página y se mantiene fija o visible en todas las rutas. Contiene enlaces a información legal (políticas), redes sociales y datos de contacto de la tienda.
  
- Loader.jsx: El Loader es un indicador visual (como una rueda giratoria) que aparece para informar al usuario que la aplicación está ocupada procesando una tarea. Sirve para evitar que el usuario piense que la aplicación se congeló o se ha roto.
  
- ProductDetail.jsx: El ProductDetail es una vista dedicada que se abre para mostrar toda la información exhaustiva de un solo artículo. Muestra la descripción completa, múltiples imágenes y todas las opciones disponibles antes de que el usuario lo añada a su carrito.
  
## Descripción del consumo de API
En vez de utilizar un API como en mockapi, lo que utilizamos fue un archivo tipo json local el cual tiene todos los productos que estan en la tienda, asi llamamos el archivo para que se muestre en la pagina con las cards como el precio, el nombre y una descripcion.

## Créditos del equipo y qué aportó cada miembro
Roderick Correa 
| fecha | interacciones |
|:-----|-------:|
| 2/12/25   | Se realizó una reunión con el grupo para definir la idea del proyecto y cómo se dividirá los componentes básicos de la página. |
| 4/12/25   | Se implementó un componente NavBar jsx, esto se creó para en un futuro entrar a un carrito de compras y ver lo que se agregó. Se agregó un data.json para agregar los productos|
| 5/12/25   | Se agregó un componente para los Productos jsx , que se creó para mostrar los objetos que vamos a vender con su nombre, imagen, precio y la opción para comprar|
| 7/12/25   | Creación del header y el carrusel para la página principal, teniendo algunos errores, se unio la navbar creada.|
| 8/12/25   | se corrigieron errores que habian en el carrusel para que funcionara bien|
| 9/12/25   |Creación de una descripción del producto, y una función para colocar reseñas en el producto |
| 10/12/25  |correcion de errores en lo añadido de las descripciones y reseñas |
| 11/12/25  |Se conectó el sign in con el login y se unió al home, se arregló un error en la función de las reseñas, también se implementó una función de cuenta al header, pa que mostrase la cuenta registrada e ingresada |

Santiago Duarte 
| fecha | interacciones |
|:-----|-------:|
| 2/12/25   |Se creó y organizó el footer con información de nuestra página y el objetivo de la misma. Organización del archivo sobre nosotros y corrección de colores para que sean iguales.  |
| 5/12/25   |Organización del archivo sobre nosotros y corrección de colores para que sean iguales. Instalacion de tailwind css. Creacion del boton del carrito|
| 7/12/25   |Se creó la estructura base de la página del carrito, con métodos de pago, tiempo de envío, producto con descripción y con la opción de vaciar el carrito o seguir comprando.|
| 9/12/25   |Creación de una descripción del producto, y una función para colocar reseñas en el producto |
| 10/12/25  |Corrección de un error en el carrito en el aumento de productos. creación de la factura al final de la compra. |
| 11/12/25  |Se añadió el componente Loader, que funciona para mostrarle al usuario que algo se está cargando, evitando que piense que la página se congeló o no está funcionando. Se agregó el login obligatorio al momento de hacer la compra si no había iniciado sesión |

Nareth Ramirez
| fecha | interacciones |
|:-----|-------:|
| 2/12/25   |Se inició con la creación de un archivo JSON para el almacenamiento estructurado de los productos con sus respectivos atributos. |
| 4/12/25   |Se avanzó en la integración del archivo JSON con la lógica de React, implementando funciones de importación y mapeo para el consumo de datos por componentes visuales.|
| 5/12/25   |Se desarrolló un componente de "Cards" (con Tailwind CSS) para mostrar productos y se añadió un sistema de filtrado por categorías (carnes, granos, etc.).|
| 7/12/25   |Se refinaron y optimizaron los estilos visuales del componente de productos, realizando pruebas de diseño en diferentes resoluciones incluyendo un diseño responsive.|
| 8/12/25   |Se validó el funcionamiento y rendimiento del filtro por categorías, realizando ajustes para corregir errores.|
| 9/12/25   |Se implementó un botón flotante con Tailwind para activar el "Modo Oscuro" (Dark Mode), modificando dinámicamente los estilos globales de la página, realizando modificaciones en cada uno de los componentes para que estos la adecuen. |
| 11/12/25  |Se añadió un componente de tarjetas promocionales diseñado con Tailwind para destacar las promociones por temporada que ofrece la tienda. Se completó la integración del modo oscuro en todos los componentes principales y se agregaron las vistas Log In y Sign In para recibir los datos básicos de los usuarios y poder guardar sus cuentas.|

## Capturas o evidencia visual

![Imagen de WhatsApp 2025-12-12 a las 00 17 27_629bf9cb](https://github.com/user-attachments/assets/23d8bb2a-a62a-4fa0-a3b3-599e4db845b1)

![Imagen de WhatsApp 2025-12-12 a las 00 17 26_a755e5a4](https://github.com/user-attachments/assets/6ac301d7-4df5-4e97-baef-b8973d5ebbef)

![Imagen de WhatsApp 2025-12-12 a las 00 17 26_a79d76ba](https://github.com/user-attachments/assets/c34f108c-e13f-4246-942c-7c3df468380f)

## Observaciones o mejoras pendientes
# Mejoras pendientes: 
- No se logro terminar las recomendaciones en el area del carrito
- No se pudo poner una barra de busqueda que funcionase
- no se implemento descuentos
- no se logro dar una vista a las opciones del usuario ingresado
  
# Observaciones:
- se aprendieron conceptos nuevos que hay que fortalecer
- fue un tema que nos gusto
- tuvimos buena comunicacion
- apoyo del grupo
- cumplimos con la mayoria de requerimientos

## GRACIAS 
