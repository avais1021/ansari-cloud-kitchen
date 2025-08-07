import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UserContext from './context/UserContext.jsx'
import { Provider } from 'react-redux'
import store from './reduxtoolkit/store.js'

createRoot(document.getElementById('root')).render(
  <UserContext>
  <Provider store={store}>
    <App />
  </Provider>
  </UserContext>
)
