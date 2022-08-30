import React, { useState } from 'react'
import styled from 'styled-components';
import {FaSearch} from 'react-icons/Fa';

function Search() {
  return (
    <form>
        <input type="text" />
    </form>
  )
}

const formStyle = styled.div`
    margin: 0rem 20rem;
    position: relative;
    width: 100%;
    input{
        border:none;
        background: linear-gradient(35deg, #494949. #313131);
        fonst-size: 1.5rem;
        color: white;
        padding: 1rem 3rem;
        border-radius: 2rem;
        outline: none;
    }
    svg{
        position: absolute;
        top: 50%;
        left: 0%;
        transform: translate(100%, 50%)
        color: white;
    }
`

export default Search