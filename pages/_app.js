import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";

const initialAnimals = [
  {
    count: 0,
    name: "Cats",
    id: 1,
  },
  {
    count: 0,
    name: "Dogs",
    id: 2,
  },
  {
    count: 0,
    name: "Sheep",
    id: 3,
  },
  {
    count: 0,
    name: "Dragons",
    id: 4,
  },
];

export default function App({ Component, pageProps }) {
  const [animals, setAnimals] = useState(initialAnimals);

  function handleAdd(animalId) {
    setAnimals(
      animals.map((animal) => {
        if (animal.id === animalId) {
          return { ...animal, count: animal.count + 1 };
        } else {
          return animal;
        }
      })
    );
  }

  function handleSubtract(animalId) {
    setAnimals(
      animals.map((animal) => {
        if (animal.id === animalId) {
          return { ...animal, count: Math.max(0, animal.count - 1) };
        } else {
          return animal;
        }
      })
    );
  }

  const animalCounts = animals.map((animal) => {
    return animal.count;
  });
  const countSum = animalCounts.reduce((a, b) => a + b);

  const countAverage = countSum / animals.length;

  const dragonCount = animals.find((animal) => animal.name === "Dragons").count;

  return (
    <>
      <GlobalStyle />
      <Layout dragonCount={dragonCount} countSum={countSum}>
        <Component
          {...pageProps}
          animals={animals}
          handleAdd={handleAdd}
          handleSubtract={handleSubtract}
          dragonCount={dragonCount}
          countSum={countSum}
          countAverage={countAverage}
        />
      </Layout>
    </>
  );
}
