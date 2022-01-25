import React from 'react';
import {Modal} from 'antd';
import SuccessfullyWrap, {ModalContent} from './style';
import SuccefullLogo from '../../../static/image/Successful.png';

// eslint-disable-next-line react/prop-types
const CardcreatedSuccessFullyModal = ({isModalVisible, handleOk, handleCancel, content}) => {
  const footer = null;
  return (
    <SuccessfullyWrap>
      <Modal footer={footer} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} width="30%">
        <ModalContent>
          <img src={SuccefullLogo} alt="Succefull Logo" />
          <h3>{content[0]}</h3>
          <h6>{content[1] && content[1]}</h6>
        </ModalContent>
      </Modal>
    </SuccessfullyWrap>
  );
};

export default CardcreatedSuccessFullyModal;
