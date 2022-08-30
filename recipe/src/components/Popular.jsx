import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

function Popular() {

    const [popular, setPopular] = useState([]);
    useEffect(() => {
        getPopular();
    }, []);

  // using async because we have to wait for the data, and want to make sure we have the data before
// we render anything out
    const getPopular = async () => {

        const check = localStorage.getItem('popular');
        if(check){
            setPopular(JSON.parse(check))
        }else{
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=8b4836b38260476e82eb275f5c0ea0d2&number=9`);
            // converting to a .json file makes the data manipulatable
            const data = await api.json();
            // taking the array data.recipe making it a string, becase local storage can only have strings
            localStorage.setItem('popular', JSON.stringify(data.recipes))
            // recipe represents each individual object in the array of objects that is data
            setPopular(data.recipes);
        }
    }
  
   return (
    <div>
    {/* the map here loops over the 9 recipes we get from the api and uses jsx to display them on the screen, they're objects with 
    titles, ids, images that we can call to make it look nice */}
        <Wrapper>
            <h3> Popular Picks</h3>
            <Splide options ={{
                perPage: 4,
                arrows: false,
                paginations: false,
                drag: 'free',
                gap: "3rem",

            }}>
                {popular.map((recipe) => {
                    return (
                        <SplideSlide key={recipe.id}>
                            <Card>
                                <p>{recipe.title}</p>
                                <img src={recipe.image} alt={recipe.title}/>
                                <Gradient />
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
    margin: 4rem, 0rem;

`;

const Card = styled.div`
    min-height: 20rem;
    border-radius: 2rem;
    overflow: hidden;
    position: relative;


    img {
        border-radius: 2rem;
        position: absolute;
        eft: 100%;
        height: 100%;
        object-fit: cover;

    }

    p {
        position: absolute;
        z-index: 10;
        left: 50%;
        bottom: 0%;
        transform: translate(-50%, 0%);
        color: white;
        width: 100%;
        text-align: center;
        font-weight: 600;
        font-size: 1rem;
        height: 40%;
        display:flex;
        justify-content: center;
        align-items: center;
    }
`;
    const Gradient = styled.div`
    z-index: 3;
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.5));
    `;


export default Popular;