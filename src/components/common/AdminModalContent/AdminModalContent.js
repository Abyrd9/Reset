import React from 'react';
import PropTypes from 'prop-types';
import { AdminModalContentStyles, AdminModalContentIcon } from './AdminModalContentStyles';
import ButtonList from '../ButtonList/ButtonList';

const AdminModalContent = ({ title, onCancel, onSave, isCentered, children }) => {
  return (
    <AdminModalContentStyles isCentered={isCentered}>
      <h3>{title}</h3>
      {children}
      <ButtonList
        cancelText={<AdminModalContentIcon icon="times" />}
        saveText={<AdminModalContentIcon icon="check" />}
        onCancel={onCancel}
        onSave={onSave}
      />
    </AdminModalContentStyles>
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
