import React, { useState, useEffect } from 'react';
import { Button } from './components/ui/button';
import { Card, CardContent } from './components/ui/card';
import { 
  Lightbulb, 
  Users, 
  Zap, 
  Palette, 
  Rocket, 
  Target, 
  Bot, 
  Globe, 
  BarChart3,
  ChevronDown,
  Menu,
  X
} from 'lucide-react';
import './App.css';

// Import images
import logoImage from './assets/logo-dark.png';
import aiOrchestrateImage from './assets/AI_Orchestrate.png';
import audienceImage from './assets/Audience.png';
import cohortsImage from './assets/Cohorts_2.png';

function App() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const heroImages = [aiOrchestrateImage, audienceImage, cohortsImage];

  // Image slider effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % heroImages.length
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div 
              className="flex items-center space-x-2 cursor-pointer"
              onClick={scrollToTop}
            >
              <img src={logoImage} alt="EnGarde" className="h-8 w-auto" />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <button 
                onClick={() => scrollToSection('value-proposition')}
                className="nav-link font-medium text-gray-700 hover:text-purple-600"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('features')}
                className="nav-link font-medium text-gray-700 hover:text-purple-600"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('cta')}
                className="nav-link font-medium text-gray-700 hover:text-purple-600"
              >
                Pricing
              </button>
              <button className="nav-link font-medium text-gray-700 hover:text-purple-600">
                Login
              </button>
            </div>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50">
                Login
              </Button>
              <Button className="purple-pink-gradient text-white hover:opacity-90">
                Get Started
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <div className="flex flex-col space-y-4">
                <button 
                  onClick={() => scrollToSection('value-proposition')}
                  className="text-left font-medium text-gray-700 hover:text-purple-600"
                >
                  About
                </button>
                <button 
                  onClick={() => scrollToSection('features')}
                  className="text-left font-medium text-gray-700 hover:text-purple-600"
                >
                  Features
                </button>
                <button 
                  onClick={() => scrollToSection('cta')}
                  className="text-left font-medium text-gray-700 hover:text-purple-600"
                >
                  Pricing
                </button>
                <button className="text-left font-medium text-gray-700 hover:text-purple-600">
                  Login
                </button>
                <div className="flex flex-col space-y-2 pt-4">
                  <Button variant="outline" className="border-purple-600 text-purple-600">
                    Login
                  </Button>
                  <Button className="purple-pink-gradient text-white">
                    Get Started
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-gradient text-white pt-16">
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-36 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-16 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 animate-fade-in-up">
              AI-Powered Growth for <span className="border-b-4 border-yellow-400">Multicultural</span> Brands
            </h1>
            <p className="text-xl opacity-90 mb-10 max-w-2xl animate-fade-in-up-delay-1">
              Build authentic connections and thriving communities through culturally-fluent marketing at scale.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in-up-delay-2">
              <Button 
                size="lg"
                className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg font-bold"
              >
                Start Free Trial
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 text-lg font-bold"
              >
                Schedule Demo
              </Button>
            </div>
          </div>
          
          <div className="md:w-1/2 relative">
            <div className="relative z-10 bg-white/10 backdrop-blur-lg rounded-2xl p-1 border border-white/20 shadow-2xl">
              <div className="bg-gray-800 rounded-xl aspect-video flex items-center justify-center image-slider">
                {heroImages.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Hero slide ${index + 1}`}
                    className={`rounded-xl ${index === currentImageIndex ? 'active' : ''}`}
                  />
                ))}
              </div>
            </div>
            <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-pink-500/20 blur-3xl"></div>
            <div className="absolute -bottom-6 -left-6 w-64 h-64 rounded-full bg-purple-500/20 blur-3xl"></div>
          </div>
        </div>
      </section>

      {/* Stats Container */}
      <section className="py-16 stat-card">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="stat-item">
              <h3 className="text-4xl md:text-5xl font-bold purple-pink-gradient bg-clip-text text-transparent mb-2">
                85%
              </h3>
              <p className="text-gray-600 font-medium">
                Higher engagement with culturally-relevant content
              </p>
            </div>
            <div className="stat-item">
              <h3 className="text-4xl md:text-5xl font-bold purple-pink-gradient bg-clip-text text-transparent mb-2">
                3x
              </h3>
              <p className="text-gray-600 font-medium">
                Faster campaign creation with AI assistance
              </p>
            </div>
            <div className="stat-item">
              <h3 className="text-4xl md:text-5xl font-bold purple-pink-gradient bg-clip-text text-transparent mb-2">
                50%
              </h3>
              <p className="text-gray-600 font-medium">
                Reduction in creative production costs
              </p>
            </div>
            <div className="stat-item">
              <h3 className="text-4xl md:text-5xl font-bold purple-pink-gradient bg-clip-text text-transparent mb-2">
                10k+
              </h3>
              <p className="text-gray-600 font-medium">
                Cultural contexts in our AI knowledge base
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section id="value-proposition" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Plug In Your Data, <span className="purple-pink-gradient bg-clip-text text-transparent">Crank Up Your Revenue</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              En Garde empowers brands to create culturally-fluent marketing assets and campaigns through AI-powered tools. 
              Increase sales by building high-value customer cohorts & memberships from enterprise to retail consumers and 
              activating look-a-like audiences with a digital buying multicultural ad market.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Accelerate Your Brand's Growth with Agency-Level Results without the Agency Overhead
              </h3>
              <p className="text-gray-600 mb-6">
                Generate culturally-aware creative assets including copy, images, and videos tailored to your brand's unique "vibe". 
                Plan and deploy multi-channel campaigns with a visual drag-and-drop interface for Instagram, TikTok, email, and more.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full purple-pink-gradient flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Palette className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-gray-700">AI-powered creativity with cultural intelligence</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full purple-pink-gradient flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Users className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-gray-700">Audience intelligence and segmentation</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full purple-pink-gradient flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Zap className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-gray-700">Enterprise-grade security and compliance</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src={aiOrchestrateImage} 
                alt="AI Orchestrate" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Everything You Need to Scale
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Powerful AI tools designed specifically for multicultural marketing teams
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI Creative Studio */}
            <Card className="feature-card border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 purple-pink-gradient rounded-2xl flex items-center justify-center mb-6">
                  <Palette className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">AI Creative Studio</h3>
                <p className="text-gray-600 mb-6">
                  Generate culturally-authentic copy, images, and videos with AI agents that understand your brand voice and cultural nuances across all channels.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 purple-pink-gradient rounded-full"></div>
                    <span className="text-sm text-gray-600">Cultural context vector integration</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 purple-pink-gradient rounded-full"></div>
                    <span className="text-sm text-gray-600">Brand voice consistency scoring</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 purple-pink-gradient rounded-full"></div>
                    <span className="text-sm text-gray-600">Multi-language content generation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Campaign Orchestrator */}
            <Card className="feature-card border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 purple-pink-gradient rounded-2xl flex items-center justify-center mb-6">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Campaign Orchestrator</h3>
                <p className="text-gray-600 mb-6">
                  Build complex multi-channel campaigns with visual workflows, automated approvals, and real-time deployment across all your marketing platforms.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 purple-pink-gradient rounded-full"></div>
                    <span className="text-sm text-gray-600">Visual workflow builder</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 purple-pink-gradient rounded-full"></div>
                    <span className="text-sm text-gray-600">Role-based approval workflows</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 purple-pink-gradient rounded-full"></div>
                    <span className="text-sm text-gray-600">Multi-platform deployment</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Audience Intelligence Hub */}
            <Card className="feature-card border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 purple-pink-gradient rounded-2xl flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Audience Intelligence Hub</h3>
                <p className="text-gray-600 mb-6">
                  Create hyper-targeted segments using cultural context vectors and first-party data with real-time synchronization across all platforms.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 purple-pink-gradient rounded-full"></div>
                    <span className="text-sm text-gray-600">Cultural celebration database</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 purple-pink-gradient rounded-full"></div>
                    <span className="text-sm text-gray-600">Vector-enhanced segmentation</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 purple-pink-gradient rounded-full"></div>
                    <span className="text-sm text-gray-600">Real-time platform sync</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Marketing Agent Suite */}
            <Card className="feature-card border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 purple-pink-gradient rounded-2xl flex items-center justify-center mb-6">
                  <Bot className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Marketing Agent Suite</h3>
                <p className="text-gray-600 mb-6">
                  Deploy specialized AI agents that continuously optimize your campaigns, predict audience behavior, and ensure cultural authenticity at scale.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 purple-pink-gradient rounded-full"></div>
                    <span className="text-sm text-gray-600">Containerized AI agents</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 purple-pink-gradient rounded-full"></div>
                    <span className="text-sm text-gray-600">Predictive optimization</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 purple-pink-gradient rounded-full"></div>
                    <span className="text-sm text-gray-600">Cultural authenticity scoring</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Cultural Intelligence */}
            <Card className="feature-card border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 purple-pink-gradient rounded-2xl flex items-center justify-center mb-6">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Cultural Intelligence</h3>
                <p className="text-gray-600 mb-6">
                  Leverage our comprehensive cultural context database to create content that resonates authentically with diverse communities worldwide.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 purple-pink-gradient rounded-full"></div>
                    <span className="text-sm text-gray-600">10k+ cultural contexts</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 purple-pink-gradient rounded-full"></div>
                    <span className="text-sm text-gray-600">Multi-language support</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 purple-pink-gradient rounded-full"></div>
                    <span className="text-sm text-gray-600">Cultural celebration tracking</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Enterprise Analytics */}
            <Card className="feature-card border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 purple-pink-gradient rounded-2xl flex items-center justify-center mb-6">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Enterprise Analytics</h3>
                <p className="text-gray-600 mb-6">
                  Get deep insights into campaign performance, audience behavior, and cultural resonance with enterprise-grade analytics and reporting.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 purple-pink-gradient rounded-full"></div>
                    <span className="text-sm text-gray-600">Real-time performance tracking</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 purple-pink-gradient rounded-full"></div>
                    <span className="text-sm text-gray-600">Cultural resonance scoring</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 purple-pink-gradient rounded-full"></div>
                    <span className="text-sm text-gray-600">Custom dashboard builder</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-20 stat-card">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to <span className="purple-pink-gradient bg-clip-text text-transparent">Unlock Revenue</span>?
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
            Join forward-thinking multicultural brands who are already accelerating their growth with agency-level results 
            without the agency overhead. Start your free trial today.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center">
            <Button 
              size="lg"
              className="purple-pink-gradient text-white hover:opacity-90 px-8 py-4 text-lg font-bold"
            >
              Start Free Trial
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-4 text-lg font-bold"
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div 
                className="flex items-center space-x-2 mb-4 cursor-pointer"
                onClick={scrollToTop}
              >
                <img src={logoImage} alt="EnGarde" className="h-8 w-auto filter invert" />
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                The indispensable enterprise-grade, multi-tenant SaaS growth platform for multicultural brands.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <button 
                    onClick={() => scrollToSection('value-proposition')}
                    className="hover:text-white transition-colors"
                  >
                    About
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('features')}
                    className="hover:text-white transition-colors"
                  >
                    Features
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('cta')}
                    className="hover:text-white transition-colors"
                  >
                    Pricing
                  </button>
                </li>
                <li>
                  <button className="hover:text-white transition-colors">
                    Login
                  </button>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 EnGarde Media. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

