import { Platform, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const articleParagraphs = [
	"The vast expanse of space has always captivated human imagination, driving us to explore beyond our terrestrial boundaries. From the first telescopic observations of Galileo to modern space stations, our journey into the cosmos represents humanity's boundless curiosity. Early astronomers mapped the night sky with primitive tools, yet their discoveries laid the foundation for our understanding of celestial mechanics and universal laws that govern all cosmic bodies.",
	"Space agencies worldwide collaborate on ambitious missions, pushing the boundaries of human knowledge. The International Space Station serves as a testament to international cooperation, hosting astronauts from various nations who conduct groundbreaking research in microgravity. These experiments range from studying human physiology in space to advancing our understanding of fundamental physics, all while orbiting our planet at seventeen thousand miles per hour.",
	"Mars exploration has entered a new era with robotic missions uncovering evidence of ancient water flows and organic molecules. The red planet's rusty landscape, carved by extinct rivers and marked by massive volcanoes, tells a story of a world that might have once harbored life. As we prepare for human missions to Mars, engineers and scientists work tirelessly to solve challenges of long-duration spaceflight and sustainable habitat construction.",
	"Telescopes peering into deep space reveal the universe's secrets, from the birth of stars in nebulous clouds to the death throes of massive supernovae. The James Webb Space Telescope, humanity's most advanced eye in the sky, captures infrared light from the cosmos's earliest moments, showing us galaxies formed billions of years ago when the universe was in its infancy.",
	"Exoplanet discoveries have revolutionized our perspective on cosmic habitability. Thousands of worlds orbiting distant stars challenge our assumptions about planetary formation and the potential for life beyond Earth. Some of these alien worlds feature diamond rain, others have multiple suns painting their skies in perpetual twilight, while yet others might harbor oceans beneath their frozen surfaces.",
	"Quantum mechanics and space exploration intersect in fascinating ways, from the development of ultra-precise atomic clocks for navigation to quantum computers processing vast amounts of astronomical data. Scientists explore the possibility of quantum communication networks extending across the solar system, potentially enabling instantaneous transmission of information regardless of distance.",
	"The commercial space industry has transformed access to orbit, with reusable rockets dramatically reducing launch costs. Private companies now compete to provide satellite launches, space tourism, and even lunar payload services. This commercialization has accelerated innovation and opened new possibilities for scientific research and space resource utilization.",
	"Asteroid mining presents an opportunity to access rare materials crucial for advanced technology. These space rocks contain precious metals, water ice, and rare earth elements that could support future space colonies and reduce environmental impact on Earth. Missions to near-Earth asteroids help us understand their composition while developing technologies for future resource extraction.",
];

const App = () => {
	return (
		<SafeAreaView style={styles.container}>
			<ScrollView
				scrollEventThrottle={16}
				contentContainerStyle={styles.scrollContent}
				stickyHeaderIndices={[2]} // here is the trick
			>
				{articleParagraphs.slice(0, 2).map((text, index) => (
					<Text key={`intro-${index.toString()}`} style={styles.paragraph}>
						{text}
					</Text>
				))}
				{/* sticky header element on 3rd index */}
				<View style={styles.topActions}>
					<View
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
							alignItems: "center",
						}}
					>
						<View style={{ backgroundColor: "green", height: 24, width: 24 }} />
						<View style={{ backgroundColor: "green", height: 24, width: 24 }} />
						<View style={{ backgroundColor: "green", height: 24, width: 24 }} />
					</View>
				</View>
				{/* end of sticky header element on 3rd index */}
				<View style={styles.remainingContent}>
					{articleParagraphs.slice(2).map((text, index) => (
						<View key={`block-${index.toString()}`}>
							<Text style={styles.paragraph}>{text}</Text>
						</View>
					))}
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "white",
		paddingTop: Platform.OS === "ios" ? 48 : 0,
	},
	scrollContent: {
		padding: 20,
	},
	remainingContent: {
		paddingTop: 20,
	},
	topActions: {
		backgroundColor: "red",
	},
	paragraph: {
		flex: 1,
		marginBottom: 20,
		fontSize: 16,
		lineHeight: 24,
		color: "#333",
	},
});

export default App;
