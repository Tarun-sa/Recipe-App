import React, { useEffect, useState } from 'react'
import styled from "styled-components"
import { useParams } from "react-router-dom"

const Recipe = () => {

    let params = useParams();
    const [details, setDetails] = useState({})
    const [activeTab, setActiveTab] = useState("instructions")

    const fetchDetails = async () => {

        const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_RECIPE_APP}`)
        const detailsData = await data.json();
        setDetails(detailsData)

    }

    useEffect(() => {
        fetchDetails();
    }, [params.name])

    return (
        <DetailWrapper>
            <div>
                <h2>{details.title}</h2>
                <img src={details.image} alt={details.title} />
            </div>
            <Info>
                <Button className={activeTab === "instructions" && "active"} onClick={() => setActiveTab("instructions")}>Instructions</Button>
                <Button className={activeTab === "ingredients" && "active"} onClick={() => setActiveTab("ingredients")}>  Ingredients</Button>

                {
                    activeTab === "instructions" && <div>
                        <h4 dangerouslySetInnerHTML={{ __html: details.summary }}></h4>
                        <h4 dangerouslySetInnerHTML={{ __html: details.instructions }}></h4>
                    </div>
                }
                {
                    activeTab === "ingredients" && <ul>
                        {
                            details.extendedIngredients.map((ingredients) => {
                                return <li>{ingredients.original}</li>
                            })
                        }
                    </ul>
                }

            </Info>
        </DetailWrapper >
    )
}
const DetailWrapper = styled.div`
margin-top:10rem;
margin-bottom:5rem;
display:flex;
.active{
    color:white;
    background:linear-gradient(35deg,#494949,#313131);

}
h2{
    margin-bottom:2rem;
}
h4{
    margin-top:2rem;
}
li{
    font-size:1rem;
    line-height:2rem;
}
ul{
    margin-top:2rem;
}`
const Button = styled.button`
padding:1rem 2rem;
color:#313131;
background:white;
border:2px solid black;
margin-right:2rem;
font-weight:600`

const Info = styled.div`
margin-left:8rem;
width:100%;`
export default Recipe