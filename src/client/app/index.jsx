import React from 'react';
import {render} from 'react-dom';
import Time from 'react-time'
var ReactBsTable  = require('react-bootstrap-table');
var BootstrapTable = ReactBsTable.BootstrapTable;
var TableHeaderColumn = ReactBsTable.TableHeaderColumn;

var SecondsTohhmmss = function(totalSeconds) {
  var hours   = Math.floor(totalSeconds / 3600);
  var minutes = Math.floor((totalSeconds - (hours * 3600)) / 60);
  var seconds = totalSeconds - (hours * 3600) - (minutes * 60); 
  seconds = Math.round(seconds * 100) / 100
  var result="";
	 if(hours>0)
      result = (hours < 10 ? "0" + hours : hours)+" hr" ;
	if(minutes>0)
      result += " "+(minutes < 10 ? "0" + minutes : minutes)+" min";
	if(seconds>0)
      result += " " + (seconds  < 10 ? "0" + seconds : seconds)+" sec";
  return result;
}

var departuresList=[
  {
	"TimeStamp": 1477496682,
    "Origin": "North Station",
    "Trip": 109,
    "Destination": "Rockport",
    "ScheduledTime": 1477497600,
    "Lateness": 0,
    "Track": "",
    "Status": "On Time"
  },
  {
	  
    "TimeStamp": 1477496682,
    "Origin": "North Station",
    "Trip": 317,
    "Destination": "Lowell",
    "ScheduledTime": 1477498500,
    "Lateness": 0,
    "Track": "",
    "Status": "On Time"
  },
  {
    "TimeStamp": 1477496682,
    "Origin": "North Station",
    "Trip": 207,
    "Destination": "Haverhill",
    "ScheduledTime": 1477499400,
    "Lateness": 0,
    "Track": "",
    "Status": "On Time"
  },
  {
    "TimeStamp": 1477496682,
    "Origin": "North Station",
    "Trip": 411,
    "Destination": "Fitchburg",
    "ScheduledTime": 1477501200,
    "Lateness": 0,
    "Track": "",
    "Status": "On Time"
  },
  {
    "TimeStamp": 1477496682,
    "Origin": "North Station",
    "Trip": 319,
    "Destination": "Lowell",
    "ScheduledTime": 1477502100,
    "Lateness": 0,
    "Track": "",
    "Status": "On Time"
  },
  {
    "TimeStamp": 1477496682,
    "Origin": "North Station",
    "Trip": 163,
    "Destination": "Newburyport",
    "ScheduledTime": 1477502400,
    "Lateness": 0,
    "Track": "",
    "Status": "On Time"
  },
  {
    "TimeStamp": 1477496682,
    "Origin": "North Station",
    "Trip": 111,
    "Destination": "Rockport",
    "ScheduledTime": 1477504200,
    "Lateness": 0,
    "Track": "",
    "Status": "On Time"
  },
  {
    "TimeStamp": 1477496682,
    "Origin": "North Station",
    "Trip": 209,
    "Destination": "Haverhill",
    "ScheduledTime": 1477504920,
    "Lateness": 0,
    "Track": "",
    "Status": "On Time"
  },
  {
    "TimeStamp": 1477496682,
    "Origin": "North Station",
    "Trip": 413,
    "Destination": "Fitchburg",
    "ScheduledTime": 1477505700,
    "Lateness": 0,
    "Track": "",
    "Status": "On Time"
  },
  {
    "TimeStamp": 1477496682,
    "Origin": "North Station",
    "Trip": 321,
    "Destination": "Lowell",
    "ScheduledTime": 1477505700,
    "Lateness": 0,
    "Track": "",
    "Status": "On Time"
  },
  {
    "TimeStamp": 1477496682,
    "Origin": "North Station",
    "Trip": 323,
    "Destination": "Lowell",
    "ScheduledTime": 1477508400,
    "Lateness": 0,
    "Track": "",
    "Status": "On Time"
  },
  {
    "TimeStamp": 1477496682,
    "Origin": "North Station",
    "Trip": 165,
    "Destination": "Newburyport",
    "ScheduledTime": 1477509300,
    "Lateness": 0,
    "Track": "",
    "Status": "On Time"
  },
  {
    "TimeStamp": 1477496682,
    "Origin": "North Station",
    "Trip": 211,
    "Destination": "Haverhill",
    "ScheduledTime": 1477509300,
    "Lateness": 0,
    "Track": "",
    "Status": "On Time"
  },
  {
    "TimeStamp": 1477496682,
    "Origin": "North Station",
    "Trip": 415,
    "Destination": "Wachusett",
    "ScheduledTime": 1477510200,
    "Lateness": 0,
    "Track": "",
    "Status": "On Time"
  },
  {
    "TimeStamp": 1477496682,
    "Origin": "North Station",
    "Trip": 113,
    "Destination": "Rockport",
    "ScheduledTime": 1477510620,
    "Lateness": 0,
    "Track": "",
    "Status": "On Time"
  },
  {
    "TimeStamp": 1477496682,
    "Origin": "North Station",
    "Trip": 325,
    "Destination": "Lowell",
    "ScheduledTime": 1477510800,
    "Lateness": 0,
    "Track": "",
    "Status": "On Time"
  },
  {
    "TimeStamp": 1477496682,
    "Origin": "North Station",
    "Trip": 291,
    "Destination": "Reading",
    "ScheduledTime": 1477511400,
    "Lateness": 0,
    "Track": "",
    "Status": "On Time"
  },
  {
    "TimeStamp": 1477496682,
    "Origin": "North Station",
    "Trip": 493,
    "Destination": "Littleton / Rte 495",
    "ScheduledTime": 1477511940,
    "Lateness": 0,
    "Track": "",
    "Status": "On Time"
  },
  {
    "TimeStamp": 1477496682,
    "Origin": "North Station",
    "Trip": 327,
    "Destination": "Lowell",
    "ScheduledTime": 1477512600,
    "Lateness": 0,
    "Track": "",
    "Status": "On Time"
  },
  {
    "TimeStamp": 1477496682,
    "Origin": "North Station",
    "Trip": 115,
    "Destination": "Rockport",
    "ScheduledTime": 1477512900,
    "Lateness": 0,
    "Track": "",
    "Status": "On Time"
  },
  {
    "TimeStamp": 1477496682,
    "Origin": "South Station",
    "Trip": 763,
    "Destination": "Readville",
    "ScheduledTime": 1477496700,
    "Lateness": 0,
    "Track": 7,
    "Status": "All Aboard"
  },
  {
    "TimeStamp": 1477496682,
    "Origin": "South Station",
    "Trip": 609,
    "Destination": "Needham Heights",
    "ScheduledTime": 1477497000,
    "Lateness": 0,
    "Track": 1,
    "Status": "Now Boarding"
  },
  {
    "TimeStamp": 1477496682,
    "Origin": "South Station",
    "Trip": 511,
    "Destination": "Worcester / Union Station",
    "ScheduledTime": 1477497300,
    "Lateness": 0,
    "Track": "",
    "Status": "On Time"
  },
  {
    "TimeStamp": 1477496682,
    "Origin": "South Station",
    "Trip": 9,
    "Destination": "Middleboro/Lakeville",
    "ScheduledTime": 1477497420,
    "Lateness": 0,
    "Track": "",
    "Status": "On Time"
  },
  {
    "TimeStamp": 1477496682,
    "Origin": "South Station",
    "Trip": 709,
    "Destination": "Forge Park / 495",
    "ScheduledTime": 1477498800,
    "Lateness": 0,
    "Track": "",
    "Status": "On Time"
  },
  {
    "TimeStamp": 1477496682,
    "Origin": "South Station",
    "Trip": 65,
    "Destination": "Plymouth",
    "ScheduledTime": 1477499100,
    "Lateness": 0,
    "Track": "",
    "Status": "On Time"
  },
  {
    "TimeStamp": 1477496682,
    "Origin": "South Station",
    "Trip": 77,
    "Destination": "Greenbush",
    "ScheduledTime": 1477500060,
    "Lateness": 0,
    "Track": "",
    "Status": "On Time"
  },
  {
    "TimeStamp": 1477496682,
    "Origin": "South Station",
    "Trip": 765,
    "Destination": "Readville",
    "ScheduledTime": 1477500300,
    "Lateness": 0,
    "Track": "",
    "Status": "On Time"
  },
  {
    "TimeStamp": 1477496682,
    "Origin": "South Station",
    "Trip": 911,
    "Destination": "Stoughton",
    "ScheduledTime": 1477502400,
    "Lateness": 0,
    "Track": "",
    "Status": "On Time"
  },
  {
    "TimeStamp": 1477496682,
    "Origin": "South Station",
    "Trip": 711,
    "Destination": "Forge Park / 495",
    "ScheduledTime": 1477503300,
    "Lateness": 0,
    "Track": "",
    "Status": "On Time"
  },
  {
    "TimeStamp": 1477496682,
    "Origin": "South Station",
    "Trip": 813,
    "Destination": "Providence",
    "ScheduledTime": 1477503780,
    "Lateness": 0,
    "Track": "",
    "Status": "On Time"
  },
  {
    "TimeStamp": 1477496682,
    "Origin": "South Station",
    "Trip": 767,
    "Destination": "Readville",
    "ScheduledTime": 1477503900,
    "Lateness": 0,
    "Track": "",
    "Status": "On Time"
  },
  {
    "TimeStamp": 1477496682,
    "Origin": "South Station",
    "Trip": 611,
    "Destination": "Needham Heights",
    "ScheduledTime": 1477504320,
    "Lateness": 0,
    "Track": "",
    "Status": "On Time"
  },
  {
    "TimeStamp": 1477496682,
    "Origin": "South Station",
    "Trip": 515,
    "Destination": "Worcester / Union Station",
    "ScheduledTime": 1477504800,
    "Lateness": 0,
    "Track": "",
    "Status": "On Time"
  },
  {
    "TimeStamp": 1477496682,
    "Origin": "South Station",
    "Trip": 15,
    "Destination": "Middleboro/Lakeville",
    "ScheduledTime": 1477505400,
    "Lateness": 0,
    "Track": "",
    "Status": "On Time"
  },
  {
    "TimeStamp": 1477496682,
    "Origin": "South Station",
    "Trip": 79,
    "Destination": "Greenbush",
    "ScheduledTime": 1477506420,
    "Lateness": 300,
    "Track": "",
    "Status": "On Time"
  }
];

