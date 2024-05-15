"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { useTransition } from "react";
import { cn } from "@/lib/utils";

const FormSchema = z.object({
	title: z.string().min(1, {
		message: "Title is required",
	}),
});

export default function CreateForm() {
	const [isPending, startTransition] = useTransition();

	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			title: "",
		},
	});

	function onSubmit(data: z.infer<typeof FormSchema>) {
		toast({
			title: "You are successfully create todo.",
			description: (
				<pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
					<code className="text-white">{data.title} is created</code>
				</pre>
			),
		});
		// Reset form
		form.reset();
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="w-full space-y-6"
			>
				<FormField
					control={form.control}
					name="title"
					render={({ field }) => (
						<FormItem>
							<FormLabel className="text-black">Title</FormLabel>
							<FormControl>
								<Input
									placeholder="todo title"
									{...field}
									onChange={field.onChange}
								/>
							</FormControl>
							{/* Muestra un mensaje de error si el campo no cumple con las validaciones. */}
							<div className="p-2 bg-red-300 rounded-md border border-rose-500 text-red-900 text-center">
							<FormMessage />
								
							</div>
						</FormItem>
					)}
				/>

				<Button type="submit" className="w-full flex gap-2">
					Create
					<AiOutlineLoading3Quarters className={cn("animate-spin")} />
				</Button>
			</form>
		</Form>
	);
}
