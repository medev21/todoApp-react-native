import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View, 
    TextInput, //to input text
    ScrollView, //to scroll
    TouchableOpacity, //touch buttons
} from 'react-native';

import Note from './Note';

export default class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            noteArray: [],
            noteText: ''
        }
    }

    addNote() {
        alert('test');
    }

    render() {

        let notes = this.state.noteArray.map((val,key) => {
            return <Note key={key} keyval={key} val={val} deleteMethod={ ()=> this.deleteNote(key) }/>
        });

        return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>- Noter -</Text>
            </View>

            <ScrollView style={styles.scrollContainer}>

            </ScrollView>

            <View style={styles.footer}>
                <TextInput 
                    style={styles.textInput} 
                    onChangeText={(noteText) => this.setState({noteText})}
                    value={this.state.noteText} 
                    placeholder='>note' 
                    placeholderTextColor='white' 
                    underlineColorAndroid='transparent'>
                </TextInput>
            </View>

            <TouchableOpacity onPress={this.addNote.bind(this)} style={styles.addButton}>
                <Text style={styles.addButtonText}>+</Text>
            </TouchableOpacity>
        </View>
        );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        backgroundColor: '#E91E63',
        alignItems: 'center',
        justifyContent:'center',
        borderBottomWidth: 10,
        borderBottomColor: '#ddd'
    },
    headerText: {
        color: 'white',
        fontSize: 18,
        padding: 26
    },
    scrollContainer: {
        flex: 1,
        marginBottom: 100
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 10
    },
    textInput: {
        alignSelf: 'stretch',
        color: '#fff',
        padding: 20,
        backgroundColor: '#252525',
        borderTopWidth:2,
        borderTopColor: '#ededed'
    },
    addButton: {
        position: 'absolute',
        zIndex: 11,
        right: 20,
        bottom: 90,
        backgroundColor: '#E91E63',
        width: 70,
        height: 70,
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 8
    },
    addButtonText: {
        color: '#fff',
        fontSize: 24
    }
});
