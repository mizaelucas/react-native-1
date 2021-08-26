import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function UnitsPicker({ unitSystem, setUnitSystem }) {
    return (
        <View style={styles.unitSystem}>
            <Picker selectedValue={unitSystem} onValueChange={(item) => {setUnitSystem(item)}} mode="dropdown" itemStyle={{ fontSize: 12 }}>
                <Picker.Item label="C°" value="metric" />
                <Picker.Item label="F°" value="imperial" />
            </Picker>
        </View>
    );
};

const styles = StyleSheet.create({
    unitSystem: {
        position: 'absolute',
        ...Platform.select({
            ios: {
                top: -20,
            },
            android: {
                top: 25,
            }
        }),
        left: 20,
        height: 50,
        width: 100,
    },
});
