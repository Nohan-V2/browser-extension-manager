import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header.jsx"
import TitleWrapper from "./components/TitleWrapper.jsx"
import SelectorContainer from "./components/SelectorContainer.jsx"
import ListCard from "./components/ListeCard.jsx"
import Card from "./components/Card.jsx"
import InfoCard from "./components/InfoCard.jsx"


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
      {userData.map((user) => (
        <Card>
          <InfoCard>
            <img src={user.logo} alt={user.name} />
          </InfoCard>
        </Card>
      ))}
      </ListCard>
    </main>
  );
}

export default App;
