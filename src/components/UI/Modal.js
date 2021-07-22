import "./Modal.scss";
import ReactDom from "react-dom";
const BackDrop = (props) => {
  return <div className="backdrop" onClick={props.onClick}/>;
};

const Overlay = (props) => {
  return (
    <div className="modal">
      <div className="content">{props.children}</div>
    </div>
  );
};
const portalElement = document.getElementById("overlays");
const Modal = (props) => {
  return (
    <>
      {ReactDom.createPortal(<BackDrop onClick={props.onClick} />,portalElement)}
      {ReactDom.createPortal(<Overlay>{props.children}</Overlay>,portalElement)}
    </>
  );
};

export default Modal;
