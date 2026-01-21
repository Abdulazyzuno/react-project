import React from "react";
import { createPortal } from "react-dom";

export default function Modal(props) {
  return createPortal(
    <div className="modal">
        <button className="close-btn" onClick={props.onClose}>X</button>
      <div className="modal-children">
        <dl>
          <dt>Firstname</dt>
          <dd>{props.firstname}</dd>
        </dl>
        <dl>
          <dt>Lastname</dt>
          <dd>{props.lastname}</dd>
        </dl>
        <dl>
          <dt>Cars</dt>
          <dd>{props.cars}</dd>
        </dl>
        <dl>
          <dt>Text</dt>
          <dd>{props.txt}</dd>
        </dl>
      </div>
    </div>,
    document.body
  );
}
