import styled from "styled-components";

export const FooterContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
background-color: lightgray;
@media screen and (min-width: 328px){
    flex-direction: column;
}
@media screen and (min-width: 1024px){
    margin-top: 0px;
    flex-direction: row;
}
`
export const PropertiesContainer=styled.ul`
display: flex;
margin: 2px;
padding: 2px;
@media screen and (min-width: 328px){
    flex-wrap: wrap;
}
@media screen and (min-width: 928px){
    flex-wrap: wrap;
}
@media screen and (min-width: 1024px){
    flex-wrap: no-wrap;
}
`
export const Item=styled.li`
list-style: none;
border-radius: 5px;
background-color: #faf2f9;
padding: 10px;
margin-right: 3px;
font-weight: 600;
@media screen and (min-width: 328px){
    margin-bottom: 4px;
}
@media screen and (min-width: 923px){
    padding: 2px;
    font-size: 14px;
}
@media screen and (min-width: 1024px){
    padding: 10px;
    font-size: 16px;
}
`
export const Span=styled.span`
color: #54e302;
${Item}:last-child & {
color: red;
}
`
export const ActionControllContainer=styled.div`
width: 300px;
display: flex;
justify-content: space-evenly;
@media screen and (min-width: 328px){
    padding-bottom: 10px;
}
@media screen and (min-width: 923px){
    width: 250px;
}
@media screen and (min-width: 1024px){
    width: 300px;
}
`
export const Selection=styled.select`
padding: 8px;
border-radius: 8px;
border: none;
outline: none;
margin-right: 2px;
`
export const Option=styled.option``
export const RejectButton=styled.button`
padding: 10px;
font-weight: 600;
cursor: pointer;
border-radius: 8px;
color: red;
outline: none;
width: 80px;
border: solid 1px red;
background-color: white;
@media screen and (min-width: 923px){
    padding: 8px;
    margin-right: 3px;
}
@media screen and (min-width: 1024px){
    padding: 10px;
    margin-right: 3px;
}
`
export const ApproveButton=styled(RejectButton)`
color: white;
background-color: #39024a;
border: none;
`