/*
  SAFE Evidence Lab — site content
  ---------------------------------
  Edit this file to update people, awards, and publications.
  Headshots: add a square or 4:5 JPG to images/team/ named with the person's
  "photo" value below (e.g. images/team/matt-vassar.jpg). Until a photo exists,
  the site shows the person's initials.
*/
window.SAFE = {
  director: {
    name: "Matt Vassar, PhD",
    photo: "matt-vassar",
    role: "Director, SAFE Evidence Lab",
    titles: [
      "Associate Clinical Professor of Psychiatry and Behavioral Sciences",
      "Director, Office of Medical Student Research, OSU-CHS",
      "Founder and Executive Director, The Witnessing Project Foundation"
    ],
    bio: "Matt Vassar is a methodologist trained in research, evaluation, measurement, and statistics (PhD, Oklahoma State University). His work spans clinical trial transparency, harms reporting, reporting guidelines, research integrity, and the study of public testimony at FDA advisory committees. He is author of SAFE Theory 1.0 and developer of the Testimony Quilting™ and STITCHCIPHER™ methods. He leads the lab's NIH, NSF, and Department of Education awards and has mentored hundreds of medical student researchers.",
    email: "matt.vassar@okstate.edu"
  },

  faculty: [
    {
      name: "Alicia Ito Ford, PhD",
      photo: "alicia-ito-ford",
      role: "Senior Faculty Investigator",
      focus: "Neuropsychology and measurement. Multiple PI on the lab's NIH R01 on harms reporting integrity and PI of the U.S.–Japan Voices of Partnership program."
    },
    {
      name: "Josiah Taru, PhD",
      photo: "josiah-taru",
      role: "Postdoctoral Research Fellow",
      focus: "Social anthropologist working on testimony, witnessing, and community-engaged research design."
    },
    {
      name: "Arnab Mukherjee, PhD",
      photo: "arnab-mukherjee",
      role: "Postdoctoral Research Fellow",
      focus: "Computer science and machine learning. Builds the lab's automated evidence-extraction and harms-tracing tools."
    },
    {
      name: "Melissa Miller, PhD",
      photo: "melissa-miller",
      role: "Postdoctoral Research Fellow (incoming)",
      focus: "Joining the Witnessing Before Deliberating program, funded by the U.S. Department of Education (FIPSE)."
    }
  ],

  program: [
    {
      name: "Ryan Middleton",
      photo: "ryan-middleton",
      role: "Project Director",
      focus: "Directs Witnessing Before Deliberating, the lab's four-year FIPSE program on campus civil discourse."
    },
    {
      name: "MacKenzie Lance-Jones",
      photo: "mackenzie-lance-jones",
      role: "Curriculum & Evaluation Lead",
      focus: "Designs curricula and evaluation plans across the lab's education and civic programs."
    },
    {
      name: "Amanda Sellers",
      photo: "amanda-sellers",
      role: "Facilitation Lead",
      focus: "Leads facilitation for testimony and deliberation sessions."
    },
    {
      name: "Josh Wardle",
      photo: "josh-wardle",
      role: "University Partnerships Lead",
      focus: "Builds and manages the lab's national network of partner universities."
    },
    {
      name: "Evan Shetley",
      photo: "evan-shetley",
      role: "Program Manager",
      focus: "Manages Bearing Witness, a medical student enrichment program in patient safety and physician professionalism funded by the OSMA Foundation."
    },
    {
      name: "Jack Jones",
      photo: "jack-jones",
      role: "Program Manager",
      focus: "Manages the NEA Big Read program Weaving the Sunrise: Stitching Stories of Survival with Joy Harjo."
    }
  ],

  // Student team lead groups. Each group gets its own heading on the page,
  // in this order. "tag" is the small label shown on each card.
  studentGroups: [
    { id: "winter",      title: "Winter Projects", tag: "Winter", tone: "winter" },
    { id: "summer-2027", title: "Summer 2027",     tag: "Summer 2027", tone: "summer" },
    { id: "summer-2028", title: "Summer 2028",     tag: "Summer 2028", tone: "summer",
      note: "June 2028 Computational Meta-Research projects" }
  ],

  // groups: one or more ids from studentGroups above.
  // A student in two groups appears under both headings.
  students: [
    { name: "Kohl Kirby", photo: "kohl-kirby", groups: ["winter", "summer-2027"],
      work: "June 2027 Computational Meta-Research project team lead. Recent work: AI clinical trials and global disease burden; sinonasal trial reporting" },
    { name: "Nick Camasso", photo: "nick-camasso", groups: ["winter", "summer-2027"],
      work: "June 2027 Computational Meta-Research project team lead. Recent work: MedDRA adoption and safety reporting in surgical and knee arthroplasty trials" },
    { name: "Tanner Livsey", photo: "tanner-livsey", groups: ["winter"],
      work: "Outcome changes in benign prostatic hyperplasia trials" },
    { name: "Nevada Denton", photo: "nevada-denton", groups: ["winter"],
      work: "Safety reporting in chronic kidney disease trials" },
    { name: "Lydia Hashemi", photo: "lydia-hashemi", groups: ["winter"],
      work: "External validity of congestive heart failure trials" },
    { name: "Eva Chen", photo: "eva-chen", groups: ["summer-2027"],
      work: "June 2027 Computational Meta-Research project team lead. Recent work: AI guideline endorsement in endocrinology journals; migraine evidence gaps" },
    { name: "Malachi Penland", photo: "malachi-penland", groups: ["summer-2027"],
      work: "June 2027 Computational Meta-Research project team lead" },
    { name: "Madeline Rowe", photo: "madeline-rowe", groups: ["summer-2027"],
      work: "June 2027 Computational Meta-Research project team lead. Recent work: adverse event reporting in psoriasis trials" },
    { name: "Cord Morlan", photo: "cord-morlan", groups: ["summer-2027"],
      work: "July 2027 Computational Meta-Research project team lead" },
    { name: "Rylee Langerman", photo: "rylee-langerman", groups: ["summer-2027"],
      work: "July 2027 Computational Meta-Research project team lead" },
    { name: "David Waxman", photo: "david-waxman", groups: ["summer-2027"],
      work: "July 2027 Computational Meta-Research project team lead" },
    { name: "Kaley Armstrong", photo: "kaley-armstrong", groups: ["summer-2027"],
      work: "July 2027 Computational Meta-Research project team lead" },
    { name: "Connor Casey", photo: "connor-casey", groups: ["summer-2027"],
      work: "July 2027 Computational Meta-Research project team lead" },
    { name: "Kennedy Stone", photo: "kennedy-stone", groups: ["summer-2027"],
      work: "July 2027 Computational Meta-Research project team lead" },
    { name: "William \u201cTag\u201d Harris", photo: "tag-harris", groups: ["summer-2027"],
      work: "July 2027 Computational Meta-Research project team lead" },
    { name: "Tasfia Hasin", photo: "tasfia-hasin", groups: ["summer-2027"],
      work: "July 2027 STITCHCIPHER\u2122 project team lead" },
    { name: "Kira Carter", photo: "kira-carter", groups: ["summer-2027"],
      work: "July 2027 STITCHCIPHER\u2122 project team lead" },
    { name: "Gant Duncan", photo: "gant-duncan", groups: ["summer-2028"],
      work: "June 2028 Computational Meta-Research project team lead" },
    { name: "Lindsey Eshenbaugh", photo: "lindsey-eshenbaugh", groups: ["summer-2028"],
      work: "June 2028 Computational Meta-Research project team lead" },
    { name: "Andrew Davis", photo: "andrew-davis", groups: ["summer-2028"],
      work: "June 2028 Computational Meta-Research project team lead" },
    { name: "Haley Houk", photo: "haley-houk", groups: ["summer-2028"],
      work: "June 2028 Computational Meta-Research project team lead" },
    { name: "Hayden Keeler", photo: "hayden-keeler", groups: ["summer-2028"],
      work: "June 2028 Computational Meta-Research project team lead" },
    { name: "Keira Ley", photo: "keira-ley", groups: ["summer-2028"],
      work: "June 2028 Computational Meta-Research project team lead" },
    { name: "Micaylon Moore", photo: "micaylon-moore", groups: ["summer-2028"],
      work: "June 2028 Computational Meta-Research project team lead" }
  ],

  awards: [
    { funder: "NIH · NIGMS", id: "1R01GM169341-01", amount: 1010074, dates: "2026–2030", role: "Contact PI",
      title: "SoS: BIO: Improving the Integrity of Harms Reporting in Biomedical Research: A Science-of-Science Framework for Measurement, Causality, and Intervention" },
    { funder: "U.S. Department of Education · FIPSE", id: "P116J251629", amount: 3998541, dates: "2026–2029", role: "PI",
      title: "Witnessing Before Deliberating: A Testimony-Based Framework for Campus Civil Discourse" },
    { funder: "NSF · Office of Advanced Cyberinfrastructure", id: "Award 2611896", amount: 279504, dates: "2026–2028", role: "PI",
      title: "CyberTraining: Pilot: Cloud-Enabled Computational Meta-Research Training for Biomedical Evidence Evaluation" },
    { funder: "U.S. Department of State · Embassy Tokyo", id: "PAS-Tokyo-FY2026-01", amount: 499043, dates: "2026–2027", role: "Co-I",
      title: "Voices of Partnership: Celebrating U.S.–Japan Education and Cultural Relations" },
    { funder: "National Park Service · ABPP", id: "P26AP00693", amount: 91188, dates: "2026–2029", role: "Project Director",
      title: "The Battlefield Ledger Project: Data, Death, and the Making of Modern Evidence" },
    { funder: "American Medical Association", id: "AMA-77967", amount: 50000, dates: "2026–2027", role: "Co-I",
      title: "Witnessing-Based ECHO: Testimony-Driven Training to Prevent MOUD Discontinuation During Insurance Disruption" },
    { funder: "National Endowment for the Arts · Big Read", id: "2026-9276", amount: 20000, dates: "2026–2027", role: "PI",
      title: "Weaving the Sunrise: Stitching Stories of Survival with Joy Harjo" },
    { funder: "OSU-CHS Office of the VP for Research", id: "152338-7", amount: 10000, dates: "2026–2027", role: "PI",
      title: "BPH CSR–Registry Pilot as a FAIROTrials Proof-of-Concept" },
    { funder: "OSU-CHS Office of the VP for Research", id: "152339-7", amount: 10000, dates: "2026–2027", role: "PI",
      title: "The Confession Booth Pilot: Healed & Healer Prototypes for Collective Healing through Radical Anonymity" },
    { funder: "OSMA Foundation", id: "", amount: 5000, dates: "2026–2027", role: "PI",
      title: "Bearing Witness: A Medical Student Enrichment Program in Patient Safety and Physician Professionalism" }
  ],

  pastAwards: [
    "NIH · NIAAA T35 AA028204 (2020–2025). Research Mentorship Program for Medical Students: A Short-term Summer Research Program for American Indian Medical Students",
    "NIH · NIDA R15 DA049201 (2020–2023). Data Sharing Practices and Reproducibility of Addiction Clinical Trials",
    "OCAST Health Research Program HR18-119 (2018–2021). Factors Influencing the Reproducibility of Clinical Trials and Systematic Reviews in Addiction Research",
    "HHS Office of Research Integrity 2019000346 (2019–2020). Evaluation of Twitter as a Post-Publication Peer Review Mechanism to Identify Responsible Conduct of Research Concerns",
    "AACOM (2016–2017). Inter-institutional systematic review curriculum and research team participation (co-PI)",
    "OSU-CHS pilot and mentor-mentee grants (2018–2021). Summer research program design, spin in the medical literature, reproducibility of systematic reviews, and social media dissemination for Native communities"
  ],

  // topics: harms, transparency, data, ai, integrity
  pubs: [
    { year: 2026, topic: "data", journal: "European Heart Journal",
      title: "Data sharing statements: impact of journal policies across clinical research disciplines",
      authors: "Archer D, Barks N, Chaudhry M, Dennis B, et al., Ford AI, Vassar M", doi: "10.1093/eurheartj/ehaf359" },
    { year: 2026, topic: "ai", journal: "Journal of Clinical Epidemiology",
      title: "AI clinical trials registered on ClinicalTrials.gov showed persistent misalignment with global disease burden, 2010–2026",
      authors: "Kirby K, Forbes C, Livsey T, Camasso N, Langerman R, Calvert N, Vassar M", doi: "10.1016/j.jclinepi.2026.112543" },
    { year: 2026, topic: "harms", journal: "BMJ Open",
      title: "MedDRA adoption and adverse event reporting quality in gastrointestinal and abdominal surgery randomised controlled trials: a cross-sectional analysis",
      authors: "Camasso NC, Kirby K, Calvert N, Stroup J, Langerman R, Vassar M", doi: "10.1136/bmjopen-2026-117978" },
    { year: 2026, topic: "harms", journal: "Clinical Kidney Journal",
      title: "Safety reporting in chronic kidney disease clinical trials: a comparison of ClinicalTrials.gov registries and published reports",
      authors: "Denton N, Hashemi L, Archer D, Hazlitt R, et al., Ford AI, Vassar M", doi: "10.1093/ckj/sfag244" },
    { year: 2026, topic: "transparency", journal: "Trials",
      title: "Tracking outcome changes in benign prostatic hyperplasia trials: a version history review of ClinicalTrials.gov records",
      authors: "Livsey T, Itani M, Elghzali A, Hazlitt R, et al., Ford AI, Vassar M", doi: "10.1186/s13063-026-09892-0" },
    { year: 2026, topic: "harms", journal: "Clinical Drug Investigation",
      title: "Assessing the completeness of adverse event reporting in clinical trials of psoriasis treatments: a registry-publication comparison study",
      authors: "Rowe M, Dinh M, Sherry R, Keefer K, et al., Ford AI, Vassar M", doi: "10.1007/s40261-026-01561-z" },
    { year: 2026, topic: "ai", journal: "Frontiers in Endocrinology",
      title: "Endorsement of artificial intelligence guidelines across leading endocrinology journals: a cross-sectional analysis",
      authors: "Chen E, Nguyen A, Keefer K, Bagaruka E, et al., Ito Ford A, Vassar M", doi: "10.3389/fendo.2026.1767254" },
    { year: 2026, topic: "transparency", journal: "Cardiology Research",
      title: "Integrating findings into practice: assessing external validity of congestive heart failure trials",
      authors: "Hashemi L, Langerman R, Bratten C, Khan A, et al., Ford AI, Vassar M", doi: "10.14740/cr2191" },
    { year: 2026, topic: "transparency", journal: "Quality of Life Research",
      title: "Evaluating patient-reported outcome measurement in fibromyalgia clinical trials: alignment with IMMPACT recommendations",
      authors: "Moore M, Keeler H, Kocour L, Calvert N, et al., Mukherjee A, Ito Ford A, Vassar M", doi: "10.1007/s11136-026-04393-8" },
    { year: 2026, topic: "ai", journal: "Frontiers in Neurology",
      title: "Artificial intelligence policies in neurology journals: a cross-sectional analysis",
      authors: "Kirby K, Calvert N, Rowsey K, Brassfield J, et al., Ford AI, Vassar M", doi: "10.3389/fneur.2026.1766696" },
    { year: 2025, topic: "data", journal: "Drug and Alcohol Dependence",
      title: "A comprehensive review of data sharing practices in addiction research: trends, challenges, and future directions",
      authors: "Corwin L, Tran C, Paul E, Oldham E, et al., Ford AI, Vassar M", doi: "10.1016/j.drugalcdep.2025.112794" },
    { year: 2024, topic: "harms", journal: "Annals of Internal Medicine",
      title: "Development and evaluation of a framework for identifying and addressing spin for harms in systematic reviews of interventions",
      authors: "Qureshi R, Naaman K, Quan NG, Mayo-Wilson E, Page MJ, et al., Vassar M, Li T", doi: "10.7326/M24-0771" },
    { year: 2022, topic: "integrity", journal: "Journal of Clinical Epidemiology",
      title: "A framework is proposed for defining, categorizing, and assessing conflicts of interest in health research",
      authors: "Akl EA, Hakoum M, Khamis A, Khabsa J, Vassar M, Guyatt G", doi: "10.1016/j.jclinepi.2022.06.001" },
    { year: 2020, topic: "integrity", journal: "BMJ",
      title: "Financial relations between leaders of US medical societies and industry",
      authors: "Checketts J, Vassar M", doi: "10.1136/bmj.m1811" },
    { year: 2020, topic: "integrity", journal: "Chest",
      title: "The potential effects of financial conflicts of interest of speakers at the US Food and Drug Administration's Pulmonary-Allergy Drugs Advisory Committee meetings",
      authors: "Bickford T, Kinder N, Arthur W, Wayant C, Vassar M", doi: "10.1016/j.chest.2020.10.073" }
  ],

  // Names to bold in author lists (current student leads)
  highlight: ["Kirby K", "Camasso N", "Camasso NC", "Livsey T", "Denton N", "Hashemi L", "Chen E", "Rowe M", "Penland M"]
};
