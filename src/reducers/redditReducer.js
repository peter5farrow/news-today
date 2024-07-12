import axios from "axios";
import Loading from "../components/shared/Loading/Loading";

const initialState = { loading: false, articles: [] };

const REQUEST_ARTICLES = "REQUEST_ARTICLES";
const PENDING = "PENDING";

export async function requestArticles(dispatch) {
  dispatch({ type: PENDING });

  const articles = await axios.get("/api/reddit").then((res) => res.data);

  dispatch({ type: REQUEST_ARTICLES, payload: articles });
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case PENDING:
      return { ...state, loading: true };

    case REQUEST_ARTICLES:
      return { loading: false, articles: action.payload };

    default:
      return state;
  }
}
