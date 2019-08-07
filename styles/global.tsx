import { StyleSheet } from 'react-native'
import { mainAppColor } from './colors'

export const EmptySectionStyle = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});
export const viewStyle = StyleSheet.create({
    main: {
        flex: 1,
        flexGrow: 1,
        backgroundColor: 'rgb(240,240,240)'
    },
    singleElement: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: 50,
        backgroundColor: 'white',
        marginVertical: 3
    }
})

export const HeaderStyle = {
    headerStyle: {
        backgroundColor: mainAppColor
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
        fontWeight: "bold"
    }
}

export const FloatingButton = StyleSheet.create({
    Container: {
        position: "absolute",
        bottom: 12,
        left: 0,
        right: 0,
        height: 50
    },
    Button: {
        width: 120,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: 'center',
        borderRadius: 50,
        backgroundColor: 'rgba(51, 102, 153, 0.6)'

    }
})

const Button = StyleSheet.create ({
    Default: { 
        flex:1,
        height: 50,
        alignItems: "center",
        justifyContent: "center"
    }
})

export const Ribbon = StyleSheet.create({
    Container: {
        left: 0,
        right: 0,
        flexDirection: "row"
    },
    CancelButton: {
        backgroundColor: 'rgb(153, 0, 0)',
        ...Button.Default
    },
    ActionButton: {
        backgroundColor: 'rgb(51, 102, 153)',
        ...Button.Default
    },
    ButtonText: {
        color: 'white',
        fontWeight: '500',
        fontSize: 15
    },
    DisabledButton: {
        backgroundColor: 'rgb(153, 153, 153)',
        ...Button.Default
    }
})

let bottomLine = () => ({
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    paddingHorizontal: 5
})

export const Inputs = StyleSheet.create ({
    Multiline: {
        width: "85%",
        height: 120,
        textAlignVertical: "bottom",
        paddingBottom: 5,
        fontSize: 17,
        ...bottomLine()
    },
    SingleLine: {
        width: "85%",
        height: 40,
        ...bottomLine()
    },
    Title: {
        width: "60%",
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 20
    }
})
