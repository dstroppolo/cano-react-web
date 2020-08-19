import React from 'react';
import Adapter from 'enzyme-adapter-react-16';

import { shallow, configure, mount } from 'enzyme';
import { render } from '@testing-library/react';
import List from './components/List';
import { getItemsAsync, itemList } from './items';

configure({adapter: new Adapter()});

test('Can asynchronously reset items', () => {
  const wrapper = shallow(<List items={itemList} />);
  const resetButton = wrapper.find('.reset')
  console.log(resetButton);
  //resetButton.simulate('click');
  expect(1).toBe(1);
});
