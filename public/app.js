class App extends React.Component {
  // enumerate the properties needed in each component in the parent component state 
  constructor(props) {
    super(props);
    this.state = {
      form: 1,
      name: "",
      email: "",
      password: "",
      street1: "",
      street2: "",
      city: "",
      zip: "",
      phone: "",
      card_number: "",
      expiration: "",
      ccv: "",
      billing_zip: ""
    };
  }

  // function to get into the next form 
  next(e) {
    e.preventDefault();
    this.setState({
      form: this.state.form + 1
    });
  } //function to get into the previous form 


  previous(e) {
    e.preventDefault();
    this.setState({
      form: this.state.form - 1
    });
  } // add the user input to the component to each respective state properties 


  typing(e) {
    this.setState({
      [e.target.id]: e.target.value
    });
  } //submit data to the last from 


  submitData(e) {
    e.preventDefault();
    var data = {};

    for (var keys in this.state) {
      if (keys !== 'form') {
        data[keys] = this.state[keys];
      }
    }

    this.setState(this.reset());
    $.post("/data", data);
  } //checks the form number and then render it's correspondent component or form 


  render() {
    return this.state.form === 1 ? /*#__PURE__*/React.createElement(FormOne, {
      states: this.state,
      typing: this.typing.bind(this),
      next: this.next.bind(this)
    }) : this.state.form === 2 ? /*#__PURE__*/React.createElement(FormTwo, {
      states: this.state,
      typing: this.typing.bind(this),
      next: this.next.bind(this),
      previous: this.previous.bind(this)
    }) : this.state.form === 3 ? /*#__PURE__*/React.createElement(FormThree, {
      states: this.state,
      typing: this.typing.bind(this),
      next: this.next.bind(this),
      previous: this.previous.bind(this)
    }) : /*#__PURE__*/React.createElement(Confirmation, {
      states: this.state,
      submitData: this.submitData.bind(this),
      previous: this.previous.bind(this)
    });
  }

}

class FormOne extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("form", {
      action: "/data",
      method: "post"
    }, /*#__PURE__*/React.createElement("label", {
      name: "name"
    }, "Name"), /*#__PURE__*/React.createElement("input", {
      name: "name",
      type: "text",
      id: "name",
      value: this.props.states.name,
      onChange: this.props.typing
    }), /*#__PURE__*/React.createElement("label", {
      name: "email"
    }, "Email"), /*#__PURE__*/React.createElement("input", {
      type: "email",
      id: "email",
      value: this.props.states.email,
      onChange: this.props.typing
    }), /*#__PURE__*/React.createElement("label", {
      name: "password"
    }, "Password"), /*#__PURE__*/React.createElement("input", {
      type: "password",
      id: "password",
      value: this.props.states.password,
      onChange: this.props.typing
    }), /*#__PURE__*/React.createElement("button", {
      onClick: this.props.next
    }, "Next")));
  }

}

class FormTwo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("form", {
      action: "/data",
      method: "post"
    }, /*#__PURE__*/React.createElement("label", {
      name: "street1"
    }, "Street 1"), /*#__PURE__*/React.createElement("input", {
      type: "text",
      id: "street1",
      value: this.props.states.street1,
      onChange: this.props.typing
    }), /*#__PURE__*/React.createElement("label", {
      name: "street2"
    }, "Street 2"), /*#__PURE__*/React.createElement("input", {
      type: "text",
      id: "street2",
      value: this.props.states.street2,
      onChange: this.props.typing
    }), /*#__PURE__*/React.createElement("label", {
      name: "city"
    }, "City"), /*#__PURE__*/React.createElement("input", {
      type: "text",
      id: "city",
      value: this.props.states.city,
      onChange: this.props.typing
    }), /*#__PURE__*/React.createElement("label", {
      name: "zip"
    }, "ZIP Code"), /*#__PURE__*/React.createElement("input", {
      type: "number",
      id: "zip",
      value: this.props.states.zip,
      onChange: this.props.typing
    }), /*#__PURE__*/React.createElement("label", {
      name: "phone"
    }, "Phone number"), /*#__PURE__*/React.createElement("input", {
      type: "number",
      id: "phone",
      value: this.props.states.phone,
      onChange: this.props.typing
    }), /*#__PURE__*/React.createElement("button", {
      onClick: this.props.previous
    }, "Previous"), /*#__PURE__*/React.createElement("button", {
      onClick: this.props.next
    }, "Next")));
  }

}

