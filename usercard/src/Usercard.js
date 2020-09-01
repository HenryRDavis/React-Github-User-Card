import React from 'react';
import axios from 'axios';
import './App.css';
import styled from 'styled-components'

const StyledDiv = styled.div`
display:flex;
flex-direction:column;
background-color:white;
color:black;
&:hover{
    background-image: url('https://i.gifer.com/77nH.gif');
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
                        <img src={item.avatar_url} alt={`photo of ${item.login}`}/>
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