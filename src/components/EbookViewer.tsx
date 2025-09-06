import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Book, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const mockChapters = [
  { id: 1, title: "Introduction", content: "Welcome to this comprehensive guide on modern web development. In this first chapter, we'll explore the fundamental concepts that form the backbone of today's digital landscape. From the evolution of the internet to the current state-of-the-art frameworks and technologies, this introduction sets the stage for your journey into mastering web development.\n\nThe digital world has transformed dramatically over the past few decades. What started as simple static HTML pages has evolved into complex, interactive applications that power everything from social networks to e-commerce platforms. Understanding this evolution is crucial for any developer looking to make their mark in the industry.\n\nThroughout this book, we'll cover essential topics including responsive design, modern JavaScript frameworks, backend development, database management, and deployment strategies. Each chapter builds upon the previous one, creating a comprehensive learning path that takes you from beginner to advanced practitioner." },
  { id: 2, title: "Getting Started", content: "Before diving into the technical aspects, it's important to set up your development environment properly. A well-configured workspace can significantly impact your productivity and learning experience.\n\nFirst, let's talk about choosing the right tools. Your text editor or IDE is your primary interface with code, so selecting one that suits your workflow is crucial. Popular options include Visual Studio Code, WebStorm, and Sublime Text, each offering unique features and extensibility options.\n\nNext, we'll set up version control with Git. Version control is not just a safety net for your code; it's a fundamental skill that enables collaboration and helps you track changes over time. We'll walk through installing Git, configuring your first repository, and understanding basic commands like commit, push, and pull.\n\nFinally, we'll establish a local development server and explore browser developer tools. These tools will be your companions throughout the development process, helping you debug issues, optimize performance, and understand how your applications behave in real-world scenarios." },
  { id: 3, title: "HTML Fundamentals", content: "HTML (HyperText Markup Language) forms the structural foundation of every web page. While it may seem simple on the surface, mastering HTML involves understanding semantic markup, accessibility principles, and modern best practices.\n\nSemantic HTML goes beyond just making content appear correctly in browsers. It's about choosing elements that accurately describe the meaning and structure of your content. This approach benefits not only screen readers and assistive technologies but also search engines and other automated tools that parse web content.\n\nWe'll explore the full range of HTML elements, from basic text formatting to complex form controls. You'll learn when to use articles versus sections, how to structure navigation menus, and the importance of proper heading hierarchies.\n\nAccessibility considerations are woven throughout our HTML discussion. Writing accessible HTML isn't an afterthought—it's a fundamental responsibility that ensures your content reaches the widest possible audience. We'll cover ARIA attributes, proper form labeling, and techniques for creating keyboard-navigable interfaces." },
  { id: 4, title: "CSS Styling", content: "Cascading Style Sheets (CSS) transform raw HTML into visually appealing and user-friendly interfaces. Modern CSS has evolved far beyond simple styling, offering powerful layout systems, animations, and responsive design capabilities.\n\nWe'll start with CSS fundamentals: selectors, specificity, and the cascade. Understanding how CSS rules are applied and overridden is crucial for writing maintainable stylesheets and debugging layout issues.\n\nFlexbox and CSS Grid represent the modern standard for web layouts. These powerful tools provide intuitive ways to create complex, responsive designs without the hacks and workarounds required in the past. We'll explore both systems in depth, showing you when and how to use each effectively.\n\nResponsive design ensures your applications work seamlessly across devices of all sizes. We'll cover media queries, flexible units, and mobile-first design principles. You'll learn to create interfaces that adapt gracefully from large desktop screens to small mobile devices.\n\nCSS animations and transitions add polish and interactivity to your designs. We'll explore keyframe animations, transform properties, and performance considerations for smooth, engaging user experiences." },
  { id: 5, title: "JavaScript Basics", content: "JavaScript brings interactivity and dynamic behavior to web pages. As the only programming language that runs natively in browsers, JavaScript skills are essential for any web developer.\n\nWe'll begin with core language concepts: variables, data types, functions, and control structures. JavaScript's flexible nature can be both powerful and confusing for newcomers, so we'll focus on building a solid foundation that will serve you well as you tackle more advanced topics.\n\nThe Document Object Model (DOM) represents the bridge between JavaScript and HTML. You'll learn to select elements, modify content, handle events, and create dynamic user interfaces. We'll cover both traditional DOM manipulation techniques and modern approaches that minimize performance overhead.\n\nAsynchronous programming is a crucial JavaScript concept that often challenges new developers. We'll explore callbacks, promises, and async/await syntax, showing you how to handle operations like API calls and file uploads without blocking the user interface.\n\nError handling and debugging techniques round out our JavaScript fundamentals. You'll learn to use browser developer tools effectively, write defensive code, and implement proper error handling strategies that enhance user experience." }
];

export function EbookViewer() {
  const [currentChapter, setCurrentChapter] = useState(mockChapters[0]);

  return (
    <div className="h-full flex flex-col bg-ebook-bg">
      {/* Chapter selector */}
      <div className="p-4 border-b bg-ebook-sidebar">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="w-full justify-between shadow-soft">
              <div className="flex items-center gap-2">
                <Book className="h-4 w-4" />
                <span className="truncate">{currentChapter.title}</span>
              </div>
              <ChevronDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-80 bg-card border shadow-medium">
            {mockChapters.map((chapter) => (
              <DropdownMenuItem
                key={chapter.id}
                onClick={() => setCurrentChapter(chapter)}
                className={`cursor-pointer ${
                  currentChapter.id === chapter.id 
                    ? "bg-primary text-primary-foreground" 
                    : "hover:bg-accent"
                }`}
              >
                Chapter {chapter.id}: {chapter.title}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Reading area */}
      <ScrollArea className="flex-1 p-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-ebook-text">
            Chapter {currentChapter.id}: {currentChapter.title}
          </h1>
          <div className="prose prose-lg max-w-none text-ebook-text leading-relaxed">
            {currentChapter.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-4">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}