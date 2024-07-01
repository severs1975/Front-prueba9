import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Routes/Home'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Admin from './Routes/Admin'
import AddProduct from './Routes/AddProduct'
import { useEffect, useState } from 'react'
import Detail from './Routes/Detail'
import Detail2 from './Routes/Detail2'
import Register from './Routes/Register'
import AdminCaracteristicas from './Routes/AdminCaracteristicas'
import Login from './Routes/Login'
import AdminFilter from './Routes/AdminFilter'
import Perfil from './Routes/Perfil'
import AdminPrivilegios from './Routes/AdminPrivilegios'
import UserFilter from './Routes/UserFilter'
import UserFilter2 from './Routes/UserFilter2'
import { UserProvider } from './UserContext'
import Buscador from './Components/Home/Buscador';

function App() {

/*
  const [products, setProducts] = useState(
[





  { id:1,name:'Spiderman infantil',price:21.99,mainCategory:'Niños',subCategory:'Comic',imageUrl:'https://m.media-amazon.com/images/I/71RwXhXL71L._AC_SX569_.jpg',imageURL_2:'',imageURL_3:'',imageURL_4:'',size:'S',description:'Traje ajustado de licra con estampado de',largeDescription:'Traje ajustado de licra con estampado de telaraña, máscara y lanzadores de telarañas',reservas:'2024-06-04,2024-06-06|2024-06-15,2024-06-18|2024-06-20,2024-07-23'},
  { id:2,name:'Bombero infantil',price:19.75,mainCategory:'Niños',subCategory:'Oficios',imageUrl:'https://m.media-amazon.com/images/I/81F8WH2Oy-L._AC_SX569_.jpg',imageURL_2:'',imageURL_3:'',imageURL_4:'',size:'M',description:'Mono de trabajo resistente al fuego, cas',largeDescription:'Mono de trabajo resistente al fuego, casco y herramientas',reservas:'2024-06-15,2024-06-18|2024-06-20,2024-07-23'},
  { id:3,name:'Cleopatra adulto',price:25.49,mainCategory:'Mujer',subCategory:'Personaje histórico',imageUrl:'https://m.media-amazon.com/images/I/61ej8HfX28L._AC_SY550_.jpg',imageURL_2:'',imageURL_3:'',imageURL_4:'',size:'L',description:'Vestido largo de tela brillante, collar ',largeDescription:'Vestido largo de tela brillante, collar y brazaletes dorados',reservas:'2024-06-04,2024-06-06|2024-06-15,2024-06-18'},
  { id:4,name:'Arlequin adulto',price:32.47,mainCategory:'Mujer',subCategory:'Comic',imageUrl:'https://m.media-amazon.com/images/I/61rkb1JXfoL._AC_SL1470_.jpg',imageURL_2:'',imageURL_3:'',imageURL_4:'',size:'S',description:'Mono de cuerpo entero negro y rojo decor',largeDescription:'Mono de cuerpo entero negro y rojo decorado con rombos, volante rojo en el huello y antifaz negro.',reservas:'2024-06-04,2024-06-06'},
  { id:5,name:'Caballero medieval adulto',price:39.98,mainCategory:'Hombre',subCategory:'Personaje histórico',imageUrl:'https://m.media-amazon.com/images/I/91huuXnwjyL._AC_SX679_.jpg',imageURL_2:'',imageURL_3:'',imageURL_4:'',size:'XL',description:'Túnica con capa, cinturón, 2 medallones ',largeDescription:'Túnica con capa, cinturón, 2 medallones y puños. Otros accesorios no están incluidos.',reservas:'2024-06-20,2024-07-23'},
  { id:6,name:'Maléfica adulto',price:64.53,mainCategory:'Mujer',subCategory:'Cuento de hadas',imageUrl:'https://m.media-amazon.com/images/I/81aNvdNWr0L._AC_SY879_.jpg',imageURL_2:'',imageURL_3:'',imageURL_4:'',size:'M',description:'Vestido con broche desmontable y tocado ',largeDescription:'Vestido con broche desmontable y tocado de personaje',reservas:'2024-06-15,2024-06-18'},
  { id:7,name:'Elvis adulto',price:84.36,mainCategory:'Hombre',subCategory:'Personaje histórico',imageUrl:'https://m.media-amazon.com/images/I/71s9MApCJNL._AC_SX679_.jpg',imageURL_2:'',imageURL_3:'',imageURL_4:'',size:'S',description:'Mono blanco con gliter dorado, estrellas',largeDescription:'Mono blanco con gliter dorado, estrellas y pedrería impresa',reservas:''},
  { id:8,name:'Dinosaurio infantil',price:34.40,mainCategory:'Niños',subCategory:'Animal',imageUrl:'https://m.media-amazon.com/images/I/51wckD-VogL._AC_SX679_.jpg',imageURL_2:'',imageURL_3:'',imageURL_4:'',size:'L',description:'Mono cómodo para niños pequeños, adaptab',largeDescription:'Mono cómodo para niños pequeños, adaptable con la edad, de franela de alta calidad.',reservas:'2024-06-04,2024-06-06|2024-06-15,2024-06-18|2024-06-20,2024-07-23'},
  { id:9,name:'Chuky mascota',price:17.69,mainCategory:'Mascotas',subCategory:'Hallowen',imageUrl:'https://m.media-amazon.com/images/I/61j5cIUdZxL.__AC_SY300_SX300_QL70_ML2_.jpg',imageURL_2:'',imageURL_3:'',imageURL_4:'',size:'M',description:'Hecho de algodón transpirable, suave y a',largeDescription:'Hecho de algodón transpirable, suave y amigable para la piel y fibra de poliéster, para la mascota.',reservas:'2024-06-15,2024-06-18|2024-06-20,2024-07-23'},
  { id:10,name:'Murciélago mascota',price:21.36,mainCategory:'Mascotas',subCategory:'Hallowen',imageUrl:'https://m.media-amazon.com/images/I/61-nzdIJKRL._AC_SX679_.jpg',imageURL_2:'',imageURL_3:'',imageURL_4:'',size:'S',description:'Alas de muerciélago para mascota, con co',largeDescription:'Alas de muerciélago para mascota, con correa y cascabel de calabaza',reservas:'2024-06-04,2024-06-06|2024-06-15,2024-06-18'},
  { id:11,name:'Princesa Ogro adulto',price:22.00,mainCategory:'Mujer',subCategory:'Cuento de hadas',imageUrl:'https://res.cloudinary.com/daawucxot/image/upload/v1715787266/disfraz-de-princesa-ogro.jpg',imageURL_2:'',imageURL_3:'',imageURL_4:'',size:'XL',description:'Vestido verde de estilo medieval para mu',largeDescription:'Vestido verde de estilo medieval para mujer.Incluye vestido y diadema con Orejas.Corona NO incluida.',reservas:'2024-06-04,2024-06-06'},
  { id:12,name:'Galo Obelix deluxe adulto',price:25.75,mainCategory:'Niños',subCategory:'Personaje ficción',imageUrl:'https://res.cloudinary.com/daawucxot/image/upload/v1715787265/disfraz-de-obelix-infantil.jpg',imageURL_2:'',imageURL_3:'',imageURL_4:'',size:'M',description:'Pantalon rayado con cinturon verde y cam',largeDescription:'Pantalon rayado con cinturon verde y camiseta simil piel. Casco incluido',reservas:'2024-06-20,2024-07-23'},
  { id:13,name:'Mago gris deluxe adulto',price:26.00,mainCategory:'Hombre',subCategory:'Personaje ficción',imageUrl:'https://res.cloudinary.com/daawucxot/image/upload/v1715787263/disfraz-de-mago-gris.jpg',imageURL_2:'',imageURL_3:'',imageURL_4:'',size:'S',description:'Incluye tunica, sombrero y cinturon.',largeDescription:'Incluye tunica, sombrero y cinturon.',reservas:'2024-06-15,2024-06-18'},
  { id:14,name:'Cavernicola Betty adulto',price:25.50,mainCategory:'Mujer',subCategory:'Personaje ficción',imageUrl:'https://res.cloudinary.com/daawucxot/image/upload/v1715787262/disfraz-de-betty-cavernicola.jpg',imageURL_2:'',imageURL_3:'',imageURL_4:'',size:'L',description:'Betty Picapiedra para mujer en talla M.I',largeDescription:'Betty Picapiedra para mujer en talla M.Incluye vestido y gorro(peluca).',reservas:''},
  { id:15,name:'Harry Potter infantil',price:22.30,mainCategory:'Niños',subCategory:'Personaje ficción',imageUrl:'https://res.cloudinary.com/daawucxot/image/upload/v1715787267/disfraz-harry-potter-infantil.jpg',imageURL_2:'',imageURL_3:'',imageURL_4:'',size:'M',description:'Tunica de licencia oficial de Grifindor ',largeDescription:'Tunica de licencia oficial de Grifindor como la de Harry Potter, El disfraz incluye la tunica de color negro con forro granate en la parte interior de la capucha.',reservas:'2024-06-04,2024-06-06|2024-06-15,2024-06-18|2024-06-20,2024-07-23'},
  { id:16,name:'Marge Simpson adulto',price:21.75,mainCategory:'Mujer',subCategory:'Personaje ficción',imageUrl:'https://res.cloudinary.com/daawucxot/image/upload/v1715787263/disfraz-de-madre-de-dibujos-amarillos.jpg',imageURL_2:'',imageURL_3:'',imageURL_4:'',size:'S',description:'Vestido en verde amarillo con collar y p',largeDescription:'Vestido en verde amarillo con collar y peluca',reservas:'2024-06-15,2024-06-18|2024-06-20,2024-07-23'},
  { id:17,name:'Fontanero Mario Bros adulto',price:20.80,mainCategory:'Hombre',subCategory:'Personaje ficción',imageUrl:'https://res.cloudinary.com/daawucxot/image/upload/v1715787264/disfraz-de-mario_bros.jpg',imageURL_2:'',imageURL_3:'',imageURL_4:'',size:'XL',description:'Jardinero en azul y camiseta roja. Inclu',largeDescription:'Jardinero en azul y camiseta roja. Incluye buzo y gorra.',reservas:'2024-06-04,2024-06-06|2024-06-15,2024-06-18'},
  { id:18,name:'Mario Bros infantil',price:19.65,mainCategory:'Niños',subCategory:'Personaje ficción',imageUrl:'https://res.cloudinary.com/daawucxot/image/upload/v1715787264/disfraz-de-mario-bros-infantil.jpg',imageURL_2:'',imageURL_3:'',imageURL_4:'',size:'M',description:'Incluye peto con camiseta, gorra y bigot',largeDescription:'Incluye peto con camiseta, gorra y bigote.',reservas:'2024-06-04,2024-06-06'},
  { id:19,name:'Buzz Lightyear Infantil',price:22.00,mainCategory:'Niños',subCategory:'Personaje ficción',imageUrl:'https://res.cloudinary.com/daawucxot/image/upload/v1715787262/disfraz-de-buzz-lightyear-infantil.jpg',imageURL_2:'',imageURL_3:'',imageURL_4:'',size:'S',description:'Incluye buzo y capucha de tela.',largeDescription:'Incluye buzo y capucha de tela.',reservas:'2024-06-20,2024-07-23'},
  { id:20,name:'Avatar deluxe adulto',price:32.00,mainCategory:'Hombre',subCategory:'Personaje ficción',imageUrl:'https://res.cloudinary.com/daawucxot/image/upload/v1715787262/disfraz-de-avatar.jpg',imageURL_2:'',imageURL_3:'',imageURL_4:'',size:'L',description:'Incluye mono, cinturon, delantal y muñeq',largeDescription:'Incluye mono, cinturon, delantal y muñequeras.',reservas:'2024-06-15,2024-06-18'},
  { id:21,name:'Pikachu infantil',price:21.99,mainCategory:'Niños',subCategory:'Anime',imageUrl:'https://m.media-amazon.com/images/I/817Af8-nswL._AC_SX569_.jpg',imageURL_2:'',imageURL_3:'',imageURL_4:'',size:'M',description:'Mono de una pieza',largeDescription:'Mono de una pieza',reservas:''},
  { id:22,name:'SpiderDog mascota',price:8.22,mainCategory:'Mascotas',subCategory:'Hallowen',imageUrl:'https://m.media-amazon.com/images/I/71Xb+xZPlhL._AC_SY500_.jpg',imageURL_2:'',imageURL_3:'',imageURL_4:'',size:'S',description:'Chaquetilla con accesorios aracnidos',largeDescription:'Chaquetilla con accesorios aracnidos',reservas:''},
  { id:23,name:'Fantasma Scream adulto',price:24.49,mainCategory:'Hombre',subCategory:'Hallowen',imageUrl:'https://m.media-amazon.com/images/I/61UzIjubFrL._AC_SX569_.jpg',imageURL_2:'',imageURL_3:'',imageURL_4:'',size:'XL',description:'Mascara y Traje, dos piezas',largeDescription:'Mascara y Traje, dos piezas',reservas:''},
  { id:24,name:'BabyShark adulto',price:32.47,mainCategory:'Hombre',subCategory:'Personaje ficción',imageUrl:'https://m.media-amazon.com/images/I/61qmbh1-bIL._AC_SX569_.jpg',imageURL_2:'',imageURL_3:'',imageURL_4:'',size:'M',description:'Mono Traje de 1 cierre de cremallera',largeDescription:'Mono Traje de 1 cierre de cremallera',reservas:''},
  { id:25,name:'T-Rex Divertido adulto',price:39.89,mainCategory:'Hombre',subCategory:'Animal',imageUrl:'https://m.media-amazon.com/images/I/91w-z3hEn9L._AC_SX522_.jpg',imageURL_2:'',imageURL_3:'',imageURL_4:'',size:'S',description:'Mono Traje de 1 cierre de cremallera',largeDescription:'Mono Traje de 1 cierre de cremallera',reservas:''},
  { id:26,name:'Monja Picara adulto',price:21.99,mainCategory:'Mujer',subCategory:'Religioso',imageUrl:'https://m.media-amazon.com/images/I/81E60yM4CoL._AC_SY550_.jpg',imageURL_2:'',imageURL_3:'',imageURL_4:'',size:'L',description:'El disfraz unisex incluye bata negra con',largeDescription:'El disfraz unisex incluye bata negra con cuello y puños blancos adjuntos, cinturón de cuerda blanca y tocado en blanco y negro.',reservas:'2024-06-04,2024-06-06|2024-06-15,2024-06-18|2024-06-20,2024-07-23'},
  { id:27,name:'Morphsuits adulto',price:19.75,mainCategory:'Hombre',subCategory:'Hallowen',imageUrl:'https://m.media-amazon.com/images/I/61g7JfSdWDL._AC_SX569_.jpg',imageURL_2:'',imageURL_3:'',imageURL_4:'',size:'M',description:'Disfraz oficial de Morphsuit: Morphsuits',largeDescription:'Disfraz oficial de Morphsuit: Morphsuits, tampoco sabemos lo que es, pero es espeluznante. Eso es todo lo que necesitas saber',reservas:'2024-06-04,2024-06-06|2024-06-15,2024-06-18|2024-06-20,2024-07-23'},
  { id:28,name:'mickey mouse infantil',price:20.50,mainCategory:'Niños',subCategory:'Personaje ficción',imageUrl:'https://m.media-amazon.com/images/I/61dGYmSJfHL._AC_SY879_.jpg',imageURL_2:'',imageURL_3:'',imageURL_4:'',size:'S',description:'El producto incluye: Mono con chaqueta a',largeDescription:'El producto incluye: Mono con chaqueta adjunta, pajarita adjunta y capucha de personaje.',reservas:'2024-06-04,2024-06-06|2024-06-15,2024-06-18|2024-06-20,2024-07-23'},
  { id:29,name:'Kimono Inuyasha infantil',price:38.50,mainCategory:'Niños',subCategory:'Anime',imageUrl:'https://http2.mlstatic.com/D_NQ_NP_971387-MLC74535238874_022024-O.webp',imageURL_2:'',imageURL_3:'',imageURL_4:'',size:'M',description:'Disfraces Traje Kimono De Cosplay De Inu',largeDescription:'Disfraces Traje Kimono De Cosplay De Inuyasha Para Hombre Y Mujer Anime Kimono Japonés Ropa De Rendimiento Del Drama De Halloween Fiesta De Carnaval',reservas:'2024-06-04,2024-06-06|2024-06-15,2024-06-18|2024-06-20,2024-07-23'},
  { id:30,name:'Reina Medieval adulto',price:28.20,mainCategory:'Mujer',subCategory:'Personaje histórico',imageUrl:'https://http2.mlstatic.com/D_NQ_NP_2X_906812-MLC70747711699_072023-F.webp',imageURL_2:'',imageURL_3:'',imageURL_4:'',size:'L',description:'El disfraz está compuesto por un vestido',largeDescription:'El disfraz está compuesto por un vestido largo de color azul y negro, corona plateada, y un cinturón. Además cuenta con ribete plateado metálico, estampado de red y damasco, escote de hombro descubierto, mangas acampanadas y falda de terciopelo.',reservas:'2024-06-04,2024-06-06|2024-06-15,2024-06-18|2024-06-20,2024-07-23'},
  { id:31,name:'Gatubela adulto',price:20.50,mainCategory:'Mujer',subCategory:'Comic',imageUrl:'https://http2.mlstatic.com/D_NQ_NP_2X_779979-MLC74367778058_022024-F.webp',imageURL_2:'',imageURL_3:'',imageURL_4:'',size:'S',description:'Mono Ajustado cuero imitación',largeDescription:'Mono Ajustado cuero imitación',reservas:'2024-06-04,2024-06-06|2024-06-15,2024-06-18|2024-06-20,2024-07-23'},
  { id:32,name:'Chitara adulto',price:40.00,mainCategory:'Mujer',subCategory:'Comic',imageUrl:'https://m.media-amazon.com/images/I/71Ih0+KGaXL._AC_SX466_.jpg',imageURL_2:'',imageURL_3:'',imageURL_4:'',size:'S',description:'Mono Ajustado piel imitación',largeDescription:'Mono Ajustado piel imitación',reservas:'2024-06-04,2024-06-06|2024-06-15,2024-06-18|2024-06-20,2024-07-23'},
  { id:33,name:'Spiderman deluxe adulto',price:45.00,mainCategory:'Hombre',subCategory:'Comic',imageUrl:'https://res.cloudinary.com/daawucxot/image/upload/v1717902811/disfraz-de-spiderman-deluxe-para-adulto_mhvu1o.jpg',imageURL_2:'https://res.cloudinary.com/daawucxot/image/upload/v1717902811/disfraz-de-spiderman-deluxe-para-adulto_mhvu1o.jpg',imageURL_3:'',imageURL_4:'',size:'XL',description:'Incluye mono y máscara',largeDescription:'Incluye mono y máscara',reservas:'2024-06-04,2024-06-06|2024-06-15,2024-06-18|2024-06-20,2024-07-23'},
  { id:34,name:'Spiderman deluxe infantil',price:31.99,mainCategory:'Niños',subCategory:'Comic',imageUrl:'https://res.cloudinary.com/daawucxot/image/upload/v1717902871/disfraz-de-spiderman-deluxe-para-nino_ccgxue.jpg',imageURL_2:'',imageURL_3:'',imageURL_4:'',size:'S',description:'Incluye mono musculoso con cubre botas y',largeDescription:'Incluye mono musculoso con cubre botas y máscara',reservas:'2024-06-04,2024-06-06|2024-06-15,2024-06-18|2024-06-20,2024-07-23'},
  { id:35,name:'Spiderman mascota',price:26.50,mainCategory:'Mascotas',subCategory:'Hallowen',imageUrl:'https://res.cloudinary.com/daawucxot/image/upload/v1717902885/disfraz-de-spiderman-para-perro_zoo2hm.jpg',imageURL_2:'',imageURL_3:'',imageURL_4:'',size:'S',description:'Incluye camiseta y gorro',largeDescription:'Incluye camiseta y gorro',reservas:'2024-06-04,2024-06-06|2024-06-15,2024-06-18|2024-06-20,2024-07-23'},
  { id:36,name:'Spiderman negro y rojo infantil',price:21.99,mainCategory:'Niños',subCategory:'Comic',imageUrl:'https://res.cloudinary.com/daawucxot/image/upload/v1717909409/disfraz-de-spiderman-negro-y-rojo-para-nino-spider-man-3-_kwc997.jpg',imageURL_2:'',imageURL_3:'',imageURL_4:'',size:'S',description:'Incluye mono musculoso con cubre botas y',largeDescription:'Incluye mono musculoso con cubre botas y máscara',reservas:'2024-06-04,2024-06-06|2024-06-15,2024-06-18|2024-06-20,2024-07-23'},
  { id:37,name:'Harry Potter suitmeister adulto',price:53.45,mainCategory:'Hombre',subCategory:'Personaje ficción',imageUrl:'https://res.cloudinary.com/daawucxot/image/upload/v1717960380/traje-harry-potter-suitmeister-para-hombre_vuuacz.jpg',imageURL_2:'',imageURL_3:'',imageURL_4:'',size:'XL',description:'Incluye americana, pantalón y corbata. N',largeDescription:'Incluye americana, pantalón y corbata. No incluye zapatos, camisa ni gafas    ',reservas:'2024-06-04,2024-06-06|2024-06-15,2024-06-18|2024-06-20,2024-07-23'},
  { id:38,name:'Harry Potter túnica Ravenclaw deluxe infantil',price:45.66,mainCategory:'Niños',subCategory:'Personaje ficción',imageUrl:'https://res.cloudinary.com/daawucxot/image/upload/v1717960589/tunica-de-ravenclaw-deluxe-para-adulto-replica-oficial-collectors-harry-potter_womnbf.jpg',imageURL_2:'',imageURL_3:'',imageURL_4:'',size:'M',description:'Incluye tunica y lleva escudo bordado',largeDescription:'Incluye tunica y lleva escudo bordado',reservas:'2024-06-04,2024-06-06|2024-06-15,2024-06-18|2024-06-20,2024-07-23'},
  { id:39,name:'Harry Potter suitmeister infantil',price:38.99,mainCategory:'Niños',subCategory:'Personaje ficción',imageUrl:'https://res.cloudinary.com/daawucxot/image/upload/v1717960800/traje-harry-potter-suitmeister-para-nino_guowm9.jpg',imageURL_2:'',imageURL_3:'',imageURL_4:'',size:'M',description:'Incluye americana, pantalón y corbata. N',largeDescription:'Incluye americana, pantalón y corbata. No incluye zapatos, camisa, gafas ni varita    ',reservas:'2024-06-04,2024-06-06|2024-06-15,2024-06-18|2024-06-20,2024-07-23'},
  { id:40,name:'Harry Potter capa invisibilidad adulto',price:42.15,mainCategory:'Hombre',subCategory:'Personaje ficción',imageUrl:'https://res.cloudinary.com/daawucxot/image/upload/v1717961105/capa-de-invisibilidad-de-harry-potter_kgjexm.jpg',imageURL_2:'',imageURL_3:'',imageURL_4:'',size:'XL',description:'Incluye: réplica de la famosa capa de la',largeDescription:'Incluye: réplica de la famosa capa de la saga, confeccionada en verde en su interior, permitiendo así la aplicación de la técnica audiovisual de croma al capturar y reproducir imágenes con un smartphone y la aplicación para móvil, incluida . Ello permite crear un efecto de invisibilidad muy realista.',reservas:'2024-06-04,2024-06-06|2024-06-15,2024-06-18|2024-06-20,2024-07-23'},
  { id:41,name:'Spidergirl adulto',price:31.4,mainCategory:'Mujer',subCategory:'Comic',imageUrl:'https://res.cloudinary.com/daawucxot/image/upload/v1717993166/disfraz-de-spidergirl-para-mujer_defogp.jpg',imageURL_2:'',imageURL_3:'',imageURL_4:'',size:'M',description:'Incluye vestido, guantes y antifaz. No i',largeDescription:'Incluye vestido, guantes y antifaz. No incluye zapatos',reservas:'2024-06-04,2024-06-06|2024-06-15,2024-06-18|2024-06-20,2024-07-23'},
  { id:42,name:'Spider-ghost infantil',price:34.1,mainCategory:'Niños',subCategory:'Comic',imageUrl:'https://res.cloudinary.com/daawucxot/image/upload/v1717993201/disfraz-de-ghost-spider-para-nina_rejgko.jpg',imageURL_2:'',imageURL_3:'',imageURL_4:'',size:'S',description:'Incluye mono con cubre botas y mascara',largeDescription:'Incluye mono con cubre botas y mascara',reservas:'2024-06-04,2024-06-06|2024-06-15,2024-06-18|2024-06-20,2024-07-23'},
  { id:43,name:'Spiderman deluxe adulto',price:68.1,mainCategory:'Hombre',subCategory:'Comic',imageUrl:'https://res.cloudinary.com/daawucxot/image/upload/v1717993214/disfraz-de-spiderman-deluxe-para-adulto-spider-man-3-_ckjv6c.jpg',imageURL_2:'',imageURL_3:'',imageURL_4:'',size:'XL',description:'Incluye mono musculoso con cubre botas y',largeDescription:'Incluye mono musculoso con cubre botas y máscara',reservas:'2024-06-04,2024-06-06|2024-06-15,2024-06-18|2024-06-20,2024-07-23'},
  { id:44,name:'Dementor Harry Potter adulto',price:55.99,mainCategory:'Hombre',subCategory:'Personaje ficción',imageUrl:'https://res.cloudinary.com/daawucxot/image/upload/v1717993131/disfraz-dementor_i1kxsv.jpg',imageURL_2:'',imageURL_3:'',imageURL_4:'',size:'XL',description:'Incluye tunica con capucha, guantes y ma',largeDescription:'Incluye tunica con capucha, guantes y mascara',reservas:'2024-06-04,2024-06-06|2024-06-15,2024-06-18|2024-06-20,2024-07-23'},
  { id:45,name:'Voldemort Harry Potter adulto',price:81.6,mainCategory:'Hombre',subCategory:'Personaje ficción',imageUrl:'https://res.cloudinary.com/daawucxot/image/upload/v1717993186/disfraz-voldemort_kldquo.jpg',imageURL_2:'',imageURL_3:'',imageURL_4:'',size:'XL',description:'Incluye tunica con capucha, guantes y ma',largeDescription:'Incluye tunica con capucha, guantes y mascara',reservas:'2024-06-04,2024-06-06|2024-06-15,2024-06-18|2024-06-20,2024-07-23'},
  { id:46,name:'Dementor Harry Potter infantil',price:46.66,mainCategory:'Niños',subCategory:'Personaje ficción',imageUrl:'https://res.cloudinary.com/daawucxot/image/upload/v1717993146/disfraz-dementor-infantil_cey1to.jpg',imageURL_2:'',imageURL_3:'',imageURL_4:'',size:'L',description:'Incluye tunica con capucha, guantes y ma',largeDescription:'Incluye tunica con capucha, guantes y mascara',reservas:'2024-06-04,2024-06-06|2024-06-15,2024-06-18|2024-06-20,2024-07-23'},



  
]);*/

const [products, setProducts] = useState([]);


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const apiUrl = 'https://script.google.com/macros/s/AKfycby68nFVpGDO4lUtUfi3SXg2qICKgcCDOwfIzywVgU6jaLB7OybUb5B_a4DTGvFYMxyx/exec?action=getProduct';
        
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error(`Error en la solicitud: ${response.statusText}`);
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      }
    };

    fetchProducts();
  }, []);


