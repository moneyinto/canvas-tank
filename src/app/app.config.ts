import { Tank } from '../pages/tank/tank';

export const config = {
    ROUTES: [
        { path: '', component: Tank },
        { path: 'tank', component: Tank }
    ],

    DECLARATIONS: [
        Tank
    ]
}
