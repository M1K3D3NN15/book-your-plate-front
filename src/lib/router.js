import HomeClient from "../components/client/home.js";
import AboutUs from "../components/client/aboutUs.js";

export default [
  {
    path: "/",
    exact: true,
    component: HomeClient
  },
  {
    path: "/about-us",
    component: AboutUs
  }
]
