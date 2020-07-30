import {connect} from 'react-redux';

import * as actions from '../redux/actions';

import Form from './Form';

const mapStateToProps = ({addItemSuccess}) => {
 
  return {
    addItemSuccess,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    enterItemData: (data) => {
      dispatch(actions.enterItemData(data));
    },
  };
};

const FormContainer = connect(mapStateToProps, mapDispatchToProps)(Form);

export {FormContainer as default};
