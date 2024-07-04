import styled from "styled-components";

export const InvoiceDataContainer = styled.div``

export const ActionInvoiceStatusItem=styled.div`
display: flex;
justify-content: space-evenly;
background-color: #e6faf8;
border: solid 1px #bfbfbf;
border-radius: 8px;
margin: 8px;
padding: 5px;
font-weight: 600;
`
export const InvoiceUniqueId=styled.p`
width: 200px;
overflow: hidden;
`
export const InvoiceStatusNote=styled.p``
export const InvoicePrintStatus=styled.p``

export const Span = styled.span`
color: ${props=>(props.$color)}
`