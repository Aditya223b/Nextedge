"use client";

import { useState } from "react";

type IconName =
  | "home" | "trend" | "courses" | "roadmap" | "spark" | "portfolio"
  | "trophy" | "bell" | "arrow" | "clock" | "play" | "check" | "lock"
  | "users" | "chart" | "settings" | "briefcase" | "book" | "share";

function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  const paths: Record<IconName, React.ReactNode> = {
    home: <><path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h14V9.5M9 21v-7h6v7"/></>,
    trend: <><path d="M4 19V5M4 19h16"/><path d="m7 15 4-4 3 2 5-6"/></>,
    courses: <><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5z"/><path d="M4 5.5v16M8 7h8"/></>,
    roadmap: <><circle cx="6" cy="18" r="2"/><circle cx="18" cy="6" r="2"/><path d="M8 18h3a3 3 0 0 0 3-3V9a3 3 0 0 1 3-3"/></>,
    spark: <><path d="m12 3 1.4 4.1L17.5 8.5l-4.1 1.4L12 14l-1.4-4.1-4.1-1.4 4.1-1.4z"/><path d="m18 15 .8 2.2L21 18l-2.2.8L18 21l-.8-2.2L15 18l2.2-.8z"/></>,
    portfolio: <><rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 8h8M8 12h8M8 16h5"/></>,
    trophy: <><path d="M8 21h8M12 17v4M7 4h10v4a5 5 0 0 1-10 0z"/><path d="M7 6H4v2a4 4 0 0 0 4 4M17 6h3v2a4 4 0 0 1-4 4"/></>,
    bell: <><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9"/><path d="M10 21h4"/></>,
    arrow: <><path d="M5 12h14M14 7l5 5-5 5"/></>,
    clock: <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>,
    play: <path d="m9 7 8 5-8 5z"/>,
    check: <path d="m5 12 4 4L19 6"/>,
    lock: <><rect x="5" y="10" width="14" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></>,
    users: <><circle cx="9" cy="8" r="3"/><path d="M3 20a6 6 0 0 1 12 0M16 4a3 3 0 0 1 0 6M17 14a5 5 0 0 1 4 5"/></>,
    chart: <><path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/></>,
    settings: <><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2.8 2.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6v.2h-4V21a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1L4.2 17l.1-.1a1.7 1.7 0 0 0 .3-1.9A1.7 1.7 0 0 0 3 14H2.8v-4H3a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9L4.2 7 7 4.2l.1.1a1.7 1.7 0 0 0 1.9.3A1.7 1.7 0 0 0 10 3V2.8h4V3a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1L19.8 7l-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.6 1h.2v4H21a1.7 1.7 0 0 0-1.6 1z"/></>,
    briefcase: <><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V4h8v3M3 12h18M10 12v2h4v-2"/></>,
    book: <><path d="M3 5a3 3 0 0 1 3-3h6v19H6a3 3 0 0 0-3 3zM21 5a3 3 0 0 0-3-3h-6v19h6a3 3 0 0 1 3 3z"/></>,
    share: <><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.6 10.5 6.8-4M8.6 13.5l6.8 4"/></>,
  };
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}

const studentNav = [
  ["Overview", "home"], ["Skill trends", "trend"], ["Courses", "courses"],
  ["My roadmap", "roadmap"], ["Skills & talent", "spark"], ["Portfolio", "portfolio"],
  ["Leaderboard", "trophy"],
] as const;

const adminNav = [
  ["Overview", "home"], ["Student insights", "users"], ["Trend intelligence", "trend"],
  ["Engagement", "chart"], ["Course catalog", "courses"], ["Reports", "portfolio"],
  ["Institution settings", "settings"],
] as const;

