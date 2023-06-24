import { Link } from "@react-navigation/native";
import { useContext } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";

import AuthContext from "../../contexts/AuthContext";
import styles from "./styles";

export default function LoginPage(){

    const { signIn } = useContext(AuthContext)

    return(
        <View style={styles.container}>
            <Image source={require('../../assets/imgs/filme3.png')} style={styles.imgLogo}/>
            <TextInput placeholder="email:" style={styles.input}/>
            <TextInput placeholder="senha:" style={styles.input}/>
            <TouchableOpacity style={styles.button} onPress={() => signIn()}>
                <Text>
                    Login
                </Text>
            </TouchableOpacity>
            <View style={styles.ViewLinks}>
                <Link to={{screen:"RegisterPage"}}>Registre-se</Link>
                <Link to={{screen:"RecoverPage"}}>Esqueceu a senha?</Link>
            </View>
        </View>
    )
}