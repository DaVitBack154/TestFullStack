import React from 'react';
import styled from 'styled-components';

const NavbarComponent = styled.div`
  .navbarhead {
    width: 100%;
    display: flex;
    background-color: #ffff;
    padding: 5px 0px;

    .profile {
      display: flex;
      justify-content: end;
      align-items: center;
      width: 100%;
      padding: 10px 0px;
      .contenprofile {
        display: flex;
        margin-right: 50px;

        .imgpro {
          margin-right: 20px;
        }
      }
    }
  }
`;

export default function Navbar() {
  return (
    <NavbarComponent>
      <div className="navbarhead">
        <div className="iconhamber">
          <img src="" alt="" />
        </div>
        <div className="profile">
          <div className="contenprofile">
            <img src="/profi.png" alt="" className="imgpro" width={30} />
            <div>Admin</div>
          </div>
        </div>
      </div>
    </NavbarComponent>
  );
}
