import React from 'react'

function Alcaldia(props) {
  return (
    <div>
      <ul class="justify-content-end">
        <li>
          <a class="map-link" href={props.to}>{props.text}</a>
        </li>
      </ul>
    </div>
  )
}

export default Alcaldia