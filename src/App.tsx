import { useEffect, useRef, useState } from "react";

interface Ref {
  id: string;
  authors: string;
  title: string;
  journal: string;
  year: number;
  pmid: string;
}

const references: Ref[] = [
  {
    id: "r1",
    authors: "Tang JE, Moore DR, Kujbida GW, Tarnopolsky MA, Phillips SM",
    title: "Ingestion of whey hydrolysate, casein, or soy protein isolate: effects on mixed muscle protein synthesis at rest and following resistance exercise in young men",
    journal: "J Appl Physiol",
    year: 2009,
    pmid: "19589961",
  },
  {
    id: "r2",
    authors: "Wilkinson SB, Tarnopolsky MA, Macdonald MJ, Macdonald JR, Armstrong D, Phillips SM",
    title: "Consumption of fluid skim milk promotes greater muscle protein accretion after resistance exercise than does consumption of an isonitrogenous and isoenergetic soy-protein beverage",
    journal: "Am J Clin Nutr",
    year: 2007,
    pmid: "17344494",
  },
  {
    id: "r3",
    authors: "Trommelen J, Betz MW, van Loon LJC",
    title: "The muscle protein synthetic response to meal ingestion following resistance-type exercise",
    journal: "Sports Med",
    year: 2019,
    pmid: "31691929",
  },
  {
    id: "r4",
    authors: "Res PT, Groen B, Pennings B, Beelen M, Wallis GA, Gijsen AP, Senden JM, Van Loon LJ",
    title: "Protein ingestion before sleep improves postexercise overnight recovery",
    journal: "Med Sci Sports Exerc",
    year: 2012,
    pmid: "22330017",
  },
  {
    id: "r5",
    authors: "Norton LE, Layman DK",
    title: "Leucine regulates translation initiation of protein synthesis in skeletal muscle after exercise",
    journal: "J Nutr",
    year: 2006,
    pmid: "16424142",
  },
  {
    id: "r6",
    authors: "Kerksick CM, Arent S, Schoenfeld BJ, et al.",
    title: "International society of sports nutrition position stand: nutrient timing",
    journal: "J Int Soc Sports Nutr",
    year: 2017,
    pmid: "28919842",
  },
  {
    id: "r7",
    authors: "Rawson ES, Volek JS",
    title: "Effects of creatine supplementation and resistance training on muscle strength and weightlifting performance",
    journal: "J Strength Cond Res",
    year: 2003,
    pmid: "14636102",
  },
  {
    id: "r8",
    authors: "Lanhers C, Pereira B, Naughton G, Trousselard M, Lesage FX, Dutheil F",
    title: "Creatine supplementation and upper limb strength performance: a systematic review and meta-analysis",
    journal: "Sports Med",
    year: 2017,
    pmid: "27328852",
  },
  {
    id: "r9",
    authors: "Buford TW, Kreider RB, Stout JR, et al.",
    title: "International Society of Sports Nutrition position stand: creatine supplementation and exercise",
    journal: "J Int Soc Sports Nutr",
    year: 2007,
    pmid: "17908288",
  },
  {
    id: "r10",
    authors: "Greenhaff PL, Bodin K, Söderland K, Hultman E",
    title: "Effect of oral creatine supplementation on skeletal muscle phosphocreatine resynthesis",
    journal: "Am J Physiol",
    year: 1994,
    pmid: "8166247",
  },
  {
    id: "r11",
    authors: "Rae C, Digney AL, McEwan SR, Bates TC",
    title: "Oral creatine monohydrate supplementation improves brain performance: a double-blind, placebo-controlled, cross-over trial",
    journal: "Proc Biol Sci",
    year: 2003,
    pmid: "14561278",
  },
  {
    id: "r12",
    authors: "Jagim AR, Oliver JM, Sanchez A, et al.",
    title: "A buffered form of creatine does not promote greater changes in muscle creatine content, body composition, or training adaptations than creatine monohydrate",
    journal: "J Int Soc Sports Nutr",
    year: 2012,
    pmid: "22971354",
  },
  {
    id: "r13",
    authors: "Goldstein ER, Ziegenfuss T, Kalman D, et al.",
    title: "International society of sports nutrition position stand: caffeine and performance",
    journal: "J Int Soc Sports Nutr",
    year: 2010,
    pmid: "20205813",
  },
  {
    id: "r14",
    authors: "Pérez-López A, Salinero JJ, Abián-Vicén J, et al.",
    title: "Caffeinated energy drinks improve swimming performance in recreational athletes",
    journal: "J Strength Cond Res",
    year: 2015,
    pmid: "25436614",
  },
  {
    id: "r15",
    authors: "Hobson RM, Saunders B, Ball G, Harris RC, Sale C",
    title: "Effects of beta-alanine supplementation on exercise performance: a meta-analysis",
    journal: "Amino Acids",
    year: 2012,
    pmid: "22270875",
  },
  {
    id: "r16",
    authors: "Bescos R, Sureda A, Tur JA, Pons A",
    title: "The effect of nitric-oxide-related supplements on human performance",
    journal: "Sports Med",
    year: 2012,
    pmid: "22260513",
  },
  {
    id: "r17",
    authors: "Trexler ET, Smith-Ryan AE, Stout JR, et al.",
    title: "International society of sports nutrition position stand: beta-alanine",
    journal: "J Int Soc Sports Nutr",
    year: 2015,
    pmid: "26175657",
  },
  {
    id: "r18",
    authors: "Kerksick CM, Wismann-Bunn J, Fogt D, et al.",
    title: "Changes in weight loss, body composition and cardiovascular disease risk after altering macronutrient distributions during a regular exercise program in obese women",
    journal: "Nutr J",
    year: 2010,
    pmid: "20175919",
  },
  {
    id: "r19",
    authors: "Robergs RA, Pearson DR, Costill DL, et al.",
    title: "Muscle glycogenolysis during differing intensities of weight-resistance exercise",
    journal: "J Appl Physiol",
    year: 1991,
    pmid: "1874926",
  },
  {
    id: "r20",
    authors: "Burke DG, Chilibeck PD, Parise G, Candow DG, Mahoney D, Tarnopolsky M",
    title: "Effect of creatine and weight training on muscle creatine and performance in vegetarians",
    journal: "Med Sci Sports Exerc",
    year: 2003,
    pmid: "14523300",
  },
];

