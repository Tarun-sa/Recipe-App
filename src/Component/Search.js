import React, { useState } from 'react'
import styled from 'styled-components'
import { FaSearch } from 'react-icons/fa'
import { useNavigate } from "react-router-dom"

const Search = () => {
    const navigate = useNavigate();
    const [input, setInput] = useState("")

    const submitHandler = (e) => {
        e.preventDefault();
        navigate("/searched/" + input)

    }
    return (
        <FormStyle onSubmit={submitHandler} >
            <div>
                <FaSearch />
                <input
                    type="text"
                    value={input}
                    onChange={(e) => {
                        setInput(e.target.value)
                    }} />
            </div>
        </FormStyle>
    )
}

const FormStyle = styled.form`
margin:0rem 18rem;
position:relative;
div{
width:100%;

}
input{
    background:linear-gradient(35deg,#494949,#313131);
    border:none;
    font-size:1rem;
    color:white:
    outline:none;
    padding: 1rem 3rem;
    border-radius:1rem;
    width:100%;
}
svg{
    position:absolute;
    color:white;
    left:0;
    top:50%;
    transform:translate(100%,-50%)
  
}`

export default Search