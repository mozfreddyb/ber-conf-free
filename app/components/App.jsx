var React = require('react');

var Rooms = require('./Rooms.jsx'),
    DateTime = require('./DateTime.jsx'),
    Fullscreen = require('./Fullscreen.jsx');

var App = React.createClass({
  render: function() {
    return (
      <div className='container-fluid'>
        <DateTime/>
        <Rooms/>
        <Fullscreen/>
      </div>
    );
  }

});

module.exports = App;
