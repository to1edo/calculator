import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    background:{
        flex:1,
        backgroundColor: 'black'
    },
    calculatorContainer:{
        flex:1,
        justifyContent: 'flex-end',
    },
    result:{
        color: 'white',
        fontSize: 60,
        textAlign: 'right',
        marginBottom: 10,
        paddingRight: 10
    },
    smallResult:{
        color: 'rgba(255,255,255,0.5)',
        fontSize: 30,
        textAlign: 'right',
        paddingRight: 10
    },
    rowsButton:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginBottom: 18,
    },
    button:{
        height: 80,
        width: 80,
        borderRadius: 100,
        justifyContent: 'center',
        marginHorizontal: 10,
        marginBottom: 10,
    },
    buttonText:{
        fontSize: 30,
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
        padding: 10
    }
})