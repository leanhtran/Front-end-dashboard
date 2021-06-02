import React, { Fragment, useState } from 'react'
import {Modal, Button, Image, Form} from 'react-bootstrap'
import defaultImage from '../../assets/images/default-image.jpg';
import defaultKYCId from '../../assets/images/default-kyc-id.jpg';


function KYCCellComponent(props) {
  const {
    KYCitem,
  } = props;
  const [isShowReviewKYC, setIsShowReviewKYC] = useState(false);
  const [isReject, setIsReject] = useState(false);

  const onReviewKYC = () => {
    setIsShowReviewKYC(true);
  }

  const onCloseReviewKYC = () => {
    setIsShowReviewKYC(false);
    setIsReject(false);
  }

  const onCancelReject = () => {
    setIsReject(false);
  }

  const onRejectKYC = () => {
    if (isReject) {
      onCloseReviewKYC();
    } else {
      setIsReject(true);
    }
  }

  const isKYCStatusApproved = () => KYCitem.kycStatus.toUpperCase() === 'APPROVED';

  return (
    <Fragment>
      <div className={`${isKYCStatusApproved() ? 'text-success' : 'text-danger'} text-700`}>{KYCitem.kycStatus}</div>
      {!isKYCStatusApproved(KYCitem.kycStatus) && <div className="review-button text-primary"><u onClick={onReviewKYC}>Review</u></div>}

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

          {isReject && <div className="mt-4">
            <Form.Label>Reason</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </div>}
        </Modal.Body>


        <div className="footer">
          {isReject && <Button onClick={onCancelReject} variant="secondary" className="mr-2">Cancel</Button>}
          <Button onClick={onRejectKYC} variant="danger">Reject</Button>
          {!isReject && <Button onClick={onCloseReviewKYC} className="ml-2" variant="primary">Approve</Button>}
        </div>
      </Modal>
    </Fragment>
  )
}

export default KYCCellComponent
