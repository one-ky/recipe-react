import {FaPizzaSlice, FaHamburger} from 'react-icons/fa';
import{GiNoodles, GiChopsticks} from 'react-icons/gi';
import styled from "styled-components";
import {NavLink} from 'react-router-dom';

import React from 'react'

function Category() {
  return (
    <List>
        <SLink to={'/cuisine/Italian'}>
            <FaPizzaSlice />
            <h4>Italian</h4>
        </SLink>
        <SLink to={'/cuisine/American'}>
            <FaHamburger />
            <h4>American</h4>
        </SLink>
        <SLink to={'/cuisine/Thai'}>
            <GiNoodles />
            <h4>Thai</h4>
        </SLink>
        <SLink to={'/cuisine/Chinese'}>
            <GiChopsticks />
            <h4>Chinese</h4>
        </SLink>
    </List>
  )
}

const List = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem 0rem;
`;

const SLink = styled(NavLink)`
    display: flex;
    flex-direction: column;
    justify-contnet: center;
    align-itmes: center;
    margin-right: 2rem;
    border-radius: 50%;
    text-decoration: none;
    background: linear-gradient(35deg, #494949, #313131);
    width: 6rem;
    height: 6rem;
    cursor: pointer;
    transform: scale(0.8);

    h4{
        color: white;
        font-size: 0.8rem;
        align-text: 1.5rem;
        margin-top: 1rem;
        margin-left: 1.25rem;

    }
    svg{
        color: white;
        font-size: 2rem;
        margin-left: 2rem;
        margin-top: 1rem;
        justify-content: center;
        align-itmes: center;
    }
    ${'' /* navlink as a calss of active so when we click on it
    we can change the color of the object */}
    &.active{
        background:linear-gradient(to right, #f27121, #e94057);

        svg{
            color: white;
        }
        h4{
            color: white;
        }
    }
`

export default Category