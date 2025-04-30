import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header.jsx"
import TitleWrapper from "./components/TitleWrapper.jsx"
import SelectorContainer from "./components/SelectorContainer.jsx"
import ListCard from "./components/ListeCard.jsx"
import Card from "./components/Card.jsx"
import InfoCard from "./components/InfoCard.jsx"
import DescriptionCard from "./components/DescriptionCard.jsx"
import CardBtnWrapper from "./components/CardBtnWrapper.jsx"


function App() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    async function getData() {
      const res = await fetch("../data.json");
      const data = await res.json();

      setUserData(data);
    }

    getData();
  }, []);

  // Fonction pour supprimer une extension
  const handleRemove = (index) => {
    const updatedUserData = userData.filter((_, i) => i !== index);
    setUserData(updatedUserData);
  };

  console.log(userData);

  return (
    <main className="main-container">
      <Header>
        <img src="/images/logo.svg" alt="Logo" />
      </Header>

      <TitleWrapper>
      <h1 className="title-extension">Extensions List</h1>

      <SelectorContainer />
      </TitleWrapper>

      <ListCard>
      {userData.map((user, index) => (
        <Card key={index}>
          <InfoCard>
            <img src={user.logo} alt={user.name} />
            <DescriptionCard>
              <h2 className="title-extension">{user.name}</h2>
              <p className="description-extension">{user.description}</p>
            </DescriptionCard>
          </InfoCard>

          <CardBtnWrapper>
            <button onClick={() => handleRemove(index)}>Remove</button>

            <input type="checkbox" name="slider" id="slider" />
          </CardBtnWrapper>
        </Card>
      ))}
      </ListCard>
    </main>
  );
}

export default App;
