import styled from '@emotion/styled'


const Contenedor = styled.div`
    color: #FFF;
    font-family: 'Lato', sans-serif
`
const Texto = styled.p`
`

const Precio = styled.p`
`


const Resultado = (resultado) => {

    const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE} = resultado;
  
    return (
    <Contenedor>
        <Precio>El precio es de <span>{PRICE}</span> </Precio>
        <Texto>Precio mas alto del dia: <span>{HIGHDAY}</span> </Texto>
        <Texto>Precio mas bajo del dia: <span>{LOWDAY}</span> </Texto>
        <Texto>Variacion ultimas 24hs:  <span>{CHANGEPCT24HOUR}</span> </Texto>
        <Texto>Ultima Actualizacion <span>{LASTUPDATE}</span> </Texto>
    </Contenedor>
  )
}

export default Resultado