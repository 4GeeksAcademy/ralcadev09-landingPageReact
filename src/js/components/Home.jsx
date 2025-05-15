import React from "react";

import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Footer from "./Footer";
import Card from "./Card";
//create your first component
const Home = () => {
	let cardList = [
		{
			title: "Luffy",
			text: "Capitán valiente con habilidades elásticas, decidido a encontrar el One Piece y proteger a sus amigos.",
			imagen: "https://images.openai.com/thumbnails/url/KHDW6nicDcnbCoIwAADQv-nNS2BpgsTIC2YYpmLtTefUEc7NLVN_qS_qb-q8nu-nk5IJW9MwRePCJK4VWVFdbYUsJUEqGnpNdANjhLZH7vzPBnF9CFAa9yzmy6i76Goq694CQd2EkkRTjj2OMgJn3ERWlQ3-Y9098OSP0JwTa8uVd84tOq79xejvKYA-uBQ7YdyS88EdijmcaeUGISzaJ6H6BMvNS3DmnID3A5nhPZY"
		},
		{
			title: "Zoro",
			text: "Espadachín honorable y disciplinado, maestro del estilo de tres espadas, leal al capitán Luffy.",
			imagen: "https://64.media.tumblr.com/c5f893975dd32358d81ec11fed54bebb/c57af4e4e84b18b0-01/s1280x1920/f75811a47d8c59b46edbefe805f4bb8840fed12e.png"
		},
		{
			title: "Sanji",
			text: "Cocinero refinado y hábil combatiente, guiado por principios caballerosos y una gran pasión culinaria.",
			imagen: "https://images.openai.com/thumbnails/url/wfr3AXicDcndEoFAGADQt3FHTWjLjDFJmLDJ37RuTK2drYxt2_0i3syjeBvO7fl-cgCpR4bBBFUvCezahUyYPa4hhYL2aHU3dF5JWQg-qcf_G3n46i7oDtnvhRJnZ0VC_sjWUW5dAqVtWZYimeFg6g1QvGSbFrm2eUggTlNx2h5v2GEER2ygm_ahqE0sMAsf5oVG1i6T0bB-980LD3MVN5HV7te18yTMbfGSKFwiHncaXcux7wU_2e9BsA"
		},
		{
			title: "Chopper",
			text: "Médico reno con corazón noble, habilidades médicas excepcionales y poder transformarse gracias a su fruta.",
			imagen: "https://images.openai.com/thumbnails/url/Okt3h3icDcndCoIwGADQt-lumY3MhAhdJmwUaFHZjTT_Zpmb7gvLN-tReps6t-f7EQBKO4aRN2n3VpBnCHhjjksNV6jScSofhhZSqaopV-3yf467yxZBGnqFnsdkoA8b8VeEZ-xsHu9oDzmLA9FHg_L9KSB-6a0LttbCrgObYbmZt17dJe3BlAt1k09O_YGzcIK9Ch9Jx_ek29oV6_FpQmuVDCwrCBcIKLFCRkvUj566VUvi-j-ZgUCP"
		}
	]
	return (
		<div className="text-center d-flex flex-column min-vh-100 justify-content-start bg-success">
			<Navbar />
			<div className="container">
				<Jumbotron />
				<div className="d-flex flex-column flex-lg-row align-items-center justify-content-between mb-3">
					{
						cardList.map((card, index) => {
							return <Card key={index} title={card.title} text={card.text} imagen={card.imagen} />
						})
					}
				</div>

			</div>
			<Footer />

		</div>

	);
};

export default Home;