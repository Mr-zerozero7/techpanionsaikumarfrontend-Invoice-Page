// import React from 'react'
import { Component } from 'react'
import {InvoiceMainContainer,ALternatePayeeDetailsContainer,
    LineItemDetailsContainer,
    InvoiceAmountDetailsHeading,
SectionHeading,
    InvoiceAmountDetails,
    InputsContainer,
    TotalAmt,
    Label,
    Span,
    Input,RadioContainer,RadioInput,NetAmt,
    ViewControllsContainer,
    ItemsListContainer,
    ItemContainerHeader,
    CheckBox,
    ItemHeading,
    PageStatusContainer,
    PageSelection,
    PageCounter,
    PageNo,
    Button,
    CalAndAddButtonConatiner,
    MaximizeButton,
    RefreshButton,PrimeButton,
    ItemContainer,
    DeleteButton,
    ItemTag,
    SampleText,} from './styledComponents'
import { TbClockPlus } from "react-icons/tb";
import { RiRefreshLine } from "react-icons/ri";
import { FiMaximize2 } from "react-icons/fi";
import { CgArrowsV } from "react-icons/cg";
import { IoIosArrowBack,IoIosArrowForward } from "react-icons/io";
import { AiOutlineDelete } from "react-icons/ai";
import { Option, Selection, } from '../Footer/styledComponents';

class InvoiceContent extends Component{
    state = {invoiceList:[], currency:'INR',basicAmount:'',taxAmount:'',advancePaid:'',tcsApplicable:false,payee1:'',payee2:'',city:'',street:'',country:'',
        ifscCode:'',accNo:'',reference:''
    }
    
    componentDidMount(){
        this.getInvoiceData()
    }

    getInvoiceData= async () =>{
        const dbUrl = 'https://techpanionsaikumarbackend-invoice-page.onrender.com/api/invoice-details'
        const options={
            method: "GET"
        }
        const response = await fetch(dbUrl, options)
        if(response.ok){
            const fetchedData = await response.json()
            this.setState({invoiceList: fetchedData})
            console.log('data fetched successfully Home Route')
        }else{
            console.log('invoice fetch error')
        }
    }

    tcsCahnge = () =>{
        this.setState(prevState => ({tcsApplicable: !prevState.tcsApplicable}))
    }

    handleForm=async(event) =>{
        event.preventDefault()
        const {currency, basicAmount,taxAmount,advancePaid,tcsApplicable,payee1,payee2,city,street,country,ifscCode,accNo,reference} = this.state
        const  invoiceDetails = {currency,basicAmount,taxAmount,advancePaid,tcsApplicable}
        const alternatePayeeDetails = {alternatePayee1: payee1, alternatePayee2:payee2,city,street,country,ifscCode,bankAccNum:accNo,reference}
        const listItem = {selectedItem: true,paymentType:'GPay',itemDes:'emplty',itemCode:'001234',
            optionalText: 'sample data'
        }
        const actionHistory = {invoiceStatus:'Approved',printStatus: true}
        try {
            const databaseUrl = 'https://techpanionsaikumarbackend-invoice-page.onrender.com/api/submit-form'
            const options= {
                method: "POST",
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({invoiceDetails,alternatePayeeDetails,listItem,actionHistory}),
            }
            const response = await fetch(databaseUrl, options)
            if(response.ok){
                const data = await response.json()
                console.log(data)
                console.log('Invoice successfully generated')
            }else{
                console.log('Invoice generation failure')
            }
            
        } catch (error) {
            console.log(error.message)
        }
        
        this.setState({currency:'INR',basicAmount:'',taxAmount:'',advancePaid:'',tcsApplicable:false,payee1:'',payee2:'',city:'',street:'',country:'',
            ifscCode:'',accNo:'',reference:''
        })
    }


    componentWillUnmount(){
        this.getInvoiceData()
    }

