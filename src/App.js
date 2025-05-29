
import React from 'react';
import '../src/assets/Style/Style.css'
import routes from './routes';
import Header from './components/header/header';
import { Switch, Route } from 'react-router-dom';
function App() {

  return (
    <div className="App">
        
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
       </div>
  );
}

export default App;
