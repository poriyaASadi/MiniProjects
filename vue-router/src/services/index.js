import { createWebHistory, createRouter } from "vue-router";
import AboutProduct from '../views/AboutProduct.vue'
import HomePage from '../views/HomePage.vue'
import ProductInfo from '../views/ProductInfo.vue'
const routes = [
    {
        path : '/' ,
        name : 'Home',
        component : HomePage
    },
 {
    path : "/aboutproduct" ,
    name : 'AboutProduct',
    component : AboutProduct
 },
 {
    path : '/productinfo/:id',
    name : 'productinfo',
    component : ProductInfo
 }
];
const router = createRouter({
    history : createWebHistory(),
    routes,
})
export default router