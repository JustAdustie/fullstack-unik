import About from "./pages/About"
import Admin from "./pages/Admin"
import Auth from "./pages/Auth"
import Contacts from "./pages/Contacts"
import ItemPage from "./pages/ItemPage"
import Shop from "./pages/Shop"

import { ABOUT_ROUTE, ADMIN_ROUTE, CONTACTS_PAGE, ITEM_ROUTE, LOGIN_ROUTE, REGISTARTION_ROUTE, SHOP_ROUTE } from "./utils/consts"

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: <Admin/>
    },
    {
        path: ABOUT_ROUTE,
        Component: <About/>
    },
    {
        path: CONTACTS_PAGE,
        Component: <Contacts/>
    },
]
export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: <Auth/>
    },
    {
        path: REGISTARTION_ROUTE,
        Component: <Auth/>
    },
    {
        path: ITEM_ROUTE + '/:id',
        Component: <ItemPage/>
    },
    {
        path: SHOP_ROUTE,
        Component: <Shop/>
    },
    {
        path: ABOUT_ROUTE,
        Component: <About/>
    },
    {
        path: CONTACTS_PAGE,
        Component: <Contacts/>
    },

]
