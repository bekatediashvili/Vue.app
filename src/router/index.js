import { createRouter, createWebHashHistory } from 'vue-router'
import {useStoreAuth} from '../store/storeAuth'
import ViewNotes from '../views/ViewNotes.vue'
import ViewStats from '../views/ViewStats.vue'
import ViewEdite from '../views/ViewEdit.vue'
import Auth from '../views/ViewAuth.vue'



const routes =[
 {
            path: '/',
            name: 'notes',
            component:ViewNotes
        },
        {
            path: '/stats',
            name: 'stats',
            component: ViewStats,
    },
    {
        path: '/editNote/:id',
        name: 'edit',
        component:ViewEdite
        },{
        path: '/auth',
        name: 'auth',
        component:Auth
        }
    ]


const router = createRouter({
    history: createWebHashHistory(),
    routes
       
    
})
router.beforeEach(async (to, from) => {
    const authStore = useStoreAuth()
    console.log('to:', to)
    if (!authStore.user.id && to.name !== 'auth') {
      return {name:'auth'}
    }
    if (authStore.user.id && to.name === 'auth') {
        return false
    }
})

export default router