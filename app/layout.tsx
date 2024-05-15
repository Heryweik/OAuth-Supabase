import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "OAuth Supabase",
	description: "Autenticacion con OAuth y Supabase",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<div className="flex flex-col">
					<Link href="/auth-server-action">Auth Server Action</Link>
					<Link href="/">home</Link>
					<Link href="/todo">Learn CRUD</Link>
				</div>
				{children} <Toaster />
			</body>
		</html>
	);
}