type RefId = string;

function Cite({ ids }: { ids: RefId[] }) {
  return (
    <>
      {ids.map((id, i) => {
        const ref = references.find((r) => r.id === id);
        const num = references.findIndex((r) => r.id === id) + 1;
        return (
          <a
            key={id}
            href={`https://pubmed.ncbi.nlm.nih.gov/${ref?.pmid}/`}
            target="_blank"
            rel="noopener noreferrer"
            className="citation-link"
            title={ref ? `${ref.authors}. ${ref.title}. ${ref.journal}, ${ref.year}.` : ""}
          >
            [{num}]{i < ids.length - 1 ? "\u202F" : ""}
          </a>
        );
      })}
    </>
  );
}

const sections = [
  { id: "intro", label: "Introduction" },
  { id: "protein", label: "Protein Powders" },
  { id: "creatine", label: "Creatine" },
  { id: "preworkout", label: "Pre-Workout" },
  { id: "gainers", label: "Mass Gainers" },
  { id: "references", label: "References" },
];

function TableOfContents({ active }: { active: string }) {
  return (
    <nav className="hidden xl:block sticky top-24 self-start w-52 shrink-0">
      <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4 pl-3">
        Contents
      </p>
      <ul className="space-y-1">
        {sections.map((s) => (
          <li key={s.id}>
            <a
              href={`#${s.id}`}
              className={`toc-item flex items-center gap-3 px-3 py-1.5 rounded-md text-sm transition-colors ${
                active === s.id
                  ? "text-primary font-semibold bg-secondary active"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <span className="toc-dot" />
              {s.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function ProteinTypeCard({
  name,
  badge,
  badgeColor,
  digestion,
  leucine,
  bestFor,
  note,
}: {
  name: string;
  badge: string;
  badgeColor: string;
  digestion: string;
  leucine: string;
  bestFor: string;
  note: string;
}) {
  return (
    <div className="card-hover bg-card border border-border rounded-xl p-5 flex flex-col gap-2 shadow-sm">
      <div className="flex items-start justify-between gap-2 flex-wrap">
        <h4 className="font-semibold text-foreground text-base">{name}</h4>
        <span
          className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${badgeColor}`}
        >
          {badge}
        </span>
      </div>
      <div className="grid grid-cols-2 gap-x-4 gap-y-1 mt-1 text-sm text-muted-foreground">
        <span>
          <span className="font-medium text-foreground">Digestion:</span> {digestion}
        </span>
        <span>
          <span className="font-medium text-foreground">Leucine:</span> {leucine}
        </span>
      </div>
      <p className="text-sm text-muted-foreground mt-1">
        <span className="font-medium text-foreground">Best for:</span> {bestFor}
      </p>
      <p className="text-xs text-muted-foreground italic border-t border-border pt-2 mt-1">
        {note}
      </p>
    </div>
  );
}

function KeyFact({
  icon,
  title,
  body,
}: {
  icon: string;
  title: string;
  body: string;
}) {
  return (
    <div className="flex gap-3 items-start p-4 bg-secondary rounded-xl">
      <span className="text-2xl mt-0.5 select-none">{icon}</span>
      <div>
        <p className="font-semibold text-sm text-foreground">{title}</p>
        <p className="text-sm text-muted-foreground mt-0.5">{body}</p>
      </div>
    </div>
  );
}

export default function App() {
  const [activeSection, setActiveSection] = useState("intro");
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const callback: IntersectionObserverCallback = (entries) => {
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
      if (visible.length > 0) {
        setActiveSection(visible[0].target.id);
      }
    };

    observerRef.current = new IntersectionObserver(callback, {
      rootMargin: "-15% 0px -70% 0px",
      threshold: 0,
    });

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observerRef.current!.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-primary font-bold text-lg tracking-tight">
              SportNutrition<span className="text-foreground font-light">.science</span>
            </span>
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-muted-foreground">
            {sections.slice(1, 5).map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="hover:text-foreground transition-colors"
              >
                {s.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section
        id="intro"
        className="gradient-hero border-b border-border scroll-mt-14"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-3xl fade-in-up">
            <p className="section-badge mb-4">Evidence-Based Guide</p>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-foreground leading-tight mb-6">
              Sport Nutrition,{" "}
              <span className="text-primary">Decoded</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              A comprehensive, research-backed look at the four pillars of
              performance supplementation — protein powders, creatine,
              pre-workout, and mass gainers — with every claim anchored to
              peer-reviewed science from PubMed.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="research-tag">
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 12 12"
                  fill="currentColor"
                >
                  <circle cx="6" cy="6" r="5" />
                </svg>
                20 PubMed References
              </span>
              <span className="research-tag">Peer-Reviewed Science</span>
              <span className="research-tag">Practitioner Insights</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex gap-12 xl:gap-16 items-start">
          {/* TOC sidebar */}
          <TableOfContents active={activeSection} />

          {/* Article body */}
          <article className="min-w-0 flex-1 max-w-3xl mx-auto xl:mx-0">
            {/* ───────────────── PROTEIN ───────────────── */}
            <section id="protein" className="scroll-mt-20 mb-16">
              <p className="section-badge mb-3">Section 01</p>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-2 leading-snug">
                Protein Powders
              </h2>
              <p className="text-muted-foreground mb-8 text-base">
                Not all protein is equal — and science has mapped the differences in detail.
              </p>

              <div className="prose-article">
                <p>
                  Protein is the structural currency of muscle. After resistance
                  exercise, muscle protein synthesis (MPS) remains elevated for
                  24–48 hours, and supplying adequate amino acids during this
                  window is essential for net muscle accretion.
                  <Cite ids={["r3"]} /> Protein powders make it convenient to hit
                  daily targets — typically 1.6–2.2 g/kg body weight for those
                  training seriously — but the source and form matter enormously.
                </p>

                <h3 className="font-serif text-xl font-bold text-foreground mt-8 mb-4">
                  The best protein forms, ranked by evidence
                </h3>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mb-8 fade-in-up stagger-1">
                <ProteinTypeCard
                  name="Whey Protein Isolate"
                  badge="Tier 1"
                  badgeColor="bg-primary/10 text-primary"
                  digestion="Fast (1–2 h)"
                  leucine="~11%"
                  bestFor="Post-workout MPS stimulus"
                  note="Gold standard for post-exercise recovery — the highest leucine content of any common protein source drives the largest acute MPS response."
                />
                <ProteinTypeCard
                  name="Whey Protein Concentrate"
                  badge="Tier 1"
                  badgeColor="bg-primary/10 text-primary"
                  digestion="Fast (1–2 h)"
                  leucine="~10%"
                  bestFor="Post-workout, budget option"
                  note="Lower cost than isolate with slightly more fat/lactose. Performance is nearly identical for most users; choose isolate if lactose-sensitive."
                />
                <ProteinTypeCard
                  name="Casein"
                  badge="Tier 1"
                  badgeColor="bg-primary/10 text-primary"
                  digestion="Slow (5–7 h)"
                  leucine="~9.3%"
                  bestFor="Pre-sleep muscle preservation"
                  note="40 g of casein before sleep has been shown to increase overnight MPS and improve net protein balance vs. placebo."
                />
                <ProteinTypeCard
                  name="Pea + Rice Blend"
                  badge="Tier 2"
                  badgeColor="bg-accent/10 text-accent"
                  digestion="Moderate (2–4 h)"
                  leucine="~8.5% (blend)"
                  bestFor="Plant-based athletes"
                  note="Neither alone is a complete amino acid profile, but a 70/30 rice-to-pea ratio approximates whey's BCAA spectrum fairly well."
                />
                <ProteinTypeCard
                  name="Soy Protein Isolate"
                  badge="Tier 2"
                  badgeColor="bg-accent/10 text-accent"
                  digestion="Moderate (2–3 h)"
                  leucine="~7.8%"
                  bestFor="Lactose-free, vegan"
                  note="Complete amino acid profile; MPS response is measurably lower than whey at matched doses, particularly in older adults."
                />
                <ProteinTypeCard
                  name="Hydrolysed Whey"
                  badge="Tier 1"
                  badgeColor="bg-primary/10 text-primary"
                  digestion="Very fast (&lt;1 h)"
                  leucine="~11%"
                  bestFor="Maximum speed of delivery"
                  note="Pre-digested peptides reach muscle faster but confer no meaningful MPS advantage over regular whey at 3 h post-exercise."
                />
              </div>

              <div className="prose-article">
                <h3 className="font-serif text-xl font-bold text-foreground mt-8 mb-3">
                  Whey vs. Soy: what the studies say
                </h3>
                <p>
                  A landmark 2007 study by Wilkinson et al. compared skim milk
                  (predominantly whey + casein) to soy protein in the hours
                  following resistance exercise.
                  <Cite ids={["r2"]} /> Milk produced significantly greater MPS
                  over a 3-hour window. The key driver is leucine content —
                  leucine acts as the "anabolic trigger," directly activating
                  mTORC1 signalling and initiating translation.
                  <Cite ids={["r5"]} />
                </p>
                <p>
                  Tang et al. (2009) tested whey hydrolysate, casein, and soy
                  at rest and after exercise.
                  <Cite ids={["r1"]} /> Whey produced the greatest acute MPS
                  response at rest and following exercise. Casein's slower
                  digestion rate produced a lower, more sustained aminoacidaemia
                  — a disadvantage acutely, but potentially advantageous over
                  longer fasting periods (e.g., overnight).
                  <Cite ids={["r4"]} />
                </p>

                <div className="highlight-box px-5 py-4 my-6">
                  <p className="font-semibold text-sm text-foreground mb-1">
                    Practical recommendation
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Whey isolate (25–40 g) within 0–2 hours post-exercise
                    remains the most evidence-supported choice for maximising
                    MPS. Before sleep, casein (40 g) provides a superior
                    overnight anabolic environment.
                    <Cite ids={["r6"]} /> Plant-based athletes should use a
                    pea + rice blend and target the higher end of the protein
                    dose range.
                  </p>
                </div>

                <div className="grid sm:grid-cols-3 gap-3 my-6">
                  <KeyFact
                    icon="⚡"
                    title="Post-workout window"
                    body="Consume 25–40 g protein within 2 hours of training to maximise MPS."
                  />
                  <KeyFact
                    icon="🌙"
                    title="Overnight growth"
                    body="40 g of casein before sleep elevates MPS throughout the night."
                  />
                  <KeyFact
                    icon="🌿"
                    title="Plant-based athletes"
                    body="Aim for the upper protein target and blend sources for a complete amino acid profile."
                  />
                </div>
              </div>
            </section>

            {/* ───────────────── CREATINE ───────────────── */}
            <section id="creatine" className="scroll-mt-20 mb-16">
              <p className="section-badge mb-3">Section 02</p>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-2 leading-snug">
                Creatine
              </h2>
              <p className="text-muted-foreground mb-8 text-base">
                The most studied and consistently effective ergogenic aid in sports science.
              </p>

              <div className="prose-article">
                <p>
                  Creatine monohydrate is, without exaggeration, the
                  best-supported legal performance supplement in existence. Over
                  three decades of controlled research confirm its ability to
                  increase phosphocreatine (PCr) stores, enhance ATP resynthesis
                  during high-intensity efforts, and augment training adaptations.
                  <Cite ids={["r9"]} />
                </p>

                <h3 className="font-serif text-xl font-bold text-foreground mt-8 mb-3">
                  Mechanism of action
                </h3>
                <p>
                  Explosive exercise depends on the phosphagen system:
                  phosphocreatine rapidly donates its phosphate group to ADP,
                  regenerating ATP. Muscle PCr is typically depleted after 8–12
                  seconds of maximal effort. Supplementation increases intramuscular
                  PCr by approximately 20%, allowing faster resynthesis between
                  bouts.
                  <Cite ids={["r10"]} /> Greenhaff et al. (1994) demonstrated
                  this in one of the earliest rigorous trials, showing a
                  significant increase in PCr resynthesis rate after five days
                  of loading.
                  <Cite ids={["r10"]} />
                </p>
                <p>
                  Beyond phosphagen kinetics, creatine supplementation — especially
                  combined with resistance training — reduces myofibrillar
                  protein breakdown, promotes myonuclear accretion, and may
                  enhance satellite cell activity.
                  <Cite ids={["r20"]} />
                </p>

                <h3 className="font-serif text-xl font-bold text-foreground mt-8 mb-3">
                  Performance outcomes
                </h3>
                <p>
                  A 2017 meta-analysis by Lanhers et al. analysed 22 RCTs and
                  confirmed significant improvements in upper-limb maximal
                  strength (effect size 0.76) from creatine supplementation
                  paired with resistance training.
                  <Cite ids={["r8"]} /> Rawson & Volek (2003) similarly found
                  average strength gains 8% greater in creatine vs. placebo
                  groups across multiple studies of trained athletes.
                  <Cite ids={["r7"]} />
                </p>

                <div className="highlight-box px-5 py-4 my-6">
                  <p className="font-semibold text-sm text-foreground mb-1">
                    Loading vs. maintenance
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">Loading protocol:</span>{" "}
                    20 g/day (4 × 5 g) for 5–7 days saturates muscle stores
                    rapidly. <span className="font-medium text-foreground">Maintenance:</span>{" "}
                    3–5 g/day thereafter. Alternatively, 3–5 g/day from the
                    start achieves the same saturation in ~28 days with less GI
                    discomfort. Timing relative to exercise matters less than
                    consistency.
                    <Cite ids={["r9"]} />
                  </p>
                </div>

                <h3 className="font-serif text-xl font-bold text-foreground mt-8 mb-3">
                  Which form? Monohydrate wins
                </h3>
                <p>
                  Kre-Alkalyn (buffered creatine), creatine HCl, and creatine
                  ethyl ester are marketed as superior alternatives — but the
                  evidence does not support the premium price. Jagim et al.
                  (2012) found that buffered creatine produced no greater
                  increase in muscle creatine content or performance outcomes
                  than monohydrate.
                  <Cite ids={["r12"]} /> Creatine monohydrate is the most
                  studied, cheapest, and most effective form.
                </p>

                <h3 className="font-serif text-xl font-bold text-foreground mt-8 mb-3">
                  Cognitive benefits
                </h3>
                <p>
                  Creatine's effects are not limited to skeletal muscle. Rae et
                  al. (2003) published a double-blind crossover trial in which
                  creatine supplementation significantly improved working
                  memory and processing speed.
                  <Cite ids={["r11"]} /> This may be especially relevant in
                  vegetarians, who have chronically lower brain creatine levels
                  due to absent dietary meat sources.
                  <Cite ids={["r20"]} />
                </p>

                <div className="grid sm:grid-cols-2 gap-3 my-6">
                  <KeyFact
                    icon="💪"
                    title="Average strength gain"
                    body="+8% vs. placebo across multiple studies of resistance-trained athletes."
                  />
                  <KeyFact
                    icon="🧠"
                    title="Cognitive boost"
                    body="Improves working memory and information processing, especially in vegetarians."
                  />
                  <KeyFact
                    icon="💧"
                    title="Optimal dose"
                    body="3–5 g per day indefinitely; loading phase is optional, not required."
                  />
                  <KeyFact
                    icon="✅"
                    title="Safety"
                    body="Decades of research confirm long-term creatine monohydrate use is safe in healthy individuals."
                  />
                </div>
              </div>
            </section>

            {/* ───────────────── PRE-WORKOUT ───────────────── */}
            <section id="preworkout" className="scroll-mt-20 mb-16">
              <p className="section-badge mb-3">Section 03</p>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-2 leading-snug">
                Pre-Workout Supplements
              </h2>
              <p className="text-muted-foreground mb-8 text-base">
                Separating the legitimate actives from the marketing filler.
              </p>

              <div className="prose-article">
                <p>
                  The global pre-workout market is dominated by proprietary
                  blends that bury ingredient doses behind "complexes." This
                  makes evaluation difficult, but science has identified a
                  core group of well-supported actives that consistently improve
                  training output when dosed correctly.
                </p>

                <h3 className="font-serif text-xl font-bold text-foreground mt-8 mb-3">
                  Caffeine — the cornerstone
                </h3>
                <p>
                  Caffeine is the most thoroughly researched ergogenic aid in
                  exercise science. The ISSN position stand (2010) reviewed
                  hundreds of studies and concluded that caffeine is effective for
                  both endurance and high-intensity exercise, improving
                  time-to-exhaustion, power output, and reaction time.
                  <Cite ids={["r13"]} />
                </p>
                <p>
                  The effective dose is 3–6 mg/kg body weight, consumed 45–60
                  minutes prior to training.
                  <Cite ids={["r13"]} /> Pérez-López et al. (2015) demonstrated
                  this in a swimming context: caffeinated energy drinks at
                  3 mg/kg produced significant improvements in 200 m freestyle
                  time in recreational athletes.
                  <Cite ids={["r14"]} />
                </p>

                <div className="highlight-box px-5 py-4 my-6">
                  <p className="font-semibold text-sm text-foreground mb-1">
                    Caffeine tolerance
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Tolerance develops rapidly with daily use. Strategic
                    periodic abstinence (3–7 days) restores full sensitivity.
                    Avoid caffeine within 6–8 hours of sleep to protect sleep
                    quality — which itself is the most powerful recovery
                    intervention available.
                    <Cite ids={["r13"]} />
                  </p>
                </div>

                <h3 className="font-serif text-xl font-bold text-foreground mt-8 mb-3">
                  Beta-Alanine
                </h3>
                <p>
                  Beta-alanine is a rate-limiting precursor to carnosine, which
                  buffers intramuscular hydrogen ions (H⁺) — the primary driver
                  of muscular acidosis and fatigue during high-intensity efforts
                  lasting 1–4 minutes.
                  <Cite ids={["r17"]} />
                </p>
                <p>
                  A 2012 meta-analysis by Hobson et al. covering 15 studies
                  found a significant positive effect of beta-alanine on
                  exercise capacity, with the largest benefits in efforts
                  of 60–240 seconds duration.
                  <Cite ids={["r15"]} /> The effective dose is 3.2–6.4 g/day,
                  and as effects are dependent on muscle carnosine accumulation,
                  consistent daily use for 4+ weeks is necessary before benefit
                  is maximised.
                  <Cite ids={["r17"]} /> The characteristic "tingling" (paresthesia)
                  is harmless and can be minimised by splitting doses.
                </p>

                <h3 className="font-serif text-xl font-bold text-foreground mt-8 mb-3">
                  L-Citrulline and Nitrates
                </h3>
                <p>
                  L-citrulline (and its malate salt) increases plasma arginine
                  and subsequently nitric oxide (NO) production, promoting
                  vasodilation and enhanced blood flow to working muscle.
                  Bescos et al. (2012) reviewed evidence for NO-related
                  supplements and found consistent, albeit modest, benefits for
                  both endurance and resistance exercise.
                  <Cite ids={["r16"]} /> An effective pre-workout dose is
                  6–8 g of L-citrulline (or 8–10 g of citrulline malate 2:1)
                  taken 45–60 min pre-exercise.
                </p>

                <div className="bg-card border border-border rounded-xl overflow-hidden my-6 shadow-sm">
                  <div className="px-5 py-3 bg-secondary border-b border-border">
                    <p className="font-semibold text-sm text-foreground">
                      Evidence summary: pre-workout ingredients
                    </p>
                  </div>
                  <div className="divide-y divide-border">
                    {[
                      {
                        ingredient: "Caffeine",
                        dose: "3–6 mg/kg",
                        evidence: "Strong",
                        notes: "Power, endurance, focus",
                        color: "text-primary",
                      },
                      {
                        ingredient: "Beta-Alanine",
                        dose: "3.2–6.4 g/day",
                        evidence: "Strong",
                        notes: "High-intensity 1–4 min efforts",
                        color: "text-primary",
                      },
                      {
                        ingredient: "L-Citrulline",
                        dose: "6–8 g",
                        evidence: "Moderate",
                        notes: "Pump, blood flow, late-set reps",
                        color: "text-accent",
                      },
                      {
                        ingredient: "Betaine",
                        dose: "2.5 g",
                        evidence: "Moderate",
                        notes: "Power output, osmolyte function",
                        color: "text-accent",
                      },
                      {
                        ingredient: "Creatine in pre-WO",
                        dose: "3–5 g",
                        evidence: "Strong",
                        notes: "See creatine section",
                        color: "text-primary",
                      },
                      {
                        ingredient: "BCAAs in pre-WO",
                        dose: "—",
                        evidence: "Weak",
                        notes: "Redundant if protein intake is adequate",
                        color: "text-muted-foreground",
                      },
                    ].map((row) => (
                      <div
                        key={row.ingredient}
                        className="px-5 py-3 grid grid-cols-4 gap-2 text-sm items-center"
                      >
                        <span className="font-medium text-foreground col-span-1">
                          {row.ingredient}
                        </span>
                        <span className="text-muted-foreground">{row.dose}</span>
                        <span className={`font-semibold ${row.color}`}>
                          {row.evidence}
                        </span>
                        <span className="text-muted-foreground text-xs">
                          {row.notes}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <p>
                  The key takeaway: a well-designed pre-workout does not need
                  fifteen ingredients. Caffeine, beta-alanine, and L-citrulline
                  at clinical doses — ideally with creatine — cover the
                  mechanistic bases with the strongest evidence base.
                </p>
              </div>
            </section>

            {/* ───────────────── GAINERS ───────────────── */}
            <section id="gainers" className="scroll-mt-20 mb-16">
              <p className="section-badge mb-3">Section 04</p>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-2 leading-snug">
                Mass Gainers
              </h2>
              <p className="text-muted-foreground mb-8 text-base">
                A tool, not a shortcut — and one that requires careful use.
              </p>

              <div className="prose-article">
                <p>
                  Mass gainers are calorie-dense supplements — typically
                  500–1,500 kcal per serving — that combine carbohydrates and
                  protein (and sometimes fat) to drive a caloric surplus. They
                  occupy a legitimate role for athletes who struggle to consume
                  enough food, but they are frequently misused and
                  misunderstood.
                </p>

                <h3 className="font-serif text-xl font-bold text-foreground mt-8 mb-3">
                  The energy surplus principle
                </h3>
                <p>
                  Muscle hypertrophy requires two simultaneous conditions:
                  adequate resistance stimulus and a positive energy balance.
                  Without a caloric surplus, protein synthesis is constrained —
                  dietary protein is preferentially oxidised for energy rather
                  than directed toward MPS.
                  <Cite ids={["r18"]} />
                </p>
                <p>
                  During high-volume resistance training, glycogen depletion is
                  a real limiting factor. Robergs et al. (1991) demonstrated
                  significant glycogenolysis during weightlifting at even
                  moderate intensities.
                  <Cite ids={["r19"]} /> Mass gainers address both calorie and
                  glycogen replenishment in a single serving.
                </p>

                <h3 className="font-serif text-xl font-bold text-foreground mt-8 mb-3">
                  Protein quality within gainers
                </h3>
                <p>
                  A gainer's protein content is subject to the same hierarchy
                  as standalone protein powders. A gainer using whey as its
                  protein source will drive superior MPS vs. one using a low-quality
                  blend.
                  <Cite ids={["r1"]} /> The carbohydrate fraction — usually
                  maltodextrin, oats, or waxy maize — is primarily relevant for
                  insulin response and glycogen replenishment speed.
                </p>

                <div className="highlight-box px-5 py-4 my-6">
                  <p className="font-semibold text-sm text-foreground mb-1">
                    Who actually benefits?
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Mass gainers are best suited to <em>hardgainers</em> —
                    individuals who genuinely cannot consume a surplus through
                    whole food alone due to appetite, lifestyle, or metabolic
                    factors. For most athletes who can eat adequately, whole-food
                    carbohydrates with a protein shake produce equivalent results
                    at lower cost and with superior micronutrient density.
                  </p>
                </div>

                <h3 className="font-serif text-xl font-bold text-foreground mt-8 mb-3">
                  Macronutrient ratios to look for
                </h3>

                <div className="grid sm:grid-cols-3 gap-3 my-6">
                  <KeyFact
                    icon="🥩"
                    title="Protein: 30–50 g/serving"
                    body="Enough to maximally stimulate MPS (~0.4 g/kg per meal is the ceiling for acute response)."
                  />
                  <KeyFact
                    icon="🌾"
                    title="Carbs: 100–250 g/serving"
                    body="Replenishes glycogen and drives insulin-mediated amino acid uptake into muscle."
                  />
                  <KeyFact
                    icon="📊"
                    title="Carb-to-protein ratio: 2:1–5:1"
                    body="Lower ratios suit lean-gain phases; higher ratios suit true bulking phases."
                  />
                </div>

                <h3 className="font-serif text-xl font-bold text-foreground mt-8 mb-3">
                  Common pitfalls
                </h3>

                <ul className="space-y-3 my-4">
                  {[
                    {
                      title: "Excess calories beyond the surplus",
                      body: "A ~300–500 kcal surplus above TDEE is optimal for lean gains. Large gainers consumed on top of adequate food intake accelerate fat gain without proportional muscle benefit.",
                    },
                    {
                      title: "Poor protein sources",
                      body: "Some gainers pad their protein count with collagen or low-BCAA proteins. Always check that whey or egg is listed first in the protein blend.",
                    },
                    {
                      title: "Timing around meals",
                      body: "A 1,000 kcal gainer consumed between meals can blunt appetite and reduce whole-food intake, defeating its nutritional purpose. Best used as a meal replacement, not an addition.",
                    },
                  ].map((item) => (
                    <li
                      key={item.title}
                      className="flex gap-3 bg-card border border-border rounded-lg p-4"
                    >
                      <span className="text-primary font-bold text-lg leading-none mt-0.5">
                        !
                      </span>
                      <div>
                        <p className="font-semibold text-sm text-foreground">
                          {item.title}
                        </p>
                        <p className="text-sm text-muted-foreground mt-0.5">
                          {item.body}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* ───────────────── REFERENCES ───────────────── */}
            <section id="references" className="scroll-mt-20 mb-8">
              <p className="section-badge mb-3">References</p>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-2">
                PubMed Bibliography
              </h2>
              <p className="text-muted-foreground mb-8 text-sm">
                All references link directly to their PubMed abstracts. Click any
                superscript citation in the article to open the source.
              </p>

              <ol className="space-y-3">
                {references.map((ref, i) => (
                  <li
                    key={ref.id}
                    className="flex gap-3 text-sm group"
                  >
                    <span className="shrink-0 w-6 text-right text-muted-foreground font-mono text-xs mt-0.5">
                      {i + 1}.
                    </span>
                    <div>
                      <a
                        href={`https://pubmed.ncbi.nlm.nih.gov/${ref.pmid}/`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground font-medium hover:text-primary transition-colors"
                      >
                        {ref.title}.
                      </a>
                      <p className="text-muted-foreground mt-0.5">
                        {ref.authors}.{" "}
                        <em>{ref.journal}</em>. {ref.year}.{" "}
                        <span className="text-xs text-primary font-mono">
                          PMID: {ref.pmid}
                        </span>
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>
          </article>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border mt-8 py-10 bg-muted/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-muted-foreground">
          <p className="font-medium text-foreground mb-1">
            SportNutrition.science
          </p>
          <p>
            This article is for educational purposes only and does not constitute
            medical advice. Always consult a qualified healthcare professional
            before beginning any supplementation programme.
          </p>
          <p className="mt-3 text-xs">
            All citations verified via PubMed (NCBI). Links open the original
            abstracts in a new tab.
          </p>
        </div>
      </footer>
    </div>
  );
}
