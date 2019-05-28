import React, {Component} from 'react';
import {
  StyleSheet, 
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  CheckBox
} from 'react-native';

import Logo from '../img/logo.png';
import Check from '../img/check.png';

const COLOR_PRIMARY = '#81d8f7';
const COLOR_GRAY = '#666666';
const COLOR_WHITE = '#ffffff';
const COLOR_BLACK = '#000000';

export default class Login extends Component {

    state = {
        email: '',
        password: '',
        checked: false
    }

    handleEmail = (text) => {
        this.setState({ email: text })
    }

    handlePassword = (text) => {
        this.setState({ password: text })
    }

    login = (email, pass, checked) => {
        alert('Email: ' + email + ' Password: ' + pass + ' Remember: ' + checked)
    }

    toggleCheck = () => {
        if ( this.state.checked == true ) {
        this.setState({ checked: false })
        } else {
        this.setState({ checked: true })
        }
    }

    render() {
        
        const { container, sectionOne, sectionTwo, logo, imageLogo, input, bottomSection, checkBoxContainer, box, checkIcon, checkBox, loginBtn, submitButton, submitButtonText } = styles;

        return (
        <View style={ container }>
            <View style={ sectionOne }>
            <View style={ logo }>
                <Image source={ Logo } style={ imageLogo } />
            </View>
            </View>
            <View style={ sectionTwo }>
            <Text>Username or Email</Text>
            <TextInput style = { input }
                underlineColorAndroid = "transparent"
                placeholder = "Email"
                placeholderTextColor = { COLOR_GRAY }
                autoCapitalize = "none"
                onChangeText = { this.handleEmail }/>
            
            <Text>Password</Text>
            <TextInput style = { input }
                underlineColorAndroid = "transparent"
                placeholder = "Password"
                placeholderTextColor = { COLOR_GRAY }
                autoCapitalize = "none"
                secureTextEntry = { true }
                onChangeText = { this.handlePassword }/>
            
            <View style={ bottomSection }>
                <View style={ checkBoxContainer }>
                <TouchableOpacity style={ box }
                    onPress={() => this.toggleCheck()}
                >
                    { this.state.checked ?<Image source={ Check } style={ checkIcon } /> : null }
                    <View style={ checkBox } ></View>
                </TouchableOpacity>
                <Text style={ box }> Remember me</Text>
                </View>
                <View style={ loginBtn }>
                <TouchableOpacity
                    style = {submitButton}
                    onPress = {
                    () => this.login(this.state.email, this.state.password, this.state.checked)
                    }>
                    <Text style = { submitButtonText }> Log in </Text>
                </TouchableOpacity>
                </View>
            </View>
            </View>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    sectionOne: {
        flex: 1,
    },
    sectionTwo: {
        flex: 2,
        padding: 15,
    },
    logo: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageLogo: {
        width: 130,
        height: 130,
        resizeMode: 'contain'
    },
    input: {
        marginBottom: 15,
        marginTop: 5,
        padding: 10,
        height: 40,
        borderColor: COLOR_GRAY,
        borderWidth: 1
    },
    bottomSection: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    checkBoxContainer: {
        justifyContent: 'center',
        flexDirection: 'row'
    },
    box: {
        alignItems: 'center',
        alignSelf: 'center'
    },
    checkIcon: { 
        width: 15,
        height: 20,
        resizeMode: 'contain',
        position: 'absolute'
    },
    checkBox: {
        width: 20,
        height: 20,
        borderColor: COLOR_GRAY,
        borderWidth: 1
    },
    loginBtn: { 
        justifyContent: 'center'
    },
    submitButton: {
        backgroundColor: COLOR_PRIMARY,
        padding: 10,
        height: 40,
        alignSelf: 'flex-end',
        borderRadius: 5
    },
    submitButtonText:{
        color: COLOR_WHITE,
        fontWeight: '700',
        paddingHorizontal: 10,
    }
});
