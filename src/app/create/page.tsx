import Link from "next/link";

export default function CreatePage() {
	const defaultThemes = [
		"KKBOX風雲榜",
		"80年代金曲",
		"失戀必聽",
		"KPOP韓流歌曲",
		"偶像劇經典歌曲",
	];

	return (
		<div className="p-4">
			<div className="flex gap-3">
				<button className="border border-blue-500 text-blue-500 px-4 py-2 rounded-md">
					<Link href="/theme">我的主題</Link>
				</button>
				<button className="bg-blue-500 text-white px-4 py-2 rounded-md">
					<Link href="/theme">創建主題</Link>
				</button>
			</div>
			<div className="flex gap-5">
				<div className="w-[200px] my-5 border border-black rounded-md p-2 px-10">
					<p>1.配置</p>
					<p>玩家人數</p>
					<select>
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
					</select>
					<p>得分</p>
					<select>
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
					</select>
					<p>時間限制</p>
					<select>
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
					</select>
				</div>
				<div className="w-full my-5 border border-black rounded-md p-2">
					<div>2.主題</div>
					<div className="flex gap-5">
						<div className="my-5 border border-black rounded-md p-2">
							隨機主題
						</div>
						{defaultThemes.map((theme, index) => (
							<div
								key={index}
								className="my-5 border border-black rounded-md p-2"
							>
								{theme}
							</div>
						))}
					</div>
				</div>
			</div>
			<button className="bg-blue-500 text-white px-4 py-2 rounded-md mr-5">
				<Link href="/room/new666">新房間</Link>
			</button>
		</div>
	);
}
