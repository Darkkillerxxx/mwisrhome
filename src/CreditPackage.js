import React, { Component } from "react";


class CreditPackage extends React.Component{
  constructor()
  {
    super()
  }  

  onCreditClicked=(LicenceId)=>{
    this.props.ChooseCreditPackage(LicenceId)
  }

  componentDidMount()
  {
    const{index,AllowedCards,Slide,CreditLength}=this.props;
    let minIndex,maxIndex;
  }

  

  render()
    {
      const{index,AllowedCards,Slide,CreditLength}=this.props;
      // console.log(Slide,AllowedCards)
      // console.log(index,AllowedCards*Slide)
      // console.log(index,AllowedCards*Slide - AllowedCards)
        return(
       index <= AllowedCards*Slide && index > (AllowedCards*Slide) - AllowedCards ? 
      <div className={`col-${AllowedCards === 3 ? "4":AllowedCards===2 ? "6":"12"} p-2 animated bounceInRight`} >
        <div className="w-100">
          <div className="w-100 card" style={{border:`1px solid #ccc`}}>
         
            {this.props.CreditInfo.PackageName === "Free" ?   <div className="w-100 CardHeader" style={{padding:'50px',backgroundColor:'#FAFAFA'}}>
                  <div className="w-100 flexBoxer flexAlignCenter">
                    <i class="fas fa-futbol fa-3x"></i>
                  </div>
                  <div className="w-100 textAlignCenter mt-4">
                    <span className="sans fontSize14" style={{fontWeight:'600',color:this.props.CreditInfo.Color}}>FREE</span><br/>
                    <span className="fontSize08 sans opacity07" style={{color:this.props.CreditInfo.Color}}>per year</span>
                  </div>
              </div>:
                  <div className="w-100 p-5 CardHeader" style={{backgroundColor:'#FAFAFA'}}>
                  <div className="w-100 flexBoxer flexAlignCenter">
                    <i className={`${this.props.CreditInfo.MainIcon}`}></i>
                  </div>
                  <div className="w-100 textAlignCenter mt-2">
                    <div className="w-100 flexBoxer">
                      <div className="w-100 flexBoxer flexAlignCenter" style={{color:`this.props.CreditInfo.Color`}}>
                        <i className={`${this.props.CreditInfo.SubIcon}`}></i>
                      </div>
                      <div className="w-100 textAlignLeft">
                        <strike className="sans fontSize12 opacity07">{this.props.CreditInfo.StrikedOffPrice}</strike><br/>
                        <span className="sans fontSize12" style={{fontWeight:'600',color:`this.props.CreditInfo.Color`}}>{this.props.CreditInfo.ActualPrice}*</span>
                      </div>
                    </div>
                    <span className="sans fontSize08 opacity07" style={{color:`this.props.CreditInfo.Color`}}>per Year</span>
                  </div>
              </div>}

            <div className="w-100 textAlignCenter mt-2 mb-2">
              <span className="sans fontSize14 opacity08">Customers</span><br/>
              <span className="sans fontSize08" style={{fontWeight:'600',color:`${this.props.CreditInfo.Color}`}}>{this.props.CreditInfo.Customers}</span>
            </div>
            <div className="w-100 textAlignCenter mt-2 mb-2">
              <span className="sans fontSize14 opacity08">Sub-Brokers</span><br/>
              <span className="sans fontSize08" style={{fontWeight:'600',color:`${this.props.CreditInfo.Color}`}}>{this.props.CreditInfo.SubBrokers}</span>
            </div>
            <div className="w-100 textAlignCenter mt-2 mb-2">
              <span className="sans fontSize14 opacity08">Analysts</span><br/>
              <span className="sans fontSize08" style={{fontWeight:'600',color:`${this.props.CreditInfo.Color}`}}>{this.props.CreditInfo.Analysts}</span>
            </div>
            <div className="w-100 textAlignCenter mt-2 mb-2">
              <span className="sans fontSize14 opacity08">Calls</span><br/>
              <span className="sans fontSize08" style={{fontWeight:'600',color:`${this.props.CreditInfo.Color}`}}>{this.props.CreditInfo.Calls}</span>
            </div>
            <div className="w-100 textAlignCenter mt-2 mb-2">
              <span className="sans fontSize14 opacity08">Telegram</span><br/>
              <span className="sans fontSize08" style={{fontWeight:'600',color:`${this.props.CreditInfo.Color}`}}>{this.props.CreditInfo.Telegram}</span>
            </div>
            <div className="w-100 textAlignCenter mt-2 mb-5">
              <span className="sans fontSize14 opacity08">Telegram Support</span><br/>
              <span className="sans fontSize08" style={{fontWeight:'600',color:`${this.props.CreditInfo.Color}`}}>{this.props.CreditInfo.TelegramSupport}</span>
            </div>
            <div className="w-100 textAlignCenter mt-2 mb-5">
              <button className="btn" onClick={()=>this.onCreditClicked(this.props.index+1)} style={{backgroundColor:`${this.props.CreditInfo.Color}`,color:'white'}}>Apply Now</button>
            </div>
          </div>
        </div>
      </div>:""
        )
    }
}

export default CreditPackage;