var origin="";;
if (document.location.search.indexOf('origin=') >= 0) 
	{
    origin=document.location.search.replace('?origin=','');
	origin=	origin.charAt(0).toUpperCase() + origin.slice(1);
	}
console.log(origin);
var filteredData = departuresList.filter(function(departure) {	
	    departure.ScheduledTime=new Date(departure.ScheduledTime*1000).toLocaleTimeString();
	    departure.Lateness=SecondsTohhmmss(departure.Lateness);
	   if(origin != "")
         return departure.Origin.indexOf(origin)>=0;
	   else
		  return departure.Origin;
	 
	});

var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];


function tick() {	
	
  const element = (
    <div className="container">
				   <div className="row">
					  <div className="col-sm-2 text-left tdData">					
					   <h4> <p>{days[new Date().getDay()]} </p></h4>
					   <h4> <p><Time value={Date.now()} format="MM/DD/YYYY" /></p></h4>
				   </div>
				   <div className="col-sm-8 text-center tdheader" >
					 <h1>{origin} Departures Information</h1>
					   </div>
					   <div className="col-sm-2 text-right tdData">
						  <h4>CURRENT TIME</h4>
					       <h4><p><Time value={Date.now()} format="hh:mm a" /></p></h4>
					 </div>
		          </div>		        
				<BootstrapTable data={filteredData} >
						<TableHeaderColumn width="150" dataField="ScheduledTime">Time</TableHeaderColumn>
						<TableHeaderColumn  dataField="Destination">Destination</TableHeaderColumn>
						<TableHeaderColumn  width="120" isKey={true} dataField="Trip">Trip</TableHeaderColumn>
						<TableHeaderColumn  width="150" dataField="Lateness">Lateness</TableHeaderColumn>
						<TableHeaderColumn  width="120"  dataField="Track">Track</TableHeaderColumn>
						<TableHeaderColumn  dataField="Status">Status</TableHeaderColumn>
		  </BootstrapTable>
	      </div>
  );
  render(
    element,
    document.getElementById('app')
  );
}

tick();
setInterval(tick, 60000);


