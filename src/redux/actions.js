import axios from 'axios';
import { GET_CHATS } from './constants';

const getChats = chats => ({
  type: GET_CHATS,
  chats
});

export const getChatsThunk = () => {
  return dispatch => {
    axios.get('/api/chats').then(({ data }) => dispatch(getChats(data)));
  };
};
