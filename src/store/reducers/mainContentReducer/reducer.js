import * as types from "./types";

const initialState = {
  data: {},
  bgImage: null,
  loading: false,
  error: false,
};

const mainContentReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOAD_CONTENT_START:
      return { ...state, loading: true };

    case types.LOAD_CONTENT_SUCCESS: {
      const { data, bgImage } = action.payload;

      return {
        ...state,
        loading: false,
        error: false,
        data,
        bgImage,
      };
    }

    case types.LOAD_CONTENT_ERROR:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

export default mainContentReducer;
