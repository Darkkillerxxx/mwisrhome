import React, { Component } from "react";

class FAQ extends React.Component{
    constructor()
    {
        super();
        this.state={
            FAQ:[
             {
                  q: "Help",
                  a: `Step-by-step for MWisr.
                Create the Packages for different segments.
                Add Analyst, Sub-Brokers, Partners by going to Users -> “+” floating icon -> Choose role you want to add.
                Assign package by assigning the required permissions to user.
                Add customers by going to Users -> “+” floating icon -> Choose “Customer”.
                Or you can choose Bulk upload to add multiple customers at one go via Excel sheet.
                Assign package with permissions.
                Add Advisory Call by clicking the “Flash” icon on the dashboard.
                How to Create Package?
                Package is entity in which advisory calls & reports will be added. Customers & Analysts will be assigned packages to get access the relevant advisory calls & reports in that particular package.
                Each package can only cater only one Segment Type.
                Paid Feature of the Package is used when you want to sell your advisory to any other Business(B2B) or any retail customer(B2C). Currently this feature is not activated yet.
                Go to “Packages” on the bottom of the Dashboard.
                Click on floating “+” icon.
                Select one “Segment” for which you want to add advisory calls.
                Select the “Exchanges” for that particular segment.
                Enter the “Package Name” and “Package Description (Optional)”`
                },
            
                {
                  q: `How to Add Customers?`,
                  a: `You can add two types of customer. 1. Permanent Active customers 2. Trial customers (Leads) 
                
                Select “Single” if you want to add customer one-by-one OR select “Bulk” to add bulk customer via excel sheet in specific format.
                Go to “Customers” on the bottom of the Dashboard.
                Click on floating “+” icon.
                Enter “First Name”, “Last Name”, “Email”, “Primary Mobile Number”, “Secondary Number”.
                Enter the “Investment Amount” of the customer.
                Select the “Segments” customer is interested in.
                Select the “Trading Durations” customer is interested in.
                Select “Other Interest Areas” customers may take interest in.`
                },
                {
                  q: `How to Add Analyst, Sub-Broker, Partner?`,
                  a: `To add internal Analysts, you select the role type as Analyst.
                To add External Analyst or Research House you select role type Partner.
                To add internal Sub-Broker you select role type Sub-Broker.
                Go to “Analyst” , “Sub-Broker” on the bottom of the Dashboard OR Choose “Partner” in Menu bar.
                Click on floating “+” icon.
                Select the “Role” from Analyst, Sub-Broker or Partner.
                Enter “First Name”, “Last Name”, “Email”, “Primary Mobile Number”. SMS will be sent to notify the user.
                `
                },
                {
                  q: `How to Assign User Permission?`,
                  a: `After adding user you can delegate the access permissions to User.
                There are 3 main options given for each access types – Allow, View and None. 
                ‘’Allow” will grant permission to perform actions such as Create, Edit and View for the given access type. 
                “View” will allow only to view the access type. 
                “None” will not allow any of the above action on access type or revoke the permissions if given previously
                Select “Access to your package” to give permission to Allow, View or None to the user.
                Select “Access to your analysts” to give permission to Allow, View or None to the user.
                Select “Access to your customers” to give permission to Allow, View or None to the user.
                Select “Access to your sub brokers” to give permission to Allow, View or None to the user.
                Select “Access to your research house” to give permission to Allow, View or None to the user.
                Select “Access to your partners” to give permission to Allow, View or None to the user.
                Select “Access to your reports” to give permission to Allow, View or None to the user.
                Select “Access to your broadcasts” to give permission to “Send” broadcast messages to the owner and “Receive” to get broadcast message from the owner.
                User permission can also be changed after user is created or it is an existing user
                Select any user from the Analyst / Customer / Sub Broker / Partner tabs, it will redirect you to their details, in which you’ll see “Set Permissions” button. By clicking on it, it will take you to the user permission screen.`
                },
            
                {
                  q: `How to Assign package to Analyst, Sub-Broker, Partner & Customer?`,
                  a: `Once you add any user (Analyst, Sub-Broker, Partner, Customer), You will have to assign him package as all the advisory calls & reports are placed under package.
                
                Select the role of user you want to add by selecting any “User Type”.
                Select the “User” whom you have to assign package.
                Select the “Package” to be assigned.
                On “Unassigned” menu you will be able to see the users who have not been assigned the selected package.
                Select user from “Unassigned” click on “>>”, User will be shifted to Assigned side.
                Select the “Username” from “Assigned” box.
                Select the “Duration”, till the time user will have access to the Package.
                Click on “Assign”.`
                },
            
                {
                  q: `How to Assign Package Permissions?`,
                  a: `After package is assigned to the user it will redirect you to the “Assign Package Permissions” screen. This will selectively allow you to assign permission to the user for the package related activity.
                Select “Access to Calls” to “Allow” user to Create, Edit and View calls for the package or “View” call for the package or “None” to do none of the above things.
                Select “Access to this package” to “Allow” user to edit, view and assign the package to other user or “View” to show only package details or “None” to do none of the above things.
                Select “Contact Information” to show user either owner’s contact details or the provider’s contact details, when any of the above entities add advisory calls to that particular package.
                Select “Set Notifications” to control which notifications the user gets when advisor call it added to that particular package.
             `
                },
                {
                  q: `How to become owner and get credits?
            `,
                  a: `If you want add your own customers and want to become your own Research House, Sub-Broker or Independent Analyst you can use get credit to convert your account from “Sub-User” to “Owner”.
                
                With this functionality you will be able to cater your own customers as well as your Owner’s customers.
                
                By default, you will get the basic free package with FREE Credits, and then you can choose the required package as per your need.
                
                Click on “Credits” in the Menu.
                Click on “Get MWisr” to become the Owner. `
                },
            
                {
                  q: `How to upload report?`,
                  a: `To upload report in to your Private Report Repository you will need to have package created before to upload the report in that package and subscribers of the package can have access it.
                Select the Report to be uploaded. For now, only PDF files are supported having file size less then 20MB each.
                Enter the “Report Name” 
                Select the “Coverage By ->> Select Value ->> Select Research House” who have created the report OR if the Research house doesn’t exist in the list then “Coverage By ->> Enter Value” to add new Research House.
                Select the “Coverage Type ->> Select Value ->> Select Type of Coverage” OR if Type of Coverage doesn’t exist in the list then “Coverage By ->> Enter Value” to add Coverage type.
                Select the “Report Type”, “Sector”, “Market Cap” & “Package” you want add the report.
                One report can cover multiple stocks, so here in MWisr you can tack multiple calls per report.
                To track the coverage, select “Buy or Sell”. “Buy” for targets above CMP Price & “Sell” for targets below CMP Price.
                Select the “Symbol”, by typing the first three character and choosing the symbol of the company.
                Enter the “CMP Price” & “Target” to track report. Mentioned fields are compulsory.
                Enter the “Stop Loss” for the call.
                Select the “Duration” till what you want to track the advisory.
                Select the “Advisor Name ->> Select Value ->> Select Advisor associated with the Research House” OR if Advisor doesn’t exist in the list then “Advisor Name ->> Enter Value” to add new Advisor.
                Enter the “Email Id” of new Advisor.
                Enter up to 5 Keywords in Comma Separated from which describes the report content.
                Enter the “Report Creation Date”.`
                },
                {
                  q: `How to add advisory call?`,
                  a: `How to Link your Telegram Account with Mwisr?
                How to Assign telegram Channels & Groups to Package for auto-notifications?
                What is Accuracy?
                Accuracy denotes the Hit Ratio of the Targets.
                If Call having 3 Targets, and all the 3 target hits then it will have 100% accuracy. If Two targets get hit then 66.66% and only one target hit then 33.33% for that advisory call. 0 if none of the targets get hit.
                Package shows the average accuracy of the advisory calls for that particular package.
                One Profile & Dashboard, accuracy denotes the average accuracy of the particular user based on the number of calls that user have given.
                Accuracy does not include the calls which are not activated.
                What is ROI & Avg ROI?
                ROI denote the Return of the Investment. 
                Formula we take here is Profit / Investment *100. In F&O investment happens based on the margin set by the exchange.
              `
                },
                {
                  q: `How to Add Advisory Call / Tip?`,
                  a: ` Add Call feature allows you to add the advisory calls for particular stock based on the research.
                Click on the “Add Call” button given on top-right hand side of the dashboard, it will direct you to the add call screen.
                Click on Package, it will expand the “Package” tab in which you’ll see its related fields.
                Click on “Select Package” which will display the list of packages created by the research entity and also package assigned by any other research entities.
                Select any package for which you want to add call.
                Click on “Select Strategy”, which will display all the strategies available.
                Select “Plain” strategy if you want to do simple add call for particular stock or else select any of the given options’ strategies.
                Click on “Select Duration”, which will display duration available and select any one of the durations.
                Enter Target Total Profit and Target Total Loss if needed. These fields are optional.
                Click on the Leg 1, it will expand and show the other necessary fields for the advisory call.
                The number of legs depends upon the strategy selected.
                Select Buy / Sell will the help of toggle button given to select what type of call you want to add.
                In case of strategy the Buy / Sell will remain fixed depending on the strategy.
                The “Segment Type” and “Exchange” will get automatically selected depending on the package selected, for e.g. if you select package made for Equity segment, it will automatically select Equity segment
                In case of Equity segment there will be two exchanges BSE & NSE, select any one of them.
                In case of Commodity segment there will be two exchanges MCX & NCDEX, select any one of them.
                For F&O the exchange will be fixed to NSE.
                Click on “Select Symbol” and begin to enter the symbol/scrip for which you want to add call. It will automatically start to show the list of symbol from which you can select the desired symbol
                In case of F&O and Commodity segment it will display the “Expiry Date”, “Strike Price” and “CE/PE” fields
                Select “Expiry Date” to select the expiry date for the contract.
                Select “Strike Price” in case of Options segment is selected.
                Select “CE/PE” in case of Options segment is selected.
                In case of strategy the “CE/PE” will remain fixed depending on the strategy.
                Select type of CMP you want to enter. 
                For “Between CMP” it will show you “CMP Min” and “CMP Max” fields. Enter the necessary values in them.
                For “CMP” it will automatically select the current stock price
                For “Above CMP” it will show you “CMP Min” field. Enter the necessary value in it.
                For “Below CMP” it will show you “CMP Max” field. Enter the necessary value in it.
                Enter Target and Stoploss values in the fields given below CMPs
                Click on the plus button below to add more Target and Stoploss fields. Max you can enter 3 Targets and 3 Stoplosses.
                Investment Amount default will be 100000 rupees in case the segment is Equity and it will be 1 Lot for other segments. You can edit the Investment Amount according to your need.
                Click on “Call Description” tab, which will allow you to add necessary comments for a particular advisory call. This field is optional
                Click on “SEBI Declarations”, it will display related fields. This field is optional.
                Finally click on the Submit button to add the call.`
                }
              ]
        }
    }

    render()
    {
        let showQuestionAnswers=this.state.FAQ.map((result,index)=>{
            return(
                <li data-aos="fade-up" data-aos-delay={`${index}+00`}>
                  <i class="bx bx-help-circle icon-help"></i> <a data-toggle="collapse" class="collapsed" href={`#faq-list-${index+1}`}>{result.q}  <i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
                  <div id={`faq-list-${index+1}`} class="collapse" data-parent=".faq-list">
                    <p>
                      {result.a}.
                    </p>
                  </div>
                </li>
            )
        })
        return(
            <div>
                {showQuestionAnswers}
            </div>
        )
    }
}

export default FAQ;