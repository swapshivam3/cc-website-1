import React from 'react';
// import axios from 'axios';
  import './ContactUs.css'

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
            phone: '',
            subject:'',
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        // axios({
        //   method: "POST",
        //   url:"http://localhost:3002/send",
        //   data:  this.state
        // }).then((response)=>{
        //   if (response.data.status === 'success') {
        //     alert("Message Sent.");
        //     this.resetForm()
        //   } else if (response.data.status === 'fail') {
        //     alert("Message failed to send.")
        //   }
        // })
        console.log(this.state);
    }

    resetForm() {
        this.setState({ name: " ", email: " ", message: " " ,phone:" ",subject:" "})
    }

    render() {
        return (
            <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                <div class="wrapper">
                 <div class="title"><h1>Contact Us</h1></div>
                 <div class="contact-form">
                    <div class="input-fields">
                         <input type="text" required class="input rounded-xl" placeholder="Enter your Name*" value={this.state.name} onChange={this.onNameChange.bind(this)}></input>
                         <input type="text" required class="input rounded-xl" placeholder="Enter your Email Address*" value={this.state.email} onChange={this.onEmailChange.bind(this)}></ input>
                         <input type="text" class="input rounded-xl" placeholder="Enter your Contact No." value={this.state.phone} onChange={this.onPhoneChange.bind(this)}></input>
                    </div>
                    <div class="msg">
                         <textarea placeholder="Leave your message here..." class="rounded-xl" value={this.state.message} onChange={this.onMessageChange.bind(this)}></textarea>     
                         <button class="text-red-100  w-60 py-2 mb-8 rounded-2xl bg-red-700 border-2 border-BD4B4B hover:text-black  hover:bg-green-500 hover:border-green-500 transition ease-out duration-500">Submit</button>
                    </div>
                 </div>
                </div>
            </form>
              );
    }

    onNameChange(event) {
        this.setState({ name: event.target.value })
    }

    onEmailChange(event) {
        this.setState({ email: event.target.value })
    }

    onMessageChange(event) {
        this.setState({ message: event.target.value })
    }

    onPhoneChange(event) {
        this.setState({ phone: event.target.value })
    }

    onSubjectChange(event) {
        this.setState({ subject: event.target.value })
    }
}

export default App;

  