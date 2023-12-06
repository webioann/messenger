import { SafeAreaView, StatusBar, View } from 'react-native'
import React, { useContext } from 'react'
import { SIZES } from '../constants/SIZES';
import { ColorSchemeContext } from '../context/ColorSchemeContext';

type childrenType = {
    children: JSX.Element | JSX.Element[]
}

const ScreenWrapper: React.FC<childrenType> = ({ children }) => {
    const { COLORS, appColorScheme } = useContext(ColorSchemeContext)

    return (
        <SafeAreaView style={{backgroundColor: COLORS.main, flex: 1}}>
            <StatusBar 
                backgroundColor={COLORS.main} 
                barStyle={ appColorScheme === 'dark' ? 'light-content' : 'dark-content'}/>
            <View style={{backgroundColor: COLORS.main, paddingHorizontal: SIZES.GAP, position: 'relative',flex: 1}}>
                { children }
            </View>
        </SafeAreaView>
    )
}

export default ScreenWrapper;