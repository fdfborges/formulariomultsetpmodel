import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// import 'bootstrap/dist/css/bootstrap.min.css'; // Essa classe fez as bolinhas do steps pararem de funcionar. Resolver
import './styles.css';
import '../../_bootstrap-custom.scss';

export function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    function handleReturnPage(){
      window.location.reload();
    }

  return (
    <>
      <Button className='BtnModal' variant='dark' onClick={handleShow}>
        Enviar
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>Confirmação</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Seus dados foram enviados com sucesso!
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleReturnPage}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;