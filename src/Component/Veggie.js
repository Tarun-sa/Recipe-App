import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/skyblue';
import { Link } from "react-router-dom";


const Veggie = () => {

    const [veggie, setVeggie] = useState([])

    // get the popluar dishes from the spoonacularApi
    const getveggie = async () => {

        //getting the data from the localstorage
        const check = await JSON.parse(localStorage.getItem("veggie"));

        if (check) {
            setVeggie(check);
        }
        else {
            const api = await fetch(
                `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_RECIPE_APP}&number=16&tags=vegetarian`)

            const data = await api.json()

            //locally storing the data
            localStorage.setItem("veggie", JSON.stringify(data.recipes))
            setVeggie(data.recipes)
        }

    }
    useEffect(() => {
        getveggie()
    }, [])


    return (
        <div>
            <Wrapper>
                <h3>Our Vegetarian Dishes</h3>
                <Splide options={{
                    perPage: 3,
                    arrows: false,
                    pagination: false,
                    drag: "free",
                    gap: "1rem"

                }}>
                    {
                        veggie && veggie.map((recipe) => {
                            return (
                                <SplideSlide key={recipe.id}>
                                    <Card >
                                        <Link to={"/recipe/" + recipe.id}>
                                            <p>{recipe.title}</p>
                                            <img src={recipe.image} alt={recipe.title} />
                                            <Gradient />
                                        </Link>
                                    </Card>
                                </SplideSlide>
                            )
                        })
                    }
                </Splide>
            </Wrapper>
        </div>
    )
}
const Wrapper = styled.div`
margin:2rem 0rem;
`;
const Card = styled.div`
min-height:15rem;
border-radius:2rem;
overflow:hidden;
position:relative;

img{
    border-radius:2rem;
    margin:1rem 0rem;
    position:absolute;
    left:0;
    width:100%;
    height:100%;
    object-fit:cover;
}
p{
    position:absolute;
    z-index:10;
    left:50%;
    bottom:0;
    transform:translate(-50%,0%);
    color:white;
    width:100%;
    text-align:center;
    font-size:1.1rem;
    font-weight:600;
    height:40%;
    display:flex;
    justify-content:center;
    align-items:center;
}
`;
const Gradient = styled.div`
z-index:3;
postion:absolute;
width:100%;
height:100%;
background:linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.5));`

export default Veggie