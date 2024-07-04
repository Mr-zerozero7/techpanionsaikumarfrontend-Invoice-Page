import styled from "styled-components";

export const FormContentMainContainer=styled.div`
background-color: lightgray;
@media screen and (min-width: 768px){
    width: 100%;
    height: 100%;
}
`
export const FormContentPrimarycontainer=styled.div`
display: flex;
padding: 2px;
margin-top: 5px;
@media screen and (min-width: 328px){
    display: flex;
    flex-direction: column;
}
@media screen and (min-width: 923px){
    display: flex;
    flex-direction: row;
}
@media screen and (min-width: 1024px){
    display: flex;
    flex-direction: row;
}
`
export const SidebarContentContainer = styled.div`
width: 50%;
@media screen and (min-width: 328px){
    margin-bottom: 10px;
    padding: 6px;
    width: 96%;
}
@media screen and (min-width: 1024px){
    height: 648px;
}
`
export const ActivePage = styled.div`
display: flex;
padding: 0px;
margin: 0px 10px;
box-shadow: 4px 4px 10px 4px #bfbfbf;
`
// font-weight: 700;
export const ActivePageHeading= styled.button`
margin-right: 10px;
font-size: 18px;
color: #39024a;
padding: 5px;
margin: 4px;
border: none;
outline: none;
cursor:pointer;
border-radius: 8px;
font-weight: ${props=>(props.$seleted? '600': '400')}
`
export const InvoiceContentContainer = styled.div`
width: 50%;
background-color: white;
padding: 0px 2px 2px 10px;
margin-left: 6px;
height: 680px;
overflow-y: scroll;
@media screen and (min-width: 328px){
    width: 93%;
}
@media screen and (min-width: 923px){
    height: 465px;
}
@media screen and (min-width: 1024px){
    height: 656px;
}
`
