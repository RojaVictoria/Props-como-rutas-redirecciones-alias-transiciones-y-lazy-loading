import Vue from 'vue'
import Router from 'vue-router'
const Inicio = () => import('../views/Inicio.vue')
const SobreMi = () => import('../views/SobreMi.vue')
const Contacto = () => import('../views/Contacto.vue')
const Post = () => import('../views/Post.vue')
import Articulo from '../views/Articulo.vue'
import Administrador from '../views/Administrador.vue'
import AdminSimple from '../views/AdminSimple.vue'
import AdminAvanzado from '../views/AdminAvanzado.vue'
import NotFound from '../views/NotFound.vue'
Vue.use(Router)

export default new Router({
    mode: 'history', 
    routes: [
        {
            path: '/',
            name: 'inicio',
            component: Inicio
        },
        {
            path: "/home",
            redirect: "/"
        },
        {
            path: "/portada",
            redirect: "/"
        },
        {
            path: '/sobremi',
            name: 'sobremi',
            component: SobreMi,
            alias: ['/acerca'],
        },
        {
            path: '/contacto',
            name: 'contacto',
            component: Contacto,
            alias: ['/contactame'],
        },
        {
            path: '/post',
            name: 'post',
            component: Post,
            children: [
                {
                    path: ':articulo',
                    component: Articulo,
                }
            ]
        },
        {
            path: '/administrador',
            name: 'Administrador',
            component: Administrador,
            redirect: '/administrador/simple',
            children: [
                {
                    path: 'simple',
                    name: 'AdministradorSimple',
                    component: AdminSimple
                },
                {
                    path: 'avanzado',
                    name: 'AdministradorAvanzado',
                    component: AdminAvanzado
                },
            ]
        },
        {
            path: '*',
            component: NotFound
        }
    ]
})