import { GET_CHATS } from './constants';

export const chatsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_CHATS:
      return action.chats;
    default:
      return state;
  }
};
