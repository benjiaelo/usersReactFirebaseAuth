import { v4 as uuid } from "uuid";
let initialState = {
	users: [],
};

let usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case "ADD_USER":
			return { ...state, users: action.payload };
		case "DELETE_USER":
			const unDeletedUsers = state.users.filter(
				(user) => user.id !== action.payload
			);
			return { ...state, users: unDeletedUsers };
		case "UPDATE_USER":
			const updatedUser = state.users.map((user) => {
				if (user.id === action.payload.userData.id) {
					return action.payload.userData;
				} else {
					return user;
				}
			});
			return { ...state, users: updatedUser };

		default:
			return state;
	}
};

export default usersReducer;
