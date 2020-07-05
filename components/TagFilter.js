import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'

export default class TagFilter extends Component {

    filter = ( tagName ) => {

    }

    render() {
        return (
            <View>
                <TouchableOpacity style={[styles.tagBtn]} onPress={() => this.filter()}>
                    <Text style={styles.tagText}>Todos</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.tagBtn]} onPress={() => this.filter()}>
                    <Text style={styles.tagText}>Educación</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.tagBtn]} onPress={() => this.filter()}>
                    <Text style={styles.tagText}>Esparcimiento</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.tagBtn]} onPress={() => this.filter()}>
                    <Text style={styles.tagText}>Servicios</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.tagBtn]} onPress={() => this.filter()}>
                    <Text style={styles.tagText}>Moda</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.tagBtn]} onPress={() => this.filter()}>
                    <Text style={styles.tagText}>Gastonomía</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.tagBtn]} onPress={() => this.filter()}>
                    <Text style={styles.tagText}>Otros</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({


})



/* 

VER FILTRADO POR TAGS
LIMPIAR LAS OTRAS DOS
PASAR TODAS A FUNCIONES
DATA CARGA DESDE APP.JS

*/