export default function RoomPage({ params }: { params: { id: string } }) {
	const { id } = params;

	return (
		<div>
			<h1>Welcome to Room: {id}</h1>
		</div>
	);
}
