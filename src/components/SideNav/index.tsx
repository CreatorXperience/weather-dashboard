import { styled } from "styled-components";
import { Icons } from "../../constants/icons/icons";

const SideNav = () => {
  return (
    <SideNavWrapper>
      <div className="container">{Icons.brand()}</div>
    </SideNavWrapper>
  );
};

export default SideNav;

const SideNavWrapper = styled.div`
  width: 10%;
  .container {
    height: 100vh;
    border: 1px solid red;
  }
`;
