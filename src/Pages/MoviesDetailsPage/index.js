import { Text, View } from "react-native";

export default function Details({ route }){

    console.log(route)
    // CONSOLE.LOG e seu senhor seu pastor e nada lhe faltara , estava perdido mas ele salvou
    
    return(
        <View>
            <Text>Detalhes do Filme</Text>
            <Text>{route.params.props.sinopse}</Text>
        </View>
    )
}