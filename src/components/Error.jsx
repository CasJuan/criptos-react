import styled from '@emotion/styled'

const Texto = styled.div`
    background-color: #b7322c;
    padding: 15px;
    color: #fff;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 22px;
    margin-top: 30px;
    font-family: 'Lato', sans-serif;
    text-align: center;
`



const Error = ({ children }) => {
    return (
        <Texto>
            {children}
        </Texto>
    )
}


export default Error