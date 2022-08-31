import React from 'react'
import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

function Searched() {

  const [searchedRecipes, setSearchedRecipes] = useState([]);
  let params = useParams();


  const getSearched = async (name) => {
    const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=8b4836b38260476e82eb275f5c0ea0d2&query=${name}`);
    const recipes = await data.json();
    setSearchedRecipes(recipes.results);
  };

  useEffect(() => {
    // in params.search the .search is connected to what we used in the Pages.jsx
    getSearched(params.search);
    // the function is updated every time the params.seach changes
  },[params.search]);

  return (
    <Grid>
      {searchedRecipes.map((item) => {
        return (
          <Card>
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

export default Searched;