const trends = [
  { rank: "01", name: "Generative AI Engineering", tag: "CS / IT", growth: "+42%", confidence: "High", sources: "GitHub + job demand", color: "lime" },
  { rank: "02", name: "Cloud Security", tag: "CS / IT", growth: "+31%", confidence: "High", sources: "Job demand + industry", color: "blue" },
  { rank: "03", name: "Sustainable Finance", tag: "Commerce", growth: "+24%", confidence: "Medium", sources: "Gov stats + search", color: "orange" },
  { rank: "04", name: "Digital Twin Systems", tag: "Engineering", growth: "+19%", confidence: "Medium", sources: "GitHub + industry", color: "pink" },
];

const courses = [
  { provider: "DeepLearning.AI", name: "Generative AI with LLMs", meta: "6 weeks · Online", level: "Intermediate", color: "#d9ff5f" },
  { provider: "Google Cloud", name: "Cloud Security Foundations", meta: "4 weeks · Online", level: "Beginner", color: "#a8d8ff" },
  { provider: "IBM SkillsBuild", name: "AI Engineering Essentials", meta: "8 weeks · Online", level: "Intermediate", color: "#ffc5d5" },
];

function Dashboard() {
  const [active, setActive] = useState("Overview");
  const [role, setRole] = useState<"student" | "admin">("student");
  const [filter, setFilter] = useState("All");
  const [enrolled, setEnrolled] = useState<string[]>([]);
  const [shared, setShared] = useState(false);
  const nav = role === "student" ? studentNav : adminNav;

  function changeRole(next: "student" | "admin") {
    setRole(next);
    setActive("Overview");
  }

  return (
    <main className="app-shell">
      <aside className="sidebar">
        <div className="brand"><span className="brand-mark">N</span><span>nextedge</span></div>
        <div className="role-switch" aria-label="Dashboard role">
          <button className={role === "student" ? "selected" : ""} onClick={() => changeRole("student")}>Student</button>
          <button className={role === "admin" ? "selected" : ""} onClick={() => changeRole("admin")}>Admin</button>
        </div>
        <nav>
          <p className="nav-label">Workspace</p>
          {nav.map(([label, icon]) => (
            <button key={label} className={active === label ? "nav-item active" : "nav-item"} onClick={() => setActive(label)}>
              <Icon name={icon} /><span>{label}</span>{label === "My roadmap" && <em>4</em>}
            </button>
          ))}
        </nav>
        <div className="sidebar-card">
          <div className="mini-orbit"><Icon name="spark" size={18} /></div>
          <p>Weekly streak</p><strong>6 weeks strong</strong>
          <div className="streak"><i/><i/><i/><i/><i/><i/><i className="off"/></div>
        </div>
        <button className="profile">
          <span className="avatar">AS</span><span><strong>Aarav Sharma</strong><small>Computer Science · 2027</small></span><Icon name="arrow" size={16}/>
        </button>
      </aside>

      <section className="workspace">
        <header className="topbar">
          <button className="mobile-brand" onClick={() => setActive("Overview")}><span className="brand-mark">N</span> nextedge</button>
          <div className="campus"><span className="campus-mark">SU</span><span><small>Institution</small><strong>Somaiya University</strong></span></div>
          <div className="top-actions"><span className="points"><Icon name="trophy" size={17}/> 1,280 pts</span><form action="/auth/signout" method="post"><button className="signout-button" type="submit">Log out</button></form><button className="icon-button" aria-label="Notifications"><Icon name="bell"/><i/></button></div>
        </header>
        <div className="mobile-nav">
          {nav.slice(0, 5).map(([label, icon]) => <button key={label} className={active === label ? "active" : ""} onClick={() => setActive(label)}><Icon name={icon} size={19}/><span>{label}</span></button>)}
        </div>

        {role === "admin" ? <AdminView active={active} /> : active === "Overview" ? (
          <Overview setActive={setActive} enrolled={enrolled} setEnrolled={setEnrolled} />
        ) : active === "Skill trends" ? (
          <TrendsView filter={filter} setFilter={setFilter} />
        ) : active === "Courses" ? (
          <CoursesView enrolled={enrolled} setEnrolled={setEnrolled} />
        ) : active === "My roadmap" ? <RoadmapView />
          : active === "Skills & talent" ? <SkillsView />
          : active === "Portfolio" ? <PortfolioView shared={shared} setShared={setShared} />
          : <LeaderboardView />}
      </section>
    </main>
  );
}

