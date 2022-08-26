import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';
import {link, useParams} from 'react-router-dom';


function Cuisine() {

    const [cuisine, setCuisine] = useState([]);
    let params = useParams();

    const getCuisine = async (name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=f80ba5a3bed34d2e95c5938a5eac767b&cuisine=${name}`);
        const recipies = await data.json();
        setCuisine(recipies.results);
    }
    useEffect(() => {
        // getCuisine()
        console.log(params)
    }, []);

  return (
    <div>

    </div>
  )
}

export default Cuisine;