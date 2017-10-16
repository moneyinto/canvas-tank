import { Home } from '../pages/home/home';

export const config = {
    ROUTES: [
        { path: '', component: Home },
        { path: 'home', component: Home }
    ],

    DECLARATIONS: [
        Home
    ]
}
