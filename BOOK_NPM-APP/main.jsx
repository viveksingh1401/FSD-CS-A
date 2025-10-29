import ReactDOM from 'react-dom/client';
import './App.css'
import App from './MyApp.jsx';

const parent=document.getElementById("root");
const root=ReactDOM.createRoot(parent);
root.render(<App/>);