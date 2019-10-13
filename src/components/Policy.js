import React from 'react';
import ReactDOM from 'react-dom';


class Policy extends React.Component {
    render() {
        return (
            <div className="policy-wrap">
            <h2 className="policy-title">Privacy Policy</h2> 
            <div>
            	<h3 className="policy-date">The document was last updated on May 01, 2019</h3>
            	<p> This Privacy Policy explains how your personal data is collected and processed by 
            Yevhenii Malyi when you use mobile games(“Games”) developed by Yevhenii Malyi. </p>
            	<p className="policy-text"> Games are free to play(with optional in -game - purchases), and in
            order to maintain the high quality and a great game experience we process information 
            from and about you in particular to improve the entire experience in Games and to support 
            internal operations.We will not use or share your information with anyone except as described
             in this Privacy Policy. </p>
             	<h3 className="policy-subtitle"><strong>Changes to This Privacy Policy</strong></h3>
             	<p className="policy-text"> We may update our Privacy Policy from time to time.Thus, you are advised 
            to review this page periodically for any changes.We will notify you of any changes by posting 
            the new Privacy Policy on this page.These changes are effective immediately after they are posted 
            on this page. </p>
            	<h3 className="policy-subtitle"><strong>Acceptance of terms</strong></h3>
            	<p className="policy-text"> By using Games, you agree to the terms of this policy.If you do not have
            this policy to accept the terms, please do not use Games.The continued use of our products 
            after any revision of this Privacy Policy will be treated as
            acceptance of your changes and / or new terms. </p>
            	<h3 className="policy-subtitle"><strong>Information Collection and Use</strong> </h3>
            	<p> When you access or use Games, we automatically collect general information about 
            you, including: </p>
            	<p> Log Information: We log information about your use of Games, including the type 
            of device you use, the features you use, access times and your IP address. </p>
            	<p> Device Information: We collect information about the device you use to access Games, 
            ncluding information about the device’ s software and hardware, unique device identifiers(i.e.Device ID 
            and advertising ID), device tokens for push - messages, mobile network information and time zone. </p>
            	<p> Usage Information: We collect information relating to your use of Games,
            including your game progress, scores, achievements and interactions with other players. </p>
            	<p className="policy-text"> Consumption information: We collect information about your consumption habits 
            relating to your use of Games, including which purchases you make with both virtual and real currencies 
            and the reception of virtual goods in -game. </p>
            	<h3 className="policy-contact"><strong>Contact Us</strong></h3>
            	<p> If you have any questions about this privacy policy, you can contact us in the 
            following ways. </p>
            	<p className="policy-text"> E-mail: <a className="policy-email" href="mailto:yevhenii.malyi@gmail.com">yevhenii.malyi@gmail.com</a> </p>
            	<p className="policy-text1"> <strong>For more information about the processing carried out by the respective 
                third parties in connection with some features, please visit the privacy policies 
                of the entities that provide these features, which can be found here:</strong> </p>
                <p> <a className="policy-email" href="https://unity3d.com/legal/privacy-policy">Analytics</a> </p>
                <p className="policy-text"> <a className="policy-email" href="https://www.appodeal.com/home/privacy-policy">Advertisement</a> </p>
            </div>                                
			</div>
        )
    }
}

export default Policy;