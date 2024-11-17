"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
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
		<header className="flex items-center bg-gray-100 border-b border-black leading-[50px]">
			<div className="mr-auto border-r border-black px-8">
				<Link href="/">SöngLa</Link>
			</div>
			{isAuthenticated ? (
				<>
					<div className="flex gap-2 px-4">
						<Image
							className="rounded-full p-1"
							src={user?.userImg || "/default-user-image.png"}
							alt="user image"
							width={50}
							height={50}
						/>
						<p>{user?.username}</p>
					</div>
					<p
						className="px-4 bg-black text-white cursor-pointer"
						onClick={handleLogout}
					>
						Logout
					</p>
				</>
			) : (
				<p
					className="px-4 bg-black text-white cursor-pointer"
					onClick={() => setIsDialogOpen(true)}
				>
					Login
				</p>
			)}
			<LoginDialog
				isOpen={isDialogOpen}
				onClose={() => setIsDialogOpen(false)}
			/>
		</header>
	);
}
