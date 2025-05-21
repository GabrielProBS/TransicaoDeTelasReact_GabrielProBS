import React from 'react';
import {View, Text, Button, StyleSheet, Dimensions} from 'react-native';

const windowWidth= Dimensions.get('window').width;

export default function DetailsScreen({navigation}){
    return(
        <View style={styles.container}>
            <Text style= {styles.title}> Details </Text>
            <View style={styles.buttonContainer}>
                <Button
                title= "Go to home"
                onPress={() => navigation.navigate('Home')}
                />
            </View>
            <View style={styles.buttonContainer}>
                <Button
                title="Go to profile"
                onPress={() => navigation.navigate('Profile')}
                />
            </View>
        </View>
    );
};

const styles=StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',    
        alignItems: 'center',
        backgroundColor: '#8A8C46',
    },
    title: {
        fontSize:24,
        marginBottom: 20,
        fontfamily: 'monospace',
    },
    buttonContainer: {
        backgroundColor: '#403D1C',
        margin:10,
        width: windowWidth *0.5,
        borderRadius: 5,
    },
});
