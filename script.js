      // 1. Initial Setup:
      // The code starts with an Immediately Invoked Function Expression (IIFE) to encapsulate everything within its scope.

!(function () {
  
  "use strict"; // It uses the "use strict"; directive to enforce stricter JavaScript coding practices.
  
    // Two arrays are defined:
        // e: This contains information for the "Heater Kit" drum sounds, including key codes, trigger keys, IDs, and URLs.
        // t: Similar to e, but for the "Smooth Piano Kit" sounds.
  
  const e = [
      {
        keyCode: 81,
        keyTrigger: "Q",
        id: "Heater-1",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
      },
      {
        keyCode: 87,
        keyTrigger: "W",
        id: "Heater-2",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
      },
      {
        keyCode: 69,
        keyTrigger: "E",
        id: "Heater-3",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
      },
      {
        keyCode: 65,
        keyTrigger: "A",
        id: "Heater-4",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
      },
      {
        keyCode: 83,
        keyTrigger: "S",
        id: "Clap",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
      },
      {
        keyCode: 68,
        keyTrigger: "D",
        id: "Open-HH",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
      },
      {
        keyCode: 90,
        keyTrigger: "Z",
        id: "Kick-n'-Hat",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
      },
      {
        keyCode: 88,
        keyTrigger: "X",
        id: "Kick",
        url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
      },
      {
        keyCode: 67,
        keyTrigger: "C",
        id: "Closed-HH",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
      },
    ],

        // t array: Similar to e array, but for the "Smooth Piano Kit" sounds.
        // including key codes, trigger keys, IDs, and URLs.
    
    t = [
      {
        keyCode: 81,
        keyTrigger: "Q",
        id: "Chord-1",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3",
      },
      {
        keyCode: 87,
        keyTrigger: "W",
        id: "Chord-2",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3",
      },
      {
        keyCode: 69,
        keyTrigger: "E",
        id: "Chord-3",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3",
      },
      {
        keyCode: 65,
        keyTrigger: "A",
        id: "Shaker",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3",
      },
      {
        keyCode: 83,
        keyTrigger: "S",
        id: "Open-HH",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3",
      },
      {
        keyCode: 68,
        keyTrigger: "D",
        id: "Closed-HH",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3",
      },
      {
        keyCode: 90,
        keyTrigger: "Z",
        id: "Punchy-Kick",
        url: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3",
      },
      {
        keyCode: 88,
        keyTrigger: "X",
        id: "Side-Stick",
        url: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3",
      },
      {
        keyCode: 67,
        keyTrigger: "C",
        id: "Snare",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3",
      },
    ],

        // Two objects define styles for different elements:
            //   a: Style for the active pad (orange background with shadow).
            //   s: Style for the inactive pad (white background with shadow).
    
    a = {
      backgroundColor: "orange",
      boxShadow: "0 3px orange",
      height: 77,
      marginTop: 13,
    },
    s = {
      backgroundColor: "white",
      marginTop: 10,
      boxShadow: "0 0 3px 3px black",
    };

        // 2. Drum Pad Component: This defines a React component class named r, representing a single drum pad.
            // It inherits from React.Component and has several functions:
            // constructor: Initializes the component's state with the pad style (s for inactive) and binds functions to this.
            // componentDidMount: Adds a key press event listener to the document when the component mounts.
            // componentWillUnmount: Removes the key press event listener when the component unmounts.
            // handleKeyPress: Checks if the pressed key code matches the pad's key code and triggers playSound if it does.
            // activatePad: Changes the pad style based on power state and click interaction.
            // playSound: Plays the associated audio sample, updates the display, and sets a timeout to reset the pad style.
  
  class r extends React.Component {
    constructor(e) {
      super(e),
        (this.state = { padStyle: s }),
        (this.playSound = this.playSound.bind(this)),
        (this.handleKeyPress = this.handleKeyPress.bind(this)),
        (this.activatePad = this.activatePad.bind(this));
    }
    componentDidMount() {
      document.addEventListener("keydown", this.handleKeyPress);
    }
    componentWillUnmount() {
      document.removeEventListener("keydown", this.handleKeyPress);
    }
    handleKeyPress(e) {
      e.keyCode === this.props.keyCode && this.playSound();
    }
    activatePad() {
      this.props.power
        ? "orange" === this.state.padStyle.backgroundColor
          ? this.setState({ padStyle: s })
          : this.setState({ padStyle: a })
        : 13 === this.state.padStyle.marginTop
        ? this.setState({ padStyle: s })
        : this.setState({
            padStyle: {
              height: 77,
              marginTop: 13,
              backgroundColor: "grey",
              boxShadow: "0 3px grey",
            },
          });
    }
    playSound() {
      const e = document.getElementById(this.props.keyTrigger);
      (e.currentTime = 0),
        e.play(),
        this.activatePad(),
        setTimeout(() => this.activatePad(), 100),
        this.props.updateDisplay(this.props.clipId.replace(/-/g, " "));
    }

        // The render function returns a div element with the following children:
            // Another div with the audio sample (audio element) referenced by the key trigger.
            // The key trigger character displayed on the pad.
    
    render() {
      return React.createElement(
        "div",
        {
          className: "drum-pad",
          id: this.props.clipId,
          onClick: this.playSound,
          style: this.state.padStyle,
        },
        
          React.createElement("audio", {
            className: "clip",
            id: this.props.keyTrigger,
            src: this.props.clip,
          }),
          
          this.props.keyTrigger
      );
    }
  }

      // 3. Pad Bank Component: This defines a React component class named i that represents a collection of drum pads (a bank).
            // The render function iterates through the currentPadBank prop (either e or t) and renders a DrumPad component for each item.
            // It wraps all the rendered DrumPad components inside a div with the class name pad-bank.
      
  class i extends React.Component {
    constructor(e) {
      super(e);
    }
    render() {
      let e;
      return (
        (e = this.props.power
          ? this.props.currentPadBank.map((e, t, a) =>
              React.createElement(r, {
                clip: a[t].url,
                clipId: a[t].id,
                key: a[t].id,
                keyCode: a[t].keyCode,
                keyTrigger: a[t].keyTrigger,
                power: this.props.power,
                updateDisplay: this.props.updateDisplay,
              })
            )
          : this.props.currentPadBank.map((e, t, a) =>
              React.createElement(r, {
                clip: "#",
                clipId: a[t].id,
                key: a[t].id,
                keyCode: a[t].keyCode,
                keyTrigger: a[t].keyTrigger,
                power: this.props.power,
                updateDisplay: this.props.updateDisplay,
              })
            )),
        React.createElement("div", { className: "pad-bank" }, e)
      );
    }
  }

            // 4. Main App Component: This defines a React component class named o that represents the entire drum machine application.
                  // The constructor initializes the component's state with various properties:
                  // power: Boolean indicating power on/off (initially on).
                  // display: String shown on the display (initially a space character).
                  // currentPadBank: Array containing the current drum pad data (initially "Heater Kit").
                  // currentPadBankId: String representing the current pad bank name ("Heater Kit").
                  // sliderVal: Number representing the volume (initially 0.3).
      
                  // This class also has several functions for handling user interactions:
                  // powerControl: Toggles the power state and resets the display.
                  // selectBank: Switches between the two pad banks ("Heater Kit" and "Smooth Piano Kit") and updates the display.
                  // displayClipName: Updates the display with the name of the played clip (when power is on).
                  // adjustVolume: Adjusts the audio volume based on the slider input and updates the display temporarily.
                  // clearDisplay: Clears the temporary display message after a timeout.
      
  class o extends React.Component {
    constructor(t) {
      super(t),
        (this.state = {
          power: !0,
          display: String.fromCharCode(160),
          currentPadBank: e,
          currentPadBankId: "Heater Kit",
          sliderVal: 0.3,
        }),
        (this.displayClipName = this.displayClipName.bind(this)),
        (this.selectBank = this.selectBank.bind(this)),
        (this.adjustVolume = this.adjustVolume.bind(this)),
        (this.powerControl = this.powerControl.bind(this)),
        (this.clearDisplay = this.clearDisplay.bind(this));
    }
    powerControl() {
      this.setState({
        power: !this.state.power,
        display: String.fromCharCode(160),
      });
    }
    selectBank() {
      this.state.power &&
        ("Heater Kit" === this.state.currentPadBankId
          ? this.setState({
              currentPadBank: t,
              display: "Smooth Piano Kit",
              currentPadBankId: "Smooth Piano Kit",
            })
          : this.setState({
              currentPadBank: e,
              display: "Heater Kit",
              currentPadBankId: "Heater Kit",
            }));
    }
    displayClipName(e) {
      this.state.power && this.setState({ display: e });
    }
    adjustVolume(e) {
      this.state.power &&
        (this.setState({
          sliderVal: e.target.value,
          display: "Volume: " + Math.round(100 * e.target.value),
        }),
        setTimeout(() => this.clearDisplay(), 1e3));
    }
    clearDisplay() {
      this.setState({ display: String.fromCharCode(160) });
    }

              // The render function defines the main layout and components of the app:
                  // It renders a PadBank component with the current pad bank data.
                  // It creates the logo section with the app name ("NAGA").
                  // It builds the control section with:
                  // A power switch button.
                  // A display area for showing the current clip name or volume.
                  // A volume slider to adjust the sound level.
                  // A button to switch between drum pad banks.
                  // A title displaying "DRUM MACHINE".
        
    render() {
      const t = this.state.power ? { float: "right" } : { float: "left" },
        a =
          this.state.currentPadBank === e
            ? { float: "left" }
            : { float: "right" };
      [].slice.call(document.getElementsByClassName("clip")).forEach((e) => {
        e.volume = this.state.sliderVal;
      });
          
      return React.createElement(
        "div",
        { className: "inner-container", id: "drum-machine" },
        React.createElement(i, {
          clipVolume: this.state.sliderVal,
          currentPadBank: this.state.currentPadBank,
          power: this.state.power,
          updateDisplay: this.displayClipName,
        }),
        React.createElement(
          "div",
          { className: "logo" },
          React.createElement(
            "div",
            { className: "inner-logo " },
            "NAGA" + String.fromCharCode(160)
          )
        ),
            
        React.createElement(
          "div",
          { className: "controls-container" },
          React.createElement(
            "div",
            { className: "control" },
            React.createElement("p", null, "Power"),
            React.createElement(
              "div",
              { className: "select", onClick: this.powerControl },
              React.createElement("div", { className: "inner", style: t })
            )
          ),
              
          React.createElement("p", { id: "display" }, this.state.display),
          React.createElement(
            "div",
            { className: "volume-slider" },
            React.createElement("input", {
              max: "1",
              min: "0",
              onChange: this.adjustVolume,
              step: "0.01",
              type: "range",
              value: this.state.sliderVal,
            })
          ),
              
          React.createElement(
            "div",
            { className: "control" },
            React.createElement("p", null, "Bank"),
            React.createElement(
              "div",
              { className: "select", onClick: this.selectBank },
              React.createElement("div", { className: "inner", style: a })
            )
          ),
              
          React.createElement(
            "div",
            { className: "title" },
            React.createElement(
              "div",
              {
                className: "inner-title",
              },
              "DRUM MACHINE"
            )
          )
        )
      );
    }
  }

      // Finally, it uses ReactDOM.render to render the main app component (o) into the element with the ID "root" in the HTML.
      
  ReactDOM.render(
    React.createElement(o, null),
    document.getElementById("root")
  );
})();
