import React from 'react';
import observerMenu from '../utils/observer'

let SingleChar = (props) => {
    return (
        <div className="char">
            <img onClick={() => {
                observerMenu.exercuteObserver('changeFocus', {focusedChar: Number(props.params.id)});
            }}
            className="char-img" 
            src={props.params.url} alt="char" />
        </div>
    )
}

export default SingleChar;