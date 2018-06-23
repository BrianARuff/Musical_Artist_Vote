import React from 'react';

export default function Artist(props){
    const isDead = props.death.isDead ? 'Death: ' + props.death.date : null
    
    function handleUpVote(){
            props.upVote(props.id);
    }

    function handleDownVote(){
         props.downVote(props.id);
    }
    
    return (
        <div style={{margin: '1rem', textAlign: 'center'}}>
            <h1>{props.name}</h1>
            <img src={props.image} alt={props.image+props.name} height='250px' width="250px"/>
            <p>DOB: {props.dob}</p>
            <p>{isDead}</p>
            <h3>Votes: {props.votes}</h3>
            <button onClick={handleUpVote} style={{width: '100%', padding: '0.5rem'}}>Vote</button>
            <button onClick={handleDownVote} style={{width: '100%', padding: '0.5rem'}}>Down Vote</button>
        </div>
    )
}