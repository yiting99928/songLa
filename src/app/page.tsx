import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
	return (
		<div className="p-5 h-[calc(100vh_-_50px)] flex flex-col justify-center">
			<div>
				<p className="font-prompt text-6xl">
					Tune In,
					<br /> Guess Out!
				</p>
				<p className="mt-4 tracking-wide text-xl">
					With SongLa, you can enjoy song-guessing games <br />
					with friends and family anytime, anywhere!
				</p>
			</div>
			<div className="mt-8">
				<Button size="lg" className="mr-8 text-md">
					<Link href="/create">發起遊戲</Link>
				</Button>
				<input
					className="mr-3 border border-gray-800 rounded-md h-full px-2"
					type="text"
					placeholder="game room ID"
				/>
				<Button size="lg" className="text-md">
					加入遊戲
				</Button>
			</div>
		</div>
	);
}
