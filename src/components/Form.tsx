import React from "react";

type FormPropsType = {
  city: string;
  setCity: React.Dispatch<React.SetStateAction<string>>;
  getWeather: (e: React.FormEvent<HTMLFormElement>) => void;
};

const Form = ({ city, setCity, getWeather }: FormPropsType) => {
  return (
    <form onSubmit={getWeather}>
      <input
        type="text"
        name="city"
        placeholder="city"
        onChange={(e) => setCity(e.target.value)}
        value={city}
      />
      <button type="submit">Get Weather</button>
    </form>
  );
};

export default Form;
