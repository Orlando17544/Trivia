/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import type {Node} from 'react';
import {
	StyleSheet,
	Text,
	View,
	ImageBackground,
	TouchableOpacity
} from 'react-native';

import SplashScreen from 'react-native-splash-screen';

import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

SplashScreen.hide();

/*

var Sound = require('react-native-sound');

Sound.setCategory('Playback');

var ocarina = new Sound('ocarina.mp3', Sound.MAIN_BUNDLE, (error) => {
	if (error) {
		console.log('failed to load the sound', error);
		return;
	} else {
	// if loaded successfully
	console.log('duration in seconds: ' + ocarina.getDuration() + 'number of channels: ' + ocarina.getNumberOfChannels());

	ocarina.play();
	}

});

ocarina.setVolume(50);

// To loop the song
ocarina.setNumberOfLoops(100);

*/

const WelcomeScreen = () => {
	const [gender, setGender] = useState('');
	const [interests, setInterests] = useState([]);
	const [correctGender, setCorrectGender] = useState(true);
	const [correctInterests, setCorrectInterests] = useState(true);

	function checkAnswers() {
		if (gender == '') {
			setCorrectGender(false);
		} else {
			setCorrectGender(true);
		}
		if (interests.length >= 3) {
			setCorrectInterests(true);
		} else {
			setCorrectInterests(false);
		}
	}

	function addRemoveInterest(newInterest) {
		if (interests.includes(newInterest)) {
			setInterests(interests.filter(interest => interest != newInterest));
		} else {
			setInterests([...interests, newInterest]);
		}
	}

	return (
		<View style={ styles.container }>
		<ImageBackground
		        source={require('../../assets/backgroundImage.jpg')}
			style={ styles.imageBackgroundContainer }
			resizeMode="cover"
		>
		<View style={{ alignItems: 'center' }}>
			<Text style={[ styles.text, {textAlign: 'center'} ]}>1 / 2</Text>
			<Text style={[ styles.text, styles.textTitle, {textAlign: 'center'} ]}>We would like to know you{"\n"}better!</Text>
		</View>
		<View style={{ marginHorizontal: '5%' }}>
		<View>
			<Text style={[ styles.text, {color: correctGender ? 'black' : '#ca0f02'} ]}>Your gender identity: </Text>
			<View style={ styles.optionsButtonsContainer }>
				<TouchableOpacity
					style={[ styles.optionsButtons, {backgroundColor: gender == 'man' ? '#ffe264' : 'white'}]}
					onPress={() => {setGender('man');}}
				>
					<Ionicons name="male" size={20} color="black" />
					<Text style={ styles.textOptionsButtons }>Man</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={[ styles.optionsButtons, {backgroundColor: gender == 'woman' ? '#ffe264' : 'white', marginLeft: 10}]}
					onPress={() => {setGender('woman');}}
				>
					<Ionicons name="female" size={20} color="black" />
					<Text style={ styles.textOptionsButtons }>Woman</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={[ styles.optionsButtons, {backgroundColor: gender == 'other' ? '#ffe264' : 'white', marginLeft: 10}]}
					onPress={() => {setGender('other');}}
				>
					<Ionicons name="male-female" size={20} color="black" />
					<Text style={ styles.textOptionsButtons }>Other</Text>
				</TouchableOpacity>
			</View>
		</View>
		<View style={{ marginTop: '5%' }}>
			<Text style={[ styles.text, {color: correctInterests ? 'black' : '#ca0f02'} ]}>Your interests (at least 3): </Text>
			<View style={ styles.optionsButtonsContainer }>
				<TouchableOpacity
					style={[ styles.optionsButtons, {backgroundColor: interests.includes('technologyScience') ? '#ffe264' : 'white', marginLeft: 10} ]}
					onPress={() => {addRemoveInterest('technologyScience');}}
				>
					<MaterialIcons name="science" size={20} color="black" />
					<Text style={ styles.textOptionsButtons }>Science</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={[ styles.optionsButtons, {backgroundColor: interests.includes('popCulture') ? '#ffe264' : 'white', marginLeft: 10} ]}
					onPress={() => {addRemoveInterest('popCulture');}}
				>
					<FontAwesome name="hand-rock-o" size={20} color="black" />
					<Text style={ styles.textOptionsButtons }>Pop culture</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={[ styles.optionsButtons, {backgroundColor: interests.includes('carsSports') ? '#ffe264' : 'white', marginLeft: 10} ]}
					onPress={() => {addRemoveInterest('carsSports');}}
				>
					<MaterialIcons name="sports-soccer" size={20} color="black" />
					<Text style={ styles.textOptionsButtons }>Sports</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={[ styles.optionsButtons, {backgroundColor: interests.includes('gameRiddles') ? '#ffe264' : 'white', marginLeft: 10} ]}
					onPress={() => {addRemoveInterest('gameRiddles');}}
				>
					<MaterialIcons name="videogame-asset" size={20} color="black" />
					<Text style={ styles.textOptionsButtons }>Game</Text>
				</TouchableOpacity>
			</View>
			<View style={ styles.optionsButtonsContainer }>
				<TouchableOpacity
					style={[ styles.optionsButtons, {backgroundColor: interests.includes('healthCooking') ? '#ffe264' : 'white', marginLeft: 10} ]}
					onPress={() => {addRemoveInterest('healthCooking');}}
				>
					<MaterialIcons name="healing" size={20} color="black" />
					<Text style={ styles.textOptionsButtons }>Health</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={[ styles.optionsButtons, {backgroundColor: interests.includes('geographyHistory') ? '#ffe264' : 'white', marginLeft: 10} ]}
					onPress={() => {addRemoveInterest('geographyHistory');}}
				>
					<Entypo name="back-in-time" size={20} color="black" />
					<Text style={ styles.textOptionsButtons }>History</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={[ styles.optionsButtons, {backgroundColor: interests.includes('musicLiterature') ? '#ffe264' : 'white', marginLeft: 10} ]}
					onPress={() => {addRemoveInterest('musicLiterature');}}
				>
					<Ionicons name="musical-notes" size={20} color="black" />
					<Text style={ styles.textOptionsButtons }>Music</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={[ styles.optionsButtons, {backgroundColor: interests.includes('religionCulture') ? '#ffe264' : 'white', marginLeft: 10} ]}
					onPress={() => {addRemoveInterest('religionCulture');}}
				>
					<FontAwesome5 name="cross" size={20} color="black" />
					<Text style={ styles.textOptionsButtons }>Religion</Text>
				</TouchableOpacity>
			</View>
			<View style={ styles.optionsButtonsContainer }>
				<TouchableOpacity
					style={[ styles.optionsButtons, {backgroundColor: interests.includes('fashionDesign') ? '#ffe264' : 'white', marginLeft: 10} ]}
					onPress={() => {addRemoveInterest('fashionDesign');}}
				>
					<MaterialIcons name="design-services" size={20} color="black" />
					<Text style={ styles.textOptionsButtons }>Design</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={[ styles.optionsButtons, {backgroundColor: interests.includes('lawPolitics') ? '#ffe264' : 'white', marginLeft: 10} ]}
					onPress={() => {addRemoveInterest('lawPolitics');}}
				>
					<Octicons name="law" size={20} color="black" />
					<Text style={ styles.textOptionsButtons }>Law</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={[ styles.optionsButtons, {backgroundColor: interests.includes('animal') ? '#ffe264' : 'white', marginLeft: 10} ]}
					onPress={() => {addRemoveInterest('animal');}}
				>
					<MaterialCommunityIcons name="elephant" size={20} color="black" />
					<Text style={ styles.textOptionsButtons }>Animal</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={[ styles.optionsButtons, {backgroundColor: interests.includes('business') ? '#ffe264' : 'white', marginLeft: 10} ]}
					onPress={() => {addRemoveInterest('business');}}
				>
					<MaterialIcons name="business" size={20} color="black" />
					<Text style={ styles.textOptionsButtons }>Business</Text>
				</TouchableOpacity>
			</View>
		</View>
		</View>
		<View style={{ alignItems: 'center' }}>
			<TouchableOpacity
				style={{ backgroundColor: '#65b90b', paddingHorizontal: '30%' , paddingVertical: '3%', borderRadius: 5 }}
				onPress={() => {checkAnswers()}}>
				<Text style={{ fontSize: 20, color: 'white' }}>CONTINUE</Text>
			</TouchableOpacity>
			<TouchableOpacity>
				<Text style={[ styles.text, {marginTop: '5%'} ]}>Skip</Text>
			</TouchableOpacity>
		</View>
		</ImageBackground>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	imageBackgroundContainer: {
		flex: 1, 
		justifyContent: 'space-around', 
		width: '100%', 
		height: '100%' 
	},
	text: {
		fontSize: 15, 
		color: 'black',
		fontWeight: 'bold'
	},
	textTitle: {
		fontWeight: 'bold',
		fontSize: 25
	},
	optionsButtonsContainer: {
		flexDirection: 'row',
		marginTop: '2%'
	},
	optionsButtons: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		borderRadius: 5,
		elevation: 10,
		padding: '3%'
	},
	textOptionsButtons: {
		fontSize: 12,
		color: 'black'
	}
});

export default WelcomeScreen;
