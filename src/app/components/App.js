var React = require('react');
require('../../css/main.css');
require('../../css/nav.css');
import Block from './Block';

// Main App
class App extends React.Component{
    render(){
        return(
            <div className='wrapper'>
                <div id='pane'>
                    <nav id='navbar'>
                        <ul>
                            <li id='brand'><h1 className='Text'>BeagleBoot</h1></li>
                            <li id='brand-text'><h5 className='Text'>Flash BeagleBone board quickly!</h5></li>
                            <li id='button'><Block task='' imgURL='./images/settings.png'/></li>
                            <li id='button'><Block task='' imgURL='./images/info.png'/></li>
                        </ul>
                    </nav>
                </div>
                <div id='bl'>    
                    <section id='blocks'>
                        <Block task='USB Mass Storage' imgURL='./images/usb-memory.png'/>
                        <Block task='Select Image' imgURL='./images/image.png'/>
                        <Block task='Flash' imgURL='./images/flash.png'/>
                    </section>
                </div>
            </div>
        );
    }
}

export default App;