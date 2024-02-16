import styled from '@emotion/styled'


const Contenedor = styled.div`
    color: #FFF;
    font-family: 'Lato', sans-serif;
    background-color: #0040A2;
    border-radius: 20px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    margin: 30px
`

const Header = styled.header`
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 1rem;
`

const Imagen = styled.img`
    display: block;
    width: 120px;
`

const Texto = styled.p`
    font-size: 18px;
    span{
        font-wight: 700;
    }
`

const Precio = styled.p`
    font-size: 25px;
    span{
        font-wight: 700;
    }
`


const Resultado = ({resultado}) => {

    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } = resultado;

    return (
        <Contenedor>

        <Header>
            <Imagen 
                src={`https://cryptocompare.com/${IMAGEURL}`} 
                alt="imagen cripto" 
            />
            <Precio>El precio es de <span>{PRICE}</span> </Precio>
        </Header>

            <div>
            <Texto>Precio mas alto del dia: <span>{HIGHDAY}</span> </Texto>
            <Texto>Precio mas bajo del dia: <span>{LOWDAY}</span> </Texto>
            <Texto>Variacion ultimas 24hs:  <span>{CHANGEPCT24HOUR}</span> </Texto>
            <Texto>Ultima Actualizacion <span>{LASTUPDATE}</span> </Texto>
            </div>

        </Contenedor>
    )
}

export default Resultado