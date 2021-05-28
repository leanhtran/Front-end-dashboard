import React from 'react'
import {Dropdown} from 'react-bootstrap'
import './dashboard.scss'

function DashboardComponent(props) {
  const {
    data
  } = props;

  return (
    <div className="container-fluid">
      Dashboard
      <table className="table dashboard-table">
        <thead>
          <tr>
            <th scope="col">User ID</th>
            <th scope="col">Client</th>
            <th scope="col">Date Joined</th>
            <th scope="col" className="status-cell">
              Status
              <Dropdown>
                <Dropdown.Toggle variant="dark" id="dropdown-basic">
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Active</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Not Active</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </th>
            <th scope="col">KYC Status</th>
            <th scope="col">E-Transfer Conf</th>
            <th scope="col">Start Date</th>
            <th scope="col">Maturity Date(Midnight)</th>
            <th scope="col">Duration</th>
            <th scope="col">Amount CAD</th>
            <th scope="col">Tip(CAD)</th>
            <th scope="col">Total</th>
            <th scope="col">Paid Back</th>
            <th scope="col">Funds</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr>
              <td>{item.userId}</td>
              <td>{item.fullName}</td>
              <td>{item.dataJoined}</td>
              <td>{item.status}</td>
              <td>{item.kycStatus}</td>
              <td>{item.transfer}</td>
              <td>{item.startDate}</td>
              <td>{item.maturityDate}</td>
              <td>{item.duration}</td>
              <td>{item.amountCAD}</td>
              <td>{item.tip}</td>
              <td>{item.total}</td>
              <td>{item.paidBack}</td>
              <td>{item.funds}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default DashboardComponent
