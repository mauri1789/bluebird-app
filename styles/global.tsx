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