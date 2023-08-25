import { styled } from "styled-components";

const SideNavWrapper = styled.div`
  width: 6%;
  height: 100%;
  position: fixed;

  .container {
    height: 100%;
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
  }
`;

export default SideNavWrapper;
