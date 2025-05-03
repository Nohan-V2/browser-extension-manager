import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import TitleWrapper from "./components/TitleWrapper.jsx";
import SelectorContainer from "./components/SelectorContainer.jsx";
import ListCard from "./components/ListeCard.jsx";
import Card from "./components/Card.jsx";
import InfoCard from "./components/InfoCard.jsx";
import DescriptionCard from "./components/DescriptionCard.jsx";
import CardBtnWrapper from "./components/CardBtnWrapper.jsx";
import ToggleBtn from "./components/ToggleBtn.jsx";

function App() {
  const [userData, setUserData] = useState([]);
  const [filter, setFilter] = useState('All'); 

  useEffect(() => {
    async function getData() {
      const res = await fetch("../data.json");
      const data = await res.json();

      setUserData(data);
    }

    getData();
  }, []);

  const handleRemove = (index) => {
    const updatedUserData = userData.filter((_, i) => i !== index);
    setUserData(updatedUserData);
  };

  const handleToggle = (index) => {
    const updatedUserData = userData.map((user, i) =>
      i === index ? { ...user, isActive: !user.isActive } : user
    );
    setUserData(updatedUserData);
  };

  const handleFilterChange = (selectedFilter) => {
    setFilter(selectedFilter);
  };

  const filteredData = userData.filter((user) => {
    if (filter === 'Active') return user.isActive;
    if (filter === 'Inactive') return !user.isActive;
    return true;
  });

  return (
    <main className="main-container">
      <Header>
        <img src="/images/logo.svg" alt="Logo" />
      </Header>

      <TitleWrapper>
        <h1 className="main-title">Extensions List</h1>
        <SelectorContainer onFilterChange={handleFilterChange} />
      </TitleWrapper>

      <ListCard>
        {filteredData.map((user, index) => (
          <Card key={index} className={filter === 'All' ? '' : user.isActive ? 'active' : 'inactive'}>
            <InfoCard>
              <img src={user.logo} alt={user.name} />
              <DescriptionCard>
                <h2 className="title-extension">{user.name}</h2>
                <p className="description-extension">{user.description}</p>
              </DescriptionCard>
            </InfoCard>

            <CardBtnWrapper>
              <button className="remove-btn" onClick={() => handleRemove(index)}>
                Remove
              </button>

              <ToggleBtn
                isActive={user.isActive}
                onToggle={() => handleToggle(index)}
              />
            </CardBtnWrapper>
          </Card>
        ))}
      </ListCard>
    </main>
  );
}

export default App;
