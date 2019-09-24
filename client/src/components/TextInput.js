import React from "react";
import '../App.css';

class TextInput extends React.Component {

  state = {
    currentValue: "hello",

  }

  render() {
    var value = this.state.currentValue.replace('\\n', '\n');
    return (
      <div>
        <textarea name="body"
          className="text-field"
          onChange={this.handleChange}
          value={value}
        />
      </div>
    )
  }
}

export default TextInput;