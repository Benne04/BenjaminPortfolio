
import React, { useState } from 'react';
import styled from 'styled-components';
import { Column } from '../Styles/StyledComponents';

const CenterContainer = styled(Column)`
align - items: center;
justify - content: center;
width: 100 %;
margin: 80px auto 0;
box - sizing: border - box;

@media(max - width: 768px) {
    margin - top: 40px;
}
`;

const ContactContainer = styled(Column)`
width: 30vw;
padding: 30px 60px;
box - sizing: border - box;
align - items: center;

background - color: #121212;
border - radius: 10px;
color: white;

@media(max - width: 768px) {
    width: 90 %;
    max - width: 450px;
    padding: 20px;
}
`;

const Title = styled.h2`
  display: block;
  width: 100%;
  align-self: stretch;
  box-sizing: border-box;
  text-align: center;
  padding: 0;
  margin: 30px 0;

  @media (max-width: 768px) {
    font-size: 1em;
    margin: 20px 0 15px;
  }
`;

const ContactInfo = styled.div`
text - align: center;
margin - bottom: 20px;
font - size: 1rem;
line - height: 1.8;
color: silver;
max-width: 100%;

  p {
    margin: 5px 0;
    white-space: nowrap;
}

  a {
    color: #00ced1;
    text - decoration: none;

    &:hover {
        text - decoration: underline;
    }
}
@media (max-width: 768px) { 
    font-size: 0.9rem;
}
`;

const Input = styled.input`
width: 80 %;
max - width: 400px;
padding: 10px;
margin: 10px 0;
border: none;
border - radius: 5px;
font - size: 16px;
`;

const TextArea = styled.textarea`
width: 80 %;
max - width: 400px;
padding: 10px;
margin: 10px 0;
border: none;
border - radius: 5px;
font - size: 16px;
height: 100px;
`;

const Button = styled.button`
padding: 10px 20px;
margin: 20px 0;
background - color: #4ef542;
color: white;
border: none;
border - radius: 5px;
font - size: 16px;
cursor: pointer;

  &:hover {
    background - color: #1da851;
}
`;

const ContactMe: React.FC = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    const formattedMessage = `Hey, my name is ${ name }\n${ message }`;
    const phoneNumber = process.env.REACT_APP_WA_NUMBER?.replace(/\D/g, '');

    if (!phoneNumber) {
      alert('WhatsApp number is missing. Please check your .env file.');
      return;
    }

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(formattedMessage)}`;
window.open(url, '_blank', 'noopener,noreferrer');
  };

return (
    <CenterContainer>
    <ContactContainer>
    <Title>Contact Me </Title>

        < ContactInfo >
        <p>
        Phone: { ' ' }
<a href="tel:+46768081794" >
    +46 76 808 17 94
        </a>
        </p>

        <p>
Email: { ' ' }
<a href="mailto:Benjamin.ahola2@gmail.com" >
    Benjamin.ahola2@gmail.com
</a>
    </p>
    </ContactInfo>

    < Input
type = "text"
placeholder = "Your Name"
value = { name }
onChange = {(e: React.ChangeEvent<HTMLInputElement>) =>
setName(e.target.value)
          }
        />

    < TextArea
placeholder = "Your Message"
value = { message }
onChange = {(e: React.ChangeEvent<HTMLTextAreaElement>) =>
setMessage(e.target.value)
          }
        />

    < Button onClick = { handleSubmit } >
        Send via WhatsApp
            </Button>
            </ContactContainer>
            </CenterContainer>
  );
};

export default ContactMe;