import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/Home.vue'
import UserMenu from './components/administration/vue-table-users.vue'
import RolMenu from './components/administration/vue-table-rol.vue'
import Projects from './components/desarrollo/vue-table-projects.vue'
import ProjectTasks from './components/desarrollo/table-tasks-projects.vue'
import TasksEdit from './components/desarrollo/tasks-edit.vue'




Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home, name: 'home' },
  { path: '/trazabilidad', component: Projects, name: 'traceability-menu' },
  { path: '/trazabilidad/administracion/usuarios', component: UserMenu, name: 'administration-user-menu'},
  { path: '/trazabilidad/administracion/roles', component: RolMenu, name: 'administration-rol-menu'},
  { path: '/trazabilidad/desarrollo/taskmenu', component: ProjectTasks, name: 'desarrollo-task-menu'},
  { path: '/trazabilidad/desarrollo/tareas/:id', component: TasksEdit, name: 'desarrollo-task-edit'},                
]
export default routes;