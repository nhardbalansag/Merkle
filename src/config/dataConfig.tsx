import HomePage from "../screens/home/homepage";
import NewsDetails from "../screens/news_details/news_details";

import { colors } from "../asset/css/basestyle";

const Stack_AppScreenData = [
    {
        // set up screen
        name:"HomePage", 
        component: HomePage, 
        title: 'Home', 
        header:{
            headerTintColor: colors.lightColor,
            backgroundColor: colors.MERKLE_HEADER_BG,
            height: 60,
            fontSize: 20,
            fontWeight: 'bold',
        }
    },
    {
        // set up screen
        name:"NewsDetails", 
        component: NewsDetails, 
        title: 'Details', 
        header:{
            headerTintColor: colors.lightColor,
            backgroundColor: colors.MERKLE_HEADER_BG,
            height: 60,
            fontSize: 20,
            fontWeight: 'bold',
        }
    },
]

export {Stack_AppScreenData}