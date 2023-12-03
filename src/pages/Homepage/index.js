import React from "react";
import "./home.css";
import Clock from "../../Images/clock.svg";
import Down from "../../Images/down.svg";
import Graph from "../../Images/graph.svg";
import Game from "../../Images/game.svg";
import Map from "../../Images/location.svg";
import Tools from "../../Images/tools-icon.svg";
import Lessons from "../../Images/lessonsicon.svg";
import People from "../../Images/people.svg";

import Exclaim from "../../Images/exclaim.svg";
import Time from "../../Images/time.svg";
import ChartHere from "../../components/PieChart";

const Homepage = () => {
  return (
    <div className="container">
      <div className="text-center heading-1">Flow Zone</div>
      <div className="heading-2 gradient-container mt-30 d-flex justify-content-between align-items-center">
        <span>About Flow Zone</span>
        <img
          src={Down}
          alt="clock"
          width={"15px"}
          height={"15px"}
          className="down-image"
        />
      </div>
      <div className="d-flex justify-content-between mt-10">
        <div className="heading-3 d-flex justify-content-between align-items-center gap-2">
          <span>Flow Peaks</span>
          <img
            src={Exclaim}
            alt="clock"
            width={"15px"}
            height={"15px"}
            className="exclaim-image"
          />
        </div>
        <div className="gradient-container-2 font-15 br-8px">Weekly</div>
      </div>
      <div className="outer-chart-wrapper">
        <div className="day-time-1">
            <div>Afternoon</div>
            <div>Night</div>
        </div>
        <div className="day-time-2">
            <div>Afternoon</div>
            <div>Night</div>
        </div>
      <div className="chart-wrapper">
        <img
          src={Clock}
          alt="clock"
          width={"110px"}
          height={"110px"}
          className="clock-image"
        />
        <ChartHere />
      </div>
      </div>
      <div className="d-flex justify-content-between gap-5">
        <div className="flow-peak-card d-flex flex-column gap-2 gradient-container flex-1 br-8px">
          <div>My Flow Peaks</div>
          <div className="d-flex align-items-center gap-1">
            <img
              src={Time}
              alt="clock"
              width={"15px"}
              height={"15px"}
              className="exclaim-image"
            />
            <span>02PM-08PM</span>
          </div>
        </div>
        <div className="flow-peak-card d-flex flex-column gap-2 gradient-container br-8px flex-1">
          <div>My Flow Peaks</div>
          <div className="d-flex align-items-center gap-1">
            <img
              src={Time}
              alt="clock"
              width={"15px"}
              height={"15px"}
              className="exclaim-image"
            />
            <span>02PM-08PM</span>
          </div>
        </div>
      </div>
      <div>
        <div className="heading-3 mt-30">My thriving toolkit</div>
        <div className="mt-30">
          <table>
            <tbody>
              <tr>
                <td></td>
                <td>
                  <div className="d-flex align-items-center gap-1">
                    <img
                      src={Map}
                      alt="location"
                      width={"15px"}
                      height={"15px"}
                      className="exclaim-image"
                    />
                    <span>For You</span>
                  </div>
                </td>
                <td>
                  <div className="d-flex align-items-center gap-1">
                    <img
                      src={Graph}
                      alt="clock"
                      width={"15px"}
                      height={"15px"}
                      className="exclaim-image"
                    />
                    <span>Globally</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="d-flex align-items-center gap-1">
                    <img
                      src={Game}
                      alt="clock"
                      width={"15px"}
                      height={"15px"}
                      className="exclaim-image"
                    />
                    <span>Games</span>
                  </div>
                </td>
                <td className="font-500">Explore</td>
                <td className="font-500">Memory Games</td>
              </tr>
              <tr>
                <td> <div className="d-flex align-items-center gap-1">
                  <img
                    src={Tools}
                    alt="clock"
                    width={"15px"}
                    height={"15px"}
                    className="exclaim-image"
                  />
                  <span>Tools</span>
                </div></td>
                <td className="font-500">Affirmation</td>
                <td className="font-500">Thought Guides</td>
              </tr>
              <tr>
                <td><div className="d-flex align-items-center gap-1">
                  <img
                    src={Lessons}
                    alt="clock"
                    width={"15px"}
                    height={"15px"}
                    className="exclaim-image"
                  />
                  <span>Lessons</span>
                </div></td>
                <td className="font-500">Lorem Ipsum</td>
                <td className="font-500">Lorem Ipsum</td>
              </tr>
              <tr>
                <td><div className="d-flex align-items-center gap-1">
                  <img
                    src={People}
                    alt="clock"
                    width={"15px"}
                    height={"15px"}
                    className="exclaim-image"
                  />
                  <span>Clubs</span>
                </div></td>
                <td className="font-500">Lorem Ipsum</td>
                <td className="font-500">Lorem Ipsum</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
