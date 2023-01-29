import React from 'react';
import styled from 'styled-components';
import { MdAdminPanelSettings } from 'react-icons/md';
import { GiHamburgerMenu } from 'react-icons/gi';

const SidebarComponent = styled.div`
  .sliderbar {
    width: 170px;
    height: 100vh;
    background-color: #404e66;
    color: #ffff;

    .logo {
      width: 100%;
      display: flex;
      justify-content: space-evenly;
      padding: 5px 0px;

      .text {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .logospin {
        animation-name: spin;
        animation-duration: 4000ms;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
      }
      @keyframes spin {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
    }

    .groubsli {
      .hdsli {
        display: flex;
        justify-content: start;
        align-items: center;
        margin-top: 20px;
        margin-left: 10px;
        opacity: 0.7;
      }
      .blogsli {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        width: 100%;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        /* border: 1px solid red; */
        padding: 10px 0px;
        margin-top: 20px;
        cursor: pointer;

        .iconsli {
          font-size: 30px;
        }
      }
    }

    .hr {
      position: relative;
      top: -9px;
    }
  }
`;

export default function Sidebar() {
  return (
    <SidebarComponent>
      <div className="sliderbar">
        <div className="logo">
          <img src="logo192.png" alt="" width={50} className="logospin" />
          <div className="text">E-PHONE</div>
        </div>
        <hr className="hr" />
        <div className="groubsli">
          <div className="hdsli">Navigation</div>
          <div className="blogsli">
            <div>
              <MdAdminPanelSettings className="iconsli" />
            </div>
            <div>DashBoard</div>
          </div>
        </div>
      </div>
    </SidebarComponent>
  );
}
