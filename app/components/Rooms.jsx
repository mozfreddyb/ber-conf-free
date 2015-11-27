var React = require('react');
var _ = require('lodash');

var Room = require('./Room.jsx');

var Rooms = React.createClass({
  tick: function() {
    $.ajax({
      url: "/api/rooms",
      success: function(data) {
        this.setState(data);
      }.bind(this)
    });
  },
  getInitialState: function() {
    return { rooms : [] };
  },
  componentWillMount: function() {
    this.tick();
  },
  componentDidMount: function() {
    this.interval = setInterval(this.tick, 1000 * 60);
  },
  componentWillUnmount: function() {
    clearInterval(this.interval);
  },
  render: function() {
    var findRoom = function(id) {
      return _.find(this.state.rooms, function (room) { return room.id == id; });
    }.bind(this);

    return (
      <div className="rooms">
        <div className="room-column">
          <Room room={findRoom("2a")} />
        </div>
        <div className="room-column">
          <Room room={findRoom("2b")} />
        </div>
        <div className="room-column">
          <Room room={findRoom("commons")} />
        </div>
      </div>
    );
  }
});

module.exports = Rooms;
