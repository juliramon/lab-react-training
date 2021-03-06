import React from 'react';
import './App.css';
import Greetings from './components/Greetings';
import IdCard from './components/IdCard';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';
import Rating from './components/rating/Rating';
import DriverCard from './components/DriverCard';
import LikeButton from './components/LikeButton';
import ClickablePicture from './components/ClickablePicture';
import Dice from './components/Dice';
import Carousel from './components/Carousel';
import NumbersTable from './components/NumbersTable';
import FaceBook from './components/FaceBook';
import SignupPage from './components/SignupPage';
import RGBColorPicker from './components/RGBColorPicker';

function App() {
  const getBirthDate = (date) => {
    const rawDate = new Date(date);
    return rawDate.toDateString();
  };
  const dotHeight = (height) => {
    let cleanHeight = height.toString().split('');
    cleanHeight.splice(cleanHeight.length - 2, 0, '.').join('');
    return cleanHeight.join('');
  };
  const cards = [
    {
      lastName: 'Doe',
      firstName: 'John',
      gender: 'male',
      height: dotHeight(178),
      birth: getBirthDate('1992-07-14'),
      picture: 'https://randomuser.me/api/portraits/men/44.jpg',
    },
    {
      lastName: 'Delores',
      firstName: 'Obrien',
      gender: 'female',
      height: dotHeight(172),
      birth: getBirthDate('1988-05-11'),
      picture: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
  ];
  const cardsList = cards.map((el) => (
    <IdCard
      key={el.lastName}
      lastName={el.lastName}
      firstName={el.firstName}
      gender={el.gender}
      height={el.height}
      birth={el.birth}
      picture={el.picture}
    />
  ));
  const generateRandomCardNumber = () => {
    return Math.floor(Math.random() * 10 ** 16);
  };
  const generateRandomExpDate = (max, min) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  const creditCards = [
    {
      cardImg: './img/visa.png',
      bank: 'BNP',
      owner: 'Maxence Bouret',
      background: '#11aa99',
      color: '#ffffff',
    },
    {
      cardImg: './img/master-card.svg',
      bank: 'N26',
      owner: 'Maxence Bouret',
      background: '#eeeeee',
      color: '#222222',
    },
    {
      cardImg: './img/visa.png',
      bank: 'BBVA',
      owner: 'Maxence Bouret',
      background: '#ddbb55',
      color: '#ffffff',
    },
  ];
  const creditCardsList = creditCards.map((el, index) => (
    <CreditCard
      key={index}
      cardImg={el.cardImg}
      number={generateRandomCardNumber()}
      expirationMonth={generateRandomExpDate(12, 1)}
      expirationYear={generateRandomExpDate(21, 25)}
      bank={el.bank}
      owner={el.owner}
      background={el.background}
      color={el.color}
    />
  ));
  return (
    <div className="App">
      <div id="IdCard">
        <h3>Iteration 1</h3>
        {cardsList}
      </div>
      <div id="Greetings">
        <h3>Iteration 2</h3>
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="">John</Greetings>
        <Greetings lang="es">Julio</Greetings>
        <Greetings lang="fr">François</Greetings>
      </div>
      <div id="Random">
        <h3>Iteration 3</h3>
        <Random min={1} max={6} />
        <Random min={1} max={100} />
      </div>
      <div id="BoxColor">
        <h3>Iteration 4</h3>
        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />
      </div>
      <div id="CreditCard">
        <h3>Iteration 5</h3>
        <div className="wrapper">{creditCardsList}</div>
      </div>
      <div id="Rating">
        <h3>Iteration 6</h3>
        <Rating>0</Rating>
        <Rating>1.49</Rating>
        <Rating>1.5</Rating>
        <Rating>3</Rating>
        <Rating>4</Rating>
        <Rating>5</Rating>
      </div>
      <div id="DriverCard">
        <h3>Iteration 7</h3>
        <DriverCard
          profilePicture="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
          name="Travis Kalanick"
          rating="4.2"
          car={{
            model: 'Toyota Corolla Altis',
            licensePlate: 'CO42DE',
          }}
        />
        <DriverCard
          profilePicture="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
          name="Dara Khosrowshahi"
          rating="4.9"
          car={{
            model: 'Audi A3',
            licensePlate: 'BE33ER',
          }}
        />
      </div>
      <div id="LikeButton">
        <h3>Iteration 8</h3>
        <LikeButton />
        <LikeButton />
      </div>
      <div id="ClickablePicture">
        <h3>Iteration 9</h3>
        <ClickablePicture
          img="./img/persons/maxence.png"
          imgClicked="./img/persons/maxence-glasses.png"
        />
      </div>
      <div id="Dice">
        <h3>Iteration 10</h3>
        <Dice />
      </div>
      <div id="Carousel">
        <h3>Iteration 11</h3>
        <Carousel
          imgs={[
            'https://randomuser.me/api/portraits/women/1.jpg',
            'https://randomuser.me/api/portraits/men/1.jpg',
            'https://randomuser.me/api/portraits/women/2.jpg',
            'https://randomuser.me/api/portraits/men/2.jpg',
          ]}
        />
      </div>
      <div id="NumbersTable">
        <h3>Iteration 12</h3>
        <NumbersTable limit={12} />
      </div>
      <div id="FaceBook">
        <h3>Iteration 13 & 14</h3>
        <FaceBook />
      </div>
      <div id="SignupPage">
        <h3>Iteration 15</h3>
        <SignupPage />
      </div>
      <div id="RGBColorPicker">
        <h3>Iteration 16</h3>
        <RGBColorPicker />
      </div>
    </div>
  );
}

export default App;
