import styled from 'styled-components'
const primary = "#0c061d"

export const Flex = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Grid = styled.div`
    width: 80%;
    margin: auto;
    display: grid;
    grid-template-columns: repeat( auto-fit, minmax(250px, 1fr) );
    grid-gap: 2rem;
`
export const Page = styled.div`
    background: ${primary};
    min-height: 100vh;
`
export const Card = styled.div`
    padding: 1rem;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    box-shadow: 0px 2px 5px 2px rgba(255,255,255,0.3);
`
