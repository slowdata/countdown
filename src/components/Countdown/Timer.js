import React from "react"

const Timer = ({ duration }) => (
  <nav className="level">
    <div className="level-item has-text-centered">
      <div>
        <p className="title">{Math.floor(duration.asDays())}</p>
        <p className="heading">Days</p>
      </div>
    </div>
    <div className="level-item has-text-centered">
      <div>
        <p className="title">
          {duration
            .hours()
            .toString()
            .padStart(2, "0")}
        </p>
        <p className="heading">Hours</p>
      </div>
    </div>
    <div className="level-item has-text-centered">
      <div>
        <p className="title">
          {duration
            .minutes()
            .toString()
            .padStart(2, "0")}
        </p>
        <p className="heading">Minuts</p>
      </div>
    </div>
    <div className="level-item has-text-centered">
      <div>
        <p className="title">
          {duration
            .seconds()
            .toString()
            .padStart(2, "0")}
        </p>
        <p className="heading">Seconds</p>
      </div>
    </div>
  </nav>
)

export default Timer
