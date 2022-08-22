import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { IGetSearchResult, searchAnything } from "../api";

const Hi = styled.div`
  width: 100px;
  height: 100px;
`;

function Search() {
  const location = useLocation();
  const keyword = new URLSearchParams(location.search).get("keyword");
  console.log(keyword);

  return <Hi>{keyword}</Hi>;
}

export default Search;
