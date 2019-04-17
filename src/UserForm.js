import React, { Component } from 'react'

export default class UserForm extends Component{
  render(){
    return ( 
      <form onSubmit={this.props.onAddUser}>
          <input type="text" placeholder="Temporada" name="name" />
          <input type="text" placeholder="Zona de la ciudad" name="email" />
          <input type="submit" value="Guardar" />
      </form>
    );
  }
}