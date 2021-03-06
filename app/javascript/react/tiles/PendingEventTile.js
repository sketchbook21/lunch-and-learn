import React from 'react';

const PendingEventTile = (props) => {
  var recievedDate = new Date(props.date);
  var day= recievedDate.getDate();
  var month= recievedDate.getMonth();
  var year= recievedDate.getFullYear();
  var convertedDate= new Date(year, month, day)

  return (
    <div className="horizontal-line" id="event-tile">
      <div className="text3 weight5 primary">
        Event Pending
      </div>
      <div className="text3 weight3">
        Sent On: {convertedDate.toDateString()}
      </div>
      <div className="text1 weight4">
        {props.company}
      </div>
      <div className="text2 weight3">
        Event Name: {props.name}
      </div>
      <div className="text2 weight3">
        Sent To: {props.email}
      </div>
      <a href={"/events/" + props.id + "/edit"} className="text3 weight7">
        Edit Invitation
      </a>
    </div>
  );
}

export default PendingEventTile;
