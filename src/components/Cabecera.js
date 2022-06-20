import { Header, Paragraph, Span, Title } from "../styles/Cabecera";

// El componente Cabera no tiene componentes hijos.
// ESTADO: Cabecera no tiene estado.
// MÉTODOS: Cabecera no tiene métodos.
// PROPS: Cabecera recibe de su padre la cantidad que va a mostrar dentro del span correpondiente
// Maqueta de Cabecera:
//    h1
//    p > span     (el span mostrará la cantidad recibida por props)

export default function Cabecera({ count }) {

  return (
    <Header>
      {/* maquetar Cabecera aquí */}
      <Title>Carrito de compras</Title>
      <Paragraph>Cantidad de productos <Span>{count}</Span></Paragraph>
    </Header>
  )

}
