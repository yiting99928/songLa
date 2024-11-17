"use client";
import { useState } from "react";

const defaultThemes = [
	"KKBOX風雲榜",
	"80年代金曲",
	"失戀必聽",
	"KPOP韓流歌曲",
	"偶像劇經典歌曲",
];

const ThemeOption = ({
	theme,
	selectedTheme,
	onClick,
}: {
	theme: string;
	selectedTheme: string;
	onClick: () => void;
}) => (
	<div
		className={`my-5 border ${
			theme === selectedTheme ? "border-rose-500" : "border-black"
		} rounded-md p-2`}
		onClick={onClick}
	>
		{theme}
	</div>
);

interface GameThemeSectionProps {
	selectedTheme: string;
	setSelectedTheme: (theme: string) => void;
}

export default function GameThemeSection({
	selectedTheme,
	setSelectedTheme,
}: GameThemeSectionProps) {
	const [openRandomForm, setOpenRandomForm] = useState(false);

	const handleRandom = () => {
		console.log(openRandomForm);
		setOpenRandomForm(true);
		setSelectedTheme("隨機主題");
	};

	return (
		<div className="w-full my-5 border border-black rounded-md p-2">
			<div>2.主題</div>
			<div className="flex gap-5">
				<ThemeOption
					theme="隨機主題"
					selectedTheme={selectedTheme}
					onClick={handleRandom}
				/>
				{defaultThemes.map((theme, index) => (
					<ThemeOption
						key={index}
						theme={theme}
						selectedTheme={selectedTheme}
						onClick={() => setSelectedTheme(theme)}
					/>
				))}
			</div>
		</div>
	);
}
