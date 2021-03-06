import React,{defaultProps} from 'react'
import {Text,View, TouchableOpacity,StyleSheet,SafeAreaView} from 'react-native'
function Header({title,onBack})
{
    const checkVisibleBackBtn=()=>{
        if(onBack===null)
        {
            return null;
        }
        return(
        
        <TouchableOpacity style={styles.backBtn} onPress={onBack}>
            <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>
        )
    }
    Header.defaultProps = {
        title: 'Header',
        onBack: null
    }
    return (
        <SafeAreaView style={styles.safeAreaView}>
            <View style={styles.container}>
                {checkVisibleBackBtn()}
                <Text style={styles.title}>
                    {title}
                </Text>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    safeAreaView: {
        backgroundColor: '#fff'
    },
    container: {
        width: '100%',
        height: 60,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 30,
    },
    backBtn: {
        position: 'absolute',
        left:20,
        right: 20
    },
    backText: {
        fontSize: 20
    }
})

export default Header;
