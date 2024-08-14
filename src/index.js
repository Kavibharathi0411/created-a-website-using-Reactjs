import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
function Head(){
  return(
    <div class="page">
    <div class="menu">
    <ul>
      <li>HOME</li>
      <li>ABOUT US</li>
      <li >CONTACT US</li>
      <li >PRODUCTS</li>
      <li >SERVICES</li>
    </ul> </div>
    <div
    >
    <table>
    <tr>
      <th>S.NO</th>
      <th>STUDENT FIRST NAME</th>
      <th>STUDENT LAST NAME</th>
      <th>COLLEGE</th>
      <th>DEPARTMENT</th>
      </tr>
      <tr>
      <td>1</td>
      <td>KAVIBHARATHI</td>
      <td>M</td>
      <td>HICET</td>
      <td>ECE</td>
    </tr>
    <tr>
    <td>2</td>
    <td>JAGADEESWARAN</td>
    <td>M</td>
    <td>HICET</td>
    <td>EEE</td>
    </tr>
    <tr>
      <td>3</td>
      <td>CHANDRU</td>
      <td>D</td>
      <td>HICET</td>
      <td>MECH</td>
    </tr>
    <tr>
      <td>4</td>
      <td>SWETHA</td>
      <td>C</td>
      <td>HICET</td>
      <td>CSE</td>
    </tr>
    <tr>
      <td>5</td>
      <td>KRISHVANTH</td>
      <td>C</td>
      <td>HICET</td>
      <td>IT</td>
    </tr>
</table>
<form  class="tab">
  <div class="head">
            <h3>LOGIN FORM</h3></div>

            <label>STUDENT NAME </label>
            <input type="text"class="text3"></input><br></br>
            <label>REGISTER NO </label>
            <input type="text"class="text1"></input><br></br>
            <label>DEPARTMENT </label>
            <input type="text"class="text2"></input><br></br>
            <button type="submit" class="sub1">Submit </button>
            <button type="submit" class="sub2">Cancel </button>
         </form>
         <footer>
          <ul>
            <li>Instagram</li>
            <li>FaceBook</li>
            <li>Whatsapp</li>
            <li>Twitter</li>
            <li>RSS</li>
          </ul>
         </footer>
    </div>
    </div>
  )
}
ReactDOM.render(<Head/>,document.getElementById("root"));



