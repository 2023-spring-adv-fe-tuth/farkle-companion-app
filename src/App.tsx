// import React from 'react';
// import logo from './logo.svg';

import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonDatetime,
  IonFooter,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/react';

import './App.css';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';
/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css'; // Remove if nothing is visible
import '@ionic/react/css/typography.css';
/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';


const App = () => {
  return (
    <>
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tca Farkle Companion App</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <h1>Content</h1>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Tca Farkle Companion App</IonCardTitle>
            <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
          </IonCardHeader>

          <IonCardContent>
            Here's a small text description for the card content. Nothing more, nothing less.
            <IonDatetime></IonDatetime>
            <IonButton color="success">Start Game</IonButton>
          </IonCardContent>
        </IonCard>
      </IonContent>
      </IonPage>
    </>
  );
}

export default App;
