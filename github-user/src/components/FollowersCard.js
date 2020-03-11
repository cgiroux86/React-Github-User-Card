import React from 'react';
import reactstrap, {Card, CardImg, CardText, CardBody, CardLink, CardTitle, CardSubtitle} from 'reactstrap'
import styled from 'styled-components'

const CardContainer = styled(Card)`{
  color: white;
  font-weight: bold;
  border: 2px solid lime;
  width: 30%;
  margin: 10px auto;
  background: black;
}`

const FollowersCard = (props) => {
    return (
        <CardContainer>
            <CardBody>
          <CardTitle>{props.name}</CardTitle>
            </CardBody>
          <img className='img' src={props.photo}/> 
          <CardBody>
            <CardLink href={props.url}>See My Github</CardLink>
          </CardBody>  
        </CardContainer>
    );
};

export default FollowersCard;