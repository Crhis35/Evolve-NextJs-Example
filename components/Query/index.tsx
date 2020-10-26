import React from "react";
import { useQuery } from "@apollo/react-hooks";

import Spinner from "../spinner/spinner";

import { Queries } from "interfaces/queries";
import { Props } from "interfaces/queryProps";

const Query: React.FC<any> = (props: Props) => {
  const { children, query, queries } = props;
  const { id, start, limit, sort } = queries;

  const { data, loading, error, fetchMore } = useQuery<any, Queries>(query, {
    variables: { id, start, limit, sort },
  });
  if (loading) return <Spinner />;
  if (error) return <p>Error: {JSON.stringify(error)}</p>;

  return children({ data, fetchMore });
};

export default Query;
