import React, { useState } from 'react'
import DashboardComponent from '../../component/dashboard/DashboardComponent'

const initialData = [
  {userId: '128', fullName: 'John Frost', dataJoined: '15th July 2021', status: 'Not Active', kycStatus: 'Needs Approval', transfer: 'Sent', startDate: 'May 9th 2021', maturityDate: 'May 16th 2021', duration: '1 Week', amountCAD: '80', tip: '3', total: '83', paidBack: 'In progress', funds: 'Yes'},
  {userId: '149', fullName: 'Michael Jordan', dataJoined: '18th July 2021', status: 'Active', kycStatus: 'Approved', transfer: 'Not Sent', startDate: 'May 7th 2021', maturityDate: 'May 21st 2021', duration: '2 Weeks', amountCAD: '60', tip: '2', total: '62', paidBack: 'NSF', funds: 'No'},
  {userId: '187', fullName: 'Eugene Longfield', dataJoined: '20th March 2021', status: 'Active', kycStatus: 'Approved', transfer: 'Bounced', startDate: 'May 6th 2021', maturityDate: 'May 27th 2021', duration: '3 Week', amountCAD: '30', tip: '3', total: '33', paidBack: 'Loan due today', funds: 'Yes'},
]

function DashboardScreen() {
  const [data, setData] = useState(initialData);

  return (
    <DashboardComponent
      data={data}
    />
  )
}

export default DashboardScreen
