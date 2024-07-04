import React from 'react'
import logo from './logo.svg';
import { GoArrowSwitch } from "react-icons/go";
import {HeaderMainContainer,WebsiteLogo,SaveDraftContainer,
    SwitchButton,
    SaveDraftButton,} from './styledComponents'

const Header = () => {
  return (
    <HeaderMainContainer>
      <WebsiteLogo src={logo} className="App-logo" alt="logo" />
      <SaveDraftContainer>
        <SwitchButton type='button'><GoArrowSwitch/></SwitchButton>
        <SaveDraftButton type='button'>Save to Draft</SaveDraftButton>
      </SaveDraftContainer>
    </HeaderMainContainer>
  )
}

export default Header
