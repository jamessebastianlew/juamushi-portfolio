import React, { useState, useEffect } from 'react';

import './VanishGame.css';

import pikachu from '../../res/img/death-james.jpg';
import { startMessages, numVanishItems, lateMessages, finalMessage } from './VanishGameConstants';

const genRandomPercents = () => {
    const x = 20 + Math.floor(Math.random() * 60);
    const y = 20 + Math.floor(Math.random() * 60);
    return {x, y};
}

const initItems = (n) => {
    let lst = [];
    for(let key=0; key<n; ++key) lst.push(genRandomPercents());
    return lst;
}

const VanishItem = ({pos: {x, y}, ind, onMouseEnter}) => {
    return <p onMouseEnter={onMouseEnter} style={ {top: x+"%", left: y+"%"} }>mushi</p>;
};

const VanishDialogue = ({ count }) => {
    const getDialogue = count => {
        if(count == 1)
            return "";
        else if(count <= startMessages.length * 2)
            return startMessages[count % startMessages.length];
        else if(count <= (startMessages.length + lateMessages.length) * 2)
            return lateMessages[count % lateMessages.length];
        else
            return finalMessage;
    };

    return <p>{getDialogue(count)}</p>;
}

const VanishGame = ({ text }) => {
    const [items, setItems] = useState(initItems(numVanishItems));
    const [count, setCount] = useState(0);
    const [imgStyle, setImgStyle] = useState({opacity: 0});

    useEffect(() => {
        if(items.length == numVanishItems) setCount(count => count+1);
    }, [items]);

    // debug
    useEffect(() => {
        if(count > (startMessages.length + lateMessages.length) * 2) {
            setItems([]); setImgStyle({opacity: 100});
        }
    }, [count]);

    const handleMouseEnter = ind => {
        const handler = ev => {
            let newItems = [...items];
            newItems.splice(ind, 1);
            newItems.push(genRandomPercents());
            setItems(newItems);
        }
        return handler;
    };

    return (
        <div className="vanish-game">
            {
                <img style={ imgStyle } alt="james is disappointed" src={pikachu} />
            }
            {
                items.map((pos, ind) => <VanishItem
                onMouseEnter={handleMouseEnter(ind)}
                key={ind} index={ind} pos={pos}/>)
            }
            <VanishDialogue count={count}/>
        </div>
    );
};

export default VanishGame;
