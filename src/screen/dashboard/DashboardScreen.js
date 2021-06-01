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
  {label: 'All', value: 'ALL', type: 'STATUS'},
  {label: 'Active', value: 'ACTICE', type: 'STATUS'},
  {label: 'Not Active', value: 'NOT_ACTICE', type: 'STATUS'},
];

const listKYCStatusOptions = [
  {label: 'All', value: 'ALL', type: 'KYC_STATUS'},
  {label: 'Approved', value: 'APPROVED', type: 'KYC_STATUS'},
  {label: 'Needs Approval', value: 'NEEDS_APPROVAL', type: 'KYC_STATUS'},
];

const listTransferConfOptions = [
  {label: 'All', value: 'ALL', type: 'TRANSFER_CONF'},
  {label: 'Sent', value: 'SENT', type: 'TRANSFER_CONF'},
  {label: 'Not sent', value: 'NOT_SENT', type: 'TRANSFER_CONF'},
  {label: 'Bounced', value: 'BOUNCED', type: 'TRANSFER_CONF'},
];

const listPaidBackOptions = [
  {label: 'All', value: 'ALL', type: 'PAID_BACK'},
  {label: 'In progress', value: 'IN_PROGRESS', type: 'PAID_BACK'},
  {label: 'NSF', value: 'NSF', type: 'PAID_BACK'},
  {label: 'Loan due today', value: 'LOAN_DUE_TODAY', type: 'PAID_BACK'},
];

const listFundsOptions = [
  {label: 'All', value: 'ALL', type: 'FUNDS'},
  {label: 'Yes', value: 'YES', type: 'FUNDS'},
  {label: 'No', value: 'NO', type: 'FUNDS'},
];

function DashboardScreen(props) {
  const {
    history
  } = props;
  console.log('props', props);
  const [data, setData] = useState(initialData);
  const [initData, setInitData] = useState(initialData);
  const [statusOptions, setStatusOptions] = useState('All');
  const [KYCStatusOptions, setKYCStatusOptions] = useState('All');
  const [transferConfOptions, setTransferConfOptions] = useState('All');
  const [paidBackOptions, setPaidBackOptions] = useState('All');
  const [fundsOptions, setFundsOptions] = useState('All');
  
  const handleFilterData = (params) => {
    const newInitData = initData;
    const keys = [];
    for (let key in params) {
      if (params[key] !== 'All') {
        keys.push(key);
      }
    };
    if(keys.length === 0) {
      setData(initialData);
    } else {
      const result = [];
      newInitData.forEach(item => {
        let countEqual = 0;
        keys.forEach(key => {
          if (params[key] === item[key]) {
            countEqual += 1;
            if (countEqual === keys.length) {
              result.push(item);
            }
          }
        })
      });
      setData(result);
    }
  }

  const onFillterData = (type, value) => {
    const initParams = {
      status: statusOptions,
      kycStatus: KYCStatusOptions,
      transfer: transferConfOptions,
      paidBack: paidBackOptions,
      funds: fundsOptions,
    }
    switch (type) {
      case 'STATUS':
        const labelStatus = listStatusOptions.find(item => item.value === value).label;
        setStatusOptions(labelStatus);
        const paramsFilter1 = {
          ...initParams,
          status: labelStatus,
        }
        handleFilterData(paramsFilter1);
      break;
      case 'KYC_STATUS':
        const labelKYC = listKYCStatusOptions.find(item => item.value === value).label;
        setKYCStatusOptions(labelKYC);
        const paramsFilter2 = {
          ...initParams,
          kycStatus: labelKYC,
        }
        handleFilterData(paramsFilter2);
        break;
      case 'TRANSFER_CONF':
        const labelTransfer = listTransferConfOptions.find(item => item.value === value).label;
        setTransferConfOptions(labelTransfer);
        const paramsFilter3 = {
          ...initParams,
          transfer: labelTransfer,
        }
        handleFilterData(paramsFilter3);
        break;
      case 'PAID_BACK':
        const labelPaidBack = listPaidBackOptions.find(item => item.value === value).label;
        setPaidBackOptions(labelPaidBack);
        const paramsFilter4 = {
          ...initParams,
          paidBack: labelPaidBack,
        }
        handleFilterData(paramsFilter4);
        break;
      case 'FUNDS':
        const labelFunds = listFundsOptions.find(item => item.value === value).label;
        setFundsOptions(labelFunds);
        const paramsFilter5 = {
          ...initParams,
          funds: labelFunds,
        }
        handleFilterData(paramsFilter5);
        break;
      default:
        break;
    }
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
      history={history}
    />
  )
}

export default DashboardScreen
