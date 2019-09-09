import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const styles = {
    gif : {
        display: "block",
        margin: "0 auto",
        maxWidth: "300px"
    }
}

export default function GameModal(props) {
        return (
            <Modal aria-labelledby="contained-modal-title-vcenter" show={props.showModal} centered
            >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                {props.modalTitle}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <img style={styles.gif} src={props.modalGif} alt="gif" />
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.hideModal}>Close</Button>
            </Modal.Footer>
            </Modal>
    )

}
