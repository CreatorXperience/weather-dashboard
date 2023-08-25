import { styled } from "styled-components";
import { Icons } from "../../constants/icons/icons";

type TProp = {
  clickHandler: () => void;
};

const SideNav = ({ clickHandler }: TProp) => {
  return (
    <SideNavWrapper>
      <div className="container">
        <div className="brand">{Icons.brand()}</div>
        <div className="icons">{Icons.homeIcon()}</div>
        <div className="icons">{Icons.reportIcon()}</div>
        <div className="icons">{Icons.profileIcon()}</div>
        <div className="icons">{Icons.settingsIcon()}</div>
        <div className="hamburger icon-sm" onClick={() => clickHandler()}>
          {Icons.hamburgerIcon()}
        </div>
      </div>

      {/* TODO: remove IsClicked and make side nav slide out */}
    </SideNavWrapper>
  );
};

export default SideNav;

const SideNavWrapper = styled.div`
  width: 6%;
  height: 100%;

  .container {
    height: 100vh;
    border: 1px solid #7070703e;
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
      border: 1px solid #7070703e;

      .icons,
      .brand {
        display: none;
      }

      .icon-sm {
        display: block;
      }
    }

    .movein {
      animation: movein 0.2s ease-in-out;
    }

    .moveout {
      animation: moveout 0.2s ease-in-out;
      transform: translate(-100%);
    }

    @keyframes moveout {
      0% {
        transform: translate(0%);
      }

      40% {
        transform: translate(-20%);
      }
      60% {
        transform: translate(-40%);
      }
      80% {
        transform: translate(-60%);
      }
      100% {
        transform: translate(-100%);
      }
    }

    @keyframes movein {
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
      border: 1px solid #7070703e;
      width: 100%;
      height: 100%;

      .icons {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 15px;
        margin-top: 2rem;

        p {
          margin: 10px;
        }
      }
    }
  }
`;
