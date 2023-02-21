import React from 'react';
import logo from './logo.svg';
import './App.css';
import { 
  IonCard, 
  IonCardContent, 
  IonCardHeader, 
  IonCardSubtitle, 
  IonCardTitle, 
  IonDatetime } from '@ionic/react';

const App = () => {
  return (
    <>
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>Card Title</IonCardTitle>
        <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>
        Here's a small text description for the card content. Nothing more, nothing less.
        <IonDatetime></IonDatetime>
      </IonCardContent>
    </IonCard>
    </>
  );
}

export default App;
