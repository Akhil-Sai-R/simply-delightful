import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent, type ReactNode } from "react";
import {
  Mail, Phone, Linkedin, MapPin, ArrowUp, Menu, X, Brain, Eye, Server, Cpu, Shield, Map, Plane,
  Layers, ScanLine, Bot, GraduationCap, Award, BookOpen, ExternalLink, ChevronDown, User, Languages, Send,
} from "lucide-react";
import {
  profile, nav, expertise, journey, skills, experience, projects, filters, certifications, languages,
  type Filter, type Project,
} from "@/data/portfolio";

const TITLE = "Akhil Sai Ravi Kumar | Senior AI & Software Engineer";
const DESC =
  "Explore the portfolio of Akhil Sai Ravi Kumar, a Senior AI and Software Engineer specializing in Generative AI, agentic systems, machine learning, computer vision, robotics, edge AI, and production AI engineering.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5">
        <a href="#home" className="font-display text-2xl tracking-tight text-foreground">
          Akhil<span className="font-semibold text-primary">.AI</span>
        </a>
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
          {nav.map((n) => (
            <a key={n.id} href={`#${n.id}`} className="text-sm font-medium text-foreground transition-colors hover:text-primary">
              {n.label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="hidden rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground shadow-float transition-transform hover:-translate-y-0.5 lg:inline-flex">
          Contact Me
        </a>
        <button className="lg:hidden" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-border bg-background px-5 py-4 lg:hidden" aria-label="Mobile">
          {nav.map((n) => (
            <a key={n.id} href={`#${n.id}`} onClick={() => setOpen(false)} className="block py-2.5 font-medium">
              {n.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="mt-2 inline-flex rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground">
            Contact Me
          </a>
        </nav>
      )}
    </header>
  );
}

function Badge({ className, children, label }: { className: string; children: ReactNode; label: string }) {
  return (
    <div className={`absolute flex h-16 w-16 items-center justify-center rounded-xl shadow-float animate-floaty ${className}`} title={label} aria-label={label}>
      {children}
    </div>
  );
}

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-hero">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 py-20 md:grid-cols-2 md:py-28">
        <div>
          <p className="font-display text-lg font-medium text-primary">Hello</p>
          <h1 className="mt-2 font-display text-5xl font-light leading-tight text-navy md:text-6xl">
            I'm <span className="font-bold">{profile.name}</span>
          </h1>
          <p className="mt-4 font-display text-2xl text-navy">
            Senior AI & Software <span className="text-primary">Engineer</span>
          </p>
          <p className="mt-2 inline-flex items-center gap-1.5 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" /> {profile.location}
          </p>
          <p className="mt-6 font-display text-xl font-semibold text-foreground">
            Building Intelligent AI Systems for Real-World Impact.
          </p>
          <p className="mt-3 max-w-lg leading-relaxed text-muted-foreground">
            Senior AI & Software Engineer specializing in Generative AI, Agentic Systems, Computer Vision, and Production-Ready Machine Learning — with 8+ years turning complex requirements into scalable, reliable systems.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#projects" className="rounded-full bg-navy px-7 py-3 text-sm font-semibold text-navy-foreground transition-transform hover:-translate-y-0.5">
              Explore My Projects
            </a>
            <a href="#contact" className="rounded-full border border-navy px-7 py-3 text-sm font-semibold text-navy transition-colors hover:bg-navy hover:text-navy-foreground">
              Contact Me
            </a>
            <div className="flex items-center gap-3 pl-1">
              <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-navy hover:text-primary"><Linkedin className="h-5 w-5" /></a>
              <a href={`mailto:${profile.email}`} aria-label="Email" className="text-navy hover:text-primary"><Mail className="h-5 w-5" /></a>
            </div>
          </div>
          <div className="mt-10 flex flex-wrap gap-2">
            {["GenAI", "Computer Vision", "MLOps", "Edge AI"].map((t) => (
              <span key={t} className="rounded-full bg-accent px-4 py-1.5 text-xs font-semibold text-accent-foreground">{t}</span>
            ))}
          </div>
        </div>

        <div className="relative mx-auto aspect-square w-full max-w-md">
          <svg className="absolute inset-0 h-full w-full text-primary/30" viewBox="0 0 400 400" fill="none" aria-hidden>
            <path d="M80 60 C 200 20, 340 40, 360 160 S 330 360, 200 370 S 30 300, 40 190 S 60 90, 80 60Z" stroke="currentColor" strokeWidth="1.2" />
            <path d="M100 80 C 210 50, 320 70, 340 170 S 300 340, 200 345 S 60 290, 65 190 S 80 110, 100 80Z" stroke="currentColor" strokeWidth="1" />
          </svg>
          <div className="absolute inset-[14%] rounded-full bg-ring p-1.5 shadow-card">
            <div className="flex h-full w-full flex-col items-center justify-center gap-2 rounded-full bg-soft text-muted-foreground">
              <User className="h-20 w-20 text-primary/50" />
              <span className="text-xs font-medium">Portrait coming soon</span>
            </div>
          </div>
          <Badge className="left-[12%] top-[2%] bg-navy text-navy-foreground" label="Generative AI"><Brain className="h-8 w-8" /></Badge>
          <Badge className="right-0 top-[22%] bg-primary text-primary-foreground [animation-delay:1.5s]" label="Computer Vision"><Eye className="h-8 w-8" /></Badge>
          <Badge className="bottom-[22%] left-0 bg-card text-primary [animation-delay:3s]" label="Edge AI"><Cpu className="h-8 w-8" /></Badge>
          <Badge className="bottom-[4%] right-[14%] bg-card text-navy [animation-delay:2s]" label="MLOps"><Server className="h-8 w-8" /></Badge>
        </div>
      </div>
      <a href="#about" aria-label="Scroll to about" className="mx-auto mb-8 flex h-10 w-6 justify-center rounded-full border-2 border-navy pt-2">
        <span className="h-2 w-1 rounded-full bg-navy animate-wheel" />
      </a>
    </section>
  );
}

function SectionHead({ eyebrow, title, light }: { eyebrow: string; title: ReactNode; light?: boolean }) {
  return (
    <div className="mb-12 text-center">
      <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-primary">{eyebrow}</p>
      <h2 className={`mt-2 font-display text-4xl font-light md:text-5xl ${light ? "text-navy-foreground" : "text-navy"}`}>{title}</h2>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-24">
      <SectionHead eyebrow="About Me" title={<>Engineer across the <b className="font-bold">AI lifecycle</b></>} />
      <div className="grid gap-12 md:grid-cols-2">
        <div className="space-y-4 leading-relaxed text-muted-foreground">
          <p>I am an AI and Software Engineer with a background in Mechatronics and Cyber-Physical Systems and extensive experience in enterprise software development, machine learning, deep learning, and intelligent automation.</p>
          <p>At ASTRIAL GmbH, I work across Generative AI, agentic software engineering, cybersecurity copilots, computer vision, speech processing, and multimodal decision-support systems. My responsibilities include system architecture, model adaptation, retrieval pipelines, backend development, evaluation frameworks, deployment automation, and production reliability.</p>
          <p>My earlier experience at AVL Software and Functions, Camelot Management Consultants, and Tech Mahindra provided a strong foundation in computer vision, autonomous systems, data science, cloud infrastructure, and enterprise application engineering.</p>
          <p>I enjoy solving complex engineering problems, collaborating with international research and development teams, mentoring engineers and students, and building AI systems that are practical, maintainable, and reliable.</p>
          <ol className="mt-8 grid grid-cols-2 gap-4 border-t border-border pt-8 sm:grid-cols-4">
            {journey.map((j, i) => (
              <li key={j.label} className="relative">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">{i + 1}</span>
                <p className="mt-2 text-xs font-semibold text-primary">{j.year}</p>
                <p className="text-sm font-medium text-foreground">{j.label}</p>
              </li>
            ))}
          </ol>
        </div>
        <ul className="grid content-start gap-3 sm:grid-cols-2">
          {expertise.map((e) => (
            <li key={e} className="rounded-xl border border-border bg-card p-4 text-sm font-medium text-foreground shadow-card">
              <span className="mb-2 block h-1 w-8 rounded-full bg-primary" />
              {e}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 bg-soft py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHead eyebrow="Technical Skills" title={<>Tools I <b className="font-bold">build with</b></>} />
        <div className="grid gap-6 md:grid-cols-2">
          {skills.map((s) => (
            <div key={s.title} className="rounded-2xl border border-border bg-card p-6 shadow-card">
              <h3 className="font-display text-lg font-semibold text-navy">{s.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {s.items.map((i) => (
                  <span key={i} className="rounded-md bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground">{i}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl scroll-mt-20 px-5 py-24">
      <SectionHead eyebrow="Experience" title={<>Professional <b className="font-bold">journey</b></>} />
      <ol className="relative space-y-8 border-l-2 border-accent pl-8">
        {experience.map((job, idx) => (
          <li key={job.company} className="relative">
            <span className={`absolute -left-[41px] top-6 h-4 w-4 rounded-full border-4 border-background ${job.current ? "bg-primary" : "bg-navy"}`} />
            <article className={`rounded-2xl border bg-card p-6 shadow-card ${job.current ? "border-primary/40" : "border-border"}`}>
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <h3 className="font-display text-2xl font-semibold text-navy">{job.company}</h3>
                  <p className="mt-1 font-medium text-primary">{job.role}</p>
                </div>
                <div className="text-right text-sm text-muted-foreground">
                  <p className="font-semibold text-foreground">{job.period}</p>
                  <p>{job.location}</p>
                </div>
              </div>
              <div className="mt-5 space-y-2">
                {job.groups.map((g, gi) => (
                  <details key={g.title} open={idx === 0 && gi === 0} className="group rounded-lg bg-soft px-4 py-3">
                    <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-foreground">
                      {g.title}
                      <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
                    </summary>
                    <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground">
                      {g.items.map((it) => <li key={it}>{it}</li>)}
                    </ul>
                  </details>
                ))}
              </div>
            </article>
          </li>
        ))}
      </ol>
    </section>
  );
}

const icons = { shield: Shield, map: Map, drone: Plane, layers: Layers, scan: ScanLine, cpu: Cpu, bot: Bot };

function ProjectCard({ p }: { p: Project }) {
  const [open, setOpen] = useState(false);
  const Icon = icons[p.icon];
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-transform hover:-translate-y-1">
      <div className="relative flex h-36 items-center justify-center bg-navy">
        <svg className="absolute inset-0 h-full w-full text-primary/40" aria-hidden>
          <defs>
            <pattern id={`g-${p.icon}`} width="22" height="22" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.2" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#g-${p.icon})`} />
        </svg>
        <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-float">
          <Icon className="h-8 w-8" aria-hidden />
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-semibold uppercase tracking-wide text-primary">{p.category}</p>
        <h3 className="mt-2 font-display text-xl font-semibold text-navy">{p.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
        {open && (
          <div className="mt-4 space-y-3 text-sm">
            {p.capabilities && (
              <div>
                <p className="font-semibold text-foreground">Key capabilities</p>
                <ul className="mt-1 list-disc pl-5 text-muted-foreground">{p.capabilities.map((c) => <li key={c}>{c}</li>)}</ul>
              </div>
            )}
            <div>
              <p className="font-semibold text-foreground">{p.stackLabel ?? "Technology stack"}</p>
              <p className="text-muted-foreground">{p.stack}</p>
            </div>
          </div>
        )}
        <button onClick={() => setOpen(!open)} aria-expanded={open} className="mt-auto self-start pt-5 text-sm font-semibold text-primary hover:underline">
          {open ? "Hide Details" : "View Details"}
        </button>
      </div>
    </article>
  );
}

function Projects() {
  const [f, setF] = useState<Filter>("All");
  const list = f === "All" ? projects : projects.filter((p) => p.tags.includes(f));
  return (
    <section id="projects" className="scroll-mt-20 bg-soft py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHead eyebrow="Featured Projects" title={<>Selected <b className="font-bold">work</b></>} />
        <div className="mb-10 flex flex-wrap justify-center gap-2" role="group" aria-label="Filter projects">
          {filters.map((x) => (
            <button key={x} onClick={() => setF(x)} aria-pressed={f === x}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${f === x ? "bg-primary text-primary-foreground" : "bg-card text-foreground hover:text-primary"}`}>
              {x}
            </button>
          ))}
        </div>
        {list.length ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{list.map((p) => <ProjectCard key={p.title} p={p} />)}</div>
        ) : (
          <p className="text-center text-muted-foreground">No projects in this category yet.</p>
        )}
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-24">
      <SectionHead eyebrow="Education & Credentials" title={<>Learning & <b className="font-bold">research</b></>} />
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="rounded-2xl border border-border bg-card p-6 shadow-card lg:col-span-2">
          <div className="flex items-start gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent text-accent-foreground"><GraduationCap /></span>
            <div>
              <h3 className="font-display text-xl font-semibold text-navy">Deggendorf Institute of Technology — Germany</h3>
              <p className="font-medium text-primary">M.Sc. Mechatronics and Cyber-Physical Systems</p>
              <p className="text-sm text-muted-foreground">2019 – 2022</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {["Artificial Intelligence", "Machine Learning", "Natural Language Processing", "Computer Vision", "Robotics", "Software Engineering"].map((x) => (
                  <span key={x} className="rounded-md bg-secondary px-2.5 py-1 text-xs font-medium">{x}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-2xl bg-navy p-6 text-navy-foreground shadow-card">
          <BookOpen className="h-8 w-8 text-primary" />
          <h3 className="mt-3 font-display text-xl font-semibold">ISCRAM Proceedings Publication</h3>
          <p className="mt-2 text-sm leading-relaxed opacity-80">Responsible for the complete end-to-end development of the published research work, including system design, implementation, experimentation, technical documentation, and final delivery.</p>
          <a href={profile.publication} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground">
            Read Publication <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>

      <h3 className="mb-5 mt-14 font-display text-2xl font-semibold text-navy">Certifications</h3>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {certifications.map((c) => (
          <div key={c.title} className="rounded-xl border border-border bg-card p-5 shadow-card">
            <Award className="h-6 w-6 text-primary" />
            <p className="mt-3 text-sm font-semibold text-foreground">{c.title}</p>
            <p className="mt-1 text-xs text-muted-foreground">{c.issuer}</p>
          </div>
        ))}
      </div>

      <h3 className="mb-5 mt-14 flex items-center gap-2 font-display text-2xl font-semibold text-navy"><Languages className="h-6 w-6 text-primary" /> Languages</h3>
      <div className="grid gap-4 sm:grid-cols-2">
        {languages.map((l) => (
          <div key={l.name} className="rounded-xl border border-border bg-card p-5 shadow-card">
            <div className="flex justify-between text-sm"><span className="font-semibold">{l.name}</span><span className="text-muted-foreground">{l.level}</span></div>
            <div className="mt-3 h-2 rounded-full bg-secondary"><div className="h-2 rounded-full bg-primary" style={{ width: `${l.pct}%` }} /></div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  const [status, setStatus] = useState<"idle" | "error" | "ok">("idle");
  const [err, setErr] = useState("");
  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const name = String(d.get("name") ?? "").trim();
    const email = String(d.get("email") ?? "").trim();
    const subject = String(d.get("subject") ?? "").trim();
    const message = String(d.get("message") ?? "").trim();
    if (!name || !subject || !message) { setStatus("error"); setErr("Please fill in all fields."); return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { setStatus("error"); setErr("Please enter a valid email address."); return; }
    setStatus("ok");
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`${message}\n\n— ${name} (${email})`)}`;
  }
  const field = "w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary";
  return (
    <section id="contact" className="scroll-mt-20 bg-navy py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-2">
        <div className="text-navy-foreground">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-primary">Contact</p>
          <h2 className="mt-2 font-display text-4xl font-light md:text-5xl">Let's Build Something <b className="font-bold">Intelligent.</b></h2>
          <p className="mt-4 max-w-md leading-relaxed opacity-80">Interested in AI engineering, Generative AI, computer vision, intelligent automation, or collaborative research? Feel free to connect with me to discuss ideas and opportunities.</p>
          <ul className="mt-8 space-y-4">
            <li><a href={`mailto:${profile.email}`} className="inline-flex items-center gap-3 hover:text-primary"><Mail className="h-5 w-5" />{profile.email}</a></li>
            <li><a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="inline-flex items-center gap-3 hover:text-primary"><Phone className="h-5 w-5" />{profile.phone}</a></li>
            <li><a href={profile.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 hover:text-primary"><Linkedin className="h-5 w-5" />LinkedIn</a></li>
            <li className="inline-flex items-center gap-3 opacity-80"><MapPin className="h-5 w-5" />{profile.location}</li>
          </ul>
        </div>
        <form onSubmit={submit} noValidate className="space-y-4 rounded-2xl bg-card p-6 shadow-card">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="text-sm font-medium">Name<input name="name" className={`${field} mt-1`} /></label>
            <label className="text-sm font-medium">Email<input name="email" type="email" className={`${field} mt-1`} /></label>
          </div>
          <label className="block text-sm font-medium">Subject<input name="subject" className={`${field} mt-1`} /></label>
          <label className="block text-sm font-medium">Message<textarea name="message" rows={5} className={`${field} mt-1`} /></label>
          {status === "error" && <p role="alert" className="text-sm text-destructive">{err}</p>}
          {status === "ok" && <p role="status" className="text-sm text-primary">Your email app is opening with the message ready to send.</p>}
          <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground">
            Send Message <Send className="h-4 w-4" />
          </button>
          <p className="text-xs text-muted-foreground">This form opens your email app — messages are sent from your own inbox.</p>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-8 text-sm text-muted-foreground">
        <div>
          <p className="font-display font-semibold text-navy">{profile.name}</p>
          <p>{profile.title} · {profile.location}</p>
          <p className="mt-1">© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        </div>
        <div className="flex items-center gap-4">
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-primary"><Linkedin className="h-5 w-5" /></a>
          <a href={`mailto:${profile.email}`} aria-label="Email" className="hover:text-primary"><Mail className="h-5 w-5" /></a>
          <a href="#home" className="inline-flex items-center gap-1 rounded-full border border-border px-4 py-2 font-medium text-foreground hover:text-primary">
            <ArrowUp className="h-4 w-4" /> Back to Top
          </a>
        </div>
      </div>
    </footer>
  );
}
