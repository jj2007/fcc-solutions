/*React and Redux: Manage State Locally First
Here you'll finish creating the DisplayMessages component.


First, in the render() method, have the component render an input element, button element, and ul element. When the input element changes, it should trigger a handleChange() method. Also, the input element should render the value of input that's in the component's state. The button element should trigger a submitMessage() method when it's clicked.

Second, write these two methods. The handleChange() method should update the input with what the user is typing. The submitMessage() method should concatenate the current message (stored in input) to the messages array in local state, and clear the value of the input.

Finally, use the ul to map over the array of messages and render it to the screen as a list of li elements. */
class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  // add handleChange() and submitMessage() methods here
   handleChange(event) {
     this.setState ({
       input : event.target.value
     });
   };
   submitMessage(event) {
     event.preventDefault();
     this.setState({
       messages: this.state.messages.concat([this.state.input]),
       input: ''
     })
   };

  render() {
    const listmessages = this.state.messages.map((message) => 
        <li key={message.toString()}>{message}</li>
    );
    return (
      <div>
        <h2>Type in a new Message:</h2>
        { /* render an input, button, and ul here */ }     
        <input type="text" name="mess" value={this.state.input} onChange={this.handleChange} />
        <button value="submit" onClick={this.submitMessage}>Add message</button>
        <ul>{listmessages}</ul>
        { /* change code above this line */ }
      </div>
    );
  }
};
