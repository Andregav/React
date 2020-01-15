import React from 'react';
import ReactDOM from 'react-dom';
import main_picture from './../image/main_picture.png';
import AppStore from './../image/AppStore.svg';
import GooglePlay from './../image/GooglePlay.png';

class Main extends React.Component {
    render() {
        return (
            <div className="main">
                <div className="main-wrap">
                    <img src={main_picture} className="main_picture" alt="main_picture" />
                    <div className="link-wrap">
                        <a href="https://itunes.apple.com/app/glossy-blocks/id1463453477">
                            <img className="appStore-img" src={AppStore} alt="App Store"/>
                        </a>
                        <a href="https://play.google.com/store/apps/details?id=gamedev.indie.yevheniimalyi.xxgrandedition">
                            <img className="googlePlay-img" src={GooglePlay} alt="Google Play"/>
                        </a>
                    </div>
                </div>        		
        	</div>
        )
    }
}

export default Main;