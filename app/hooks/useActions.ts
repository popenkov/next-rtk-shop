import { bindActionCreators } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import { cartActions } from '../store/cart/cart.slice';

//импортируем в объект все экшны
const allActions = {
  ...cartActions,
};
//хук выдает подсказки по всем экщнам
export const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(allActions, dispatch);
};
