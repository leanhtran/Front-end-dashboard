import React, { useState } from 'react'
import DashboardComponent from '../../component/dashboard/DashboardComponent'

const initialData = [
  {userId: '128', client: 'John Frost', dateJoined: '09:25 15th July 2021', status: 'Not Active', kycStatus: 'Needs Approval', transfer: 'Sent', startDate: 'May 9th 2021', maturityDate: 'May 16th 2021', duration: '1 Week', amountCAD: '80', tip: '3', total: '83', paidBack: 'In progress', funds: 'Yes'},
  {userId: '149', client: 'Michael Jordan', dateJoined: '15:14 18th July 2021', status: 'Active', kycStatus: 'Approved', transfer: 'Not Sent', startDate: 'May 7th 2021', maturityDate: 'May 21st 2021', duration: '2 Weeks', amountCAD: '60', tip: '2', total: '62', paidBack: 'NSF', funds: 'No'},
  {userId: '187', client: 'Eugene Longfield', dateJoined: '19:32 20th March 2021', status: 'Active', kycStatus: 'Approved', transfer: 'Bounced', startDate: 'May 6th 2021', maturityDate: 'May 27th 2021', duration: '3 Weeks', amountCAD: '30', tip: '3', total: '33', paidBack: 'Loan due today', funds: 'Yes'},
  {userId: '137', client: 'Chris Staffer', dateJoined: '16:37 14th April 2021', status: 'Not Active', kycStatus: 'Needs Approval', transfer: 'Not sent', startDate: 'May 5th 2021', maturityDate: 'May 13th 2021', duration: '1 Week', amountCAD: '40', tip: '2', total: '42', paidBack: 'Loan due today', funds: 'No'},
  {userId: '124', client: 'Jonah Berger', dateJoined: '15:12 12th April 2021', status: 'Active', kycStatus: 'Approved', transfer: 'Sent', startDate: 'May 2nd 2021', maturityDate: 'May 30th 2021', duration: '4 Weeks', amountCAD: '60', tip: '4', total: '64', paidBack: 'Loan due today', funds: 'Yes'},
  {userId: '193', client: 'Sam Raqluette', dateJoined: '14:52 12th April', status: 'Active', kycStatus: 'Approved', transfer: 'Sent', startDate: 'May 3rd 2021', maturityDate: 'May 24th 2021', duration: '3 Weeks', amountCAD: '70', tip: '2', total: '72', paidBack: 'Loan due today', funds: 'No'},
  {userId: '195', client: 'Tommy Jackson', dateJoined: '13:42 10th April 2021', status: 'Active', kycStatus: 'Needs Approval', transfer: 'Not sent', startDate: 'May 4th 2021', maturityDate: 'May 18th 2021', duration: '2 Weeks', amountCAD: '40', tip: '5', total: '45', paidBack: 'In progress', funds: 'Yes'},
  {userId: '173', client: 'Daniel Schwartz', dateJoined: '12:54 9th May 2021', status: 'Not Active', kycStatus: 'Approved', transfer: 'Sent', startDate: 'May 8th 2021', maturityDate: 'June 10th 2021', duration: '4 Weeks', amountCAD: '50', tip: '6', total: '56', paidBack: 'In progress', funds: 'Yes'},
  {userId: '164', client: 'Sam Broden', dateJoined: '11:57 10th May 2021', status: 'Active', kycStatus: 'Approved', transfer: 'Sent', startDate: 'May 5th 2021', maturityDate: 'May 26th 2021', duration: '3 Weeks', amountCAD: '50', tip: '2', total: '52', paidBack: 'NSF', funds: 'No'},
];

const listStatusOptions = [
  {label: 'Active', value: 'ACTICE', type: 'STATUS'},
  {label: 'Not Active', value: 'NOT_ACTICE', type: 'STATUS'},
];

const listKYCStatusOptions = [
  {label: 'Approved', value: 'APPROVED', type: 'KYC_STATUS'},
  {label: 'Needs Approval', value: 'NEEDS_APPROVAL', type: 'KYC_STATUS'},
];

const listTransferConfOptions = [
  {label: 'Sent', value: 'SENT', type: 'TRANSFER_CONF'},
  {label: 'Not Sent', value: 'NOT_SENT', type: 'TRANSFER_CONF'},
  {label: 'Bounced', value: 'BOUNCED', type: 'TRANSFER_CONF'},
];

const listPaidBackOptions = [
  {label: 'In progress', value: 'IN_PROGRESS', type: 'PAID_BACK'},
  {label: 'NSF', value: 'NSF', type: 'PAID_BACK'},
  {label: 'Loan due today', value: 'LOAN_DUE_TODAY', type: 'PAID_BACK'},
];

const listFundsOptions = [
  {label: 'Yes', value: 'YES', type: 'FUNDS'},
  {label: 'No', value: 'NO', type: 'FUNDS'},
];

function DashboardScreen() {
  const [data, setData] = useState(initialData);
  const [initData, setInitData] = useState(initialData);
  const [statusOptions, setStatusOptions] = useState('');
  const [KYCStatusOptions, setKYCStatusOptions] = useState('');
  const [transferConfOptions, setTransferConfOptions] = useState('');
  const [paidBackOptions, setPaidBackOptions] = useState('');
  const [fundsOptions, setFundsOptions] = useState('');
  
  const onFillterData = (type, value) => {
    const newInitData = [...initData];
    switch (type) {
      case 'STATUS':
        setStatusOptions(value);
        const labelStatus = listStatusOptions.find(item => item.value === value).label;
        const dataFiltered1 = newInitData.filter(item => item.status === labelStatus);
        setData(dataFiltered1);
      break;
      case 'KYC_STATUS':
        setKYCStatusOptions(value);
        const labelKYC = listKYCStatusOptions.find(item => item.value === value).label;
        const dataFiltered2 = newInitData.filter(item => item.kycStatus === labelKYC);
        setData(dataFiltered2);
        break;
      case 'TRANSFER_CONF':
        setTransferConfOptions(value);
        const labelTransfer = listTransferConfOptions.find(item => item.value === value).label;
        const dataFiltered3 = newInitData.filter(item => item.transfer === labelTransfer);
        setData(dataFiltered3);
        break;
      case 'PAID_BACK':
        setPaidBackOptions(value);
        const labelPaidBack = listPaidBackOptions.find(item => item.value === value).label;
        const dataFiltered4 = newInitData.filter(item => item.paidBack === labelPaidBack);
        setData(dataFiltered4);
        break;
      case 'FUNDS':
        setFundsOptions(value);
        const labelFunds = listFundsOptions.find(item => item.value === value).label;
        const dataFiltered5 = newInitData.filter(item => item.funds === labelFunds);
        setData(dataFiltered5);
        break;
      default:
        break;
    }
    console.log('value', value);
  };

  return (
    <DashboardComponent
      data={data}
      listStatusOptions={listStatusOptions}
      listTransferConfOptions={listTransferConfOptions}
      listKYCStatusOptions={listKYCStatusOptions}
      listPaidBackOptions={listPaidBackOptions}
      listFundsOptions={listFundsOptions}
      onFillterData={onFillterData}
      statusOptions={statusOptions}
      KYCStatusOptions={KYCStatusOptions}
      transferConfOptions={transferConfOptions}
      paidBackOptions={paidBackOptions}
      fundsOptions={fundsOptions}
    />
  )
}

export default DashboardScreen
