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

export const HeaderStyle = {
    headerStyle: {
        backgroundColor: mainAppColor
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
        fontWeight: "bold"
    }
}