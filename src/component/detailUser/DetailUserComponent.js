import React from 'react'
import './detailUser.scss'
import {Button, Image} from 'react-bootstrap'
import defaultImage from '../../assets/images/default-image.jpg';

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
          <h4>{userData.client}</h4>
        </div>

        <div className="header-button-container">
          <div>
            <Button variant="primary">Export {'T&C'}</Button>
            <Button className="ml-2" variant="primary">KYC verification</Button>
          </div>
          <div>
            <Button variant="primary">Export Excel</Button>
          </div>
        </div>
      </div>

      <div>
        {userData.email}
        <span class = "vertical" />
        {userData.phone}
        <span class = "vertical" />
        {userData.dateOfBirth}
        <span class = "vertical" />
        {userData.dateJoined}
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
