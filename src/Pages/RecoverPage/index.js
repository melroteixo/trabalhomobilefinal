import { Link } from "@react-navigation/native";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";

import styles from "./styles";

export default function RecoverPage(){
    return(
        <View style={styles.container}>
            <Image source={require('../../assets/imgs/filme3.png')} style={styles.imgLogo}/>
            <TextInput placeholder="email:" style={styles.input}/>
            <TouchableOpacity style={styles.button}>
                <Text>
                    Recuperar
                </Text>
            </TouchableOpacity>
            <View style={styles.ViewLinks}>
                <Link to={{screen:"RegisterPage"}}>Registre-se</Link>
            </View>
        </View>
    )
}