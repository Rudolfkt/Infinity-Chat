import react, {Component} from 'react';
import {
  Route,
  BrowserRouter as Router,
  Swith,
  Redirect
} from 'react-router-dom';
import Home from ' ./Pages/Home/Home';
import Chat from ' ./Pages/Chat/Chat';
import Profile from ' ./Pages/Profile/Profile';
import Signup from ' ./Pages/Signup/Signup';
import Login from ' ./Pages/Login/Login';
import firebase from ' ./Services/firebase';
import {toast , ToastContainer} from ' react-toastify';

class App extends Component{

  showToast = (type, message) =>{
    switch (type){
      case 0:
        toast.warning(message)
        break;
        case 1:
          toast.success(message)
          default:
            break;
    }
  }

  constructor(){
    super();
    this.state = {
      authenticated: false,
      loading: true
    }; 
  }
  componentDidMount(){
    firebase.auth().onAuthStateChanged(user =>{
      if(user){
        this.setState({
          authenticated : true,
          loading: false
        });

      }else{
        this.setState
      }

    })

  }
  render(){
    return()
  }
}