import useFetchWeather from "../hooks/useFetchWeather";

const App = () => {
  const { loading, weatherResult } = useFetchWeather();

  const mapContent = () => {
    const ListedItem = weatherResult?.forecast?.forecastday.map((result) => {
      return (
        <li role="items" key={result.date}>
          {result.date}
        </li>
      );
    });

    return ListedItem;
  };
  return (
    <div>
      <p> Weather</p>
      {loading ? <p>loading...</p> : ""}

      <ul>{mapContent()}</ul>
    </div>
  );
};

export default App;
