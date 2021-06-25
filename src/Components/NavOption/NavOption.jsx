import React from "react";
import useWindowSize from "../../hooks/useWindowSize";
import classes from "./navoption.module.css";
import styled from "styled-components";
const StyledNavOption = styled.li`
    display: flex;
    align-items: center;
    width: max-content;
    cursor: pointer;
    width: 100%;
    margin-bottom: 10px;
    padding: 10px 10px;
    border-radius: ${props=>props.mobile?"100px" :"10px"};
    &:hover {
        background-color: rgba(100, 100, 100, 0.5);
    }
`;
const StyledNavIcon = styled.span`
    display: flex;
    align-items: center;
    margin-right: ${props=>props.mobile ? '0px':'16px'};
`;
function NavOption({ label, icon: Icon }) {
    const windowSize = useWindowSize();
    let mobile=windowSize.width<1000;
    return (
        <StyledNavOption mobile={mobile}>
            <StyledNavIcon mobile={mobile}>
                <Icon />
            </StyledNavIcon>
            {!mobile && <span className={classes.navLabel}>{label}</span>}
        </StyledNavOption>
    );
}

export default NavOption;
