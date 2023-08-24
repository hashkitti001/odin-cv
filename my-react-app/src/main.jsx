import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import RenderList, {TodoList} from './components/renderList.jsx'
import './index.css'
import Greeting from './components/myComponent.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.Fragment>
    <App />
  </React.Fragment>
)
