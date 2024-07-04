import  { Component } from 'react'
import {InvoiceDataContainer,ActionInvoiceStatusItem,
    InvoiceUniqueId,
    InvoiceStatusNote,
    InvoicePrintStatus,Span} from './styledComponents'


class ActionContent extends Component {
    state = {invoiceList:[]}

    componentDidMount(){
        this.getInvoiceData()
    }


    getInvoiceData = async() => {
        const getDataUrl= 'https://techpanionsaikumarbackend-invoice-page.onrender.com/api/invoice-details'
        const options = {
            method: 'GET'
        }
        try {
            const response = await fetch(getDataUrl, options)
            if(response.ok){
                const data = await response.json()
                this.setState({invoiceList: data})
                console.log('data fetched successfully')
            }else{
                console.log('fetching error')
            }
        } catch (error) {
            console.log(error.message)
        }
    }

    componentWillUnmount(){
        this.getInvoiceData()
    }

    render(){
        const {invoiceList} = this.state
        return (
          <InvoiceDataContainer>
            {
                invoiceList.map(eachItem => (
                    (
                        <ActionInvoiceStatusItem key={eachItem.actionHistory.invoiceId}>
                            <InvoiceUniqueId>InvoiceUID: {eachItem.actionHistory.invoiceId}</InvoiceUniqueId>
                            <InvoiceStatusNote>InvoiceStatus: <Span $color={`${eachItem.actionHistory.invoiceStatus}` === 'Reject'? 'red' :'#35fc03'}>{eachItem.actionHistory.invoiceStatus}</Span></InvoiceStatusNote>
                            <InvoicePrintStatus>PrintStatus: {eachItem.actionHistory.printStatus}</InvoicePrintStatus>
                        </ActionInvoiceStatusItem>
                    )
                ))
            }
          </InvoiceDataContainer>
        )
    }
}

export default ActionContent
