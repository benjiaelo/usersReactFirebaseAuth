import React from "react";
import { useSelector, connect } from "react-redux";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ users, children }) {
	// const authUsers = useSelector((state) => {
	// 	return state.authReducer.authUsers;
	// });

	if (!users) return <Navigate to="/signin" replace={true} />;

	return children;
}

const mapStateToProps = (state) => {
	return {
		users: state.authReducer.authUsers,
	};
};
export default connect(mapStateToProps)(ProtectedRoute);
