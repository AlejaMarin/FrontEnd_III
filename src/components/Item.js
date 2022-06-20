import { useState } from "react";
import { Button, H3, H5, P, Product, Span } from "../styles/Item";

// El componente Item no tiene componentes hijos.
// ESTADO: Item debe tener un número para almacenar la cantidad de stock, la misma se la defina el padre a la hora de crearlo.
// MÉTODOS: Item debe manejar el click de su boton para restar la cantidad en stock de sí mismo y a su vez poder aumentar el estado de su "abuelo" App.
// PROPS: Item recibe todos los campos que muestra en pantalla: nombre, descripcion, stock y el métodos heredados para su uso.
// Maqueta de Item:
//    h3
//    p
//    h5 > span    (este span debe mostrar la cantidad si es mayor a 0 "agotado" si llega a 0)
//    button       (este boton debe permitir comprar, pero si la cantidad es menor a 0 debe estar deshabilitado y decir "Sin stock")

export default function Item({ nombre, descripcion, stock, handlerCount }) {

  const [quantity, setQuantity] = useState(stock);

  const handlerQuantity = () => {
    setQuantity((prevState) => prevState - 1);
    handlerCount();
  }

  return (
    <Product>
      {/* maquetar Item aquí */}
      <H3>{nombre}</H3>
      <P>{descripcion}</P>
      <H5>En stock: {quantity > 0 ? quantity : <Span>agotado</Span>}</H5>
      <Button disabled={quantity === 0 ? true : false} onClick={() => handlerQuantity()}>{quantity > 0 ? "COMPRAR" : "Sin stock"}</Button>
    </Product>
  )
}
