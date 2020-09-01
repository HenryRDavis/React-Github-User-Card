import React from 'react';
import axios from 'axios';
import './App.css';
import styled from 'styled-components'

const StyledDiv = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
background-color:white;
color:black;
&:hover{
    background-image: url('https://i.gifer.com/77nH.gif');
}
h2:hover{
    color: coral
}
`

const StyledImg = styled.div`
    position:relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;
&:hover{
    transform: rotateY(180deg);
}
#av, #other{
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
}
#other{
    transform: rotateY(180deg);
}
`

class Usercard extends React.Component {
    state = {
        userProfiles: [],
    };

    componentDidMount() {
        axios
            .get('https://api.github.com/users/HenryRDavis/followers')
            .then(res => {
                this.setState({ 
                    userProfiles: res.data, 
                })
            })
            .catch(err => {
                console.log(err, 'Dang, try again');
            })
    }

    render() {
        return (
            <div>{
                this.state.userProfiles.map((item) => ( 
                    <div className='gitCard'> 
                        <StyledImg>
                        <img id='av'src={item.avatar_url} alt={`photo of ${item.login}`}/>
                        <img id='other' src='https://media1.tenor.com/images/c9fb849bef199916891b147fe279bdc7/tenor.gif'/>
                        </StyledImg>
                        <StyledDiv> 
                        <h2> Name: <br/>{item.login}</h2>
                        <h2> Bio: <br/>{item.bio}</h2>
                        </StyledDiv>
                    </div>
                    ))
            }
            </div>
        );
    }
}

export default Usercard;