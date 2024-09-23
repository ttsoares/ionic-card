import {
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonImg,
  IonItem,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

const Home = () => {
  return (
    <IonPage>
      <IonContent className="">
        <div className="bg-[#19a1ae] w-full h-full relative place-content-center">
          <img
            className="absolute -top-[60%] -left-[20%]"
            src="/assets/images/bg-pattern-top.svg"
            alt="top bg"
          />
          <IonGrid className="border-orange-600 border-2 w-[30%] h-[50%] rounded-2xl ion-no-padding">
            <IonRow className="ion-align-items-center ion-justify-content-center">
              <IonCol className="ion-align-items-center ion-justify-content-center">
                <IonGrid className="h-full ion-no-padding">
                  <IonRow>
                    <IonCol>
                      <div className=" flex flex-col justify-center items-center w-full h-[50%]">
                        <img src="/assets/images/bg-pattern-card.svg" />
                      </div>
                    </IonCol>
                  </IonRow>
                  {/*  */}
                  <IonRow>
                    <IonCol>
                      <img
                        src="/assets/images/image-victor.jpg"
                        className="rounded-full"
                      />
                    </IonCol>
                  </IonRow>
                  {/*  */}
                  <IonRow className="bg-white h-[40%]">
                    <IonCol>
                      <div className="flex justify-around items-center w-full h-[50%] text-black">
                        <h2>80K</h2>
                        <h2>803K</h2>
                        <h2>1.4K</h2>
                      </div>
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonCol>
            </IonRow>
          </IonGrid>
          <img
            className="absolute -bottom-[90%] -right-[15%]"
            src="/assets/images/bg-pattern-bottom.svg"
            alt="bottom bg"
          />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
