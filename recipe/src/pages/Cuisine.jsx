import React from 'react'
import styled from 'styled-components';
//import motion from 'framer-motion'
import {Link, useParams} from 'react-router-dom';
import { useState, useEffect } from 'react';

function Cuisine() {

  const [cuisine, setCuisine] = useState([]);
  let params = useParams();
  
  const getCuisine = async (name) => {
    const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=f80ba5a3bed34d2e95c5938a5eac767b&cuisine=${name}`);
    const recipes = await data.json();
    setCuisine(recipes.results)
  };

  useEffect(() => {
    // getCuisine('italian')
    console.log(params)
  }, [params]);

  return (
    <div>

    </div>
  )
}

export default Cuisine