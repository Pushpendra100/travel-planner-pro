import React, { Fragment, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import MetaData from "../containers/MetaData";
import { getAllDestins } from "../store/actions/destin";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { loading, destin } = useSelector((state) => state.destin);

  useEffect(() => {
    dispatch(getAllDestins());
  }, []);

  return (
    <Fragment>
      <MetaData title="Travel-Planner | Home" />
      <div className="homePage">
        {!loading && (
          <Fragment>
            {destin &&
              destin.map((dest, i) => (
                <div className="destinCard" key={i}>
                  {console.log(dest)}
                  <h1>{dest.name}</h1>
                </div>
              ))}
          </Fragment>
        )}
      </div>
    </Fragment>
  );
};

export default Home;
