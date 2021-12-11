import * as types from "./types";

const initialState = {
  data: {},
  firstLoading: false,
  loading: false,
  error: false,
};

const mainContentReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOAD_CONTENT_START:
      return { ...state, firstLoading: true };

    case types.LOAD_MORE_DATA_START:
      return { ...state, loading: true };

    case types.LOAD_CONTENT_SUCCESS: {
      const { data } = action.payload;

      return {
        ...state,
        firstLoading: false,
        error: false,
        data,
      };
    }

    case types.LOAD_MORE_DATA_SUCCESS: {
      const { content_array, nextPageQuery } = action.payload;
      const currentData = state.data;

      return {
        ...state,
        loading: false,
        error: false,
        data: {
          ...currentData,
          content_array: [...currentData.content_array, ...content_array],
          nextPageQuery,
        },
      };
    }

    case types.LOAD_CONTENT_ERROR:
      return {
        ...state,
        firstLoading: false,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default mainContentReducer;
