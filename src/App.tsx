import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import routesList from './routes/index';
import LazyComponent from '@/components/lazy-component';
const App: React.FC = () => {
    return (
        <div className="App">
            <Router>
                <Routes>
                    {routesList.map(({ path, element, ...rest }) => (
                        <Route path={path} element={<LazyComponent component={element} />} key={path} {...rest}></Route>
                    ))}
                </Routes>
            </Router>
        </div>
    );
};

export default App;
