import { ADD_ITEM_TO_APP_STATE, ADD_BULK_TO_APP_STATE, REMOVE_ITEM_FROM_APP_STATE, CLEAR_APP_STATE } from '../action-type';
import { produce } from 'immer';
import _ from 'lodash';

export default function AppStateReducer(state={}, action) {
  switch (action.type) {
    case ADD_ITEM_TO_APP_STATE: {
      return produce(state, draftState => {
        draftState.data[action.key] = action.value
      })
    }
    case ADD_BULK_TO_APP_STATE: {
      return {
        data: action.data
      }
    }
    case REMOVE_ITEM_FROM_APP_STATE: {
      return produce(state, draftState => {
        let { key } = action
        if (_.isNil(key)) {
          throw new Error(`Cannot remove, ${key} not found`);
        } else {
          return draftState
        }
      })
    }
    case CLEAR_APP_STATE: {
      return {data: {}};
    }
    default: return state;
  }
}