import React from 'react';

class ControlPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fishNumber: 0,
      userName: userName,
    };
  }
  //   componentDidMount() {
  //     fetch('/api/')
  //       .then(res => res.json())
  //       .then((fishNumber) => {
  //         if () fishNumber= 0;
  //         return this.setState({
  //             fishNumber: 0
  //         });
  //       })
  //       .catch(err => console.log(err))
  //   }

  render() {
    return (
      <div>
        <button className="bttn1">Add</button>
        <button className="bttn2">Remove</button>
        <button className="bttn2">Sync</button>
      </div>
    );
  }
}

export default ControlPanel;
