import React, { useEffect, Fragment } from "react";
import { useAlert } from "react-alert";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import MetaData from "../containers/MetaData";
import { clearErrors, getDestin } from "../store/actions/destin";

const DestinationPage = () => {
  const params = useParams();
  const alert = useAlert();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isAuthenticated, user: userr } = useSelector((state) => state.user);
  const { loading, destin, error } = useSelector((state) => state.destin);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate(`/`);
    }
  }, [userr]);

  useEffect(() => {
    dispatch(getDestin(params.destin));
  }, []);

  useEffect(() => {
    if (destin === null) {
      navigate("/");
    }
  }, [destin]);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
  }, [error]);

  return (
    <Fragment>
      <MetaData title={params.destin} />
      <div className="profilePage">
        {!loading && destin && (
          <Fragment>
            <h3>This is destin page of {destin.name}</h3>
          </Fragment>
        )}
      </div>
    </Fragment>
  );
};

export default DestinationPage;
