import React from 'react';
import { useEffect, useState } from "react";
import styled from "styled-components"
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';


function Veggie() {
  const[veggie, setVeggie] = useState([]);
  useEffect(() => {
    getVeggie();
  },[]);

  const getVeggie = async () => {
    const check = localStorage.getItem('veggie')
    // checking to see if the popular is saved in our local storage
    if (check) {
      // parsing back the array from string to array
      setVeggie(JSON.parse(check));
    }
    // if there is nothing in the local storage we are fetching the api
    else{
      const api = await fetch (`https://api.spoonacular.com/recipes/random?apiKey=f80ba5a3bed34d2e95c5938a5eac767b&number=9&tags=vegetarian`) ;    
      const data = await api.json(); 
    // local storage can only store strings, taking array and making it a string
      localStorage.setItem('popular', JSON.stringify(data.recipes));
      setVeggie(data.recipes);
      console.log(data.recipies)
  }
  }

  return (
    <div>
      <Wrapper>
        <h3>Veggie Picks</h3>
        <Splide options={{
          perPage: 3,
          arrows: false,
          pagination: false,
          drag: 'free',
          gap: '5rem',
        }}>
          {veggie.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
                <Card>
                  <p>{recipe.title}</p>
                  <img src = {recipe.image} alt={recipe.title}/>
                  <Gradient/>
                </Card>
              </SplideSlide>
            )
          })}
        </Splide>
      </Wrapper>
  </div>
  )
}

const Wrapper = styled.div`
  margin : 4rem 0rem;
  `;
const Card = styled.div`
  min-height: 20rem;
  border-radius: 2rem;
  overflow: hidden;
  postion: relative;


img {
  border-radius: 2rem;
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

p{
  position: absolute;
  z-index: 10;
  left: 50%;
  bottom: 0%;
  transform: translate(-50%, 0%);
  color: white;
  width: 100%;
  text-allign: center;
  font-weigth: 600;
  font-size: 1rem;
  height: 40%;
  display: flex;
  justify-content: center;
  align-itmes: center;
}

`

const Gradient = styled.div `
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0.5))
`

export default Veggie