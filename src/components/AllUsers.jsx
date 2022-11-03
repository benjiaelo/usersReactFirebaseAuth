import { Container, Row } from "react-bootstrap";
import User from "./User";
import { connect, useSelector } from "react-redux";

function AllUsers(props) {
	const  users  = useSelector((state) => {
		return state.UsersReducer.users
	});
	return (
		<>
			<Container>
				<Row>
					{users.map((item, index) => {
						return (
							<User
								key={item.id}
								userInfo={item}
								deleteUser={props.deleteUser}
								editUser={props.editUser}
							/>
						);
					})}
				</Row>
			</Container>
		</>
	);
}
// const mapState = (state) => {
// 	return {
// 		users: state.users,
// 	};
// };
// export default connect(mapState)(AllUsers);
export default AllUsers;
