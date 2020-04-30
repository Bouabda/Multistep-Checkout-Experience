
class App extends React.Component {
    // enumerate the properties needed in each component in the parent component state 
    constructor(props){ 
        super(props);
        this.state = { 
            form:1,
            name:"",
            email:"",
            password:"",
            street1:"",
            street2:"",
            city:"",
            zip:"",
            phone:"",
            card_number:"",
            expiration:"",
            ccv:"",
            billing_zip:""
        };
    };
    // function to get into the next form 
    next(e){ 
        e.preventDefault();
        this.setState({form:this.state.form + 1})
    }
    //function to get into the previous form 
    previous(e){ 
        e.preventDefault();
        this.setState({form:this.state.form - 1})
    }
    // add the user input to the component to each respective state properties 
    typing(e) {
        this.setState({[e.target.id]: e.target.value});
    }
    //submit data to the last from 
    submitData(e) {
        e.preventDefault();
        var data = {};
        for (var keys in this.state) {
          if(keys !== 'form'){
            data[keys] = this.state[keys]
          }
        }
        this.setState(this.reset())
    
    
        $.post("/data", data);
      }
    //checks the form number and then render it's correspondent component or form 
    render() {
        return(
            this.state.form === 1 ? 
            <FormOne states = {this.state} typing = {this.typing.bind(this)} next = {this.next.bind(this)} /> : 
            (this.state.form === 2 ? 
                <FormTwo states = {this.state} typing = {this.typing.bind(this)} next = {this.next.bind(this)} previous = {this.previous.bind(this)} /> : 
                (this.state.form === 3 ? 
                    <FormThree states = {this.state} typing = {this.typing.bind(this)} next = {this.next.bind(this)} previous = {this.previous.bind(this)} /> :
                    <Confirmation states = {this.state} submitData = {this.submitData.bind(this)} previous = {this.previous.bind(this)} /> ))
                    )
                }
            }
        
             class FormOne extends React.Component { 
                constructor(props){
                    super(props);
                }
                render() {
                 return (
                    <div>
                    <form action="/data" method="post">
            
                      <label name="name">Name</label>
                      <input name="name" type="text" id="name" value={this.props.states.name} onChange={this.props.typing}/>
            
                      <label name="email">Email</label>
                      <input type="email" id="email"  value={this.props.states.email} onChange={this.props.typing}/>
            
                      <label name="password">Password</label>
                      <input type="password" id="password" value={this.props.states.password} onChange={this.props.typing}/>
                      
                      <button onClick= {this.props.next}>Next</button>
                    </form>
                  </div>
                 )
                }
            }
            class FormTwo extends React.Component {
                constructor(props) {
                  super(props);
                }
              
                render() {
                  return (
                    <div>
                      <form action="/data" method="post">
              
                        <label name="street1">Street 1</label>
                        <input type="text" id="street1"  value={this.props.states.street1} onChange={this.props.typing}/>
              
                        <label name="street2">Street 2</label>
                        <input type="text" id="street2" value={this.props.states.street2} onChange={this.props.typing}/>
              
                        <label name="city">City</label>
                        <input type="text" id="city"  value={this.props.states.city} onChange={this.props.typing}/>
              
                        <label name="zip">ZIP Code</label>
                        <input type="number" id="zip"  value={this.props.states.zip} onChange={this.props.typing}/>
              
                        <label name="phone">Phone number</label>
                        <input type="number" id="phone"  value={this.props.states.phone} onChange={this.props.typing}/>
              
                        <button onClick= {this.props.previous}>Previous</button>
                        <button onClick= {this.props.next}>Next</button>
              
                      </form>
                    </div>
                  )
                }
              }
              class FormThree extends React.Component {
                constructor(props) {
                  super(props);
                }
              
                render() {
                  return (
                    <div>
                      <form action="/data" method="post">
              
                        <label name="card_Number">Credit Card Number</label>
                        <input type="number" id="card_Number" value={this.props.states.card_Number} onChange={this.props.typing}/>
              
                        <label name="expiration">Expiration Date</label>
                        <input type="month" id="expiration" value={this.props.states.expiration} onChange={this.props.typing}/>
              
                        <label name="ccv">CCV</label>
                        <input type="number" id="ccv" value={this.props.states.ccv} onChange={this.props.typing}/>
              
                        <label name="billing_Zip">Billing ZIP</label>
                        <input type="number" id="billing_Zip" value={this.props.states.billing_Zip} onChange={this.props.typing}/>
              
                        <button onClick= {this.props.previous}>Previous</button>
                        <button onClick={this.props.next}>Next</button>
                      </form>
                    </div>
                  )
                }
              }
              class Confirmation extends React.Component {
                constructor(props) {
                  super(props);
                }
              
                render() {
                  return (
                    <div>
                      {
                        Object.keys(this.props.states).map((elem, i) => (
                          elem !== 'form' ? <ListElem key={i} title = {elem} value = {this.props.states[elem]} /> : null
                        ))
                      }
                       
                      <button onClick= {this.props.previous}>Previous</button>
                      <button onClick={this.props.submitData}>Confirm</button>
                    </div>
                  )
                }
              }

              class ListElem extends React.Component {
                constructor(props) {
                  super(props);
                }
              
                render() {
                  return (
                    <p><b>{this.props.title}</b>: {this.props.value}</p>
                  )
                }
              }
              
            ReactDOM.render(<App></App>, document.getElementById('App'));
            