class FormThree extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("form", {
      action: "/data",
      method: "post"
    }, /*#__PURE__*/React.createElement("label", {
      name: "card_Number"
    }, "Credit Card Number"), /*#__PURE__*/React.createElement("input", {
      type: "number",
      id: "card_Number",
      value: this.props.states.card_Number,
      onChange: this.props.typing
    }), /*#__PURE__*/React.createElement("label", {
      name: "expiration"
    }, "Expiration Date"), /*#__PURE__*/React.createElement("input", {
      type: "month",
      id: "expiration",
      value: this.props.states.expiration,
      onChange: this.props.typing
    }), /*#__PURE__*/React.createElement("label", {
      name: "ccv"
    }, "CCV"), /*#__PURE__*/React.createElement("input", {
      type: "number",
      id: "ccv",
      value: this.props.states.ccv,
      onChange: this.props.typing
    }), /*#__PURE__*/React.createElement("label", {
      name: "billing_Zip"
    }, "Billing ZIP"), /*#__PURE__*/React.createElement("input", {
      type: "number",
      id: "billing_Zip",
      value: this.props.states.billing_Zip,
      onChange: this.props.typing
    }), /*#__PURE__*/React.createElement("button", {
      onClick: this.props.previous
    }, "Previous"), /*#__PURE__*/React.createElement("button", {
      onClick: this.props.next
    }, "Next")));
  }

}

class Confirmation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return /*#__PURE__*/React.createElement("div", null, Object.keys(this.props.states).map((elem, i) => elem !== 'form' ? /*#__PURE__*/React.createElement(ListElem, {
      key: i,
      title: elem,
      value: this.props.states[elem]
    }) : null), /*#__PURE__*/React.createElement("button", {
      onClick: this.props.previous
    }, "Previous"), /*#__PURE__*/React.createElement("button", {
      onClick: this.props.submitData
    }, "Confirm"));
  }

}

