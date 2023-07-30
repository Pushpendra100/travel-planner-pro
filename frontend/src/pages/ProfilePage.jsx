import React, { Fragment, useEffect } from "react";
import { useAlert } from "react-alert";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import MetaData from "../containers/MetaData";
import { clearErrors, getProfileUser } from "../store/actions/user";

const ProfilePage = () => {
  const params = useParams();
  const alert = useAlert();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isAuthenticated, user: userr } = useSelector((state) => state.user);
  const {
    loading,
    user: profileUser,
    error,
  } = useSelector((state) => state.profileUser);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate(`/`);
    }
  }, [userr]);

  useEffect(() => {
    dispatch(getProfileUser(params.username));
  }, []);

  useEffect(() => {
    if (profileUser === null) {
      navigate("/");
    }
  }, [profileUser]);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
  }, [error]);

  return (
    <Fragment>
      <MetaData title={params.username} />
      <div className="profilePage">
        {!loading && profileUser && (
          <Fragment>
            <h3>Profile page</h3>
            This is the profile page of {profileUser.name}
          </Fragment>
        )}
      </div>
    </Fragment>
  );
};

export default ProfilePage;
