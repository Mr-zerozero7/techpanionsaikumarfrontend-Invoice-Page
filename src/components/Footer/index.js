import React from 'react'
import {FooterContainer,
    PropertiesContainer,
Item,
Span,
ActionControllContainer,
Selection,
Option,
RejectButton,
ApproveButton,
} from './styledComponents'


const Footer = () => {
  return (
    <FooterContainer>
      <PropertiesContainer>
        <Item>Currency: <Span>INR</Span></Item>
        <Item>Inv Basic Amt: <Span>15,000.00</Span></Item>
        <Item>Basic Tax Amt: <Span>1,000.00</Span></Item>
        <Item>Inv Total Amt: <Span>16,000.00</Span></Item>
        <Item>TDS Amt: <Span>15.00</Span></Item>
        <Item>Net Payable Amt: <Span>16,000.00</Span></Item>
        <Item>Basic Amt Diff: <Span>NA</Span></Item>
      </PropertiesContainer>
      <ActionControllContainer>
        <Selection>
            <Option default>Select Action</Option>
            <Option >Approve</Option>
            <Option >Reject</Option>
        </Selection>
        <RejectButton type='button'>Reject</RejectButton>
        <ApproveButton type='button'>Approve</ApproveButton>
      </ActionControllContainer>
    </FooterContainer>
  )
}

export default Footer