function PageIntro({ eyebrow, title, copy }: { eyebrow: string; title: string; copy: string }) {
  return <div className="page-intro"><div><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p>{copy}</p></div><span className="version-pill">Updated Aug 2026</span></div>;
}

function Overview({ setActive, enrolled, setEnrolled }: { setActive: (s: string) => void; enrolled: string[]; setEnrolled: (s: string[]) => void }) {
  return <div className="page-content">
    <section className="welcome"><div><p className="eyebrow">Friday, 21 August</p><h1>Your next edge starts here, Aarav.</h1><p>Build skills the market is moving toward—not away from.</p></div><div className="signal-orbit"><span>42%</span><small>top skill growth</small></div></section>
    <section className="stat-row">
      <article><span className="stat-icon lime"><Icon name="roadmap"/></span><div><small>Roadmap progress</small><strong>38%</strong></div><i><b style={{width:"38%"}}/></i></article>
      <article><span className="stat-icon blue"><Icon name="spark"/></span><div><small>Skills evidenced</small><strong>7 <em>/ 12</em></strong></div><p>+2 this month</p></article>
      <article><span className="stat-icon pink"><Icon name="trophy"/></span><div><small>Cohort rank</small><strong>#14 <em>/ 286</em></strong></div><p>Top 5%</p></article>
    </section>
    <section className="section-head"><div><p className="eyebrow">Market intelligence</p><h2>Skills gaining momentum</h2></div><button className="text-link" onClick={() => setActive("Skill trends")}>Explore all trends <Icon name="arrow" size={17}/></button></section>
    <div className="trend-grid">{trends.slice(0,3).map((item)=><TrendCard key={item.rank} item={item}/>)}</div>
    <section className="split-grid">
      <article className="roadmap-card panel">
        <div className="panel-head"><div><p className="eyebrow">Your roadmap</p><h2>What&apos;s next</h2></div><button className="text-link" onClick={() => setActive("My roadmap")}>View plan <Icon name="arrow" size={16}/></button></div>
        <div className="next-step"><span className="step-number">02</span><div><small>IN PROGRESS · MILESTONE 2 OF 5</small><h3>Build your first RAG application</h3><p>Generative AI Engineering track</p><div className="step-meta"><span><Icon name="clock" size={15}/> Due 28 Aug</span><span><Icon name="book" size={15}/> 3 lessons left</span></div></div></div>
        <div className="road-line"><i className="done"><Icon name="check" size={14}/></i><b/><i className="current">2</i><b/><i>3</i><b/><i>4</i><b/><i><Icon name="lock" size={13}/></i></div>
      </article>
      <article className="panel leaderboard-mini">
        <div className="panel-head"><div><p className="eyebrow">This week</p><h2>Top learners</h2></div><button className="text-link" onClick={() => setActive("Leaderboard")}>Full board</button></div>
        {[['01','Meera Iyer','1,840'],['02','Rohan Patel','1,625'],['14','You','1,280']].map(([rank,name,pts])=><div className={name==='You'?'leader-row you':'leader-row'} key={name}><span>{rank}</span><i>{name.split(' ').map(n=>n[0]).join('')}</i><strong>{name}</strong><small>{pts} pts</small></div>)}
      </article>
    </section>
    <section className="section-head compact"><div><p className="eyebrow">Recommended for you</p><h2>Courses aligned to your gap</h2></div><button className="text-link" onClick={() => setActive("Courses")}>View marketplace <Icon name="arrow" size={17}/></button></section>
    <div className="course-grid">{courses.map(c=><CourseCard key={c.name} course={c} enrolled={enrolled.includes(c.name)} onEnroll={()=>setEnrolled([...enrolled,c.name])}/>)}</div>
  </div>;
}

