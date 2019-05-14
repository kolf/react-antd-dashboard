import React from "react";
import ReactDOM from "react-dom";
import { Modal, Spin } from "antd";

const IS_REACT_16 = !!ReactDOM.createPortal;

export default function confirm(config) {
  const div = document.createElement("div");
  document.body.appendChild(div);
  let currentConfig = {
    ...config,
    onCancel: close,
    visible: true
  };

  function close(...args) {
    currentConfig = {
      ...currentConfig,
      visible: false,
      afterClose: destroy.bind(this, ...args)
    };
    if (IS_REACT_16) {
      render(currentConfig);
    } else {
      destroy(...args);
    }
  }
  function update(newConfig) {
    currentConfig = {
      ...currentConfig,
      ...newConfig
    };
    render(currentConfig);
  }
  function confirmLoading() {
    update({
      confirmLoading: true
    });
  }
  function destroy(...args) {
    const unmountResult = ReactDOM.unmountComponentAtNode(div);
    if (unmountResult && div.parentNode) {
      div.parentNode.removeChild(div);
    }
    const triggerCancel =
      args && args.length && args.some(arg => arg && arg.triggerCancel);
    if (config.onCancel && triggerCancel) {
      config.onCancel(...args);
    }
  }
  function render(props) {
    ReactDOM.render(<Modal {...props}>{props.content}</Modal>, div);
  }

  render(currentConfig);
  return {
    close,
    update,
    confirmLoading
  };
}
