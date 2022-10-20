
import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 180px;
	background-color: #282c34;
	color: white;
`;

export default function Footer() {
	return (
		<Container>
			<p>Footer</p>
		</Container>
	);
}