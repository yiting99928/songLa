"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ConfigSection from "@/app/create/components/ConfigSection";
import GameThemeSection from "@/app/create/components/GameThemeSection";
import { useState } from "react";
interface Config {
	member: number;
	profit: number;
	time: number;
}

export default function CreatePage() {
	const [config, setConfig] = useState<Config>({
		member: 1,
		profit: 1,
		time: 1,
	});
	const [selectedTheme, setSelectedTheme] = useState<string>("");

	const handleCreateRoom = () => {
		console.log("config", config);
		console.log("selectedTheme", selectedTheme);
	};

	return (
		<div className="p-4">
			<div className="flex gap-3">
				<Button className="ml-auto">
					<Link href="/theme">我的主題</Link>
				</Button>
				<Button>
					<Link href="/theme">創建主題</Link>
				</Button>
			</div>
			<div className="flex gap-5">
				<ConfigSection config={config} setConfig={setConfig} />
				<GameThemeSection
					selectedTheme={selectedTheme}
					setSelectedTheme={setSelectedTheme}
				/>
			</div>
			<Button className="block mx-auto">
				<div onClick={handleCreateRoom}>新房間</div>
			</Button>
		</div>
	);
}
