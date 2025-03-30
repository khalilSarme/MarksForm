import App from "./App.js";
import Navbar from "./components/Navbar.js";
import Header from "./components/Header.js";
import Container from "./components/Container.js";
import Collection from "./components/Collection.js";
import Button from "./components/Button.js";
import Form from "./components/Form.js";

const {
  createApp
} = Vue;
const VueApp = createApp(App);
VueApp.component('Navbar', Navbar);
VueApp.component('Header', Header);
VueApp.component('Container', Container);
VueApp.component('Collection', Collection);
VueApp.component('Button', Button);
VueApp.component('Form',Form);

VueApp.mount("#app");







