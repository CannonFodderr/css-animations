import React from 'react'
import spriteSheet from '../assets/charechter-sprite.png'
import './Character.css'

class Cat extends React.Component {
    render () {
        return (
            <div className="character-wrapper">
                <img className="character" src={spriteSheet} alt="" draggable="false"/>
            </div>
        )
    }
}
export default Cat