import Link from "next/link";

export default function Home() {
	return (
		<div className="p-5">
			<button className="bg-blue-500 text-white px-4 py-2 rounded-md mr-5">
				<Link href="/create">發起遊戲</Link>
			</button>
			<input className="mr-3" type="text" placeholder="輸入遊戲代碼" />
			<button className="border border-blue-500 text-blue-500 px-4 py-2 rounded-md">
				加入遊戲
			</button>
		</div>
	);
}
