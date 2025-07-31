import React from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Label } from '@/components/ui/label.jsx'
import { 
  Shield, 
  Users, 
  FileText, 
  Brain, 
  Lock, 
  Fingerprint,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Menu,
  X,
  Mail,
  Phone,
  MapPin,
  Send
} from 'lucide-react'
import './App.css'

// Import assets
import heroImage from './assets/hero_image.png'
import solutionsIllustration from './assets/solutions_illustration.png'
import aiTechnology from './assets/ai_technology.png'
import blockchainSecurity from './assets/blockchain_security.png'
import partnershipVisual from './assets/partnership_visual.png'
import healthflowLogo from './assets/healthflow_logo.png'

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const [showContactForm, setShowContactForm] = React.useState(false)
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })
  const [formStatus, setFormStatus] = React.useState('')

  const solutions = [
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "Healthcare Insurance Claims Exchange Platform (HFCX)",
      description: "Secure, real-time claims processing that reduces costs and increases efficiency",
      benefits: [
        "50% reduction in processing time",
        "Increased cashless claims acceptance", 
        "Real-time eligibility verification"
      ]
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Healthcare Professionals Registry (HPR)",
      description: "Centralized, verified database of healthcare practitioners with digital certificates",
      benefits: [
        "Enhanced professional credibility",
        "Streamlined verification processes",
        "Digital signature capabilities"
      ]
    },
    {
      icon: <FileText className="w-8 h-8 text-blue-600" />,
      title: "Digital Prescription Platform",
      description: "Secure e-prescription system integrated with national digital infrastructure",
      benefits: [
        "Reduced medication errors",
        "Combats counterfeit drugs",
        "Streamlined pharmacy operations"
      ]
    }
  ]

  const technologies = [
    {
      icon: <Brain className="w-12 h-12 text-yellow-600" />,
      title: "AI & Automation",
      description: "Machine learning for claims processing, fraud detection, and predictive analytics",
      image: aiTechnology
    },
    {
      icon: <Lock className="w-12 h-12 text-yellow-600" />,
      title: "Blockchain Security", 
      description: "Immutable transaction records and real-time reconciliation",
      image: blockchainSecurity
    },
    {
      icon: <Fingerprint className="w-12 h-12 text-yellow-600" />,
      title: "Digital Identity",
      description: "Secure digital signatures and biometric verification",
      image: partnershipVisual
    }
  ]

  const stats = [
    { number: "105M", label: "Egyptian population served" },
    { number: "52.5M", label: "Insured individuals benefiting" },
    { number: "575K", label: "Daily prescriptions processed" },
    { number: "287K", label: "Daily health claims handled" },
    { number: "700K+", label: "Healthcare professionals registered" }
  ]

  const stakeholders = [
    {
      title: "For Insurance Companies",
      benefits: [
        "Reduced operational costs",
        "Enhanced fraud detection", 
        "Faster claims processing",
        "Improved risk assessment"
      ]
    },
    {
      title: "For Regulators",
      benefits: [
        "Enhanced oversight capabilities",
        "Real-time compliance monitoring",
        "Fraud prevention tools",
        "Data-driven insights"
      ]
    },
    {
      title: "For Healthcare Providers", 
      benefits: [
        "Streamlined operations",
        "Faster reimbursements",
        "Digital credentialing",
        "Reduced administrative burden"
      ]
    },
    {
      title: "For Patients",
      benefits: [
        "Improved access to care",
        "Enhanced safety",
        "Faster service delivery", 
        "Better health outcomes"
      ]
    }
  ]

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setFormStatus('sending')
    
    // Create mailto link with form data
    const subject = `Contact Form Submission from ${formData.name}`
    const body = `Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company}

Message:
${formData.message}`
    
    const mailtoLink = `mailto:info@healthflow.tech?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    
    // Open email client
    window.location.href = mailtoLink
    
    setFormStatus('sent')
    setFormData({ name: '', email: '', company: '', message: '' })
    
    setTimeout(() => {
      setFormStatus('')
      setShowContactForm(false)
    }, 2000)
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-28">
            <div className="flex items-center">
              <img src={healthflowLogo} alt="Healthflow" className="h-24 w-auto" />
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('solutions')} className="text-gray-700 hover:text-blue-600 transition-colors">Solutions</button>
              <button onClick={() => scrollToSection('technology')} className="text-gray-700 hover:text-blue-600 transition-colors">Technology</button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-600 transition-colors">About</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-600 transition-colors">Contact</button>
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <Badge variant="outline" className="text-blue-600 border-blue-600">PCI Certified</Badge>
              <Button 
                onClick={() => setShowContactForm(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                Contact Us
              </Button>
            </div>

            {/* Mobile menu button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <nav className="flex flex-col space-y-4">
                <button onClick={() => scrollToSection('solutions')} className="text-gray-700 hover:text-blue-600 text-left">Solutions</button>
                <button onClick={() => scrollToSection('technology')} className="text-gray-700 hover:text-blue-600 text-left">Technology</button>
                <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-600 text-left">About</button>
                <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-600 text-left">Contact</button>
                <Button 
                  onClick={() => setShowContactForm(true)}
                  className="bg-blue-600 hover:bg-blue-700 text-white w-full"
                >
                  Contact Us
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Contact Form Modal */}
      {showContactForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">Contact Healthflow</h3>
              <button onClick={() => setShowContactForm(false)}>
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">Name *</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="company">Company</Label>
                <Input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="mt-1"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-blue-600 hover:bg-blue-700"
                disabled={formStatus === 'sending'}
              >
                {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
                <Send className="ml-2 w-4 h-4" />
              </Button>
              
              {formStatus === 'sent' && (
                <p className="text-green-600 text-center">Message sent successfully!</p>
              )}
            </form>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Transforming Healthcare Through 
                  <span className="text-yellow-400"> Regulatory Technology</span>
                </h1>
                <p className="text-xl lg:text-2xl text-blue-100">
                  Secure, efficient, and compliant digital infrastructure for Egypt's healthcare and insurance ecosystem
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold text-yellow-400">50%</div>
                  <div className="text-sm">Cost Reduction</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold text-yellow-400">100%</div>
                  <div className="text-sm">Fraud Prevention</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold text-yellow-400">24/7</div>
                  <div className="text-sm">Regulatory Oversight</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  onClick={() => scrollToSection('solutions')}
                  className="bg-yellow-600 hover:bg-yellow-700 text-black font-semibold"
                >
                  Explore Our Platform
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  onClick={() => setShowContactForm(true)}
                  className="border-white text-white hover:bg-white hover:text-blue-900"
                >
                  Contact Us
                </Button>
              </div>
            </div>

            <div className="relative">
              <img 
                src={heroImage} 
                alt="Healthcare Technology Professional" 
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Partnerships Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Trusted by Leading Organizations</h2>
            <p className="text-xl text-gray-600">Strategic partnerships driving Egypt's healthcare digital transformation</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            <div className="bg-white p-6 rounded-lg shadow-sm border text-center">
              <div className="text-blue-600 font-semibold">Fixed Egypt</div>
              <div className="text-sm text-gray-600">Digital Signature Partner</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border text-center">
              <div className="text-blue-600 font-semibold">Medical Syndicate</div>
              <div className="text-sm text-gray-600">HPR Implementation</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border text-center">
              <div className="text-blue-600 font-semibold">Financial Regulatory Authority</div>
              <div className="text-sm text-gray-600">Regulatory Sandbox</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border text-center">
              <div className="text-blue-600 font-semibold">BimaLab Africa</div>
              <div className="text-sm text-gray-600">InsurTech Accelerator</div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Comprehensive RegTech Solutions for Healthcare</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our integrated platform addresses critical pain points in the healthcare and insurance claims ecosystem
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img 
                src={solutionsIllustration} 
                alt="Healthflow Solutions" 
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-8">
              {solutions.map((solution, index) => (
                <Card key={index} className="border-l-4 border-l-blue-600">
                  <CardHeader>
                    <div className="flex items-start space-x-4">
                      {solution.icon}
                      <div>
                        <CardTitle className="text-lg">{solution.title}</CardTitle>
                        <CardDescription className="text-base">{solution.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {solution.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span className="text-sm text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Powered by Advanced Technology</h2>
            <p className="text-xl text-gray-600">
              Cutting-edge AI, blockchain, and digital identity solutions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4">
                    {tech.icon}
                  </div>
                  <CardTitle className="text-xl">{tech.title}</CardTitle>
                  <CardDescription>{tech.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <img 
                    src={tech.image} 
                    alt={tech.title}
                    className="rounded-lg shadow-md w-full h-48 object-cover"
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Healthflow</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leading Egypt's healthcare digital transformation through innovative regulatory technology solutions
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              <p className="text-lg text-gray-700">
                Healthflow is dedicated to transforming Egypt's healthcare ecosystem through cutting-edge regulatory technology. 
                We bridge the gap between healthcare providers, insurance companies, and regulatory bodies by providing secure, 
                efficient, and compliant digital infrastructure.
              </p>
              
              <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              <p className="text-lg text-gray-700">
                To become the leading RegTech platform in the Middle East and Africa, enabling seamless healthcare operations 
                while ensuring the highest standards of security, compliance, and patient care.
              </p>

              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">2024</div>
                  <div className="text-sm text-gray-600">Founded</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">50+</div>
                  <div className="text-sm text-gray-600">Team Members</div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <img 
                src={partnershipVisual} 
                alt="Healthflow Team" 
                className="rounded-lg shadow-lg"
              />
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-blue-900 mb-3">Key Achievements</h4>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    <span className="text-sm text-blue-800">First RegTech company in FRA Regulatory Sandbox</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    <span className="text-sm text-blue-800">Strategic partnership with Egyptian Medical Syndicate</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    <span className="text-sm text-blue-800">PCI DSS certified for payment security</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    <span className="text-sm text-blue-800">Member of BimaLab Africa InsurTech Accelerator</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Impact Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Transforming Egypt's Healthcare Ecosystem</h2>
            <p className="text-xl text-blue-100">
              Delivering measurable impact across the entire healthcare value chain
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-yellow-400 mb-2">{stat.number}</div>
                <div className="text-sm lg:text-base text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits by Stakeholder Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Value for Every Stakeholder</h2>
            <p className="text-xl text-gray-600">
              Delivering targeted benefits across the healthcare ecosystem
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stakeholders.map((stakeholder, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <CardTitle className="text-lg text-blue-600">{stakeholder.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {stakeholder.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Healthcare Operations?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Join leading organizations in Egypt's digital healthcare transformation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={() => setShowContactForm(true)}
              className="bg-yellow-600 hover:bg-yellow-700 text-black font-semibold"
            >
              Schedule a Demo
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={() => setShowContactForm(true)}
              className="border-white text-white hover:bg-white hover:text-blue-900"
            >
              Download Whitepaper
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <img src={healthflowLogo} alt="Healthflow" className="h-18 w-auto mb-4" />
              <p className="text-gray-300 mb-4">
                Transforming healthcare through regulatory technology. Building secure, efficient, and compliant digital infrastructure for Egypt's healthcare ecosystem.
              </p>
              <Badge variant="outline" className="text-yellow-400 border-yellow-400">PCI Certified</Badge>
              
              <div className="mt-6 space-y-2">
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-yellow-400" />
                  <span className="text-gray-300">info@healthflow.tech</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-yellow-400" />
                  <span className="text-gray-300">+201110047666</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-yellow-400" />
                  <span className="text-gray-300">Cairo, Egypt</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Solutions</h3>
              <ul className="space-y-2 text-gray-300">
                <li><button onClick={() => scrollToSection('solutions')} className="hover:text-white transition-colors">Claims Exchange Platform</button></li>
                <li><button onClick={() => scrollToSection('solutions')} className="hover:text-white transition-colors">Healthcare Professionals Registry</button></li>
                <li><button onClick={() => scrollToSection('solutions')} className="hover:text-white transition-colors">Digital Prescription Platform</button></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-300">
                <li><button onClick={() => scrollToSection('about')} className="hover:text-white transition-colors">About Us</button></li>
                <li><button onClick={() => setShowContactForm(true)} className="hover:text-white transition-colors">Contact</button></li>
                <li><a href="#" className="hover:text-white transition-colors">Partnerships</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Healthflow. All rights reserved. Leading Egypt's healthcare digital transformation.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

