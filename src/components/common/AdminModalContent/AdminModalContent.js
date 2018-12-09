import React from 'react';
import PropTypes from 'prop-types';
import { AdminModalContentStyled, AdminModalContentIcon } from './AdminModalContentStyled';
import ButtonList from '../ButtonList/ButtonList';

const AdminModalContent = ({ title, onCancel, onSave, isCentered, children }) => {
  return (
    <AdminModalContentStyled isCentered={isCentered}>
      <h3>{title}</h3>
      {children}
      <ButtonList
        cancelText={<AdminModalContentIcon icon="times" />}
        saveText={<AdminModalContentIcon icon="check" />}
        onCancel={onCancel}
        onSave={onSave}
      />
    </AdminModalContentStyled>
  );
};

AdminModalContent.propTypes = {
  title: PropTypes.string,
  onCancel: PropTypes.func,
  onSave: PropTypes.func,
  isCentered: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};

export default AdminModalContent;
