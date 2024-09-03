import Footer from "../component/footer/page";

const accordionData = [
  {
    title: '1.WHAT IS MUDRA?',
    content: 'MUDRA, which stands for Micro Units Development & Refinance Agency Ltd., is a financial institution set up by Government of India for development and refinancing of micro units enterprises. It was announced by the Hon’ble Finance Minister while presenting the Union Budget for FY 2016. The purpose of MUDRA is to provide funding to the non-corporate small business sector through various Last Mile Financial Institutions like Banks, NBFCs and MFIs.',
  },
  {
    title: '2.WHY MUDRA HAS BEEN SET UP?',
    content: 'The biggest bottleneck to the growth of entrepreneurship in the Non–Corporate Small Business Sector (NCSBS) is lack of financial support to this sector. More than 90% of this sector does not have access to formal sources of finance. GoI is setting up MUDRA Bank through a statutory enactment for catering to the needs of the NCSBS segment or the informal sector for bringing them in the mainstream.',
  },
  {
    title: '3. WHAT ARE THE ROLES AND RESPONSIBILITIES OF MUDRA?',
    content: 'MUDRA would be responsible for refinancing all Last Mile Financiers such as Non-Banking Finance Companies, Micro Finance Institutions, Societies, Trusts, Section 8 Companies [formerly Section 25], Small Finance Banks and Regional Rural Banks which are in the business of lending to micro/small business entities engaged in manufacturing, trading and services activities as well as agri-allied activities. MUDRA would also partner with State/Regional level financial intermediaries to provide finance to Last Mile Financier of small/micro business enterprises.',
  },
  {
    title: '4. WHAT ARE THE OFFERINGS OF MUDRA? HOW WILL MUDRA FUNCTION?',
    content: `Under the aegis of Pradhan Mantri MUDRA Yojana (PMMY), MUDRA has already created its initial products / schemes. The interventions have been named ‘Shishu’, ‘Kishor’ and ‘Tarun’ to signify the stage of growth / development and funding needs of the beneficiary micro unit / entrepreneur and also to provide a reference point for the next phase of graduation / growth to look forward to. The financial limit for these schemes are:-`,
     common:{
                li1:"a. Shishu : covering loans upto  50,000/-",
                li2:"  b. Kishor : covering loans above  50,000/- and upto  5 lakh",
                li3:" c. Tarun : covering loans above  5 lakh to  10 lakh",
                Footer:"MUDRA’s delivery channel is conceived to be through the route of refinance primarily to Banks/NBFCs/MFIs At the same time, there is a need to develop and expand the delivery channel at the ground level. In this context, there is already in existence, a large number of ‘Last Mile Financiers’ in the form of companies, trusts, societies, associations and other networks which are providing informal finance to small businesses."
              }
    
  },

  {
    title: '5.	WHO ARE THE TARGET CLIENTS OF MUDRA/ WHAT KIND OF BORROWERS ARE ELIGIBLE FOR ASSISTANCE FROM MUDRA?',
    content: 'Non–Corporate Small Business Segment (NCSB) comprising of millions of proprietorship / partnership firms running as small manufacturing units, service sector units, shopkeepers, fruits / vegetable vendors, truck operators, food-service units, repair shops, machine operators, small industries, artisans, food processors and others, in rural and urban areas.',
  },
  {
    title: '6.	ARE REGIONAL RURAL BANKS (RRBS) ELIGIBLE FOR ASSISTANCE FROM MUDRA?',
    content: 'Yes, MUDRA will be extending refinance support to RRBs for enhancing their liquidity.',
  },
  {
    title: '7.WHAT IS THE RATE OF INTEREST CHARGED BY MUDRA?',
    content: 'MUDRA is a refinancing agency which will extend its funds to Last Mile Financiers to enable them to reach out to the sector. Access to finance in conjunction with rational price is going to be the unique customer value proposition of MUDRA. It will use a variety of innovative financing means including technology to bring down the cost of funding for the ultimate borrower.',
  },
  {
    title: '8. I HAVE A SMALL BUSINESS DEALING IN PAPER GOODS. CAN MUDRA HELP ME?',
    content: 'MUDRA loan is available through Banks/NBFCs/MFIs for such activities. All kind of manufacturing, trading and service sector activities can get MUDRA loan. Loans are categorised into Shishu, Kishor and Tarun. These products have been designed to cater to customers operating at the lower end of the enterprise spectrum. The loans will be extended through MFIs, NBFCs, Banks, etc.',
  },
  {
    title: '9.I HAVE GRADUATED RECENTLY. I WANT TO START MY OWN BUSINESS. CAN MUDRA HELP ME?',
    content: `MUDRA loans are available in three categories. For small business, loans upto  50000/- /- is available under the 'Shishu' category and beyond  50,000 and up to  5 lakh under the 'Kishor' category. It also offers loans beyond  5 lakh and up to  10 lakh under the Tarun category. Depending on the nature of business and project requirement you can access finance from one of the intermediaries of MUDRA as per the norms.`,
  },
  {
    title: '10.I HAVE DIPLOMA IN FOOD PROCESSING TECHNOLOGY. I WANT TO START MY OWN UNIT. PLEASE GUIDE ME.',
    content: 'Food Processing is an eligible activity for coverage under one of the MUDRA schemes. You can avail of assistance under MUDRA schemes for food processing from any financing banks/MFIs/NBFCs.',
  },
  {
    title: '11. I AM AN ARTISAN SPECIALISING IN JARI WORK. I WANT TO START MY OWN WORK INSTEAD OF DOING JOB WORK FOR OTHERS. CAN MUDRA HELP ME?',
    content: 'You can avail assistance under the ‘Shishu’ category through any banks/NBFCs/MFIs operating in your region, for setting up your own enterprise.',
  },
  {
    title: '12.I INTEND TO WORK ON FRANCHISEE MODEL AND OPEN AN ICE CREAM PARLOUR. CAN MUDRA HELP ME?',
    content: 'MUDRA operates a special refinance scheme for traders and shopkeepers. You can avail the facilities under the scheme as per your requirements from any banks/MFIs/NBFCs in the area.',
  },
  {
    title: '13.	I WANT TO EXPAND MY POTTERY BUSINESS BY ADDING MORE VARIETY AND DESIGNS. WHAT HELP CAN I GET FROM MUDRA?',
    content: `You can avail assistance under the 'Shishu' category through any banks/NBFCs/ MFIs operating in your region for setting up your own enterprise.`,
  },
  {
    title: '14.WHAT IS THE SCOPE OF PMMY AND VARIOUS TYPES OF LOAN AVAILABLE AND WHICH ARE THE AGENCIES THAT WILL PROVIDE LOAN?',
    content: 'Pradhan Mantri Mudra Yojana (PMMY) loans will be extended by all Public Sector Banks such as PSU banks, Regional Rural Banks (RRBs), Small Finance Banks, Private Sector Banks, Foreign Banks, Micro Finance Institutions and Non-Banking Finance Companies. All loans sanctioned on or after April 08, 2015 up to a loan size of 10 lakh for non-farm income generating activities will be branded as PMMY loans.',
  },
  {
    title: '15.	WHO WILL MONITOR THE IMPLEMENTATION OF PMMY?',
    content: 'Monitoring of PMMY progress at the State level will be done through SLBC forum and at National level by MUDRA/Department of Financial Services, Government of India. For this purpose, MUDRA has developed a portal, wherein the Banks and other lending institutions directly feed their achievement details which are consolidated by the system and reports are generated for review.',
  },
  {
    title: '16.	IS THERE ANY SCHEME IN CENTRAL/STATE GOVT WHICH IS APPLICABLE ALL OVER INDIA, IN WHICH LOAN WITHOUT GUARANTEE IS GRANTED/THE GUARANTORS IDENTITY IS CHECKED?',
    content: 'Pradhan Mantri Mudra Yojana is a Government of India scheme, which enables a small borrower to borrow from banks, MFIs, NBFCs for loans upto  10 lakh for non farm income generating activities. Generally, loans upto ` 10 lakh issued by banks under Micro Small Enterprises is given without collaterals.',
  },
  {
    title: '17.	ARE CARPENTRY AND RO WATER PLANT INSTALLATION ELIGIBLE FOR THE LOAN?  IF SO, WHAT IS THE MAXIMUM AND MINIMUM AMOUNT OF LOAN?',
    content: 'Carpentary and RO water plant installation, on a business mode, are eligible activities under MUDRA loan, if the loan amount is up to  10 lakh The primary requirement for availing a MUDRA loan is to be an income generating activity under manufacturing, processing, trading and service sector as well as agri-allied activities and the loan amount is up to  10 lakh .',
  },
  {
    title: '18.WHAT IS THE ELIGIBILITY OF PERSONS FOR AVAILING MUDRA LOANS?',
    content: 'Any Indian Citizen who has a business plan for a non-farm income generating activity such as manufacturing, processing, trading or service sector whose credit need is up to  10 lakh can approach either a Bank, MFI or NBFC for availing of MUDRA loans under PMMY. The usual terms and conditions of the lending agency may have to be followed for availing of loans under PMMY. The lending rates are as per the RBI guidelines issued in this regard from time to time.',
  },
  {
    title: '19.IS THERE ANY SUBSIDY UNDER PMMY? IF SO, DETAILS THEREOF?',
    content: 'There is no subsidy for the loan given under PMMY. However, if the loan proposal is linked to some Government scheme, wherein the Govt. if providing capital subsidy, it will be eligible under PMMY also',
  },
  {
    title: '20.KINDLY PROVIDE BRIEF PROFILE OF MUDRA?',
    content: 'MUDRA which stands for Micro Units Development and Refinance Agency Ltd is a refinance agency and not a direct lending institution. MUDRA provides refinance support to its intermediaries viz. Banks, Micro Finance Institutions and NBFCs, who are in the business of lending for income generating activities in the non farm sector in manufacturing, processing, trading or service sector and who in turn will finance the beneficiaries.',
  },
  {
    title: '21. CAN YOU PROVIDE INFORMATION ON MUDRA CARD?',
    content: 'MUDRA Card is an innovative credit product wherein the borrower can avail of credit in a hassle free and flexible manner. It will provide a facility of working capital arrangement in the form of CC/OD to the borrower. Since MUDRA Card will be RuPay debit card, it can be used for drawing cash from ATM or Business Correspondent or make purchase using Point of Sale (POS) machine. Facility is also there to repay the amount, as and when, surplus cash is available, thereby reducing the interest cost.',
  },
  {
    title: '22.WOULD THE PEOPLE OF KUMHAR COMMUNITY BE BENEFITTED FROM PMMY FOR CARRYING OUT POTTERS WORK?',
    content: 'Yes. MUDRA Yojana is aimed at supporting all kind of income generating activities under manufacturing, processing, trading and service sector. Assistance can be availed under Micro Credit Scheme through any of the Micro finance institutions/Non-Banking Financial Companies/ Banks operating in the area.',
  },
  {
    title: '23)	WHAT ARE THE DOCUMENTS THAT ARE REQUIRED TO BE SUBMITTED FOR AVAILING LOANS UNDER MUDRA?',
    content: 'The terms and conditions of the loan will be governed by the rules of the lending institution and the broad guidelines of RBI. The guidance regarding the documents needed may be obtained from any of the lending institutions in your locality.',
  },
  {
    title: '24.	WHAT IS THE GRIEVANCE MECHANISM AVAILABLE AGAINST BANK OFFICIALS, IN THE EVENT OF NON SANCTION OF LOAN?',
    content: 'Any grievance against non-consideration of MUDRA loan can be registered with the higher authorities in the respective Bank like Regional Manager/Zonal Manager of the Bank, provided there is any lapse from the bank officials in sanctioning the loan.',
  },
  {
    title: '25.CAN U ELABORATE ON THE DETAILS OF SECURITY TO BE DEPOSITED FOR MUDRA LOANS?',
    content: 'As per the recommendations of the Working Group constituted by RBI for reviewing the Credit Guarantee Schemes for Micro Small Enterprises and accepted by RBI, Banks have been mandated not to insist for collateral security in the case of loans upto 10 lakh extended to the units in the Micro Small Enterprises sector.',
  },
  {
    title: '26.IS THERE ANY STANDARD FORMAT OF APPLICATION TO AVAIL MUDRA LOANS?',
    content: 'Yes. In respect of Shishu category, a one page application format has been designed which has been posted in MUDRA website. In respect of Kishor and Tarun category, a three page indicative application format has been designed and the same is also posted in MUDRA website.',
  },
  {
    title: '27.CAN YOU BRIEFLY EXPLAIN THE REPAYMENT TERMS, ELIGIBILITY AND ACTION PLAN FOR THE ASSISTANCE AVAILED FROM MUDRA?27.CAN YOU BRIEFLY EXPLAIN THE REPAYMENT TERMS, ELIGIBILITY AND ACTION PLAN FOR THE ASSISTANCE AVAILED FROM MUDRA?',
    content: 'The terms and conditions of the loan will be governed by the rules and regulations of the lending institution and the broad guidelines of RBI. The lending institution will be processing the loan request, based on the merits of the proposal only. The loan amount will be decided by the requirement of the proposed income generating activity. The repayment terms will be governed by the cash flow of the enterprise and the eligibility of the borrower will be decided by the norms of lending institutions.',
  },
  {
    title: '28.IS PMMY LOANS APPLICABLE TO ALL BANKS ALL OVER INDIA?',
    content: 'Yes. Department of Financial Services (DFS) vide its letter dated May 14, 2015 have advised all PSBs, RRBs and Small Finance Banks regarding roll out of PMMY and to cover all loans upto loan size of 10 lakh sanctioned on or after April 08, 2015 for income generation under PMMY. DFS have also been issuing various instructions including fixing of targets branch wise to the Head Offices of the Banks which has been advised to percolate the same to their zonal/regional/branch offices.',
  },
  {
    title: '29. WHEN WILL PMMY START IN GORAKHPUR ZONE AND WHEN WILL BE SCHEME START IN SBI BRANCH?',
    content: 'Loan disbursement under PMMY has commenced from April 08, 2015 all over the country through all Banks, including SBI.',
  },
  {
    title: '30.IS THERE ANY REQUIREMENT FOR A LIFE INSURANCE FOR MUDRA SCHEME?',
    content: 'Life insurance is not mandatory for loans under PMMY. However, the terms and conditions of lending under PMMY are based on the lending policy of the respective lending institution.',
  },
  {
    title: '31.IS OBTENTION OF PAN CARD A MUST TO AVAIL PMMY LOANS?',
    content: 'PAN card is not compulsory to avail PMMY loans. However, the borrower may have to satisfy the KYC requirements of the financing institutions.',
  },
  {
    title: '32.	WHAT IS THE RATE OF INTEREST ON MUDRA LOANS?',
    content: 'The interest rates are deregulated and the banks have been advised to charge reasonable interest rates within the overall RBI guidelines.',
  },
  {
    title: '33.IF THE LENDING INSTITUTIONS DO NOT GIVE PMMY LOANS, WHAT CAN I DO TO GET IT? ',
    content: 'The matter may be escalated within the respective bank’s higher authorities. The applicant can also approach another bank or NBFC/MFI operating in the area for the loan requirement.',
  },
  {
    title: '34.WHAT WOULD BE THE ACTION WHICH CAN BE INITIATED AGAINST BANKS WHICH INSIST FOR SECURITY/COLLATERAL UNDER PMMY, BECAUSE IN MANY PLACES, ALL THE BANKS ARE INSISTING FOR THE SECURITY/COLLATERAL? WHERE SHOULD COMPLAINT AGAINST THE BANK BE MADE WHEN BANK DEMAND SECURITY/COLLATERAL FOR LOANS UNDER PMMY?',
    content: 'Compliant against any bank branch can be registered with the Regional Office/Zonal Office/Head office of the respective bank. The details of the Grievance Redressal Mechanism of each bank will be available at the Bank branch.',
  },
  {
    title: '35.	IS HANDICAPPED PERSONS ALSO ELIGIBLE FOR PMMY LOANS?',
    content: 'Any Indian Citizen, who is eligible to avail of loan and has a business plan for income generating activity, can avail of MUDRA loan. The loan proposal should be for setting up of a new/upgrading an existing Micro business enterprises in the manufacturing, processing, trading and service sector.',
  },
  {
    title: '36.IS IT REQUIRED TO SUBMIT IT RETURNS FOR THE PRECEDING 2 YEARS FOR AVAILING LOAN OF `10 LAKH UNDER PMMY?',
    content: 'Generally, IT returns are not insisted for small value loans. However, the requirement of documents will be advised by the concerned lending institutions based on their internal guidelines and policies.',
  },
  {
    title: '37.	UNDER PMMY-SHISHU LOANS, WHAT IS THE TURN AROUND TIME FOR PROCESSING THE LOAN PROPOSAL? ',
    content: 'For Shishu loans, normally the turn-around-time for processing the loan proposals on receipt of complete information is 7 to 10 days.',
  },
  {
    title: '38.WHO ARE THE ELIGIBLE APPLICANTS UNDER PMMY?',
    content: 'Any individual including women, proprietary concern, partnership firm, private limited company or any other entity are eligible applicant under PMMY loans, whose loan requirement is up to  10 lakh.',
  },
  {
    title: '39.	ARE MUDRA LOANS AVAILABLE FOR PURCHASE OF CNG TEMPO/TAXI?',
    content: 'MUDRA loans would be available for purchase of CNG Tempo/Taxi, in case the applicant intends to use the vehicle for commercial purposes.',
  },
  {
    title: '40.I HAVE A SAVINGS BANK ACCOUNT WITH CORPORATION BANK, UNNARO, U.P. WOULD LOANS UNDER MUDRA BE AVAILABLE BASED ON THE SB ACCOUNT?',
    content: 'Yes. The applicant can approach the branch and apply for the loan in the format being provided by the said lending institution. The terms and conditions of the loan will be governed by the policies of the lending institution, based on the broad guidelines of RBI. The loan amount will be decided by the requirement of the proposed income generating activity and the repayment terms will be decided by the anticipated cash flow from the activity.',
  },
  {
    title: '41.IS KHADI ACTIVITY ELIGIBLE UNDER PMMY LOANS?',
    content: 'Yes. MUDRA loans are applicable for any activity which results in income generation. As Khadi is one of the eligible activities under Textile sector and in case MUDRA loans are taken for income generation, the same can be covered.',
  },
];

export default accordionData;
