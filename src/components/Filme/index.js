import { Link } from "@react-navigation/native";
import { Button, Image, Text, View } from "react-native";

import styles from "./style";

const apiSource = 'https://api.otaviolube.com'
export default function Filme(props){
    return(
        <View style={styles.container}>
            <View style={styles.vimg}>
                <Image style={styles.img} source={{uri: apiSource + props.filme.poster.data.attributes.url}} />
            </View>
            <View style={styles.body}>
                <Text style={styles.titulo}>{props.filme.titulo}</Text>
                <Text style={styles.sinop} numberOfLines={7} ellipsizeMode="tail" >
                    {props.filme.sinopse}
                </Text>
                <Link to={{screen: "MovieDetails" , params:{props: props.filme}}}>
                    Saiba mais ... 
                </Link>
                <Button title="Comprar"></Button>
                {/*<touchableOpacity><text></></> é tipo button so que aceita style */}
            </View>
        </View>
    )
}
//numberOfLines={7} ellipsizeMode="tail"