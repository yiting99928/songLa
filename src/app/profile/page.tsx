export default function ProfilePage() {
	const personalThemes = [
		"我的主題1",
		"我的主題1",
		"我的主題1",
		"我的主題1",
		"我的主題1",
	];

	const achievement = ["10首歌", "20首歌", "30首歌", "40首歌", "50首歌"];

	return (
		<div className="p-6">
			Profile
			<div className="border border-black rounded-md p-2 my-5">
				<p>個人資訊</p>
				<p>圖片</p>
				<p>姓名:哈哈</p>
				<p>email:哈哈</p>
			</div>
			<div className="flex gap-5 border border-black rounded-md p-2 my-5">
				{personalThemes.map((theme, index) => (
					<div key={index} className="my-5 border border-black rounded-md p-2">
						{theme}
					</div>
				))}
			</div>
			<div className="border border-black rounded-md p-2 my-5">
				<p>成就</p>
				<div className="flex gap-5 p-2 my-5">
					{achievement.map((theme, index) => (
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
	);
}
