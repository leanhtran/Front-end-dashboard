import React from 'react'
import './dashboard.scss'
import DropdownOption from './DropdownOption';
import {
  Button,
  OverlayTrigger,
  Tooltip,
} from 'react-bootstrap'
import ExportExel from '../common/ExportExel';
import KYCCellComponent from './KYCCellComponent';
import HeaderComponent from '../common/HeaderComponent';

function DashboardComponent(props) {
  const {
    history,
    data,
    listStatusOptions,
    listTransferConfOptions,
    listKYCStatusOptions,
    listPaidBackOptions,
    listFundsOptions,
    onFillterData,
  } = props;

  const renderColorTransferStatus = (status) => {
    if (status.toUpperCase() === 'SENT') {
      return 'text-success';
    } else if (status.toUpperCase() === 'NOT SENT') {
      return 'text-danger';
    } else {
      return 'text-warning';
    }
  };

  const renderColorPaidBackStatus = (status) => {
    if (status.toUpperCase() === 'IN PROGRESS') {
      return 'text-warning';
    } else if (status.toUpperCase() === 'NSF') {
      return 'text-success';
    }
    return 'text-danger';
  };

  const renderColorStatus = (status) => {
    if (status.toUpperCase() === 'YES') {
      return 'text-success';
    }
    return 'text-danger';
  }

  return (
    <div className="dashboard-container">
      <HeaderComponent history={history} />
      <div className="container-fluid dashboard-table">
        <div className="mb-3 mt-2">
          <ExportExel fileName='Dashboard' data={data}>
            <Button variant="success">Export Excel</Button>
          </ExportExel>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col"><div className="thead-cell">User ID</div></th>
              <th scope="col"><div className="thead-cell">Client</div></th>
              <th scope="col"><div className="thead-cell">Date Joined</div></th>
              <th scope="col">
                <div className="thead-status-cell">
                  Status
                  <DropdownOption
                    onChangeOption={onFillterData}
                    options={listStatusOptions}
                  />
                </div>
              </th>
              <th scope="col">
                <div className="thead-status-cell">
                  KYC Status
                  <DropdownOption
                    onChangeOption={onFillterData}
                    options={listKYCStatusOptions}
                  />
                </div>
              </th>
              <th scope="col">
                <div className="thead-status-cell">
                  E-Transfer Conf
                  <DropdownOption
                    onChangeOption={onFillterData}
                    options={listTransferConfOptions}
                  />
                </div>
              </th>
              <th scope="col"><div className="thead-cell">Start Date</div></th>
              <th scope="col"><div className="thead-cell">Maturity Date(Midnight)</div></th>
              <th scope="col"><div className="thead-cell">Duration</div></th>
              <th scope="col"><div className="thead-cell">Amount CAD</div></th>
              <th scope="col"><div className="thead-cell">Tip(CAD)</div></th>
              <th scope="col"><div className="thead-cell">Total</div></th>
              <th scope="col">
                <div className="thead-status-cell">
                  Paid Back
                  <DropdownOption
                    onChangeOption={onFillterData}
                    options={listPaidBackOptions}
                  />
                </div>
              </th>
              <th scope="col">
                <div className="thead-status-cell">
                  Funds
                  <DropdownOption
                    onChangeOption={onFillterData}
                    options={listFundsOptions}
                  />
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index.toString()}>
                <td>{item.userId}</td>
                <td>
                  <div className="client-cell">
                    <span className="client-name"><b>{item.client}</b></span>
                    <OverlayTrigger
                      placement="bottom"
                      delay={{ show: 250, hide: 250 }}
                      overlay={<Tooltip id="button-tooltip-2">View detail</Tooltip>}
                    >
                    <div onClick={() => history.push(`/user:${item.userId}`)} className="detail-button"><i className="fas fa-arrow-right"></i></div>
                    </OverlayTrigger>
                  </div>
                </td>
                <td>
                  <div>{item.dateJoined.slice(6)}</div>
                  <div>{item.dateJoined.slice(0,5)}</div>
                </td>
                <td className={`${item.status.toUpperCase() === 'ACTIVE' ? 'text-success' : 'text-danger'} text-700`}>{item.status}</td>
                <td>
                  <KYCCellComponent KYCitem={item} />
                </td>
                <td className={`${renderColorTransferStatus(item.transfer)} text-700`}>{item.transfer}</td>
                <td>{item.startDate}</td>
                <td>{item.maturityDate}</td>
                <td>{item.duration}</td>
                <td>{item.amountCAD}</td>
                <td>{item.tip}</td>
                <td>{item.total}</td>
                <td className={`${renderColorPaidBackStatus(item.paidBack)} text-700`}>{item.paidBack}</td>
                <td className={`${renderColorStatus(item.funds)} text-700`}>{item.funds}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default DashboardComponent
