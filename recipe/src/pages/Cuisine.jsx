import React from 'react'
import styled from 'styled-components';
//import motion from 'framer-motion'
import {useParams} from 'react-router-dom';
import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

function Cuisine() {

  const [cuisine, setCuisine] = useState([]);
  let params = useParams();
  
  const getCuisine = async (name) => {
    const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=8b4836b38260476e82eb275f5c0ea0d2&cuisine=${name}`);
    const recipes = await data.json();
    setCuisine(recipes.results)
  };

  useEffect(() => {
    getCuisine(params.type)
    console.log(params)
  }, [params]);

return(
  <Grid>
    {cuisine.map((item) => {
      return (
        <Card key={item.id}>
          <Link to={'/recipe/'+item.id}>
            <img src={item.image} alt="" />
            <h4>{item.title}</h4>
          </Link>
        </Card>
      )
    })}
  </Grid>
)

}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, .5fr);
  grid-template-rows: repeat(3, .5fr);
  grid-gap: 3rem;
`
const Card = styled.div`
  img{
  width: 100%;
  border-radius: 2rem;
  }

  a{
    text-decor: none;
  }
  h4{
    text-align: center;
  }
`
export default Cuisine