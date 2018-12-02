import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import ToolList from './ToolList';
import ButtonList from './ButtonList';
import DeleteConfirmation from './DeleteConfirmation';
import AutoResizingTextArea from '../AutoResizingTextArea';
import { AdminContext } from '../Contexts/AdminContext';

const StatementItemContainer = styled.div`
  ${props => {
    const { theme } = props;
    return css`
      position: relative;
      z-index: ${props.isActive ? theme.zIndex.top : theme.zIndex.default};
    `;
  }};
`;

const StatementItemStyled = styled.div`
  ${props => {
    const { theme } = props;
    return css`
      padding: 10px 0px;
      border-bottom: 1px solid ${theme.colors.gray};
    `;
  }};
`;

const StatementItemDefault = styled.div`
  ${props => {
    const { theme } = props;
    return css`
      ${theme.font(20, 600)};
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin: 0px 8px;
      min-height: 90px;
    `;
  }};
`;

class StatementItem extends Component {
  static contextType = AdminContext;
  state = {
    isRemoveable: false,
    isEditable: false,
    isDefault: true,
    editValue: this.props.value
  };

  render() {
    const {
      value,
      statementId,
      categoryId,
      isActive,
      toolsVisible,
      setActiveStatement,
      setToolsVisible
    } = this.props;
    return (
      <StatementItemContainer isActive={isActive}>
        {this.state.isDefault && (
          <StatementItemStyled>
            <StatementItemDefault
              onClick={() => {
                toolsVisible
                  ? setToolsVisible('')
                  : setToolsVisible(statementId);
              }}>
              {toolsVisible && (
                <ToolList
                  onEditClick={() => {
                    this.setState({
                      isEditable: true,
                      isRemoveable: false,
                      isDefault: false
                    });
                    setToolsVisible('');
                    setActiveStatement(statementId);
                  }}
                  onDeleteClick={() => {
                    this.setState({
                      isRemoveable: true,
                      isEditable: false,
                      isDefault: false
                    });
                    setToolsVisible('');
                    setActiveStatement(statementId);
                  }}
                />
              )}
              {value}
            </StatementItemDefault>
          </StatementItemStyled>
        )}
        {this.state.isEditable && (
          <React.Fragment>
            <AutoResizingTextArea
              defaultHeight={67}
              value={this.state.editValue}
              onChange={e => this.setState({ editValue: e.target.value })}
            />
            <ButtonList
              cancelClick={() => {
                this.setState({ isEditable: false, isDefault: true });
                setActiveStatement('');
              }}
              saveClick={() => {
                this.setState({ isEditable: false, isDefault: true });
                setActiveStatement('');
                this.context.handleEditStatement(categoryId, statementId, {
                  value: this.state.editValue
                });
              }}
            />
          </React.Fragment>
        )}
        {this.state.isRemoveable && (
          <DeleteConfirmation
            text="Are you sure you want to delete this?"
            cancelClick={() => {
              this.setState({ isRemoveable: false, isDefault: true });
              setActiveStatement('');
            }}
            saveClick={() => {
              this.setState({ isRemoveable: false, isDefault: true });
              setActiveStatement('');
              this.context.handleDeleteStatement(categoryId, statementId);
            }}
          />
        )}
      </StatementItemContainer>
    );
  }
}

export default StatementItem;