class ListElem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("b", null, this.props.title), ": ", this.props.value);
  }

}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('App'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NsaWVudC9hcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInN0YXRlIiwiZm9ybSIsIm5hbWUiLCJlbWFpbCIsInBhc3N3b3JkIiwic3RyZWV0MSIsInN0cmVldDIiLCJjaXR5IiwiemlwIiwicGhvbmUiLCJjYXJkX251bWJlciIsImV4cGlyYXRpb24iLCJjY3YiLCJiaWxsaW5nX3ppcCIsIm5leHQiLCJlIiwicHJldmVudERlZmF1bHQiLCJzZXRTdGF0ZSIsInByZXZpb3VzIiwidHlwaW5nIiwidGFyZ2V0IiwiaWQiLCJ2YWx1ZSIsInN1Ym1pdERhdGEiLCJkYXRhIiwia2V5cyIsInJlc2V0IiwiJCIsInBvc3QiLCJyZW5kZXIiLCJiaW5kIiwiRm9ybU9uZSIsInN0YXRlcyIsIkZvcm1Ud28iLCJGb3JtVGhyZWUiLCJjYXJkX051bWJlciIsImJpbGxpbmdfWmlwIiwiQ29uZmlybWF0aW9uIiwiT2JqZWN0IiwibWFwIiwiZWxlbSIsImkiLCJMaXN0RWxlbSIsInRpdGxlIiwiUmVhY3RET00iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiQUFDQSxNQUFNQSxHQUFOLFNBQWtCQyxLQUFLLENBQUNDLFNBQXhCLENBQWtDO0FBQzlCO0FBQ0FDLEVBQUFBLFdBQVcsQ0FBQ0MsS0FBRCxFQUFPO0FBQ2QsVUFBTUEsS0FBTjtBQUNBLFNBQUtDLEtBQUwsR0FBYTtBQUNUQyxNQUFBQSxJQUFJLEVBQUMsQ0FESTtBQUVUQyxNQUFBQSxJQUFJLEVBQUMsRUFGSTtBQUdUQyxNQUFBQSxLQUFLLEVBQUMsRUFIRztBQUlUQyxNQUFBQSxRQUFRLEVBQUMsRUFKQTtBQUtUQyxNQUFBQSxPQUFPLEVBQUMsRUFMQztBQU1UQyxNQUFBQSxPQUFPLEVBQUMsRUFOQztBQU9UQyxNQUFBQSxJQUFJLEVBQUMsRUFQSTtBQVFUQyxNQUFBQSxHQUFHLEVBQUMsRUFSSztBQVNUQyxN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XG4gICAgLy8gZW51bWVyYXRlIHRoZSBwcm9wZXJ0aWVzIG5lZWRlZCBpbiBlYWNoIGNvbXBvbmVudCBpbiB0aGUgcGFyZW50IGNvbXBvbmVudCBzdGF0ZSBcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7IFxuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7IFxuICAgICAgICAgICAgZm9ybToxLFxuICAgICAgICAgICAgbmFtZTpcIlwiLFxuICAgICAgICAgICAgZW1haWw6XCJcIixcbiAgICAgICAgICAgIHBhc3N3b3JkOlwiXCIsXG4gICAgICAgICAgICBzdHJlZXQxOlwiXCIsXG4gICAgICAgICAgICBzdHJlZXQyOlwiXCIsXG4gICAgICAgICAgICBjaXR5OlwiXCIsXG4gICAgICAgICAgICB6aXA6XCJcIixcbiAgICAgICAgICAgIHBob25lOlwiXCIsXG4gICAgICAgICAgICBjYXJkX251bWJlcjpcIlwiLFxuICAgICAgICAgICAgZXhwaXJhdGlvbjpcIlwiLFxuICAgICAgICAgICAgY2N2OlwiXCIsXG4gICAgICAgICAgICBiaWxsaW5nX3ppcDpcIlwiXG4gICAgICAgIH07XG4gICAgfTtcbiAgICAvLyBmdW5jdGlvbiB0byBnZXQgaW50byB0aGUgbmV4dCBmb3JtIFxuICAgIG5leHQoZSl7IFxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2Zvcm06dGhpcy5zdGF0ZS5mb3JtICsgMX0pXG4gICAgfVxuICAgIC8vZnVuY3Rpb24gdG8gZ2V0IGludG8gdGhlIHByZXZpb3VzIGZvcm0gXG4gICAgcHJldmlvdXMoZSl7IFxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2Zvcm06dGhpcy5zdGF0ZS5mb3JtIC0gMX0pXG4gICAgfVxuICAgIC8vIGFkZCB0aGUgdXNlciBpbnB1dCB0byB0aGUgY29tcG9uZW50IHRvIGVhY2ggcmVzcGVjdGl2ZSBzdGF0ZSBwcm9wZXJ0aWVzIFxuICAgIHR5cGluZyhlKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1tlLnRhcmdldC5pZF06IGUudGFyZ2V0LnZhbHVlfSk7XG4gICAgfVxuICAgIC8vc3VibWl0IGRhdGEgdG8gdGhlIGxhc3QgZnJvbSBcbiAgICBzdWJtaXREYXRhKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB2YXIgZGF0YSA9IHt9O1xuICAgICAgICBmb3IgKHZhciBrZXlzIGluIHRoaXMuc3RhdGUpIHtcbiAgICAgICAgICBpZihrZXlzICE9PSAnZm9ybScpe1xuICAgICAgICAgICAgZGF0YVtrZXlzXSA9IHRoaXMuc3RhdGVba2V5c11cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh0aGlzLnJlc2V0KCkpXG4gICAgXG4gICAgXG4gICAgICAgICQucG9zdChcIi9kYXRhXCIsIGRhdGEpO1xuICAgICAgfVxuICAgIC8vY2hlY2tzIHRoZSBmb3JtIG51bWJlciBhbmQgdGhlbiByZW5kZXIgaXQncyBjb3JyZXNwb25kZW50IGNvbXBvbmVudCBvciBmb3JtIFxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5mb3JtID09PSAxID8gXG4gICAgICAgICAgICA8Rm9ybU9uZSBzdGF0ZXMgPSB7dGhpcy5zdGF0ZX0gdHlwaW5nID0ge3RoaXMudHlwaW5nLmJpbmQodGhpcyl9IG5leHQgPSB7dGhpcy5uZXh0LmJpbmQodGhpcyl9IC8+IDogXG4gICAgICAgICAgICAodGhpcy5zdGF0ZS5mb3JtID09PSAyID8gXG4gICAgICAgICAgICAgICAgPEZvcm1Ud28gc3RhdGVzID0ge3RoaXMuc3RhdGV9IHR5cGluZyA9IHt0aGlzLnR5cGluZy5iaW5kKHRoaXMpfSBuZXh0ID0ge3RoaXMubmV4dC5iaW5kKHRoaXMpfSBwcmV2aW91cyA9IHt0aGlzLnByZXZpb3VzLmJpbmQodGhpcyl9IC8+IDogXG4gICAgICAgICAgICAgICAgKHRoaXMuc3RhdGUuZm9ybSA9PT0gMyA/IFxuICAgICAgICAgICAgICAgICAgICA8Rm9ybVRocmVlIHN0YXRlcyA9IHt0aGlzLnN0YXRlfSB0eXBpbmcgPSB7dGhpcy50eXBpbmcuYmluZCh0aGlzKX0gbmV4dCA9IHt0aGlzLm5leHQuYmluZCh0aGlzKX0gcHJldmlvdXMgPSB7dGhpcy5wcmV2aW91cy5iaW5kKHRoaXMpfSAvPiA6XG4gICAgICAgICAgICAgICAgICAgIDxDb25maXJtYXRpb24gc3RhdGVzID0ge3RoaXMuc3RhdGV9IHN1Ym1pdERhdGEgPSB7dGhpcy5zdWJtaXREYXRhLmJpbmQodGhpcyl9IHByZXZpb3VzID0ge3RoaXMucHJldmlvdXMuYmluZCh0aGlzKX0gLz4gKSlcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAgY2xhc3MgRm9ybU9uZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7IFxuICAgICAgICAgICAgICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgICAgICAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZW5kZXIoKSB7XG4gICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxmb3JtIGFjdGlvbj1cIi9kYXRhXCIgbWV0aG9kPVwicG9zdFwiPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIG5hbWU9XCJuYW1lXCI+TmFtZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJuYW1lXCIgdHlwZT1cInRleHRcIiBpZD1cIm5hbWVcIiB2YWx1ZT17dGhpcy5wcm9wcy5zdGF0ZXMubmFtZX0gb25DaGFuZ2U9e3RoaXMucHJvcHMudHlwaW5nfS8+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgbmFtZT1cImVtYWlsXCI+RW1haWw8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBpZD1cImVtYWlsXCIgIHZhbHVlPXt0aGlzLnByb3BzLnN0YXRlcy5lbWFpbH0gb25DaGFuZ2U9e3RoaXMucHJvcHMudHlwaW5nfS8+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgbmFtZT1cInBhc3N3b3JkXCI+UGFzc3dvcmQ8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBpZD1cInBhc3N3b3JkXCIgdmFsdWU9e3RoaXMucHJvcHMuc3RhdGVzLnBhc3N3b3JkfSBvbkNoYW5nZT17dGhpcy5wcm9wcy50eXBpbmd9Lz5cbiAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9IHt0aGlzLnByb3BzLm5leHR9Pk5leHQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjbGFzcyBGb3JtVHdvIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICAgICAgICAgICAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICAgICAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgcmVuZGVyKCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBhY3Rpb249XCIvZGF0YVwiIG1ldGhvZD1cInBvc3RcIj5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgbmFtZT1cInN0cmVldDFcIj5TdHJlZXQgMTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInN0cmVldDFcIiAgdmFsdWU9e3RoaXMucHJvcHMuc3RhdGVzLnN0cmVldDF9IG9uQ2hhbmdlPXt0aGlzLnByb3BzLnR5cGluZ30vPlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBuYW1lPVwic3RyZWV0MlwiPlN0cmVldCAyPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwic3RyZWV0MlwiIHZhbHVlPXt0aGlzLnByb3BzLnN0YXRlcy5zdHJlZXQyfSBvbkNoYW5nZT17dGhpcy5wcm9wcy50eXBpbmd9Lz5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgbmFtZT1cImNpdHlcIj5DaXR5PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiY2l0eVwiICB2YWx1ZT17dGhpcy5wcm9wcy5zdGF0ZXMuY2l0eX0gb25DaGFuZ2U9e3RoaXMucHJvcHMudHlwaW5nfS8+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIG5hbWU9XCJ6aXBcIj5aSVAgQ29kZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIGlkPVwiemlwXCIgIHZhbHVlPXt0aGlzLnByb3BzLnN0YXRlcy56aXB9IG9uQ2hhbmdlPXt0aGlzLnByb3BzLnR5cGluZ30vPlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBuYW1lPVwicGhvbmVcIj5QaG9uZSBudW1iZXI8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBpZD1cInBob25lXCIgIHZhbHVlPXt0aGlzLnByb3BzLnN0YXRlcy5waG9uZX0gb25DaGFuZ2U9e3RoaXMucHJvcHMudHlwaW5nfS8+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPSB7dGhpcy5wcm9wcy5wcmV2aW91c30+UHJldmlvdXM8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz0ge3RoaXMucHJvcHMubmV4dH0+TmV4dDwvYnV0dG9uPlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBjbGFzcyBGb3JtVGhyZWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgICAgICAgICAgICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgICAgICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICByZW5kZXIoKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIGFjdGlvbj1cIi9kYXRhXCIgbWV0aG9kPVwicG9zdFwiPlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBuYW1lPVwiY2FyZF9OdW1iZXJcIj5DcmVkaXQgQ2FyZCBOdW1iZXI8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBpZD1cImNhcmRfTnVtYmVyXCIgdmFsdWU9e3RoaXMucHJvcHMuc3RhdGVzLmNhcmRfTnVtYmVyfSBvbkNoYW5nZT17dGhpcy5wcm9wcy50eXBpbmd9Lz5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgbmFtZT1cImV4cGlyYXRpb25cIj5FeHBpcmF0aW9uIERhdGU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJtb250aFwiIGlkPVwiZXhwaXJhdGlvblwiIHZhbHVlPXt0aGlzLnByb3BzLnN0YXRlcy5leHBpcmF0aW9ufSBvbkNoYW5nZT17dGhpcy5wcm9wcy50eXBpbmd9Lz5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgbmFtZT1cImNjdlwiPkNDVjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIGlkPVwiY2N2XCIgdmFsdWU9e3RoaXMucHJvcHMuc3RhdGVzLmNjdn0gb25DaGFuZ2U9e3RoaXMucHJvcHMudHlwaW5nfS8+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIG5hbWU9XCJiaWxsaW5nX1ppcFwiPkJpbGxpbmcgWklQPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgaWQ9XCJiaWxsaW5nX1ppcFwiIHZhbHVlPXt0aGlzLnByb3BzLnN0YXRlcy5iaWxsaW5nX1ppcH0gb25DaGFuZ2U9e3RoaXMucHJvcHMudHlwaW5nfS8+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPSB7dGhpcy5wcm9wcy5wcmV2aW91c30+UHJldmlvdXM8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5wcm9wcy5uZXh0fT5OZXh0PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgY2xhc3MgQ29uZmlybWF0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICAgICAgICAgICAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICAgICAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgcmVuZGVyKCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyh0aGlzLnByb3BzLnN0YXRlcykubWFwKChlbGVtLCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0gIT09ICdmb3JtJyA/IDxMaXN0RWxlbSBrZXk9e2l9IHRpdGxlID0ge2VsZW19IHZhbHVlID0ge3RoaXMucHJvcHMuc3RhdGVzW2VsZW1dfSAvPiA6IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9IHt0aGlzLnByb3BzLnByZXZpb3VzfT5QcmV2aW91czwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5wcm9wcy5zdWJtaXREYXRhfT5Db25maXJtPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGNsYXNzIExpc3RFbGVtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICAgICAgICAgICAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICAgICAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgcmVuZGVyKCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPHA+PGI+e3RoaXMucHJvcHMudGl0bGV9PC9iPjoge3RoaXMucHJvcHMudmFsdWV9PC9wPlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgIFJlYWN0RE9NLnJlbmRlcig8QXBwPjwvQXBwPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0FwcCcpKTtcbiAgICAgICAgICAgICJdfQ==