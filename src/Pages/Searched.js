import React, { useEffect, useState } from 'react'
import { useParams, Link } from "react-router-dom";
import styled from 'styled-components'

const Searched = () => {


    let params = useParams();
    const [dish, setDish] = useState([])

    const getDish = async (name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_RECIPE_APP}&query=${name}`)
        const recipes = await data.json();
        setDish(recipes.results)
    }
    useEffect(() => {
        getDish(params.search)
    }, [params.search])

    return (
        <Grid>
            {
                dish && dish.map((item) => {
                    return (
                        <Card key={item.id}>
                            <Link to={"/recipe/" + item.id}>
                                <img src={item.image} alt={item.title} />
                                <h4>{item.title}</h4>
                            </Link>
                        </Card>
                    )
                })
            }
        </Grid>
    )
}
const Grid = styled.div`{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(15rem,1fr));
    grid-gap:2rem;
}`
const Card = styled.div`{
    img{
        width:100%;
        border-radius:2rem;
    }
    a{
        text-decoration:none;
    }
    h4{
        text-align:center;
        padding :1rem;
    }
}`

export default Searched