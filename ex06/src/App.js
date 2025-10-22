import './assets/scss/App.scss';
import logo from './assets/images/logo.svg';

function App() {
    const App = document.createElement('div');
    App.textContent = "Hello Webpack";
    App.className = "Header";
    App.innerHTML = `<img src='${logo}'>`;
    return App;
}

<div class="Header">Hello Webpack <img src="" /></div>

export {App};