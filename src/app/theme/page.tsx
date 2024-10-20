const theme = {
	title: "已購買，小孩愛吃",
	image: "",
	missions: [
		{
			level: "easy",
			hint: "五月天芭樂歌",
			options: [
				{ song: "天使", answer: false },
				{ song: "倔強", answer: false },
				{ song: "擁抱", answer: true },
				{ song: "溫暖", answer: false },
			],
		},
		{
			level: "hard",
			hint: "五月天芭樂歌",
			options: [
				{ song: "戀愛ING", answer: true },
				{ song: "戀愛ABC", answer: false },
				{ song: "戀愛AAA", answer: false },
				{ song: "戀愛DDD", answer: false },
			],
		},
	],
};

export default function ThemePage() {
	return (
		<div className="p-5">
			<div>
				<p>輸入主題名稱</p>
				<input
					className="mr-2 text-black"
					type="text"
					placeholder="輸入主題名稱"
					value={theme.title}
				/>
				<p>上傳主題封面</p>
				<button
					className="my-5 border border-gray-300 rounded-md px-2 py-1"
					type="button"
				>
					上傳
				</button>
			</div>
			<hr className="my-5" />
			<div>
				<button
					className="my-5 border border-gray-300 rounded-md px-2 py-1"
					type="button"
				>
					新增題目
				</button>
			</div>
			<div className="m-2 p-2 flex gap-3">
				{theme.missions.map((item, index) => (
					<div className="border border-gray-300 rounded-md p-2" key={index}>
						<p>難易度：{item.level}</p>
						<p>提示：{item.hint}</p>
						<div>
							{item.options.map((option, index) => (
								<p key={index}>{option.song}</p>
							))}
						</div>
					</div>
				))}
			</div>
			<div className="border border-gray-300 rounded-md p-2 my-5 w-[500px]">
				<div className="my-5">
					<p>Step1 歌曲</p>
					<input className="mr-2" type="text" placeholder="輸入歌曲關鍵字" />
				</div>
				<div className="my-5">
					<p>Step2 選擇 level</p>
					<div>
						<input type="radio" id="easy" name="drone" value="easy" checked />
						<label htmlFor="easy">easy</label>
					</div>
					<div>
						<input type="radio" id="middle" name="drone" value="middle" />
						<label htmlFor="middle">middle</label>
					</div>
					<div>
						<input type="radio" id="hard" name="drone" value="hard" />
						<label htmlFor="hard">hard</label>
					</div>
				</div>
				<div className="my-5">
					<p>Step3. 輸入提示</p>
					<input className="mr-2" type="text" placeholder="輸入提示" />
				</div>
				<div className="my-5">
					<p>Step4. 輸入選項</p>
					<div className="flex flex-col gap-3">
						<input className="mr-2" type="text" placeholder="輸入答案" />
						<input className="mr-2" type="text" placeholder="輸入答案" />
						<input className="mr-2" type="text" placeholder="輸入答案" />
						<input className="mr-2" type="text" placeholder="輸入答案" />
					</div>
				</div>
				<button
					className="my-5 border border-gray-300 rounded-md p-2"
					type="button"
				>
					送出
				</button>
			</div>
		</div>
	);
}
