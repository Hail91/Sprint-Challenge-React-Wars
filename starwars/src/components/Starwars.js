import React, {useState, useEffect} from 'react';
import StarCards from './StarCards';
import axios from 'axios';
import styled from 'styled-components'


const Container = styled.div`
    width: 90;
    display: flex;
    flex-direction: column;
`


export default function StarWars() {
    const [starWarsInfo, setStarWarsInfo] = useState([])
    useEffect(() => {
        axios.get('https://lambda-swapi.herokuapp.com/api/people/')
        .then(response => {
            console.log(response);
            setStarWarsInfo(response.data.results)
        })
        .catch(error => {
            console.log("Sorry, did not render data!", error);
        })
    }, []);
    
    return (
        <Container>
            {starWarsInfo.map(data => {
                return (
                    <StarCards 
                    key={data.created}
                    name={data.name}
                    height={data.height}
                    birth_year={data.birth_year}
                    eye_color={data.eye_color}
                    hair_color={data.hair_color}
                    />
                );    
            })}
        </Container>
    );
    
}