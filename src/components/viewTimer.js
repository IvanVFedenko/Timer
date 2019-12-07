import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import '../App.css';

const ViewTimer = (props) => {
  const {
    start,
    reset,
    minutes,
    seconds,
    timerOn,
    timerTime,
    stopTimer,
    timerStart,
    startTimer,
    resetTimer,
    adjustTimer,
    startFaster,
    startFastest
  } = props;
  return (
    <div className="Countdown">
      <div className="Countdown-header">Countdown</div>
      <div className="Countdown-display">
        <button
          className="increase_button"
          onClick={() => adjustTimer('incMinutes')}
        >
          &#8679;
        </button>
        <button
          className="increase_button"
          onClick={() => adjustTimer('incSeconds')}
        >
          &#8679;
        </button>

        <div
          className={classnames({
            'Countdown-time': true,
            'Countdown-alert': timerTime < 20000,
            blink_alert: timerTime < 10000 && timerTime > 0
          })}
        >
          {minutes} : {seconds}
        </div>

        <button
          className="decrease_button"
          onClick={() => adjustTimer('decMinutes')}
        >
          &#8681;
        </button>
        <button
          className="decrease_button"
          onClick={() => adjustTimer('decSeconds')}
        >
          &#8681;
        </button>
      </div>

      <button
        disabled={timerTime === 0}
        className="Button-start"
        onClick={startTimer}
      >
        Start
      </button>

      <button
        disabled={timerTime === 0 || start === false}
        className="Button-start"
        onClick={startFaster}
      >
        x 1.5
      </button>

      <button
        disabled={timerTime === 0 || start === false}
        className="Button-start"
        onClick={startFastest}
      >
        x 2.0
      </button>

      {timerOn === true && timerTime >= 1000 && (
        <button className="Button-stop" onClick={stopTimer}>
          Pause
        </button>
      )}
      {timerOn === false &&
        timerStart !== 0 &&
        timerStart !== timerTime &&
        timerTime !== 0 && (
          <button className="Button-start" onClick={startTimer}>
            Resume
          </button>
        )}

      {(timerOn === false || timerTime < 1000) &&
        timerStart !== timerTime &&
        timerStart > 0 && (
          <button className="Button-reset" onClick={resetTimer}>
            Reset
          </button>
        )}

      {timerTime <= timerStart / 2 && timerStart > 0 ? (
        <p className="Countdown-time-half">More than halfway there!</p>
      ) : (
        ''
      )}
      {timerStart === 0 && timerTime === 0 && reset === false ? (
        <p className="Countdown-time-up">Time’s up!</p>
      ) : (
        ''
      )}
    </div>
  );
};

ViewTimer.propTypes = {
  start: PropTypes.bool,
  reset: PropTypes.bool,
  timerOn: PropTypes.bool,
  minutes: PropTypes.string.isRequired,
  seconds: PropTypes.string.isRequired,
  stopTimer: PropTypes.func.isRequired,
  startTimer: PropTypes.func.isRequired,
  resetTimer: PropTypes.func.isRequired,
  adjustTimer: PropTypes.func.isRequired,
  timerTime: PropTypes.number.isRequired,
  startFaster: PropTypes.func.isRequired,
  startFastest: PropTypes.func.isRequired,
  timerStart: PropTypes.number.isRequired
};

export default ViewTimer;
