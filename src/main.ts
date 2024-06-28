import { createApp } from 'vue';
import { VueDraggableNext } from 'vue-draggable-next';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/style.less';

const app = createApp(App);
app.component('DraggableNext', VueDraggableNext);
app.use(store);
app.use(router);
app.mount('#app');
// const customApp = defineCustomElement(App);
// customElements.define('app-component', customApp);
