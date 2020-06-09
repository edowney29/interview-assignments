import React, { useEffect } from "react";
import { useSelector, connect } from "react-redux";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { updateRoute } from "../../stores/App/Actions";
import "./Profile.css";

function Profile(props) {
  const user = useSelector((state) => state.user);
  const history = useHistory();

  useEffect(() => {
    if (user.firstName === "" && user.lastName === "") {
      props.updateRoute("/");
      history.push("/");
    }
  });

  return (
    <div class="card">
      <img src="https://picsum.photos/200/300" style={{ width: "100%" }} />
      <h1>{`${user.firstName} ${user.lastName}`}</h1>
      <p class="title">{`${user.npiNumber}`}</p>
      <a href="#">
        <i class="fa fa-dribbble"></i>
      </a>
      <a href="#">
        <i class="fa fa-twitter"></i>
      </a>
      <a href="#">
        <i class="fa fa-linkedin"></i>
      </a>
      <a href="#">
        <i class="fa fa-facebook"></i>
      </a>
      <p>
        <button>Contact</button>
      </p>
    </div>
  );
}

Profile.propTypes = {
  updateRoute: PropTypes.func,
};

const mapStateToProps = (state, ownProps) => ({});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateRoute: (currentRoute) => dispatch(updateRoute(currentRoute)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);