    render() {
        const {invoiceList,currency,basicAmount,taxAmount,advancePaid,tcsApplicable,payee1,payee2,city,street,country,ifscCode,accNo,reference} = this.state
        const parsedBasicAmount = isNaN(parseInt(basicAmount)) ? 0 : parseInt(basicAmount)
        const parsedTaxAmount = isNaN(parseInt(taxAmount)) ? 0 : parseInt(taxAmount)
        const totalAmount = parsedBasicAmount + parsedTaxAmount
        const parsedAdvancePaid = isNaN(parseInt(advancePaid)) ? 0 : parseInt(advancePaid)
        return (
          <InvoiceMainContainer onSubmit={this.handleForm}>
            <InvoiceAmountDetailsHeading>
                <SectionHeading>INVOICE AMOUNT DETAILS</SectionHeading>
            </InvoiceAmountDetailsHeading>
            <InvoiceAmountDetails>
                <InputsContainer>
                    <Label htmlFor='currency'><TbClockPlus size={15}/>Currency<Span>*</Span>:</Label>
                    <Input type='text' id='currency' value={currency} onChange={(event)=>this.setState({currency: event.target.value})} placeholder='Currency Type like...INR ' />
                </InputsContainer>
                <InputsContainer>
                    <Label htmlFor='invBasicAmt'><TbClockPlus size={15} />Inv Basic Amt<Span>*</Span>:</Label>
                    <Input type='text' id='invBasicAmt'value={basicAmount} onChange={(event)=>this.setState({basicAmount:event.target.value})} placeholder='Basic Amt...15,000 ' />
                </InputsContainer>
                <InputsContainer>
                    <Label htmlFor='invTaxAmt'><TbClockPlus size={15} />Inv Tax Amt<Span>*</Span>:</Label>
                    <Input type='text' id='invTaxAmt' value={taxAmount} onChange={(event)=>this.setState({taxAmount:event.target.value})} name='invTaxAmt' placeholder='Inv Tax Amt...1,000 ' />
                </InputsContainer>
                <InputsContainer>
                    <Label ><TbClockPlus size={15} />Total Inv Amt [Inclu. of tax]<Span>*</Span>:</Label>
                    <TotalAmt>{totalAmount}</TotalAmt>
                </InputsContainer>
                <InputsContainer>
                    <Label htmlFor='advancePaid'><TbClockPlus size={15} />Advance Paid<Span>*</Span>:</Label>
                    <Input type='text' id='advancePaid' value={advancePaid} onChange={(event)=>this.setState({advancePaid:event.target.value})} name='advancePaid' placeholder='0.00' />
                </InputsContainer>
                <InputsContainer>
                    <Label><TbClockPlus size={15} />TCS Applicable<Span>*</Span>:</Label>
                    <RadioContainer>
                        <RadioInput type='radio' id='tcsYes' value='YES' checked={tcsApplicable===true}  onChange={this.tcsCahnge} name='tcsYes'/>
                        <Label htmlFor='tcsYes'>Yes</Label>
                        <RadioInput type='radio' id='tcsNo' value='NO' checked={tcsApplicable===false}  onChange={this.tcsCahnge} name='tcsNo'/>
                        <Label htmlFor='tcsNo'>No</Label>
                    </RadioContainer>
                </InputsContainer>
                <InputsContainer>
                    <Label ><TbClockPlus size={15} />Net Payable Amt [Exclu. of TDS]<Span>*</Span>:</Label>
                    <NetAmt >{totalAmount - parsedAdvancePaid }</NetAmt>
                </InputsContainer>
            </InvoiceAmountDetails>
            <InvoiceAmountDetailsHeading>
                <SectionHeading>ALTERNATE PAYEE DETAILS</SectionHeading>
            </InvoiceAmountDetailsHeading>
            <ALternatePayeeDetailsContainer>
                <InputsContainer>
                    <Label htmlFor='alternatePayee1'><TbClockPlus size={15}/>Alternate Payee 1:</Label>
                    <Input type='text' id='alternatePayee1' value={payee1} onChange={(event)=> this.setState({payee1: event.target.value})} placeholder='Alternate Payee Name' />
                </InputsContainer>
                <InputsContainer>
                    <Label htmlFor='alternatePayee2'><TbClockPlus size={15}/>Alternate Payee 2:</Label>
                    <Input type='text' id='alternatePayee2' value={payee2} onChange={(event)=> this.setState({payee2: event.target.value})} placeholder='Alternate Payee Name' />
                </InputsContainer>
                <InputsContainer>
                    <Label htmlFor='city'><TbClockPlus size={15}/>City:</Label>
                    <Input type='text' id='city' value={city} onChange={(event)=> this.setState({city: event.target.value})} placeholder='City...' />
                </InputsContainer>
                <InputsContainer>
                    <Label htmlFor='street'><TbClockPlus size={15}/>Street:</Label>
                    <Input type='text' id='street' value={street} onChange={(event)=> this.setState({street: event.target.value})} placeholder='Street'/>
                </InputsContainer>
                <InputsContainer>
                    <Label htmlFor='country'><TbClockPlus size={15}/>Country:</Label>
                    <Input type='text' id='country' value={country} onChange={(event)=> this.setState({country: event.target.value})} placeholder='Country' />
                </InputsContainer>
                <InputsContainer>
                    <Label htmlFor='ifscCode'><TbClockPlus size={15}/>Bank Key / IFSC Code:</Label>
                    <Input type='text' id='ifscCode' value={ifscCode} onChange={(event)=> this.setState({ifscCode: event.target.value})} placeholder='IFSC Code...' />
                </InputsContainer>
                <InputsContainer>
                    <Label htmlFor='bankAccNo'><TbClockPlus size={15}/>Bank Acc No:</Label>
                    <Input type='text' id='bankAccNo' value={accNo} onChange={(event)=> this.setState({accNo: event.target.value})} placeholder='Bank Acc No...' />
                </InputsContainer>
                <InputsContainer>
                    <Label htmlFor='reference'><TbClockPlus size={15}/>Reference</Label>
                    <Input type='text' id='reference' value={reference} onChange={(event)=> this.setState({reference: event.target.value})} placeholder='Reference...' />
                </InputsContainer>
            </ALternatePayeeDetailsContainer>
            <InvoiceAmountDetailsHeading>
                <SectionHeading>LINE ITEM DETAILS</SectionHeading>
            </InvoiceAmountDetailsHeading>
            <LineItemDetailsContainer>
                <ViewControllsContainer>
                    <MaximizeButton type='button'><FiMaximize2/></MaximizeButton>
                    <RefreshButton type='button'><RiRefreshLine/></RefreshButton>
                </ViewControllsContainer>
                <ItemsListContainer>
                    <ItemContainerHeader>
                        <CheckBox type='checkbox' /><CgArrowsV color='gray' fontSize={18} />
                        <ItemHeading>Select Debit <CgArrowsV color='gray' fontSize={18} /></ItemHeading>
                        <ItemHeading>GL Desc <CgArrowsV color='gray' fontSize={18} /></ItemHeading>
                        <ItemHeading>GL Code <CgArrowsV color='gray' fontSize={18} /></ItemHeading>
                        <ItemHeading>Text(Do not enter special character) <CgArrowsV color='gray' fontSize={18} /></ItemHeading>
                    </ItemContainerHeader>
                    {invoiceList.map(eachItem => (
                        <ItemContainer key={eachItem.id}>
                            <CheckBox type='checkbox' />
                            <DeleteButton type='button'><AiOutlineDelete/></DeleteButton>
                            <Selection>
                                <Option>Debit</Option>
                                <Option>Credit</Option>
                                <Option>Pending</Option>
                            </Selection>
                            <Selection>
                                <Option>GL Desc</Option> 
                                <Option>GL Desc & Sample</Option> 
                            </Selection>
                            <ItemTag>101100125480</ItemTag>
                            <SampleText type='text'/>
                        </ItemContainer>
                    ))}
                </ItemsListContainer>
                <PageStatusContainer>
                    <PageCounter>
                        <Button type='button'><IoIosArrowBack/></Button>
                        <PageNo>{invoiceList.length}</PageNo>
                        <Button type='button'><IoIosArrowForward/></Button>
                    </PageCounter>
                    <PageSelection>
                        <Option>200/page</Option>
                        <Option>100/page</Option>
                    </PageSelection>
                </PageStatusContainer>
                <CalAndAddButtonConatiner>
                    <PrimeButton type='button'>Calculate</PrimeButton>
                    <PrimeButton type='submit'>Add</PrimeButton>
                </CalAndAddButtonConatiner>
            </LineItemDetailsContainer>
          </InvoiceMainContainer>
        )
    }
}

export default InvoiceContent
