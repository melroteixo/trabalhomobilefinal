import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#FAF9F6',
    },
    imgLogo:{
        height: '200px',
        width: '200px'
    },
    input:{
        border: '2px solid black',
        margin: '2px',
        padding: '5px',
        width: '30%',
        height: 40,
        backgroundColor: 'white',
        borderRadius: 5,
    },
    button:{
        border: '2px solid black',
        padding: '5px',
        width: '30%',
        textAlign: "center",
        backgroundColor: '#89CFF0',
        borderRadius: 5,
    },
    ViewLinks:{
        marginTop: 10,
        flexDirection: "row",
        width: '30%',
        justifyContent: "space-between"
    }
})

export default styles