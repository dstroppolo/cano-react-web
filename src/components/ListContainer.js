import {connect} from 'react-redux';

import * as actions from '../redux/actions';

import List from './List';

const mapStateToProps = ({items, data}) => {
  return {
    items,
    data
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getItems: () => {
      console.log('getting');
      dispatch(actions.getItems());
    },
    addItem: item => {
      dispatch(actions.addItem(item));
    },
    removeItem: (uuid) => {
      dispatch(actions.removeItem(uuid));
    },
  };
};

const ListContainer = connect(mapStateToProps, mapDispatchToProps)(List);

export {ListContainer as default};
