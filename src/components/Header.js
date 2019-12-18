import React, { Component } from "react";
import imgLogo from '../assets/facebook-1.png'

class Header extends Component {
   render() {
       return (
           <>
                <div class="div-header">
                   <img class="img-logo" src={imgLogo} />
                </div>
            </>
       );
   };
}

export default Header;