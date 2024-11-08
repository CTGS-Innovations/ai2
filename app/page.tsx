import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-gradient-to-b from-slate-950 to-slate-900">
      {/* Hero Section */}
      <section className="w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <div className="relative mb-8">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 opacity-75 blur-3xl"></div>
            <h1 className="relative text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
              FOCUS AI
            </h1>
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-xl text-slate-300">
            BRANCH personal AI companion that helps you stay focused and achieve more. 
            Transform your productivity with intelligent, personalized focus enhancement.
          </p>
          <div className="mt-10 flex gap-4">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700"
            >
              Get Started
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-slate-700 text-white hover:bg-slate-800"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group rounded-2xl bg-slate-800/50 p-6 backdrop-blur-sm transition-all hover:bg-slate-800"
            >
              <div className="mb-4 text-2xl text-purple-400">{feature.icon}</div>
              <h3 className="mb-2 text-xl font-semibold text-white">{feature.title}</h3>
              <p className="text-slate-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-slate-900/50 py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
            Ready to Transform Your Focus?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-300">
            Join thousands of users who have already enhanced their productivity with FOCUS AI.
          </p>
          <Button 
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700"
          >
            Start Free Trial
          </Button>
        </div>
      </section>
    </main>
  );
}

const features = [
  {
    icon: "🧠",
    title: "AI-Powered Focus",
    description: "Advanced algorithms adapt to your work patterns and optimize your focus periods."
  },
  {
    icon: "📊",
    title: "Smart Analytics",
    description: "Track your productivity trends and receive personalized insights for improvement."
  },
  {
    icon: "🎯",
    title: "Personalized Goals",
    description: "Set and achieve your focus goals with AI-driven recommendations."
  },
  {
    icon: "⚡",
    title: "Real-time Adaptation",
    description: "Dynamic adjustments to your focus sessions based on performance and energy levels."
  },
  {
    icon: "🔄",
    title: "Continuous Learning",
    description: "Our AI evolves with you, creating an ever-improving focus enhancement system."
  },
  {
    icon: "🎮",
    title: "Intuitive Interface",
    description: "Seamless interaction with your AI focus companion through a modern interface."
  }
];
