import styled from 'styled-components'
import { keyframes } from 'styled-components'
import SignUpImage from '../../assets/sapiens1.svg'

export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: stretch;
    justify-content: center;
`

export const Background = styled.div`
    @media (min-width: 1100px) {
        flex: 1;
        background: url(${SignUpImage}) no-repeat center, var(--black);        
        background-size: contain;
    }
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 760px;
`

const appearFromRight = keyframes`
    from {
        opacity: 0;
        transform: translateX(50px);
    }
    to{
        opacity: 1;
        transform: translateX(0px);
    }
`
export const AnimationContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    animation: ${appearFromRight} 1s;

    form{
        margin: 80px 0px;
        width: 340px;
        text-align: center;

        h1{
            margin-bottom: 32px;
        }

        p {
            margin-top: 8px;

            a{
                font-weight: bold;
                color: var(--orange);
                transition: all .5s ease-in-out;
                :hover{
                    color: var(--black);
                }
            }
        }
    }
`