function TrendCard({ item }: { item: typeof trends[number] }) {
  return <article className="trend-card"><div className={`trend-art ${item.color}`}><span>{item.rank}</span><i/><i/><i/><b>↗</b></div><div className="trend-copy"><div><span className="tag">{item.tag}</span><span className={`confidence ${item.confidence.toLowerCase()}`}>{item.confidence}</span></div><h3>{item.name}</h3><p><strong>{item.growth}</strong> demand growth · 12 months</p><small>{item.sources}</small></div></article>;
}

function CourseCard({ course, enrolled, onEnroll }: { course: typeof courses[number]; enrolled: boolean; onEnroll: () => void }) {
  return <article className="course-card"><div className="course-art" style={{background:course.color}}><span>{course.provider.split(' ')[0]}</span><Icon name="play" size={25}/></div><div><small>{course.provider}</small><h3>{course.name}</h3><p>{course.meta}</p><div className="course-foot"><span>{course.level}</span><button className={enrolled?"enrolled":""} onClick={onEnroll}>{enrolled?<><Icon name="check" size={15}/> Added</>:"View course"}</button></div></div></article>;
}

function TrendsView({ filter, setFilter }: { filter: string; setFilter: (f: string) => void }) {
  const filtered = filter === "All" ? trends : trends.filter(t => t.tag.includes(filter));
  return <div className="page-content"><PageIntro eyebrow="Prediction engine · v2026.08" title="Where the market is moving" copy="Transparent, evidence-backed skill signals—not promises. Each trend combines independent demand sources and human review."/>
    <div className="filter-row">{["All","CS / IT","Commerce","Engineering"].map(f=><button key={f} className={filter===f?"active":""} onClick={()=>setFilter(f)}>{f}</button>)}</div>
    <div className="trend-list">{filtered.map(t=><TrendCard key={t.rank} item={t}/>)}</div>
    <div className="method-note"><Icon name="spark"/><div><strong>How confidence works</strong><p>High confidence requires rising growth across at least two independent sources. Low-confidence signals remain visible, but are weighted conservatively in recommendations.</p></div></div>
  </div>;
}

function CoursesView({ enrolled, setEnrolled }: { enrolled: string[]; setEnrolled: (s: string[]) => void }) {
  return <div className="page-content"><PageIntro eyebrow="Curated marketplace" title="Courses that close the gap" copy="Recommendations map directly to rising skills and your personal roadmap. Course credentials are issued by their named providers."/>
    <div className="course-grid wide">{courses.map(c=><CourseCard key={c.name} course={c} enrolled={enrolled.includes(c.name)} onEnroll={()=>setEnrolled([...enrolled,c.name])}/>)}</div>
    <section className="panel course-note"><span className="stat-icon lime"><Icon name="check"/></span><div><h3>Evidence, not empty badges</h3><p>Once a provider confirms completion, the skill is added to your profile with its source and completion date. Nextedge does not issue or imply third-party certification.</p></div></section>
  </div>;
}

