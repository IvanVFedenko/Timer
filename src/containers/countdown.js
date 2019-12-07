import React, { Component } from 'react';

import '../App.css';
import ViewTimer from '../components/viewTimer';

class Countdown extends Component {
  state = {
    timerOn: false,
    timerStart: 0,
    timerTime: 0,
    reset: true,
    start: false
  };

  startTimer = () => {
    clearInterval(this.timer);
    this.setState({
      timerOn: true,
      timerTime: this.state.timerTime,
      timerStart: this.state.timerTime,
      reset: false,
      start: true
    });

    this.timer = setInterval(() => {
      const newTime = this.state.timerTime - 10;
      if (newTime >= 0) {
        this.setState({
          timerTime: newTime
        });
      } else {
        clearInterval(this.timer);
        this.setState({
          timerOn: false,
          timerStart: 0
        });
      }
    }, 10);
  };

  startFaster = () => {
    clearInterval(this.timer);
    this.setState({
      timerOn: true,
      timerTime: this.state.timerTime,
      timerStart: this.state.timerTime,
      reset: false
    });
    this.timer = setInterval(() => {
      const newTime = this.state.timerTime - 15;
      if (newTime >= 0) {
        this.setState({
          timerTime: newTime
        });
      } else {
        clearInterval(this.timer);
        this.setState({
          timerOn: false,
          timerStart: 0
        });
      }
    }, 10);
  };

  startFastest = () => {
    clearInterval(this.timer);
    this.setState({
      timerOn: true,
      timerTime: this.state.timerTime,
      timerStart: this.state.timerTime,
      reset: false
    });
    this.timer = setInterval(() => {
      const newTime = this.state.timerTime - 20;
      if (newTime >= 0) {
        this.setState({
          timerTime: newTime
        });
      } else {
        clearInterval(this.timer);
        this.setState({
          timerOn: false,
          timerStart: 0
        });
      }
    }, 10);
  };

  stopTimer = () => {
    clearInterval(this.timer);
    this.setState({ timerOn: false });
  };

  resetTimer = () => {
    this.setState({
      timerStart: 0,
      timerTime: 0,
      reset: true,
      start: false
    });
  };

  adjustTimer = (input) => {
    const { timerTime, timerOn } = this.state;
    if (!timerOn) {
      if (input === 'incMinutes' && timerTime + 60000 < 4200000) {
        this.setState({ timerTime: timerTime + 60000 });
      } else if (input === 'decMinutes' && timerTime - 60000 >= 0) {
        this.setState({ timerTime: timerTime - 60000 });
      } else if (input === 'decMinutes' && timerTime === 0) {
        this.setState({ timerTime: 3540000 });
      } else if (input === 'incSeconds' && timerTime + 1000 < 4200000) {
        this.setState({ timerTime: timerTime + 1000 });
      } else if (input === 'decSeconds' && timerTime - 1000 >= 0) {
        this.setState({ timerTime: timerTime - 1000 });
      }
    }
  };

  render() {
    const { timerTime, timerStart, timerOn, reset, start } = this.state;
    let seconds = ('0' + (Math.floor((timerTime / 1000) % 60) % 60)).slice(-2);
    let minutes = ('0' + Math.floor((timerTime / 60000) % 60)).slice(-2);

    return (
      <div>
        <ViewTimer
          start={start}
          reset={reset}
          minutes={minutes}
          seconds={seconds}
          timerOn={timerOn}
          timerTime={timerTime}
          timerStart={timerStart}
          stopTimer={this.stopTimer}
          startTimer={this.startTimer}
          resetTimer={this.resetTimer}
          startFaster={this.startFaster}
          adjustTimer={this.adjustTimer}
          startFastest={this.startFastest}
        />
      </div>
    );
  }
}

export default Countdown;
