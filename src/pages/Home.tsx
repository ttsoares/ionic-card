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
      <IonContent>
        <div className="bg-[#19a1ae] w-full h-full relative place-content-center">
          <img
            className="absolute -top-[60%] -left-[20%]"
            src="/assets/images/bg-pattern-top.svg"
            alt="top bg"
          />
          <img
            className="absolute -bottom-[90%] -right-[15%]"
            src="/assets/images/bg-pattern-bottom.svg"
            alt="bottom bg"
          />
          {/*  */}
          <IonGrid className=" w-[90%] md:w-[30%] h-[60%] ion-no-padding relative">
            <IonRow className="h-[37%] w-full bg-[url('/assets/images/bg-pattern-card.svg')] rounded-t-2xl"></IonRow>
            <IonRow className="h-[33%] w-full bg-white text-black ion-justify-content-center">
              <IonCol className="text-center">
                <img
                  src="/assets/images/image-victor.jpg"
                  className="rounded-full absolute -top-12 right-0 left-0 m-auto border-4 border-white"
                />
                <h1 className="mt-20 font-bold">
                  Victor Crest{" "}
                  <span className="text-[#6b7082] text-lg pl-2">26</span>
                </h1>
                <h2 className="text-sm text-[#6b7082]  mt-2 mb-8">London</h2>
                <p className="w-full h-0.5  bg-[#dadbdf]"></p>
              </IonCol>
            </IonRow>
            <IonRow className="h-[31%] w-full bg-white rounded-b-2xl pt-12">
              <IonGrid className=" text-black mt-2">
                <IonRow className="text-center font-bold pb-2">
                  <IonCol>
                    <h1>80K</h1>
                  </IonCol>
                  <IonCol>
                    <h1>803K</h1>
                  </IonCol>
                  <IonCol>
                    <h1>1.2K</h1>
                  </IonCol>
                </IonRow>
                <IonRow className="text-center  text-xs text-[#6b7082]">
                  <IonCol>
                    <h2>Folowers</h2>
                  </IonCol>
                  <IonCol>
                    <h2>Likes</h2>
                  </IonCol>
                  <IonCol>
                    <h2>Photos</h2>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonRow>
          </IonGrid>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
