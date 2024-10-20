"use client";
import { useState } from "react";
import Link from "next/link";
import LoginDialog from "./LoginDialog";
import { useAuthStore } from "@/store/useAuthStore";
import { useToast } from "@/hooks/use-toast";

export default function Header() {
	const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
	const { isAuthenticated, user, logout } = useAuthStore();
	const { toast } = useToast();

	const handleLogout = () => {
		logout();
		toast({
			title: "登出成功",
			description: "您已成功登出。",
		});
	};

	return (
		<header className="flex bg-gray-800 p-2 text-white">
			<div className="mr-auto">
				<Link href="/">Logo</Link>
			</div>
			{isAuthenticated ? (
				<>
					<p className="mr-4">{user?.username}</p>
					<p onClick={handleLogout}>登出</p>
				</>
			) : (
				<p onClick={() => setIsDialogOpen(true)}>登入</p>
			)}
			<LoginDialog
				isOpen={isDialogOpen}
				onClose={() => setIsDialogOpen(false)}
			/>
		</header>
	);
}
