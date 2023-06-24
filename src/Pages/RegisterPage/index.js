import { Link } from "@react-navigation/native";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";

import styles from "./styles";

export default function RegisterPage(){
    return(
        <View style={styles.container}>
            <Image source={require('../../assets/imgs/filme3.png')} style={styles.imgLogo}/>
            <TextInput placeholder="username:" style={styles.input}/>
            <TextInput placeholder="email:" style={styles.input}/>
            <TextInput placeholder="senha:" style={styles.input}/>
            <TouchableOpacity style={styles.button}>
                <Text>
                    Registrar
                </Text>
            </TouchableOpacity>
            <View style={styles.ViewLinks}>
                <Link to={{screen:"RecoverPage"}}>Esqueceu a senha?</Link>
            </View>
        </View>
    )
}