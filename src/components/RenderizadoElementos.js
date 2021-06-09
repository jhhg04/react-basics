import React, { Component } from "react";
import data from "../helpers/data.json";

function ElementoLista(props){
   return(
     <li>
        <a href={props.e.web} target="_blank" rel="noreferrer">{props.e.name}</a>
     </li>
   )
}

export default class RenderizadoElementos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seasons: ["Spring", "Summer", "Fall", "Winter"],
    };
  }

  render() {
    // console.log(data);
    return (
      <div>
        <h2>Renderizado de Elementos</h2>
        <h3>Estaciones del año</h3>
        <ol>
          {this.state.seasons.map((e, i) => (
            <li key={i}>{e}</li>
          ))}
        </ol>
        <h3>Frameworks Frontend Js</h3>
        <ul>
          {data.frameworks.map((e) => (
            <ElementoLista key={e.id} e={e}/>
          ))}
        </ul>
      </div>
    );
  }
}
