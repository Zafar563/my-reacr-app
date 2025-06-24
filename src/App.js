import React, { useState, useEffect } from 'react';
import '../src/assets/Style/Style.css';
import routes from './routes';
import Header from './components/header/header';
import { Switch, Route } from 'react-router-dom';
import { Helmet } from "react-helmet";
import Cursor from "./components/cursor/cursor";
import CursorTrail from "./components/cursortrail/cursortrail";
import Loader from "./components/loader/Loader"; // <-- Loader import

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Bu yerda siz haqiqiy yuklanish vaqtingizni sozlashingiz mumkin
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 sekundlik loading

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="author" content="Your Name or Company" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>

      {loading ? (
        <Loader />
      ) : (
        <>
          <Cursor />
          <CursorTrail />
          <Header />
          <div className="routes">
            <Switch>
              {routes.map(item => (
                <Route
                  key={item.id}
                  path={item.path}
                  component={item.component}
                  exact
                />
              ))}
            </Switch>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
