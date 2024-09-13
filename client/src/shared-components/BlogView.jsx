import { Eye, MessageCircle, Calendar } from 'lucide-react'

export default function BlogView() {
	return (
		<div className="w-full pb-24">
			<article className="max-w-3xl mx-auto rounded-lg overflow-hidden">
				<div className="relative w-full h-64">
					<img
						className="object-cover w-full h-full"
						src="https://g-qe4tutk06xf.vusercontent.net/placeholder.svg"
						alt="Blog post header"
					/>
				</div>
				<div className="p-6">
					<h1 className="text-4xl font-bold  mb-2">
						The Future of Web Development: Trends to Watch in 2024
					</h1>
					<div className="flex items-center text-sm text-muted-foreground  mb-4">
						<span className="flex items-center mr-4">
							<Eye className="w-4 h-4 mr-1" />
							1.5k views
						</span>
						<span className="flex items-center mr-4">
							<MessageCircle className="w-4 h-4 mr-1" />
							23 comments
						</span>
						<span className="flex items-center">
							<Calendar className="w-4 h-4 mr-1" />
							March 15, 2024
						</span>
					</div>
					<div className="flex flex-col gap-y-6">
						<p className="text-3xl font-bold">Introduction</p>
						<p>
							As we move further into 2024, the landscape of web development
							continues to evolve at a rapid pace. New technologies, frameworks,
							and methodologies are emerging, reshaping how we build and
							interact with the web. In this post, we'll explore some of the
							most exciting trends that are set to define the future of web
							development.
						</p>
						<h2 className="text-3xl font-bold">
							1. The Rise of AI-Assisted Development
						</h2>
						<p>
							Artificial Intelligence is no longer just a buzzword in web
							development. It's becoming an integral part of the development
							process. From AI-powered code completion to automated testing and
							debugging, developers are leveraging AI tools to increase
							productivity and code quality.
						</p>
						<h2 className="text-3xl font-bold">
							2. Web Assembly and the Future of Browser-Based Applications
						</h2>
						<p>
							Web Assembly (Wasm) is gaining traction as a powerful tool for
							running high-performance applications in the browser. It allows
							developers to write code in languages like C++ or Rust and run it
							at near-native speed in web applications, opening up new
							possibilities for complex, browser-based software.
						</p>
						<h2 className="text-3xl font-bold">Conclusion</h2>
						<p>
							The web development landscape is constantly changing, and staying
							ahead of these trends is crucial for developers and businesses
							alike. By embracing these emerging technologies and methodologies,
							we can create more powerful, efficient, and user-friendly web
							experiences.
						</p>
					</div>
				</div>
			</article>
		</div>
	)
}
