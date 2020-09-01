import React from 'react';
import styled from 'styled-components'

const StyledDiv = styled.div`
background-color:white;
color:black;
&:hover{
    background-image:url('https://www.askideas.com/media/20/Funny-Asian-Gif.gif')
}
h2:hover{
    color: coral
}
`

function Card({props}) {
    
    return (
        <StyledDiv className='myCard'>
            <img src={props.avatar_url} alt={`photo of ${props.login}`}></img>
            <h2> Name: <br/>{props.login}</h2>
            <h2> Bio: <br/>{props.bio}</h2>
        </StyledDiv>
    );
}

export default Card;