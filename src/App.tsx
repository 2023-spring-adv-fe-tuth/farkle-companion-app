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
  IonTitle,
  IonToolbar} from '@ionic/react';

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
   
   <IonHeader>
        <IonToolbar>
          <IonTitle>
            Header
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      {/* <IonContent className="ion-padding">
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <h5>Heading 5</h5>
        <h6>Heading 6</h6>

        <p>Here's a small text description for the content. Nothing more, nothing less.</p>
      </IonContent> */}
      <IonFooter>
        <IonToolbar>
          <IonTitle>
            Footer
          </IonTitle>
        </IonToolbar>
      </IonFooter>
    </>
  );
}

export default App;
