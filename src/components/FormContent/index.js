// import React from 'react'
import { Component } from 'react'
import Sidebar from '../SideBar'
import InvoiceContent from '../InvoiceContent'
import Footer from '../Footer'
import Header from '../Header'
import {FormContentMainContainer,
    FormContentPrimarycontainer,SidebarContentContainer,
    ActivePage,
ActivePageHeading,
    InvoiceContentContainer} from './styledComponents'
import ActionContent from '../ActionContent'

class FormContent extends Component{
    state = {activeTab: 'invoice'}
    render(){
        const {activeTab} = this.state
        return (
          <>
              <FormContentMainContainer>
                  <Header/>
                  <FormContentPrimarycontainer>
                      <SidebarContentContainer>
                          <Sidebar/>
                      </SidebarContentContainer>
                      <InvoiceContentContainer>
                          <ActivePage>
                                <ActivePageHeading $seleted={activeTab==='invoice'} onClick={() => this.setState({activeTab:'invoice'})}>Invoice Details</ActivePageHeading>
                                <ActivePageHeading $seleted={activeTab==='action'} onClick={() => this.setState({activeTab:'action'})}>Action History</ActivePageHeading>
                          </ActivePage>
                          {activeTab === 'invoice' ? (<InvoiceContent/>) : (<ActionContent/>)}
                          
                      </InvoiceContentContainer>
                  </FormContentPrimarycontainer>
                  <Footer/>
              </FormContentMainContainer>
          </>
        )

    }
}

export default FormContent