function RoadmapView() {
  const [done, setDone] = useState([true,false,false,false]);
  const items = [
    ["Complete: LLM foundations", "DeepLearning.AI · completed 16 Aug", "done"],
    ["Build your first RAG application", "3 lessons left · due 28 Aug", "current"],
    ["Attempt the GenAI skill challenge", "Unlocks after milestone 2", "locked"],
    ["Publish your project evidence", "Add it to your Nextedge portfolio", "locked"],
  ];
  return <div className="page-content"><PageIntro eyebrow="Personalized learning plan" title="Your GenAI engineering roadmap" copy="A transparent plan generated from your current skill gap, aptitude strengths, and high-confidence market signals."/>
    <div className="roadmap-layout"><div className="panel roadmap-detail"><div className="roadmap-summary"><div><span>38%</span><small>complete</small></div><section><p>Target completion</p><strong>30 September 2026</strong><i><b style={{width:done.filter(Boolean).length*25+'%'}}/></i></section></div>
      <div className="milestones">{items.map((item,i)=><button key={item[0]} className={`milestone ${done[i]?'done':item[2]}`} onClick={()=>{if(i===1){const n=[...done];n[i]=!n[i];setDone(n)}}}><span>{done[i]?<Icon name="check"/>:item[2]==='locked'?<Icon name="lock"/>:i+1}</span><div><small>MILESTONE {i+1}</small><h3>{item[0]}</h3><p>{item[1]}</p></div>{i===1&&<em>{done[i]?'Undo':'Mark done'}</em>}</button>)}</div>
    </div><aside className="panel why-card"><p className="eyebrow">Why this path?</p><h3>Built around your strongest signals</h3><div><span>01</span><p><strong>Market demand</strong>GenAI engineering is growing 42% across GitHub and job demand.</p></div><div><span>02</span><p><strong>Your aptitude</strong>Logical reasoning and systems thinking are your strongest dimensions.</p></div><div><span>03</span><p><strong>Your skill gap</strong>You have Python foundations but no evidenced LLM application work yet.</p></div></aside></div>
  </div>;
}

function SkillsView() {
  return <div className="page-content"><PageIntro eyebrow="Talent & evidence profile" title="The skills behind your potential" copy="A living view of assessed strengths, existing capabilities, and skills evidenced through completed work."/>
    <div className="skills-layout"><section className="panel aptitude"><div className="panel-head"><div><p className="eyebrow">Aptitude profile</p><h2>Your strongest dimensions</h2></div><span className="tag">ASSESSMENT v1.2</span></div>
      {[['Logical reasoning',86],['Systems thinking',78],['Spatial reasoning',71],['Linguistic',64],['Interpersonal',59]].map(([n,v])=><div className="skill-bar" key={n}><span>{n}</span><i><b style={{width:v+'%'}}/></i><strong>{v}</strong></div>)}
      <p className="fine-print">Based on the in-app analytical reasoning assessment. This profile is directional guidance, not a diagnosis or fixed measure of ability.</p>
    </section><section className="panel evidence"><p className="eyebrow">Evidence ledger</p><h2>Acquired skills</h2>{[['Python','Course + quiz','High'],['Data analysis','2 challenges','High'],['Cloud foundations','Course','Medium'],['Prompt design','Quiz','Medium']].map(([s,e,c])=><div key={s}><span><Icon name="check" size={16}/></span><p><strong>{s}</strong><small>{e}</small></p><em>{c}</em></div>)}</section></div>
    <div className="method-note warning"><Icon name="spark"/><div><strong>DMIT / fingerprint assessment is not enabled</strong><p>The PRD flags insufficient scientific consensus and requires legal/advisory approval plus a licensed third-party provider before this feature can be considered.</p></div></div>
  </div>;
}

function PortfolioView({ shared, setShared }: { shared: boolean; setShared: (v:boolean)=>void }) {
  return <div className="page-content"><PageIntro eyebrow="Automatic portfolio" title="Your progress, ready to prove" copy="A recruiter-friendly record of verified course activity, quiz evidence, badges, and learning momentum."/>
    <section className="portfolio-preview"><div className="portfolio-top"><div><p>STUDENT PORTFOLIO · UPDATED TODAY</p><h2>Aarav Sharma</h2><span>Computer Science · Somaiya University · Class of 2027</span></div><div className="monogram">AS</div></div>
      <div className="portfolio-body"><section><p className="eyebrow">Profile</p><h3>Emerging AI engineer with foundations in Python, data analysis, and cloud systems.</h3><p>Currently building applied GenAI capabilities through a structured, evidence-backed learning track.</p></section><section><p className="eyebrow">Evidence snapshot</p><div className="portfolio-stats"><span><strong>7</strong>Skills evidenced</span><span><strong>3</strong>Courses completed</span><span><strong>4</strong>Challenges passed</span></div></section></div>
      <div className="portfolio-tags"><span>Python · High evidence</span><span>Data analysis · High evidence</span><span>Cloud foundations</span><span>Prompt design</span></div>
    </section>
    <div className="portfolio-actions"><button className="primary-button"><Icon name="portfolio" size={17}/> Export PDF</button><button className={shared?"secondary-button shared":"secondary-button"} onClick={()=>setShared(!shared)}><Icon name={shared?"check":"share"} size={17}/>{shared?"Private link created":"Create private share link"}</button><p><Icon name="lock" size={15}/> Sharing is off by default and can be revoked anytime.</p></div>
  </div>;
}

