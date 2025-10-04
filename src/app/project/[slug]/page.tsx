import { DATA } from "@/data/resume";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Icons } from "@/components/icons";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  // Convert slug to project title (e.g., "listenfree" -> "ListenFree")
  const projectTitle = params.slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  // Find the project in our data
  const project = DATA.projects.find(
    (p) =>
      p.title.toLowerCase().replace(/\s+/g, "-") === params.slug.toLowerCase()
  );

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to Portfolio
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Project Header */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <h1 className="text-4xl font-bold">{project.title}</h1>
              {project.active ? (
                <Badge variant="default" className="bg-green-500">
                  Active
                </Badge>
              ) : (
                <Badge variant="secondary">Upcoming</Badge>
              )}
            </div>
            <p className="text-xl text-muted-foreground mb-6">
              {project.description}
            </p>

            {/* Project Links */}
            <div className="flex gap-4 mb-8">
              {project.links.map((link, index) => (
                <Button key={index} variant="outline" asChild>
                  <Link
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer">
                    {link.type === "Website" ? (
                      <ExternalLink className="h-4 w-4 mr-2" />
                    ) : (
                      <Github className="h-4 w-4 mr-2" />
                    )}
                    {link.type}
                  </Link>
                </Button>
              ))}
            </div>
          </div>

          {/* Project Image */}
          <div className="mb-8">
            <Card>
              <CardContent className="p-0">
                <div className="relative aspect-video">
                  <Image
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Project Details Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Technologies Used */}
            <Card>
              <CardHeader>
                <CardTitle>Technologies Used</CardTitle>
                <CardDescription>
                  Tools and frameworks used in this project
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <Badge key={index} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Project Info */}
            <Card>
              <CardHeader>
                <CardTitle>Project Information</CardTitle>
                <CardDescription>
                  Key details about this project
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-sm text-muted-foreground">
                    Timeline
                  </h4>
                  <p>{project.dates}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-muted-foreground">
                    Status
                  </h4>
                  <p>{project.active ? "Active" : "Upcoming/In Development"}</p>
                </div>
                {project.title === "ListenFree" && (
                  <>
                    <div>
                      <h4 className="font-semibold text-sm text-muted-foreground">
                        Active Users
                      </h4>
                      <p>4,000+</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-muted-foreground">
                        Total Views
                      </h4>
                      <p>100,000+</p>
                    </div>
                  </>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Detailed Description */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>About This Project</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose prose-neutral dark:prose-invert max-w-none">
                {project.title === "ListenFree" && (
                  <div>
                    <p>
                      ListenFree is a seamless music streaming platform offering
                      ad-free listening with over 4,000 active users and
                      100,000+ views. Built with React.js and Tailwind CSS, it
                      provides a smooth and modern streaming experience.
                    </p>
                    <h3>🎯 Key Features:</h3>
                    <ul>
                      <li>
                        <strong>Ad-free music streaming</strong> with
                        high-quality audio
                      </li>
                      <li>
                        <strong>Google OAuth authentication</strong> via
                        Appwrite backend
                      </li>
                      <li>
                        <strong>Playlist creation and management</strong> with
                        favorites system
                      </li>
                      <li>
                        <strong>Recently played</strong> tracking and history
                      </li>
                      <li>
                        <strong>Party Rooms</strong> - collaborative listening
                        with upvoting
                      </li>
                      <li>
                        <strong>Debounced search</strong> for optimized API
                        performance
                      </li>
                      <li>
                        <strong>LocalStorage caching</strong> for offline
                        behavior
                      </li>
                      <li>
                        <strong>Responsive design</strong> across all devices
                      </li>
                    </ul>
                    <h3>🔧 Technical Implementation:</h3>
                    <ul>
                      <li>
                        Integrated <strong>JioSaavn API wrapper</strong>{" "}
                        deployed on Cloudflare Workers
                      </li>
                      <li>
                        Optimized with <strong>lazy loading</strong> and code
                        splitting
                      </li>
                      <li>Session management and data storage via Appwrite</li>
                      <li>Performance optimizations with caching strategies</li>
                    </ul>
                  </div>
                )}

                {project.title === "Velgo" && (
                  <div>
                    <p>
                      Velgo is a comprehensive full-stack web application
                      featuring secure authentication, professional deployment
                      practices, and modern DevOps implementation on AWS
                      infrastructure.
                    </p>
                    <h3>🔐 Key Features:</h3>
                    <ul>
                      <li>
                        <strong>Secure OTP Authentication</strong> with phone
                        number verification
                      </li>
                      <li>
                        <strong>Rate limiting middleware</strong> using
                        express-rate-limiter
                      </li>
                      <li>
                        <strong>Custom domain</strong> configuration
                        (velgo.abdulazeez.xyz)
                      </li>
                      <li>
                        <strong>Nginx reverse proxy</strong> for load balancing
                        and optimization
                      </li>
                      <li>
                        <strong>Professional branding</strong> with responsive
                        design
                      </li>
                    </ul>
                    <h3>☁️ DevOps & Deployment:</h3>
                    <ul>
                      <li>
                        Deployed on <strong>AWS EC2</strong> with scalable
                        infrastructure
                      </li>
                      <li>
                        <strong>Automated CI/CD pipeline</strong> using GitHub
                        Actions
                      </li>
                      <li>
                        <strong>Docker containerization</strong> for consistent
                        environments
                      </li>
                      <li>
                        <strong>Production-ready</strong> server configuration
                        with security best practices
                      </li>
                      <li>
                        Professional domain management and SSL configuration
                      </li>
                    </ul>
                  </div>
                )}

                {project.title === "Graphify" && (
                  <div>
                    <p>
                      Graphify is an innovative Text-to-Animation Platform that
                      converts descriptive text into mathematical visualizations
                      and educational animations using advanced AI and scalable
                      cloud architecture.
                    </p>
                    <h3>🎬 Architecture Overview:</h3>
                    <ul>
                      <li>
                        <strong>React.js Frontend</strong> - User input
                        interface for text descriptions
                      </li>
                      <li>
                        <strong>FastAPI Backend</strong> - High-performance API
                        with Redis queue management
                      </li>
                      <li>
                        <strong>Scalable Workers</strong> - Python workers using
                        Gemini API and Manim
                      </li>
                      <li>
                        <strong>Cloud Storage</strong> - Amazon S3 for rendered
                        video files
                      </li>
                      <li>
                        <strong>Auto-scaling</strong> - Kubernetes with KEDA for
                        dynamic scaling
                      </li>
                    </ul>
                    <h3>🚀 Technical Features:</h3>
                    <ul>
                      <li>
                        LLM-powered Manim code generation via{" "}
                        <strong>Gemini API</strong>
                      </li>
                      <li>
                        <strong>Redis Queue</strong> system for job processing
                      </li>
                      <li>
                        Automated video rendering and <strong>S3 upload</strong>
                      </li>
                      <li>
                        <strong>Pre-signed download links</strong> for secure
                        file access
                      </li>
                      <li>Real-time job status updates and monitoring</li>
                    </ul>
                    <p>
                      <em>
                        Sample: &quot;y = x^2 parabola explanation&quot; →
                        Animated mathematical visualization
                      </em>
                    </p>
                  </div>
                )}

                {project.title === "WebPro" && (
                  <div>
                    <p>
                      WebPro is an intelligent AI-powered website builder that
                      transforms natural language descriptions into functional
                      web applications using advanced AI and real-time
                      rendering.
                    </p>
                    <h3>🤖 AI-Powered Features:</h3>
                    <ul>
                      <li>
                        <strong>Google Gemini API integration</strong> for
                        natural language processing
                      </li>
                      <li>
                        <strong>Prompt-to-website generation</strong> from user
                        descriptions
                      </li>
                      <li>
                        <strong>Real-time code compilation</strong> and preview
                      </li>
                      <li>
                        <strong>Intelligent code generation</strong> with modern
                        web standards
                      </li>
                      <li>
                        <strong>Dynamic website preview</strong> with live
                        rendering
                      </li>
                    </ul>
                    <h3>⚡ Technical Implementation:</h3>
                    <ul>
                      <li>
                        <strong>StackBlitz integration</strong> for in-browser
                        development environment
                      </li>
                      <li>
                        <strong>Real-time rendering</strong> and instant
                        feedback system
                      </li>
                      <li>
                        <strong>Browser-based execution</strong> without server
                        dependencies
                      </li>
                      <li>
                        <strong>Responsive design generation</strong> for all
                        device types
                      </li>
                      <li>
                        Seamless user experience with <strong>React.js</strong>{" "}
                        and modern UI
                      </li>
                    </ul>
                  </div>
                )}

                {project.title === "Financial AI Agent" && (
                  <div>
                    <p>
                      Financial AI Agent is a sophisticated multi-agent system
                      designed for comprehensive financial analysis and
                      decision-making, built with modern technologies and AI
                      frameworks.
                    </p>
                    <h3>🤖 Multi-Agent Architecture:</h3>
                    <ul>
                      <li>
                        <strong>CrewAI framework</strong> for orchestrating
                        multiple AI agents
                      </li>
                      <li>
                        <strong>Specialized financial agents</strong> for
                        different analysis tasks
                      </li>
                      <li>
                        <strong>Agent coordination</strong> for comprehensive
                        financial insights
                      </li>
                      <li>
                        <strong>Type-safe development</strong> with TypeScript
                        implementation
                      </li>
                    </ul>
                    <h3>💼 Financial Capabilities:</h3>
                    <ul>
                      <li>
                        <strong>Multi-agent financial analysis</strong> with
                        specialized roles
                      </li>
                      <li>
                        <strong>Real-time market data processing</strong> and
                        analysis
                      </li>
                      <li>
                        <strong>Automated decision recommendations</strong>{" "}
                        based on AI insights
                      </li>
                      <li>
                        <strong>Risk assessment and management</strong>{" "}
                        algorithms
                      </li>
                      <li>
                        <strong>Portfolio optimization</strong> strategies and
                        recommendations
                      </li>
                    </ul>
                    <h3>🔧 Technical Stack:</h3>
                    <ul>
                      <li>
                        <strong>FastAPI backend</strong> for high-performance
                        data processing
                      </li>
                      <li>
                        <strong>React.js + TypeScript</strong> for robust
                        frontend development
                      </li>
                      <li>
                        <strong>Tailwind CSS</strong> for modern, responsive
                        design
                      </li>
                      <li>
                        <strong>Component-based architecture</strong> for
                        scalable development
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}

// Generate static params for all projects
export async function generateStaticParams() {
  return DATA.projects.map((project) => ({
    slug: project.title.toLowerCase().replace(/\s+/g, "-"),
  }));
}

// Generate metadata for each project
export async function generateMetadata({ params }: ProjectPageProps) {
  const project = DATA.projects.find(
    (p) =>
      p.title.toLowerCase().replace(/\s+/g, "-") === params.slug.toLowerCase()
  );

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} - Abdul Azeez`,
    description: project.description,
  };
}
