import { Link } from "react-router-dom";
import "./NavBar.css";
import React from "react";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/question1">Question 1</Link>
        </li>
        <li>
          <Link to="/question2">Question 2</Link>
        </li>
        <li>
          <Link to="/question3">Question 3</Link>
        </li>
        <li>
          <Link to="/question4">Question 4</Link>
        </li>
        <li>
          <Link to="/question5">Question 5</Link>
        </li>
        <li>
          <Link to="/question6">Question 6</Link>
        </li>
        <li>
          <Link to="/question7">Question 7</Link>
        </li>
        <li>
          <Link to="/question8">Question 8</Link>
        </li>
        <li>
          <Link to="/question9">Question 9</Link>
        </li>
        <li>
          <Link to="/question10">Question 10</Link>
        </li>
        <li>
          <Link to="/question11">Question 11</Link>
        </li>
        <li>
          <Link to="/question12">Question 12</Link>
        </li>
        <li>
          <Link to="/question13">Question 13</Link>
        </li>
        <li>
          <Link to="/question14">Question 14</Link>
        </li>
        <li>
          <Link to="/question15">Question 15</Link>
        </li>
        <li>
          <Link to="/question16">Question 16</Link>
        </li>
        <li>
          <Link to="/question17">Question 17</Link>
        </li>
        <li>
          <Link to="/question18">Question 18</Link>
        </li>
        <li>
          <Link to="/question19">Question 19</Link>
        </li>
        <li>
          <Link to="/question20">Question 20</Link>
        </li>
        <li>
          <Link to="/apifetchone">fetch using custom hook</Link>
        </li>  <li>
          <Link to="/apifetchtwo">fetch using custom hook</Link>
        </li>
      </ul>
    </nav>
  );
};



export default NavBar;
