import { motion } from "motion/react";
import { 
  Github, 
  Linkedin, 
  Globe, 
  Mail, 
  MapPin, 
  ExternalLink,
  Cpu,
  Palette,
  Code2,
  FlaskConical,
  Sparkles,
  Camera,
  Users,
  Mountain
} from "lucide-react";
import type { ReactNode } from "react";

const Section = ({ title, children, icon: Icon }: { title: string, children: ReactNode, icon?: any }) => (
  <motion.section 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="mb-8"
  >
    <div className="flex items-center gap-2 mb-3 border-b border-black pb-1.5">
      {Icon && <Icon size={18} strokeWidth={2.5} />}
      <h2 className="text-xs font-bold uppercase tracking-widest">{title}</h2>
    </div>
    {children}
  </motion.section>
);

const Entry = ({ title, subtitle, period, location, description, links, inlineSubtitle, nestedItems }: { 
  title: string, 
  subtitle?: string, 
  period?: string, 
  location?: string, 
  description?: (string | ReactNode)[],
  links?: { label: string, url: string }[],
  inlineSubtitle?: boolean,
  nestedItems?: { title: string, period: string, content: string, links?: { label: string, url: string }[] }[]
}) => {
  const renderTitle = () => {
    if (title.includes(' | ')) {
      const [company, role] = title.split(' | ');
      return (
        <h3 className="text-base leading-tight">
          <span className="font-bold">{company}</span>
          {location && <span className="font-normal text-black/50"> ({location})</span>}
          <span className="font-normal"> | {role}</span>
          {links && links.length > 0 && (
            <>
              {links.map((link, i) => (
                <a 
                  key={i} 
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="ml-2 text-[10px] font-bold uppercase tracking-widest hover:underline"
                >
                  [{link.label}]
                </a>
              ))}
            </>
          )}
        </h3>
      );
    }
    return <h3 className="text-base font-bold leading-tight">{title}</h3>;
  };

  return (
  <div className="mb-6 last:mb-0">
    <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-1.5">
      <div className={inlineSubtitle ? "flex items-baseline gap-3" : ""}>
        {renderTitle()}
        {subtitle && (
          <p className={`text-sm font-medium text-black/70 italic ${inlineSubtitle ? "" : "mt-0.5"}`}>
            {subtitle}
          </p>
        )}
      </div>
      <div className="text-right mt-1 md:mt-0">
        {period && <p className="text-[10px] font-mono font-medium uppercase tracking-tighter">{period}</p>}
      </div>
    </div>
    {nestedItems && (
      <ul className="list-none space-y-3">
        {nestedItems.map((item, i) => {
          const renderNestedTitle = () => {
            if (item.title.includes(' | ')) {
              const parts = item.title.split(' | ');
              return (
                <p className="text-sm">
                  <span className="font-bold">{parts[0]}</span>
                  {parts.slice(1).map((part, idx) => (
                    <span key={idx} className="font-normal"> | {part}</span>
                  ))}
                  {item.links && item.links.length > 0 && (
                    <>
                      {item.links.map((link, i) => (
                        <a 
                          key={i} 
                          href={link.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="ml-2 text-[10px] font-bold uppercase tracking-widest hover:underline"
                        >
                          [{link.label}]
                        </a>
                      ))}
                    </>
                  )}
                </p>
              );
            }
            return <p className="text-sm font-bold">{item.title}</p>;
          };

          return (
            <li key={i} className="flex gap-2">
              <span className="text-black/30 mt-1.5 text-[10px]">●</span>
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-1">
                  {renderNestedTitle()}
                  <p className="text-[10px] font-mono font-medium uppercase tracking-tighter text-black/50">{item.period}</p>
                </div>
                <p className="text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: item.content }} />
              </div>
            </li>
          );
        })}
      </ul>
    )}
    {description && (
      <ul className="list-none space-y-1">
        {description.map((item, i) => (
          <li key={i} className="text-sm leading-relaxed flex gap-2">
            <span className="text-black/30 mt-1.5 text-[10px]">●</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    )}
  </div>
  );
};

const ProjectItem = ({ title, category, description, links }: { 
  title: string, 
  category: string, 
  description: string,
  links?: { label: string, url: string }[]
}) => (
  <div className="group border border-black/5 p-4 hover:border-black transition-colors duration-300">
    <div className="flex justify-between items-start mb-2">
      <h4 className="font-bold text-base">{title}</h4>
      <span className="text-[10px] font-mono bg-black text-white px-1.5 py-0.5 uppercase whitespace-nowrap">{category}</span>
    </div>
    <p className="text-xs text-black/70 leading-relaxed mb-3">{description}</p>
    {links && (
      <div className="flex gap-3">
        {links.map((link, i) => (
          <a 
            key={i} 
            href={link.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[10px] font-bold uppercase tracking-tighter flex items-center gap-1 hover:underline"
          >
            {link.label}
          </a>
        ))}
      </div>
    )}
  </div>
);

export default function App() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 md:py-16 font-sans">
      {/* Header */}
      <header className="mb-12">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4">
            Lesley Qing Gu
          </h1>
          <p className="text-lg md:text-xl font-medium tracking-tight text-black/60 mb-8 max-w-2xl">
            AI Interaction Researcher / Creative Technologist / UX Engineer
          </p>
          
          <div className="flex flex-wrap gap-y-4 gap-x-8 text-sm font-mono">
            <div className="flex items-center gap-2">
              <MapPin size={14} />
              <span>Stockholm, Sweden</span>
            </div>
            <a href="mailto:lesleygujiji@gmail.com" className="flex items-center gap-2 hover:underline">
              <Mail size={14} />
              <span>Email</span>
            </a>
            <a href="https://github.com/Lesley-Qing-Gu" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:underline">
              <Github size={14} />
              <span>GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/qing-gu-072167322/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:underline">
              <Linkedin size={14} />
              <span>LinkedIn</span>
            </a>
            <a href="https://lesley-qing-gu.github.io/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:underline">
              <Globe size={14} />
              <span>Portfolio</span>
            </a>
          </div>
        </motion.div>
      </header>

      <main>
        {/* Education */}
        <Section title="Education" icon={Sparkles}>
          <Entry 
            title="M.S. in Human-Computer Interaction and Design"
            subtitle="EIT Digital: KTH Royal Institute of Technology (Sweden) & Aalto University (Finland)"
            period="2024 - Present"
          />
          <Entry 
            title="B.S. in Applied Psychology & Industrial Design (Dual Degree)"
            subtitle="Zhejiang University (China)"
            period="2018 - 2023"
          />
        </Section>

        {/* Work & Research */}
        <Section title="Work & Research" icon={FlaskConical}>
          <Entry 
            title="Ericsson | AI Interface Researcher"
            subtitle=""
            inlineSubtitle
            period="2026.01 - Present"
            location="Stockholm"
            description={[
              "Exploring AI-driven Adaptive UI in radio test systems to optimize interaction efficiency for complex industrial systems."
            ]}
          />
          <Entry 
            title="Asta | Creation Master"
            subtitle=""
            inlineSubtitle
            period="2025.10 - Present"
            location="Stockholm"
            description={[
              "Integrating Generative AI with emotional storytelling to create humorous and viral social media campaigns."
            ]}
          />
          <Entry 
            title="Furhat Robotics | Prototyping & Concepting Intern"
            subtitle=""
            inlineSubtitle
            period="2025.04 - 2025.08"
            location="Stockholm"
            description={[
              "Developed multimodal interaction prototypes for social robots, integrating hardware (3D printing) and software scripts (Kotlin/Python)."
            ]}
            links={[{ label: "Demo", url: "https://www.youtube.com/watch?v=JxL8rh0GkZA&feature=youtu.be" }]}
          />
          <Entry 
            title="Zhejiang University | Research Intern"
            subtitle=""
            inlineSubtitle
            period="2019 - 2024"
            location="Hangzhou"
            nestedItems={[
              {
                title: "Guanyun Intelligent Morphing Matter Lab | Intelligent Accessible Design Leader",
                period: "2022 - 2024",
                content: "Led MyWay blind navigation system research (<a href='https://link.springer.com/article/10.1007/s42486-024-00163-y' target='_blank' rel='noopener noreferrer' class='underline hover:no-underline'>published in Springer</a>), building 3D Braille + spatial audio modular kits.",
                links: [{ label: "Demo", url: "https://youtu.be/iUnqmPxARBc" }]
              },
              {
                title: "Social Computing (Emotional and Cultural) Lab | Film and Emotion Researcher",
                period: "2021 - 2023",
                content: "East Meets West: Conducted cross-cultural film emotion recognition experiments (China-Canada), analyzing cultural differences in facial expression perception."
              },
              {
                title: "ZJU Natural Interaction Lab | Engineering Psychology Researcher",
                period: "2019 - 2021",
                content: "VWM Project: Investigated visual working memory processing mechanisms. AR Interaction Project: Researched the impact of 3D interaction dimensions on UX."
              }
            ]}
          />
        </Section>

        {/* Playground & Engineering */}
        <Section title="Playground & Engineering" icon={Cpu}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <ProjectItem 
              title="SvenskaLyssna"
              category="AI Projects"
              description="AI-powered Swedish learning app with audio immersion, transcription, and interactive dictionary."
              links={[{ label: "GitHub", url: "https://github.com/Lesley-Qing-Gu/SvenskaLyssna" }]}
            />
            <ProjectItem 
              title="SvenskaKompis"
              category="AI Projects"
              description="Deep-learning language tool with AI Scenario Builder and multimodal Speech Lab for pronunciation scoring."
              links={[{ label: "GitHub", url: "https://github.com/Lesley-Qing-Gu/SvenskaKompis" }]}
            />
            <ProjectItem 
              title="CineGlobe"
              category="AI Projects"
              description="Interactive 3D WebGL app for real-time global cinema discovery powered by Gemini AI."
              links={[{ label: "GitHub", url: "https://github.com/Lesley-Qing-Gu/CineGlobe" }]}
            />
            <ProjectItem 
              title="Cover Generator"
              category="AI Projects"
              description="Design studio inspired by Cahiers du Cinéma, transforming photos into iconic film magazine covers."
              links={[{ label: "GitHub", url: "https://github.com/Lesley-Qing-Gu/Cahiers-du-Cinema-Cover-Generator" }]}
            />
            <ProjectItem 
              title="Bamboo Shelter"
              category="Product Design"
              description="Eco-friendly intelligent rain shelter using bamboo and humidity-sensing triggers."
              links={[{ label: "Demo", url: "https://youtu.be/XQfVJ6iemeM" }]}
            />
            <ProjectItem 
              title="ClimbLog"
              category="Fullstack"
              description="Responsive climbing logbook with React + Vite, custom animations and climbing hold-inspired palettes."
              links={[{ label: "Demo", url: "https://climblog2025.netlify.app/" }]}
            />
            <ProjectItem 
              title="laile"
              category="AI Projects"
              description="Multimodal experiment transforming experiences into auditory narrative via GPT-4, Suno AI, and ElevenLabs."
              links={[{ label: "Demo", url: "https://drive.google.com/file/d/1Q0xcP276MO9my971ls93oKwvpl-4LE1j/view?usp=drive_link" }]}
            />
            <ProjectItem 
              title="AI Pillow"
              category="Product Design"
              description="Award-winning sleep aid integrating MBSR with multi-sensory experience, increasing deep sleep by 67%."
              links={[{ label: "Details", url: "https://www.notion.so/SongGuo-AI-Intelligent-Psychological-Sleep-Aid-Pillow-25b688c19f48812291cef0a6f53a490a" }]}
            />
            <ProjectItem 
              title="SOLARIS Autosystem"
              category="Fullstack"
              description="Full-stack cinephile platform with Cinematic Minimalist design, automation plugin, and data integration."
              links={[
                { label: "Website", url: "https://solaris-cinema.netlify.app/" },
                { label: "Figma", url: "https://www.figma.com/design/X9uzsKMbEiNiTzmosLC95Q/%E7%B4%A2%E6%8B%89%E9%87%8C%E6%96%AF?node-id=1-2" },
                { label: "GitHub", url: "https://github.com/Lesley-Qing-Gu/solaris-tools" }
              ]}
            />
          </div>
        </Section>

        {/* Creative & Community */}
        <Section title="Creative & Community" icon={Users}>
          <Entry 
            title="Cultural Curation & Media"
            description={[
              <><strong>Film Journalism:</strong> Reported on <a href="https://mp.weixin.qq.com/s/PJ_zNuPzab-pJ-Sf7J4DRQ" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">Berlin</a> (2025, 2026) and <a href="https://mp.weixin.qq.com/s/BXQX0iGSMmtClfD-mOkyiQ" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">Cannes Film Festivals</a> (2025) , producing in-depth cultural critiques.</>,
              <><strong>Visual Identity:</strong> Designed <a href="https://www.notion.so/Graphic-Design-25b688c19f488127a1c7c52e67ba2c47" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">visual posters</a> for various cultural events (books, films, music) (2018-Present).</>
            ]}
          />
          <Entry 
            title="Event Organizing & Public Service"
            description={[
              <><strong>Community Operation (<a href="https://mp.weixin.qq.com/s/Bjcw2PHff4lgza9qmEwrBQ" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">Shuizhaoxi/Tide</a>):</strong> Managed social media and organized salons; coordinated design for two annual print magazines (2018-2023).</>,
              <><strong>Community Operation (<a href="https://solaris-cinema.netlify.app/" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">Solaris</a>):</strong> Digital operations and content flow automation for cinephile community (2024-Present).</>,
              <><strong>Workshop Hosting:</strong> Curated and hosted workshops on printmaking (2025-Present) , cinephile skills (2021-Present), and Ballroom culture (2026).</>,
              <><strong>Volunteer Service:</strong> Ubicomp (2025) Volunteer; Cinemaqueer (2025) and Stockholm Film Festival (2025) support.</>
            ]}
          />
        </Section>

        {/* Skills & Languages */}
        <Section title="Skills & Languages" icon={Code2}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest mb-3 flex items-center gap-2">
                <FlaskConical size={12} /> Research
              </h4>
              <p className="text-sm text-black/70 leading-relaxed">
                User Research, Co-Design, Experimental Design, Statistical Analysis, Prototyping.
              </p>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest mb-3 flex items-center gap-2">
                <Code2 size={12} /> Tech and Design
              </h4>
              <p className="text-sm text-black/70 leading-relaxed">
                Vibecoding, React, TypeScript, Python, Websocket, Firebase, Jira, Figma & Plugin, Adobe Toolkit.
              </p>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest mb-3 flex items-center gap-2">
                <Globe size={12} /> Languages
              </h4>
              <p className="text-sm text-black/70 leading-relaxed">
                Chinese (Native)<br />
                English (Professional)<br />
                Swedish (A2 - B1 Progress)
              </p>
            </div>
          </div>
        </Section>

        {/* Personal Vibe */}
        <Section title="Personal Vibe" icon={Palette}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <Camera className="shrink-0 mt-1" size={18} />
              <div>
                <h4 className="font-bold text-sm mb-1">Film</h4>
                <p className="text-xs text-black/70"><a href="https://letterboxd.com/LesleyGujiji/" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">Deep cinephile</a>, focused on New Wave and contemporary avant-garde narratives.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Sparkles className="shrink-0 mt-1" size={18} />
              <div>
                <h4 className="font-bold text-sm mb-1">Ballroom Culture</h4>
                <p className="text-xs text-black/70">Exploring physical expression and subcultural narratives through Voguing.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Mountain className="shrink-0 mt-1" size={18} />
              <div>
                <h4 className="font-bold text-sm mb-1">Bouldering</h4>
                <p className="text-xs text-black/70">Re-falling in love with movement and pushing personal limits.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Palette className="shrink-0 mt-1" size={18} />
              <div>
                <h4 className="font-bold text-sm mb-1">Creative Experiments</h4>
                <p className="text-xs text-black/70">
                  <a href="https://www.notion.so/Game-Design-One-Day-of-a-Zjuer-25b688c19f48814da7dad95582abba70" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">RPG games design</a> and <a href="https://www.notion.so/Book-Design-Winter-Swimming-25b688c19f4881848a9eeea07b85a925" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">book design</a>.
                </p>
              </div>
            </div>
          </div>
        </Section>
      </main>

      {/* Footer */}
      <footer className="mt-24 pt-8 border-t border-black/10 text-center">
        <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-black/40">
          © {new Date().getFullYear()} Lesley Qing Gu — Built with AI & Intent
        </p>
      </footer>
    </div>
  );
}
