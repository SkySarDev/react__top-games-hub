import { useDispatch } from "react-redux";

import { fetchMoreData } from "store/reducers/mainContentReducer/actions";
import { ROUTE_MORE_DATA } from "utils/constants";

export default function useFetchMoreData(query, category) {
  const dispatch = useDispatch();

  return () => {
    if (query) {
      dispatch(fetchMoreData(`${ROUTE_MORE_DATA}${category}?${query}`));
    }
  };
}
