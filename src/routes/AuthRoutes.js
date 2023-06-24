import { createNativeStackNavigator } from "@react-navigation/native-stack"
import LoginPage from "../Pages/LoginPage"
import RegisterPage from "../Pages/RegisterPage"
import RecoverPage from "../Pages/RecoverPage"

const Stack = createNativeStackNavigator()

export default function AuthRoutes(){
    return(
        <Stack.Navigator>
            <Stack.Screen name='LoginPage' component={LoginPage} options={{headerShown:false}}/>
            <Stack.Screen name='RegisterPage' component={RegisterPage}/>
            <Stack.Screen name='RecoverPage' component={RecoverPage}/>
        </Stack.Navigator>
    )
}