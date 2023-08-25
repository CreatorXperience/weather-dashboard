import { styled } from "styled-components";
import { Icons } from "../../constants/icons/icons";
import { useState, useRef } from "react";

const SideNav = () => {
  const [IsClicked, setIsClicked] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    setIsClicked((IsClicked) => !IsClicked);
    ref.current?.classList.toggle(".movein");
  };
  return (
    <SideNavWrapper>
      <div className="container">
        <div className="brand">{Icons.brand()}</div>
        <div className="icons">{Icons.homeIcon()}</div>
        <div className="icons">{Icons.reportIcon()}</div>
        <div className="icons">{Icons.profileIcon()}</div>
        <div className="icons">{Icons.settingsIcon()}</div>
        <div className="hamburger icon-sm" onClick={() => handleClick()}>
          {Icons.hamburgerIcon()}
        </div>
      </div>

      {/* TODO: remove IsClicked and make side nav slide out */}
      {IsClicked ? (
        <div className={`container-sm ${IsClicked ? "moveout" : ""}`} ref={ref}>
          <div className="icons">
            {Icons.brand()}
            <p>Weather</p>
          </div>
          <div className="icons">
            {Icons.homeIcon()} <p>Home</p>
          </div>
          <div className="icons">
            {Icons.reportIcon()} <p>Report</p>{" "}
          </div>
          <div className="icons">
            {Icons.profileIcon()} <p>Profile</p>
          </div>
          <div className="icons">
            {Icons.settingsIcon()} <p>Settings</p>
          </div>
        </div>
      ) : (
        ""
      )}
    </SideNavWrapper>
  );
};

export default SideNav;

const SideNavWrapper = styled.div`
  width: 6%;
  .container {
    height: 100vh;
    border: 1px solid #70707089;
    display: flex;
    flex-flow: column;
    align-items: center;

    .icons {
      margin-top: 5rem;
    }
    .brand {
      margin-top: 2rem;
    }

    .hamburger {
      margin-top: 1rem;
    }

    .icon-sm {
      display: none;
    }
  }

  .container-sm {
    display: none;
  }

  @media screen and (max-width: 800px) {
    width: 40%;
    .container {
      height: 10vh;
      border: 1px solid #70707089;

      .icons,
      .brand {
        display: none;
      }

      .icon-sm {
        display: block;
      }
    }

    .moveout {
      animation: move 0.2s ease-in-out;
    }
    @keyframes move {
      0% {
        transform: translate(-100%);
      }

      40% {
        transform: translate(-60%);
      }
      60% {
        transform: translate(-40%);
      }
      80% {
        transform: translate(-20%);
      }
      100% {
        transform: translate(0%);
      }
    }

    .container-sm {
      display: flex;
      flex-direction: column;
      align-items: start;
      border: 1px solid #70707089;
      width: 100%;
      height: auto;

      .icons {
        display: flex;
        align-items: center;
        margin-left: 15px;
        margin-top: 2rem;

        p {
          margin: 10px;
        }
      }
    }
  }
`;