function LeaderboardView() {
  const people = [['01','Meera Iyer','Commerce','1,840'],['02','Rohan Patel','Computer Science','1,625'],['03','Ananya Singh','Core Engineering','1,490'],['14','Aarav Sharma','Computer Science','1,280']];
  return <div className="page-content"><PageIntro eyebrow="Opt-in cohort leaderboard" title="Learning momentum, together" copy="Points recognize engagement—not certification or academic ability. You control whether your name or a pseudonym appears."/>
    <div className="panel leaderboard-full">{people.map(([r,n,d,p])=><div className={r==='14'?'you':''} key={n}><span>{r}</span><i>{n.split(' ').map(x=>x[0]).join('')}</i><p><strong>{n}{r==='14'&&' · You'}</strong><small>{d}</small></p><em>{p} pts</em></div>)}</div>
  </div>;
}

function AdminView({ active }: { active: string }) {
  const [period,setPeriod]=useState('30 days');
  const title = active === 'Overview' ? 'Institution overview' : active;
  return <div className="page-content"><div className="page-intro"><div><p className="eyebrow">TPO administration</p><h1>{title}</h1><p>Somaiya University · All departments</p></div><select value={period} onChange={e=>setPeriod(e.target.value)}><option>30 days</option><option>90 days</option><option>This year</option></select></div>
    <section className="stat-row admin-stats"><article><span className="stat-icon lime"><Icon name="users"/></span><div><small>Active learners</small><strong>1,842</strong></div><p>+12.4%</p></article><article><span className="stat-icon blue"><Icon name="chart"/></span><div><small>Track completion</small><strong>64%</strong></div><p>+7.1%</p></article><article><span className="stat-icon pink"><Icon name="briefcase"/></span><div><small>Confirmed enrollments</small><strong>326</strong></div><p>+18.2%</p></article></section>
    <section className="admin-grid"><article className="panel activity-chart"><div className="panel-head"><div><p className="eyebrow">Engagement</p><h2>Weekly active learners</h2></div><span className="confidence high">Healthy</span></div><div className="chart-bars">{[42,58,51,68,72,64,84,78,92,88,95,91].map((v,i)=><i key={i} style={{height:v+'%'}}><b/></i>)}</div><div className="chart-labels"><span>Jun</span><span>Jul</span><span>Aug</span></div></article>
      <article className="panel funnel"><p className="eyebrow">Learning funnel</p><h2>Where learners stop</h2>{[['Trend viewed','2,810',100],['Course explored','1,964',70],['Course started','876',31],['Evidence completed','326',12]].map(([n,c,w])=><div key={n as string}><p><span>{n}</span><strong>{c}</strong></p><i><b style={{width:w+'%'}}/></i></div>)}</article></section>
    <section className="panel department-table"><div className="panel-head"><div><p className="eyebrow">Department performance</p><h2>Engagement by cluster</h2></div><button className="secondary-button">Export report</button></div><div className="table-row head"><span>Department</span><span>Active</span><span>Completion</span><span>Top emerging skill</span></div>{[['Computer Science','82%','71%','Generative AI'],['Commerce & Management','68%','59%','Sustainable Finance'],['Core Engineering','61%','52%','Digital Twins']].map(r=><div className="table-row" key={r[0]}>{r.map((c,i)=><span key={c}>{i===0?<><i>{c.slice(0,2).toUpperCase()}</i><strong>{c}</strong></>:c}</span>)}</div>)}</section>
  </div>;
}

export { Dashboard };
