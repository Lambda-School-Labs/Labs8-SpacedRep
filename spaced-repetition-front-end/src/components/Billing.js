import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Elements, StripeProvider } from 'react-stripe-elements';
import CheckoutForm from './CheckoutForm';
import '../App.css';

const Billing = (props) => {
  const { profile, handleUpdateTier } = props;
  return (
    <StripeProvider apiKey="pk_test_KoWcK14l0HlLnKEAFc9icsPa">
      {profile && profile.tier === 'paid' ? (
        <Container>
          <InnerContainer>
            <Header>
              <Tier>FREE</Tier>
            </Header>
            <Card>
              <Price>
                <span>0</span>
                .00/mo
              </Price>
              <ItemContainerContainer>
                <ItemContainer>
                  <Item>
                    <i className="fas fa-check fs-2x" />
                    <ItemName>Code Snippets</ItemName>
                  </Item>
                </ItemContainer>
                <ItemContainer>
                  <Item>
                    <i className="fas fa-check fs-2x" />
                    <ItemName>Built-in SRS</ItemName>
                  </Item>
                </ItemContainer>
                <ItemContainer>
                  <Item>
                    <i className="fas fa-check fs-2x" />
                    <ItemName>Team Support</ItemName>
                  </Item>
                </ItemContainer>
                <ItemContainer>
                  <Item>
                    <i className="fas fa-check fs-2x" />
                    <ItemName>Deck Sharing</ItemName>
                  </Item>
                </ItemContainer>
                <ItemContainer>
                  <Item>
                    <i className="fas fa-check fs-2x" />
                    <ItemName>Training Mode</ItemName>
                  </Item>
                </ItemContainer>
                <ItemContainer>
                  <Item>
                    <i className="fas fa-check fs-2x" />
                    <ItemName>3 Decks/150 Cards</ItemName>
                  </Item>
                </ItemContainer>
              </ItemContainerContainer>
            </Card>
          </InnerContainer>
          <ButtonContainer>
            <TextContainer>
              <Text>Subscribe now</Text>
              <Pointers>
                <span role="img" aria-label="White Right Pointing Backhand Index">
                  👉 👉 👉
                </span>
              </Pointers>
            </TextContainer>
            <Elements>
              <CheckoutForm handleUpdateTier={handleUpdateTier} profile={profile} />
            </Elements>
          </ButtonContainer>
        </Container>
      ) : (
        <Container>
          <InnerContainer>
            <Header>
              <Tier>UNLIMITED</Tier>
            </Header>
            <Card>
              <Price>
                <span>9</span>
                .99/mo
              </Price>
              <ItemContainerContainer>
                <ItemContainer>
                  <Item>
                    <i className="fas fa-check fs-2x" />
                    <ItemName>Code Snippets</ItemName>
                  </Item>
                </ItemContainer>
                <ItemContainer>
                  <Item>
                    <i className="fas fa-check fs-2x" />
                    <ItemName>Built-in SRS</ItemName>
                  </Item>
                </ItemContainer>
                <ItemContainer>
                  <Item>
                    <i className="fas fa-check fs-2x" />
                    <ItemName>Team Support</ItemName>
                  </Item>
                </ItemContainer>
                <ItemContainer>
                  <Item>
                    <i className="fas fa-check fs-2x" />
                    <ItemName>Deck Sharing</ItemName>
                  </Item>
                </ItemContainer>
                <ItemContainer>
                  <Item>
                    <i className="fas fa-check fs-2x" />
                    <ItemName>Training Mode</ItemName>
                  </Item>
                </ItemContainer>
                <ItemContainer>
                  <Item>
                    <i className="fas fa-check fs-2x" />
                    <ItemName>Unlimited Usage</ItemName>
                  </Item>
                </ItemContainer>
              </ItemContainerContainer>
            </Card>
          </InnerContainer>
          <ButtonContainer>
            <TextContainer>
              <Text>Subscribe now</Text>
              <Pointers>
                <span role="img" aria-label="White Right Pointing Backhand Index">
                  👉 👉 👉
                </span>
              </Pointers>
            </TextContainer>
            <Elements>
              <CheckoutForm handleUpdateTier={handleUpdateTier} profile={profile} />
            </Elements>
          </ButtonContainer>
        </Container>
      )}
    </StripeProvider>
  );
};

export default Billing;

Billing.propTypes = {
  profile: PropTypes.instanceOf(Object).isRequired,
  handleUpdateTier: PropTypes.instanceOf(Function).isRequired,
};

// styles

const Container = styled.div`
  // border: 1px solid black;
  display: flex;
  width: 50%;
  flex-direction: column;

  @media (max-width: 500px) {
    width: 100%;
    padding: 30px 0 0 0;
  }
`;

const InnerContainer = styled.div`
  border: 1px solid gray;
  background-color: #3c4f5d;
  width: 100%;
  margin-bottom: 20px;

  @media (max-width: 600px) {
    width: 100%;
    box-shadow: none;
  }
`;

const Header = styled.div`
  // border: 1px solid black;
  width: 100%;
  display: flex;
  flex-direction: column;
  text-shadow: 1px 1px 2px black;
`;

const Tier = styled.p`
  // border: 1px solid black;
  letter-spacing: 5px;
  font-size: 40px;
  font-weight: bold;
  padding: 20px 0 20px 0;
  text-align: center;
  background: lightseagreen;
`;

const Card = styled.ul`
  width: 100%;
  // border: 1px solid black;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 20px 0 20px 0;
`;

const Price = styled.p`
  // border: 1px solid black;
  border-right: 1px solid gray;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-shadow: 1px 1px 2px black;
  letter-spacing: 5px;
  font-size: 30px;
  font-weight: bold;
  padding-left: 20px;
  span {
    font-size: 90px;
  }
`;

const ItemContainerContainer = styled.div`
  width: 50%;
  padding-right: 20px;
`;

const ItemContainer = styled.div``;

const Item = styled.li`
  // border: 1px solid black;
  display: flex;
  flex-direction: row;
  padding: 10px 0 10px 0;

  i {
    // border: 1px solid black;
    text-align: center;
    width: 50%;
  }
`;

const ItemName = styled.div`
  // border: 1px solid black;
  text-align: left;
  width: 50%;
`;

const ButtonContainer = styled.div`
  // border: 1px solid black;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Text = styled.div`
  font-size: 25px;
  margin: 0 0 10px 0;
  text-shadow: 1px 1px 2px black;
`;

const Pointers = styled.div`
  font-size: 30px;
`;
