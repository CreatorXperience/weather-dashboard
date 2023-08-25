import { styled } from "styled-components";

const TopNavWrapper = styled.div`
  width: 100%;

  .container {
    width: 100%;
    height: 10vh;
    border: 1px solid red;
    display: flex;
    justify-content: end;
    padding: 12px;

    .icons {
      margin: 12px;
      padding: 5px;
    }

    .profile-circle {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: white;
      margin: 12px;

      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
  }
  @media screen and (max-width: 800px) {
    .container {
      padding: 2px;
      .icons {
        margin: 5px;
        padding: 5px;
      }
      .profile-circle {
        margin: 0;
      }
    }
  }
`;

export default TopNavWrapper;
