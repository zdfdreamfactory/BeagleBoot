var React = require('react');
var ReactDOM = require('react-dom');
require('../css/box.css');

// Create component
class TodoComponent extends React.Component{
    render(){
        return(
            <div className='box'>
            <h1>UI goes here! </h1>
            </div>
        );
    }
}

// Put components in DOM
ReactDOM.render(<TodoComponent />, document.getElementById('root'));  