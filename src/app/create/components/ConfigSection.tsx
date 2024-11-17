"use client";

interface Config {
	member: number;
	profit: number;
	time: number;
}

interface ConfigSectionProps {
	config: Config;
	setConfig: React.Dispatch<React.SetStateAction<Config>>;
}

export default function ConfigSection({
	config,
	setConfig,
}: ConfigSectionProps) {
	const member = Array.from({ length: 5 }, (_, i) => i + 1);
	const profit = Array.from({ length: 5 }, (_, i) => i + 1);
	const time = Array.from({ length: 5 }, (_, i) => i + 1);

	return (
		<div className="w-[200px] my-5 border border-black rounded-md p-2 px-5">
			<p className="mb-5">1.配置</p>
			<p>玩家人數</p>
			<select
				className="border border-black"
				onChange={(e) =>
					setConfig({ ...config, member: Number(e.target.value) })
				}
			>
				{member.map((option) => (
					<option key={option} value={option}>
						{option}
					</option>
				))}
			</select>
			<p>得分</p>
			<select
				className="border border-black"
				onChange={(e) =>
					setConfig({ ...config, profit: Number(e.target.value) })
				}
			>
				{profit.map((option) => (
					<option key={option} value={option}>
						{option}
					</option>
				))}
			</select>
			<p>時間限制(s)</p>
			<select
				className="border border-black"
				onChange={(e) =>
					setConfig({ ...config, profit: Number(e.target.value) })
				}
			>
				{time.map((option) => (
					<option key={option} value={option}>
						{option}
					</option>
				))}
			</select>
		</div>
	);
}
