
import React from 'react';
import '../src/assets/Style/Style.css'
import routes from './routes';
import Header from './components/header/header';
import { Switch, Route } from 'react-router-dom';
import { Helmet } from "react-helmet";
import Cursor from "./components/cursor/cursor"
import CursorTrail from "./components/cursortrail/cursortrail"
function App() {

  return (
    <div className="App">
         <Helmet>
        <meta charSet="utf-8" />
        <meta name="author" content="Your Name or Company" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>
        <Cursor/>
        <CursorTrail/>
        <Header />
       <div className="routes">
                        {/* --- ИСПОЛЬЗУЕМ Switch И component --- */}
                        <Switch>
                            {routes.map(item => (
                                <Route
                                    key={item.id}
                                    path={item.path}
                                    component={item.component} // Используем component
                                    exact // Добавляем exact для большинства маршрутов
                                />
                            ))}
                        </Switch>
                    </div>
       
                    <script src="https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/gsap.min.js"></script>
       </div>
       
  );
}

export default App;
