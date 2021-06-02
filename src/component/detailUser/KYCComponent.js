import React, { Fragment, useState } from 'react'
import {Modal, Button, Image} from 'react-bootstrap'
import defaultImage from '../../assets/images/default-image.jpg';
import defaultKYCId from '../../assets/images/default-kyc-id.jpg';

function KYCComponent(props) {
  const {
    userData
  } = props;
  const [isShowReviewKYC, setIsShowReviewKYC] = useState(false);

  const onReviewKYC = () => {
    setIsShowReviewKYC(true);
  };

  const onCloseReviewKYC = () => {
    setIsShowReviewKYC(false);
  };

  return (
    <Fragment>
      <Button onClick={onReviewKYC} className="ml-2" variant="primary">KYC verification</Button>

      <Modal
        className="KYC-modal"
        centered
        show={isShowReviewKYC}
        onHide={onCloseReviewKYC}
        backdrop="static"
        keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>KYC verification</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className="face-kyc-container">
            <Image className="img-kyc" src={defaultImage} rounded />
            <div>
              Face
            </div>
          </div>
          <div className="id-kyc-container">
            <div>
              <Image className="img-kyc" src={defaultKYCId} rounded />
              <div>
                Front of Identify
              </div>
            </div>
            <div>
              <Image className="img-kyc" src={defaultKYCId} rounded />
              <div>
                Back of Identify
              </div>
            </div>
          </div>
        </Modal.Body>
        {!userData.kycStatus && <div className="footer">
          <Button onClick={onCloseReviewKYC} variant="danger">Reject</Button>
          <Button onClick={onCloseReviewKYC} className="ml-2" variant="primary">Approve</Button>
        </div>}
      </Modal>
    </Fragment>
  )
}

export default KYCComponent
