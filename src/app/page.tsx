"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import AboutFeature from '@/components/sections/about/AboutFeature';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import TeamCardThree from '@/components/sections/team/TeamCardThree';
import TestimonialCardFour from '@/components/sections/testimonial/TestimonialCardFour';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Rocket, TrendingUp, Users, Target, Sparkles, Star, DollarSign, Sprout, Linkedin, Twitter, Globe, Mail, HelpCircle, Award } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="expand-hover"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
      contentWidth="small"
      sizing="small"
      background="dotGrid"
      cardStyle="glass-flat"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="minimal"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          brandName="TechShop Milano VC"
          navItems={[
            { name: "About", id: "about" },
            { name: "Investments", id: "investments" },
            { name: "Team", id: "team" },
            { name: "Insights", id: "insights" },
            { name: "Contact", id: "contact" }
          ]}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Empowering Milan's Tech Future"
          description="TechShop Milano VC invests in transformative technologies and visionary founders shaping tomorrow's innovation landscape. We provide capital, expertise, and strategic partnerships to accelerate tech-driven growth."
          tag="Venture Capital"
          tagIcon={Rocket}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1764145514021-gkr4t773.jpg"
          imageAlt="Venture capital investment office environment"
          imagePosition="right"
          buttons={[
            { text: "Explore Our Investments", href: "investments" },
            { text: "Schedule a Meeting", href: "contact" }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <AboutFeature
          title="We invest in the entrepreneurs and technologies that will define the next decade. With deep industry expertise and a proven track record in early-stage ventures, we partner with founders to transform ambitious visions into market-leading companies."
          features={[
            {
              icon: TrendingUp,
              title: "Strategic Capital",
              description: "Multi-stage funding from seed to Series C, providing the resources founders need to scale rapidly and capture market opportunities."
            },
            {
              icon: Users,
              title: "Expert Network",
              description: "Access to our ecosystem of successful entrepreneurs, industry leaders, and operational experts who drive value beyond capital."
            },
            {
              icon: Target,
              title: "Tech-First Approach",
              description: "Deep focus on artificial intelligence, fintech, healthtech, and digital transformation sectors reshaping industries."
            },
            {
              icon: Sparkles,
              title: "Growth Partnership",
              description: "Hands-on support through board participation, go-to-market strategy, and operational scaling to achieve sustainable growth."
            }
          ]}
        />
      </div>

      <div id="investments" data-section="investments">
        <FeatureCardOne
          title="Featured Investments"
          description="Showcase of high-potential ventures in our current portfolio driving innovation across key sectors."
          tag="Portfolio Highlights"
          tagIcon={Star}
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="uniform-all-items-equal"
          features={[
            {
              title: "AI-Powered Analytics Platform",
              description: "Real-time data intelligence for enterprise decision-making. Securing Series B funding to expand globally.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1764145514614-hbsdh0wf.jpg",
              imageAlt: "AI analytics technology platform"
            },
            {
              title: "Fintech Payment Solutions",
              description: "Cross-border payments infrastructure for emerging markets. Processing 50M+ transactions monthly.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1764145515262-yl2qdxnb.jpg",
              imageAlt: "Fintech payment solutions"
            },
            {
              title: "HealthTech Platform",
              description: "Telehealth and diagnostic AI combining remote care with advanced medical analytics for improved outcomes.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1764145514614-hbsdh0wf.jpg",
              imageAlt: "Healthcare technology innovation"
            },
            {
              title: "Sustainable Tech Startup",
              description: "Climate tech solutions enabling enterprises to achieve net-zero targets through data-driven optimization.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1764145515262-yl2qdxnb.jpg",
              imageAlt: "Sustainable technology solutions"
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardTwo
          title="Investment Tiers"
          description="Flexible funding structures designed for different growth stages and capital requirements."
          tag="Funding Programs"
          tagIcon={DollarSign}
          textboxLayout="default"
          animationType="slide-up"
          plans={[
            {
              id: "seed",
              badge: "Seed Stage",
              badgeIcon: Sprout,
              price: "€250K - €500K",
              subtitle: "Perfect for innovative founders with MVP and market validation",
              buttons: [
                { text: "Learn More", href: "contact" },
                { text: "Apply Now", href: "contact" }
              ],
              features: [
                "Capital investment with equity stake",
                "Dedicated investment partner",
                "Monthly strategy sessions",
                "Network access to 200+ mentors",
                "Legal and compliance support"
              ]
            },
            {
              id: "series-a",
              badge: "Series A",
              badgeIcon: TrendingUp,
              price: "€2M - €5M",
              subtitle: "Accelerate product-market fit and team expansion",
              buttons: [
                { text: "Learn More", href: "contact" },
                { text: "Apply Now", href: "contact" }
              ],
              features: [
                "Growth capital with board seat",
                "Go-to-market strategy development",
                "Sales and marketing expertise",
                "Access to customer network",
                "International expansion support"
              ]
            },
            {
              id: "series-b",
              badge: "Series B & Beyond",
              badgeIcon: Rocket,
              price: "€5M - €25M+",
              subtitle: "Scale globally with institutional backing and expertise",
              buttons: [
                { text: "Learn More", href: "contact" },
                { text: "Apply Now", href: "contact" }
              ],
              features: [
                "Significant capital for market dominance",
                "Executive recruitment support",
                "M&A advisory and partnerships",
                "International investor network",
                "Corporate governance expertise"
              ]
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardThree
          title="Investment Leadership"
          description="Our team combines venture expertise with deep operational experience from building and scaling successful tech companies."
          tag="Our Partners"
          tagIcon={Users}
          textboxLayout="default"
          animationType="slide-up"
          members={[
            {
              id: "1",
              name: "Marco Rossi",
              role: "Managing Partner & Founder",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1764145515757-0ykc79nh.jpg",
              imageAlt: "Marco Rossi, Managing Partner",
              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com" },
                { icon: Twitter, url: "https://twitter.com" }
              ]
            },
            {
              id: "2",
              name: "Elena Ferrari",
              role: "Partner, Technology & AI",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1764145516437-fndh92rv.jpg",
              imageAlt: "Elena Ferrari, Partner",
              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com" },
                { icon: Twitter, url: "https://twitter.com" }
              ]
            },
            {
              id: "3",
              name: "Paolo Bianchi",
              role: "Partner, Operations & Scale",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1764145517186-hog0fbmp.jpg",
              imageAlt: "Paolo Bianchi, Partner",
              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com" },
                { icon: Globe, url: "https://example.com" }
              ]
            },
            {
              id: "4",
              name: "Giulia Moretti",
              role: "Investment Associate, Growth",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1764145518328-owowz0vo.jpg",
              imageAlt: "Giulia Moretti, Investment Associate",
              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com" },
                { icon: Mail, url: "mailto:giulia@techshopmilano.vc" }
              ]
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFour
          title="Portfolio Company Success Stories"
          description="Hear from founders who transformed their vision into thriving market leaders with our partnership and support."
          tag="Founder Testimonials"
          tagIcon={Star}
          textboxLayout="default"
          testimonials={[
            {
              id: "1",
              name: "Andrea Conti",
              role: "Founder & CEO",
              company: "DataFlow AI",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1764145519076-6e5s5zuv.jpg"
            },
            {
              id: "2",
              name: "Sofia Lombardi",
              role: "Co-Founder",
              company: "PayFlow Systems",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1764145519545-0whhphgy.jpg"
            },
            {
              id: "3",
              name: "Matteo Rinaldi",
              role: "Founder & CTO",
              company: "MediConnect Health",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1764145520088-2wtml32i.jpg"
            },
            {
              id: "4",
              name: "Chiara Gallo",
              role: "Co-Founder",
              company: "GreenTech Solutions",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1764145520690-7i8kebyk.jpg"
            }
          ]}
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          title="Trusted by Industry Leaders"
          description="Our portfolio companies and partner ecosystem include some of the world's most innovative and successful technology organizations."
          tag="Market Partners"
          tagIcon={Award}
          textboxLayout="default"
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1764145523904-b3jy25ou.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1764145524402-ewkdck2e.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1764145524926-rz43b0ku.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1764145525440-a43qapx2.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1764145525929-sssadzp1.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1764145526374-e6hcul9d.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1764145527148-8vqltmqn.jpg"
          ],
          speed={40}
          showCard={true}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqDouble
          title="Frequently Asked Questions"
          description="Find answers to common questions about our investment approach, funding process, and partnership model."
          tag="Help & Support"
          tagIcon={HelpCircle}
          textboxLayout="default"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "What is TechShop Milano VC's investment focus?",
              content: "We primarily invest in early-stage and growth-stage technology companies in sectors including artificial intelligence, fintech, healthtech, and digital transformation. We have a deep focus on European startups with global ambitions."
            },
            {
              id: "2",
              title: "What is the typical investment check size?",
              content: "Our investment range varies by stage: Seed stage (€250K-€500K), Series A (€2M-€5M), and Series B & Beyond (€5M-€25M+). We are flexible and can co-invest or lead rounds based on the opportunity."
            },
            {
              id: "3",
              title: "How long is the investment decision timeline?",
              content: "Our process typically takes 4-8 weeks from initial pitch to term sheet. This includes due diligence, partner review, and strategy alignment. Fast-growing opportunities may move faster."
            },
            {
              id: "4",
              title: "Do you take board seats in portfolio companies?",
              content: "We typically take board seats in Series A and beyond investments. In seed stage investments, we maintain active involvement through monthly strategy sessions and ongoing mentorship."
            },
            {
              id: "5",
              title: "How do you support portfolio companies beyond capital?",
              content: "Beyond funding, we provide strategic guidance, access to our network of 200+ mentors and experts, go-to-market support, hiring assistance, and international expansion expertise."
            },
            {
              id: "6",
              title: "What is your geographic focus?",
              content: "While based in Milan, we invest across Europe with a focus on companies that can scale globally. We have particular expertise in Italian, German, and Nordic tech ecosystems."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Get In Touch"
          tagIcon={Mail}
          title="Join Our Investment Community"
          description="Subscribe to receive exclusive insights on market trends, investment opportunities, and strategic guidance for scaling your tech venture."
          inputPlaceholder="founder@yourcompany.com"
          buttonText="Subscribe"
          termsText="We respect your privacy. Unsubscribe anytime. By subscribing, you agree to our investment updates and market insights."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          logoText="TechShop Milano VC"
          copyrightText="© 2025 TechShop Milano VC | All rights reserved"
          columns={[
            {
              title: "Invest",
              items: [
                { label: "Funding Programs", href: "pricing" },
                { label: "Investment Process", href: "faq" },
                { label: "Portfolio", href: "investments" }
              ]
            },
            {
              title: "Company",
              items: [
                { label: "About Us", href: "about" },
                { label: "Our Team", href: "team" },
                { label: "News & Insights", href: "insights" }
              ]
            },
            {
              title: "Connect",
              items: [
                { label: "Contact", href: "contact" },
                { label: "LinkedIn", href: "https://linkedin.com" },
                { label: "Twitter", href: "https://twitter.com" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}