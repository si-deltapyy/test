import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Test</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab" />
        <ion-card>
          <ion-card-header>
            <ion-card-title>Kelompok 5</ion-card-title>
            <ion-card-subtitle>Anjazz</ion-card-subtitle>
          </ion-card-header>

          <ion-card-content>
            - Sijsa <br /> 
            - asda
          </ion-card-content>
        </ion-card>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
