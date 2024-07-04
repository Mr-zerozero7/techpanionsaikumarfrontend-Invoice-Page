import styled from "styled-components";
import { ApproveButton,Selection } from "../Footer/styledComponents";

export const InvoiceMainContainer=styled.form`
padding: 0px 10px 5px 10px;
margin: 0px;
`
export const InvoiceAmountDetailsHeading= styled.div`
background-color: lightgray;
color: #39024a;
`
export const SectionHeading = styled.p`
font-weight: bold;
font-size: 16px;
padding: 8px;
`
export const InvoiceAmountDetails=styled.div``

export const InputsContainer=styled.div`
margin: 15px;
display: flex;
justify-content: space-between;
width: 80%;
@media screen and (min-width: 328px){
    flex-direction: column;
}
@media screen and (min-width: 923px){
    flex-direction: row;
}
`
export const Label=styled.label`
font-weight: 600;
@media screen and (min-width: 328px){
    margin-bottom: 3px;
}
`
export const Span=styled.span`
color: red;
`
export const Input=styled.input`
width: 300px;
padding: 5px;
border: solid 1px #bfbfbf;
border-radius: 5px;
`
export const RadioContainer = styled.div`
margin-right: 230px;
@media screen and (min-width: 328px){
    display: flex;
}
`

export const RadioInput = styled.input``

export const TotalAmt = styled.span`
margin-right: 260px;
font-weight: 600;
`
export const NetAmt = styled.span`
margin-right: 265px;
font-weight: 600;
`

// ALTERNATE PAYEE DETAILS CONTAINER STYLES
export const ALternatePayeeDetailsContainer= styled.div``


// LINE ITEM DETAILS CONTAINER STYLES
export const LineItemDetailsContainer= styled.div``

export const ViewControllsContainer=styled.div`
width: 100px;
display: flex;
justify-content: space-between;
align-items: center;
`
export const MaximizeButton = styled.button`
border-radius: 50%;
border: none;
color: white;
background-color: #39024a;
padding: 8px;
font-size: 16px;
margin-right: 10px;
cursor: pointer;
display: flex;
`
export const RefreshButton = styled(MaximizeButton)`
background-color: white;
border: solid 1px #bfbfbf;
color: #39024a;
padding: 4px;
font-size: 22px;
`
export const ItemsListContainer=styled.div``
export const ItemContainerHeader=styled.div`
display: flex;
justify-content: space-evenly;
align-items: center;
background-color: #f2ede9;
margin: 5px 0px;
`
export const CheckBox=styled.input``
export const ItemHeading=styled.p``
export const PageStatusContainer=styled.div`
display: flex;
justify-content: flex-end;
align-items: center;
`
export const PageSelection = styled(Selection)`
border: solid 1px #bfbfbf;
`
export const PageCounter=styled.div`
width: 170px;
display: flex;
justify-content: space-evenly;
align-items: center;
margin: 8px 0px;
`
export const Button=styled.button`
border: solid 1px #bfbfbf;
border-radius: 50%;
padding: 8px;
background-color: white;
cursor: pointer;
`
export const PageNo=styled(Button)`
background-color: #39024a;
color: white;
font-weight: 600;
`
export const CalAndAddButtonConatiner=styled.div`
display: flex;
justify-content: flex-end;
`
export const PrimeButton = styled(ApproveButton)`
margin-right: 10px;
`

export const ItemContainer= styled(ItemContainerHeader)`
background-color: lightblue;
`
export const DeleteButton= styled.button`
border: none;
cursor: pointer;
outline: none;
`
export const ItemTag= styled.p``
export const SampleText= styled.input`
outline: none;
border: none;
border-radius: 4px;
padding: 6px;
`