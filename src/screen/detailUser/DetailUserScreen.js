import React, { useState } from 'react'
import DetailUserComponent from '../../component/detailUser/DetailUserComponent';

const initialData = [
  {userId: '128', client: 'John Frost', username: 'johnfros2591', dateJoined: '09:25 15th July 2021', email: 'johnfros2591@gmail.com', phone: '0845213654', transfer: 'Sent', startDate: 'May 9th 2021', dateOfBirth: 'May 16th 2021', duration: '1 Week', amountCAD: '80', tip: '3', total: '83', paidBack: 'In progress', funds: 'Yes'},
  {userId: '149', client: 'Michael Jordan', username: 'michaeljordan', dateJoined: '15:14 18th July 2021', email: 'michaeljordan@gmail.com', phone: '0845213654', transfer: 'Not Sent', startDate: 'May 7th 2021', dateOfBirth: 'May 21st 2021', duration: '2 Weeks', amountCAD: '60', tip: '2', total: '62', paidBack: 'NSF', funds: 'No'},
  {userId: '187', client: 'Eugene Longfield', username: 'eugenelongfield', dateJoined: '19:32 20th March 2021', email: 'eugenelongfield@gmail.com', phone: '0845213654', transfer: 'Bounced', startDate: 'May 6th 2021', dateOfBirth: 'May 27th 2021', duration: '3 Weeks', amountCAD: '30', tip: '3', total: '33', paidBack: 'Loan due today', funds: 'Yes'},
  {userId: '137', client: 'Chris Staffer', username: 'chriswtaffer', dateJoined: '16:37 14th April 2021', email: 'chriswtaffer@gmail.com Not', phone: '0845213654', transfer: 'Not sent', startDate: 'May 5th 2021', dateOfBirth: 'May 13th 2021', duration: '1 Week', amountCAD: '40', tip: '2', total: '42', paidBack: 'Loan due today', funds: 'No'},
  {userId: '124', client: 'Jonah Berger', username: 'jonahberger', dateJoined: '15:12 12th April 2021', email: 'jonahberger@gmail.com', phone: '0845213654', transfer: 'Sent', startDate: 'May 2nd 2021', dateOfBirth: 'May 30th 2021', duration: '4 Weeks', amountCAD: '60', tip: '4', total: '64', paidBack: 'Loan due today', funds: 'Yes'},
  {userId: '193', client: 'Sam Raqluette', username: 'samraqluette', dateJoined: '14:52 12th April', email: 'samraqluette@gmail.com', phone: '0845213654', transfer: 'Sent', startDate: 'May 3rd 2021', dateOfBirth: 'May 24th 2021', duration: '3 Weeks', amountCAD: '70', tip: '2', total: '72', paidBack: 'Loan due today', funds: 'No'},
  {userId: '195', client: 'Tommy Jackson', username: 'tommyjackson', dateJoined: '13:42 10th April 2021', email: 'tommyjackson@gmail.com', phone: '0845213654', transfer: 'Not sent', startDate: 'May 4th 2021', dateOfBirth: 'May 18th 2021', duration: '2 Weeks', amountCAD: '40', tip: '5', total: '45', paidBack: 'In progress', funds: 'Yes'},
  {userId: '173', client: 'Daniel Schwartz', username: 'danielschwartz', dateJoined: '12:54 9th May 2021', email: 'danielschwartz@gmail.com', phone: '0845213654', transfer: 'Sent', startDate: 'May 8th 2021', dateOfBirth: 'June 10th 2021', duration: '4 Weeks', amountCAD: '50', tip: '6', total: '56', paidBack: 'In progress', funds: 'Yes'},
  {userId: '164', client: 'Sam Broden', username: 'sambroden', dateJoined: '11:57 10th May 2021', email: 'sambroden@gmail.com', phone: '0845213654', transfer: 'Sent', startDate: 'May 5th 2021', dateOfBirth: 'May 26th 2021', duration: '3 Weeks', amountCAD: '50', tip: '2', total: '52', paidBack: 'NSF', funds: 'No'},
];

const initialTransaction = [
  {loanId: '1', amountBorrowed: '20', tip: '2', total: '22', paidOnTime: 'May 9th 2021'},
  {loanId: '2', amountBorrowed: '50', tip: '5', total: '55', paidOnTime: 'May 7th 2021'},
  {loanId: '3', amountBorrowed: '60', tip: '6', total: '66', paidOnTime: 'May 6th 2021'},
  {loanId: '4', amountBorrowed: '80', tip: '10', total: '90', paidOnTime: 'May 5th 2021'},
  {loanId: '5', amountBorrowed: '90', tip: '3', total: '93', paidOnTime: 'May 2nd 2021'},
];

function DetailUserScreen(props) {
  const {
    id
  } = props;

  const [userData, setUserData] = useState(initialData.find(item => item.userId === id));

  return (
    <DetailUserComponent
      userData={userData}
      initialTransaction={initialTransaction}
    />
  )
}

export default DetailUserScreen
