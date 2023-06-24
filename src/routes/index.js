import { ActivityIndicator, StyleSheet, View } from "react-native";

import { useAuth } from "../contexts/AuthContext";
import AppRoutes from "./AppRoutes";
import AuthRoutes from "./AuthRoutes";

export default function Routes(){

    const { logado, loading } = useAuth()
    
    if(loading){
        return(
            <View style={styles.container}>
                <ActivityIndicator size={"large"} />
            </View>
        )
    }

    return(
        logado == true ? <AppRoutes />:
        <AuthRoutes />
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });