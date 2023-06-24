import React, { useState } from "react";
import { ThemeContext } from "./context/index.tsx";
import StarRating from "./components/StarRating";
import Layout from "./layout/index.tsx";

const App: React.FC = () => {
  const [state, setState] = useState({
    rating: 0,
    isValid: true
  })

  const handleRatingChange = (newRating: number) => {
    // Perform any validation logic here i.e. 1 - 5 value is valid only
    if (newRating >= 0 && newRating <= 5) {
      setState({
        ...state,
        rating: newRating,
        isValid: true
      });
    } else {
      setState({
        ...state,
        isValid: false
      });
    }
  };

  const isBrowserDefaulDark = () =>
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  const getDefaultTheme = (): string => {
    const localStorageTheme = localStorage.getItem("default-theme");
    const browserDefault = isBrowserDefaulDark() ? "dark" : "light";
    return localStorageTheme || browserDefault;
  };

  const [theme, setTheme] = useState(getDefaultTheme());

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`theme-${theme}`}>
        <Layout title="User's Rating">
          <div className="rating-main">
            <StarRating
              rating={state?.rating}
              onChange={handleRatingChange}
              isValid={state?.isValid}
              theme={theme}
            />
          </div>
        </Layout>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
