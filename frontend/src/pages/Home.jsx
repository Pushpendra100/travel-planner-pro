import React, { Fragment, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import MetaData from "../containers/MetaData";
import { getAllDestins } from "../store/actions/destin";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isAuthenticated, user } = useSelector((state) => state.user);
  const { loading, destin } = useSelector((state) => state.destin);

  useEffect(() => {
    dispatch(getAllDestins());
  }, []);

  return (
    <Fragment>
      <MetaData title="Travel-Planner | Home" />
      {!loading ? (
        <Fragment>
          <h1>Home</h1>
          {isAuthenticated ? (
            <div className="homePage">
              {!loading && (
                <Fragment>
                  {destin &&
                    destin.map((dest, i) => (
                      <div className="destinCard" key={i}>
                        <h1>{dest.name}</h1>
                      </div>
                    ))}
                </Fragment>
              )}
            </div>
          ) : (
            <p>you are not authenticated bro</p>
          )}
        </Fragment>
      ) : null}
    </Fragment>
  );
};

export default Home;
