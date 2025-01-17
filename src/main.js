import "./styles/global.css";
import "./styles/select.css";

import Vue from 'vue';
import VueRouter from "vue-router";
// import Vuex from "vuex"
// import ElementUI from "element-ui";
import {
  Button,
  RadioButton,
  RadioGroup,
  Radio,
  Checkbox,
  Dialog,
  Input,
  Select,
  Option,
  OptionGroup,
  Tabs,
  TabPane,
  Tag,
  Alert,
  Slider,
  Icon,
  Row,
  Col,
  Card,
  Collapse,
  CollapseItem,
  Container,
  Aside,
  Main,
  Divider,
  Image,
  Message,
  MessageBox,
  Menu,
  MenuItem,
  MenuItemGroup,
  Breadcrumb,
  BreadcrumbItem,
  Loading,
  Drawer,
  Timeline,
  TimelineItem,
  Switch,
  InputNumber,
} from "element-ui";

Vue.use(InputNumber);
Vue.use(Switch);
Vue.use(Timeline);
Vue.use(TimelineItem);
Vue.use(Drawer);
Vue.use(Loading);
Vue.use(Dialog);
Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
Vue.use(Input);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(RadioButton);
Vue.use(Checkbox);
Vue.use(Select);
Vue.use(Option);
Vue.use(OptionGroup);
Vue.use(Button);
Vue.use(Breadcrumb);
Vue.use(BreadcrumbItem);
Vue.use(Tabs);
Vue.use(TabPane);
Vue.use(Tag);
Vue.use(Alert);
Vue.use(Slider);
Vue.use(Icon);
Vue.use(Row);
Vue.use(Col);
Vue.use(Card);
Vue.use(Collapse);
Vue.use(CollapseItem);
Vue.use(Container);
Vue.use(Aside);
Vue.use(Main);
Vue.use(Divider);
Vue.use(Image);

Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$message = Message;

import "element-ui/lib/theme-chalk/index.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faGithub
} from "@fortawesome/free-brands-svg-icons";
import {
  faQuestionCircle,
  faPercent,
  faComment,
  faDatabase,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import VueAxios from "vue-axios";

import Router from "./common/router";
import store from "./common/store";

import App from './App.vue';

Vue.use(VueAxios, axios);
library.add(faGithub, faQuestionCircle, faPercent, faComment, faDatabase);
// import Clipboard from "clipboard";

// new Clipboard(".clip");

Vue.use(VueRouter);
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false

async function mount() {
  new Vue({
    render: h => h(App),
    router: Router,
    store,
  }).$mount('#app');
}

mount();

console.log(`／ ￣￣ ＼
|  ー  ー \\   /￣￣￣￣￣￣￣￣￣￣＼
|   ◉  ◉ |  /                      \\
\\     ▱  / ∠     刻师傅天下第一    /
 ＼      イ   \\                     /
／       ＼    \\___________________/
/  |       \\ \\
|  |        | |
|    |               | |`);