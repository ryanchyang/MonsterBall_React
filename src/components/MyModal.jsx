import React from 'react';
import { Link } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import './Modal.scss';

const MyModal = props => {
  return (
    <Modal
      className="monster-modal"
      show={props.show}
      onHide={props.onHide}
      centered
    >
      <Modal.Header className="monster-modal-header" closeButton>
        {props.title}
      </Modal.Header>
      <Modal.Body className="monster-modal-body">{props.content}</Modal.Body>
    </Modal>
  );
};

export default MyModal;