//useEffect(()=>{console.log(products)},[products]);

//console.log(products);
const handleAddProduct = (newProduct) => {
console.log('Nuevo producto:', newProduct);
setProducts([...products, newProduct]);
};

return (
  <UserProvider>
  <div>
    <Header />
    <Routes>
      <Route path="/" element={<Home products={products} onAddProduct={handleAddProduct}/>} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/card/:id" element={<Detail products={products} />} />
      <Route path="/card/:id" element={<Detail2 products={products} />} />
      <Route
        path="/admin/AddProduct"
        element={<AddProduct products={products} setProducts={setProducts} onAddProduct={handleAddProduct} />}
      />
      <Route path="/Register" element={<Register/>} />
      <Route path="/Login" element={<Login/>} />
      <Route path="/Admin/AdminCaracteristicas" element={<AdminCaracteristicas/>} />
      
      <Route path="/adminFilter" element={<AdminFilter/>} />
      <Route path="/userFilter" element={<UserFilter products={products} />} />
      <Route path="/userFilter2" element={<UserFilter2 products={products} />} />
      <Route path="/AdminPrivilegios" element={<AdminPrivilegios/>} />
      <Route path="/detail/:productId" element={<Detail products={products} />} />
      <Route path="/detail2/:productId" element={<Detail2 products={products} />} />
      <Route path='/Perfil' element={<Perfil products={products} />} />
      <Route path="/buscador" element={<Buscador />} />
      </Routes>
    <Footer />
  </div>
  </UserProvider>
);
}

export default App