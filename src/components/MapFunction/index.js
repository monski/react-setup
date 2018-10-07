import React, { Component } from 'react'

export default class MapFunction extends Component {

     render() {
        const data =[{"name":"test1"},{"name":"test2"}];
        const listItems = data.map((d) => <li key={d.name}>{d.name}</li>);
    
        return (
          <div>
          {listItems }
          </div>
        );
      }

      /*render() {
        const data =[{"name":"test3"},{"name":"test4"}];
        return (
          <div>
          {data.map(function(d, idx){
             return (<li key={idx}>{d.name}</li>)
           })}
          </div>
        );
      }*/
}
