import React, { useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, StyleSheet, Text, TouchableOpacity, Alert, Button, ImageBackground, Vibration } from 'react-native';


export default function KirbyImage() {

    const [score, setScore] = useState<number>(0);
    const [increment, setIncrement] = useState<number>(1);

    // function setPassiveAffinity() {
    //     useEffect(() => {
    //         const interval = setInterval(() => setAffinity((affinity) => affinity + 1), 1000);

    //         return () => {
    //             clearInterval(interval);
    //         };
    //     }, []);
    // }

    async function onPressHandler() {
        setScore(score => score + increment);
        await AsyncStorage.setItem('score', score.toString());
    
        // async function getScore() {
        //     // getItem using the key, return a promise so we can await
        //     let scoreFromStorage = await AsyncStorage.getItem('score');
        //     // If username is null, just assign it to empty string
        //     if (!scoreFromStorage.toString()) scoreFromStorage = 0;
        //     setScore(scoreFromStorage);
        // }
    
        // function clearState() {
        //     localStorage.clear();
        // }
    
        // async function clearState() {
        //     await AsyncStorage.clear();
        // }


        if (score=== 40) {
            Vibration.vibrate(1000);
            Alert.alert("Achievement unlocked", "Kirby is very happy", [
                {
                    text: 'Success',
                    onPress: () => { console.log('Success!') }
                }, {
                    text: 'Failure',
                    onPress: () => { console.log('Failure') }
                }
            ]);
        }

        if (score === 60) {
            Vibration.vibrate(1000);
            Alert.alert("Achievement unlocked", "Kirby is full but still accepts your food", [
                {
                    text: 'Success',
                    onPress: () => { console.log('Success!') }
                }, {
                    text: 'Failure',
                    onPress: () => { console.log('Failure') }
                }
            ]);
        }


    }

    function setEnergyDrink() {
        setIncrement(2)
    }

    // function setMaximTomato() {
    //     setIncrement(4)
    // }

    // function setInterval(() => {
    //     setIncrement(1)
    // }, 1000)

    return (
        <View>
            <Text style={styles.header}>Score: {score}</Text>
            <Text style={styles.header}>Feed Kirby</Text>

            <TouchableOpacity onPress={onPressHandler}>
                <ImageBackground style={styles.kirby} resizeMode='contain' source={require('../assets/kirby.png')} />
            </TouchableOpacity>

            <Text style={styles.shop}>Upgrade Food</Text>
            <TouchableOpacity>
                <Button onPress={setEnergyDrink} title="Energy Drink 2" />
            </TouchableOpacity>
            {/* <TouchableOpacity>
                <Button onPress={setMaximTomato} title="Maxim Tomato 4"></Button>
            </TouchableOpacity> */}

        </View>
    )
}

const styles = StyleSheet.create({
    kirby: {
        width: 300,
        height: 300
    },
    header: {
        color: 'red',
        fontSize: 30,
        textAlign: 'center',
        marginBottom: 20
    },
    shop: {
        fontWeight: 'bold'
    }
})