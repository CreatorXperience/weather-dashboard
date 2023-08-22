import useFetchWeather from "./hooks/useFetchWeather";

const App = () => {
  const { weatherResult } = useFetchWeather();
  return (
    <div>
      {weatherResult?.map((result) => {
        return <li key={result.date}>{result.date}</li>;
      })}
    </div>
  );
};

export default App;
