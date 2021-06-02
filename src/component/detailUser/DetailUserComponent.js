import React from 'react'
import './detailUser.scss'
import {Button, Image} from 'react-bootstrap'
import defaultImage from '../../assets/images/default-image.jpg';
import defaultTCfile from '../../assets/files/DYA-terms-and-conditions.pdf';
import ExportExel from '../common/ExportExel';
import KYCComponent from './KYCComponent';

function DetailUserComponent(props) {
  const {
    userData,
    initialTransaction
  } = props;
  return (
    <div className="container-fluid pt-3">
      <div className="header-detail-user">
        <div>
          <div>
            <Image className="avatar" src={defaultImage} roundedCircle />
            <span className="username">{userData.username}</span>
          </div>
          <h3 className="mt-1">{userData.client}</h3>
        </div>

        <div className="header-button-container">
          <div>
            <Button variant="primary"><a href={defaultTCfile} target="_blank">Export {'T&C'}</a></Button>
            <KYCComponent userData={userData} />
          </div>
          <div>
            <ExportExel fileName={`Transactions-history-${userData.client.replace(' ', '-')}`} data={initialTransaction}>
              <Button variant="primary">Export Excel</Button>
            </ExportExel>
          </div>
        </div>
      </div>

      <div className="d-flex info-row">
        <div className="pl-0 info-cell">
          <div className="info-label">
            Email
          </div>
          <div>
            {userData.email}
          </div>
        </div>
        <div className="info-cell">
          <div className="info-label">
            Phone Number
          </div>
          <div>
            {userData.phone}
          </div>
        </div>
        <div className="info-cell">
          <div className="info-label">
            Birthday 
          </div>
          <div>
            {userData.dateOfBirth}
          </div>
        </div>
        <div className="info-cell border-0">
          <div className="info-label">
            Date Joined
          </div>
          <div>
            {userData.dateJoined}
          </div>
        </div>
      </div>
      <hr />
      <table className="table transaction-table">
        <thead>
          <tr>
            <th scope="col"><div className="thead-cell">Loan #</div></th>
            <th scope="col"><div className="thead-cell">Amount Borrowed</div></th>
            <th scope="col"><div className="thead-cell">TIP($)</div></th>
            <th scope="col"><div className="thead-cell">Total</div></th>
            <th scope="col"><div className="thead-cell">Paid on time</div></th>
        </tr>
        </thead>
        <tbody>
          {initialTransaction.map((item, index) => (
            <tr key={index.toString()}>
              <td>{item.loanId}</td>
              <td>{item.amountBorrowed}</td>
              <td>{item.tip}</td>
              <td>{item.total}</td>
              <td>{item.paidOnTime}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  )
}

export default DetailUserComponent
