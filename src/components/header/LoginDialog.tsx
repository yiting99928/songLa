"use client";
import { useAuthStore } from "@/store/useAuthStore";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface LoginDialogProps {
	isOpen: boolean;
	onClose: () => void;
}

interface LoginForm {
	email: string;
	password: string;
}

export default function LoginDialog({ isOpen, onClose }: LoginDialogProps) {
	const { login } = useAuthStore();
	const { toast } = useToast();
	const [loginForm, setLoginForm] = useState<LoginForm>({
		email: "",
		password: "",
	});

	const handleLogin = async () => {
		try {
			console.log("handleLogin");
			await login(loginForm.email, loginForm.password);
			toast({
				title: "登入成功",
				description: "您已成功登入。",
			});
			onClose();
		} catch (error) {
			console.log(error);
			toast({
				title: "登入失敗",
				description: "請檢查您的帳號和密碼。",
			});
		}
	};
	return (
		<Dialog open={isOpen} onOpenChange={onClose}>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>登入</DialogTitle>
					<DialogDescription>你有種就登入看看</DialogDescription>
				</DialogHeader>
				<div className="grid gap-4 py-4">
					<div className="grid grid-cols-4 items-center gap-4">
						<p>email</p>
						<Input
							id="email"
							placeholder="Email"
							className="col-span-3"
							value={loginForm.email}
							onChange={(e) =>
								setLoginForm((prev) => ({ ...prev, email: e.target.value }))
							}
						/>
					</div>
					<div className="grid grid-cols-4 items-center gap-4">
						<p>password</p>
						<Input
							id="password"
							placeholder="Password"
							className="col-span-3"
							value={loginForm.password}
							onChange={(e) =>
								setLoginForm((prev) => ({ ...prev, password: e.target.value }))
							}
						/>
					</div>
				</div>
				<DialogFooter>
					<Button type="submit" onClick={handleLogin}>
						Login
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
