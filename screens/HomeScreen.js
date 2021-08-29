import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Topbar from '../Components/Topbar';
import Explore from '../Components/Explore';
import Video from '../Components/Video';
import BNew from '../Components/BNew';
import Breaknews from '../Components/Breaknews';
import Navigation from '../Components/Navigation';

export default function Homescreen() {
	return (
		<View>
			<View style={{ backgroundColor: "#313131", height: "100%", Width: "100%" }}>
				{/* <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt blanditiis neque accusantium facilis sequi quisquam distinctio rerum? Expedita, reprehenderit ex!</Text> */}
				<View>
					<ScrollView >
						{/* <ScrollView style={{marginBottom:250}}> */}
						<Topbar />
						<Explore />
						<Video />
						{/* <BNew/> */}
						<Breaknews />
						<Video />
						<Breaknews />
						<Video />
					</ScrollView>
					{/* <Navigation/> */}

				</View>
			</View>
		</View>
	)
}


