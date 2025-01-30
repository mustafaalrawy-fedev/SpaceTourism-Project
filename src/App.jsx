import { RouterProvider } from 'react-router-dom';
import { Router } from './router/router';
import { Provider } from 'react-redux';
import { store } from './store';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={Router} />
      </Provider>
    </>
  );
};

export default App;
