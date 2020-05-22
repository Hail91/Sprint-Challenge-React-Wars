import React from 'react';
import styled from 'styled-components'

const Card = styled.div`
  border: 2px solid black;
  background-color: gold;
  width: 75%;
  margin-left: 13%;
  margin-bottom: 5%;
  :hover {
    background-color: black;
    color: gold;
    transition: 0.4s all;
  }
  border-radius: 20px;
`

const Cardname = styled.h1`
  border-bottom: 1px solid black;
  :hover {
    color: gold;
    cursor: pointer;
    transition: 0.4s all;
    border-bottom: 1px solid gold;
  }
`

const Cardinfo = styled.h2`
  border-bottom: 1px solid black;
  :hover {
    color: gold;
    cursor: pointer;
    transition: 0.4s all;
    border-bottom: 1px solid gold;
  }
`




const StarCards = (props) => {
  return (
      <Card>
        <Cardname>Name: {props.name}</Cardname>
        <Cardinfo>Height: {props.height}</Cardinfo>
        <Cardinfo>Birth Year: {props.birth_year}</Cardinfo>
        <Cardinfo>Eye Color: {props.eye_color}</Cardinfo>
        <Cardinfo>Hair Color: {props.hair_color}</Cardinfo>
      </Card> 
  )
}

export default StarCards;