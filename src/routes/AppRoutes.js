import { createNativeStackNavigator } from "@react-navigation/native-stack"
import MoviesPage from "../Pages/MoviesPage"
import Details from "../Pages/MoviesDetailsPage"

const Stack = createNativeStackNavigator()

export default function AppRoutes(){
    return(
        <Stack.Navigator>
            <Stack.Screen name='PageMovies' component={MoviesPage} options={{headerShown:false}}/>
            <Stack.Screen name='MovieDetails' component={Details}/>
        </Stack.Navigator>
    )
}