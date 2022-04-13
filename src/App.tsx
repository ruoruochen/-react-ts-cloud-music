import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '@/store';
import routesList from './routes/index';
import LazyComponent from '@/components/lazy-component';
const App: React.FC = () => {
    return (
        <Provider store={store}>
            <div className="App">
                <Router>
                    <Routes>
                        {routesList.map(({ path, element, ...rest }) => (
                            <Route
                                path={path}
                                element={<LazyComponent component={element} />}
                                key={path}
                                {...rest}
                            ></Route>
                        ))}
                    </Routes>
                </Router>
            </div>
        </Provider>
    );
};

export default App;
