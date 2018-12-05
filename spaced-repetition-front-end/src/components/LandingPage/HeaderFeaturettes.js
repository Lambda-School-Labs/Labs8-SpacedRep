import React from 'react';
import styled from 'styled-components';

const info = [
  { icon: 'fa fa-life-ring fa-3x', title: 'Team Support', description: 'Contact our team whenever you have questions or feedback. We love both!' },
  { icon: 'fas fa-share-square fa-3x', title: 'Deck Sharing', description: 'Share your decks with your peers.' },
  { icon: 'fas fa-code fa-3x', title: 'Code Snippets', description: 'We support Javascript, HTML, CSS, and Python as well as images and markdown.' },
];
// fas fa-share-alt
const HeaderFeaturettes = () => {
  return (
    <Container>
      {info.map(featurette => (
        <Featurette key={featurette.title}>
          <h3>{featurette.title}</h3>
          <i className={featurette.icon} aria-hidden="true"></i>
          <p>{featurette.description}</p>
        </Featurette>
      ))}
    </Container>
  );
};

export default HeaderFeaturettes;

// styles

const Container = styled.div`
display: flex;
// padding: 40px 0;
justify-content: space-around;
width: 100%;
// border: 1px solid yellow;
// border: 1px solid yellow;
margin-top: 30px;
height: 200px;
`;

const Featurette = styled.div`
width: 300px;
// border: 1px solid pink;
display: flex;
flex-direction: column;
justify-content: center;
text-align: center;
height: 100%;

i {
  color: lightseagreen;
}

p {
  text-align: left;
}
`;