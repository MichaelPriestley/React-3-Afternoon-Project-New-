import React, {Component} from 'react'
import data from './Data'

function List(props) {
    console.log(props.person)
    return (
        <div className="white-box">
        <div className="page-number">{props.person.id}/25</div>
<div className="person-name">{props.person.name.first} {props.person.name.last}</div>
          <div className="person-info">
            <p>From: {props.person.city}</p>
            <p>Job Title: {props.person.title}</p>
            <p>Employer: {props.person.employer}</p>
          </div>
          <div className="favorite-movies">
            <p>Favorite Movies:</p>
          </div>
          <div className="movie-list">
            <p>1. {props.person.favoriteMovies[0]}</p>
            <p>2. {props.person.favoriteMovies[1]}</p>
            <p>3. {props.person.favoriteMovies[2]}</p>
          </div>
        </div>
    )
}

export default List