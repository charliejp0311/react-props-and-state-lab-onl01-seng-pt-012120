import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  onChangeType=(e)=>{
    this.setState({
      ...this.state,
      filters:{
        type: e.target.value
      }
    })
  }

  addPets = (json) =>{
    console.log(json)
    this.setState({
      ...this.state,
      pets: json
    })
  }

  onFindPetsClick=(e)=>{
    if (this.state.filters.type === 'all') {
      fetch('/api/pets').then(resp=>resp.json()).then(json=>this.addPets(json))
    } else {
      fetch(`/api/pets?type=${this.state.filters.type}`).then(resp => resp.json()).then(json => this.addPets(json))
    }
  }

  onAdoptPet=(e)=>{
    const pet = this.state.pets.filter(pet => pet.id === e)[0]
    pet.isAdopted = !pet.isAdopted
    this.setState({
      ...this.state,
      pets: [
        ...this.state,
        pet
      ]
    })

  }
  
  render() {
    debugger
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              < Filters 
                onChangeType={this.onChangeType}
                onFindPetsClick={this.onFindPetsClick} />
            </div>
            <div className="twelve wide column">
              <PetBrowser 
              onAdoptPet={this.state.onAdoptPet}
              pets={this.state.pets}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
