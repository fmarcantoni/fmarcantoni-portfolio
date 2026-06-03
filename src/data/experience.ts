export interface ExperienceItem {
  title: string;
  slug: string;
  type: "Work Experience";
  role: string;
  organization: string;
  location: string;
  dates: string;
  summary: string;
  bullets: string[];
  technologies: string[];
  featured: boolean;
  image: string;
  imagePosition?: string;
  detail: {
    workedOn: string[];
    technicalContributions: string[];
    visualNote: string;
  };
}

export const experience: ExperienceItem[] = [
  {
    title: "LLM Industrial Robotics Code-Generation Copilot",
    slug: "industrial-robotics-copilot",
    type: "Work Experience",
    role: "AI & Industrial Robotics R&D Intern",
    organization: "B&R Industrial Automation",
    location: "Eggelsberg, Austria",
    dates: "Jun 2025 – Aug 2025",
    summary:
      "Developed an LLM-based robotics code-generation and completion copilot for B&R Automation Studio, combining Transformer models, prompt engineering, RAG, Microsoft Azure retrieval, and Motion ST templates for industrial robot programming.",
    bullets: [
      "Built an LLM-based code-generation and completion copilot for B&R Automation Studio using Transformers, RAG, prompt engineering, and Azure AI retrieval.",
      "Produced Motion ST templates for common industrial robotics tasks including static and tracking pick-and-place.",
      "Built a robotics knowledge index on Microsoft Azure to provide grounded context for code-generation models.",
      "Redesigned the retrieval backend with a domain-specific schema and syntax-aware chunking pipeline tailored to Automation Studio and industrial robotics ST code."
    ],
    technologies: [
      "LLMs",
      "Transformers",
      "RAG",
      "Azure AI",
      "Automation Studio",
      "Motion ST",
      "Structured Text",
      "Prompt Engineering",
      "LLM Code Generation",
      "Industrial Robotics"
    ],
    featured: true,
    image: "/images/experience/br-industrial-automation-logo-lobby.jpg",
    imagePosition: "center 68%",
    detail: {
      workedOn: [
        "Developed a robotics copilot concept for code generation and completion inside the B&R Automation Studio environment.",
        "Built retrieval and prompt workflows around automation documentation, industrial robotics syntax patterns, and Motion ST examples.",
        "Created reusable Motion ST templates for static pick-and-place, tracking pick-and-place, and related robotics programming tasks."
      ],
      technicalContributions: [
        "Designed a RAG pipeline using a robotics-aware schema for code and documentation retrieval.",
        "Implemented syntax-aware chunking to preserve Automation Studio and ST code context more effectively than generic chunking approaches.",
        "Built a Microsoft Azure robotics knowledge index and connected it with Transformer-based generation for grounded code assistance.",
        "Helped define a path toward an open-source, code-centric RAG backend for industrial robotics applications."
      ],
      visualNote:
        "B&R Industrial Automation photos are used as non-confidential contextual visual support for the industrial robotics copilot work."
    }
  },
  {
    title: "Machine Vision Inspection for High-Speed Labeling Lines",
    slug: "machine-vision-inspection",
    type: "Work Experience",
    role: "Machine Vision & AI R&D Intern",
    organization: "Makro Labelling SRL",
    location: "Goito, Mantua, Italy",
    dates: "May 2024 – Aug 2024",
    summary:
      "Developed C++ and Python machine-vision pipelines for bottle orientation, label alignment, label-shift analysis, and defect inspection on high-speed labeling lines using segmentation, feature matching, homography estimation, and deep-learning-based image segmentation.",
    bullets: [
      "Developed C++ and Python machine-vision pipelines for bottle orientation, label alignment, label correctness, and defect inspection on high-speed labeling lines.",
      "Combined segmentation, feature matching, and homography estimation to evaluate label position and shift.",
      "Tested vision functions on mono-head labeling systems across bottle formats, lighting conditions, and operating scenarios.",
      "Researched and implemented deep-learning segmentation models to detect label shifts and common defects such as bubbles and folds."
    ],
    technologies: [
      "C++",
      "Python",
      "OpenCV",
      "Machine Vision",
      "AI",
      "Deep Learning",
      "Segmentation",
      "Feature Matching",
      "Homography",
      "Label Inspection",
      "Quality Control",
      "Industrial Machine Vision"
    ],
    featured: true,
    image: "/images/experience/makro-labelling-team.jpg",
    imagePosition: "center 12%",
    detail: {
      workedOn: [
        "Developed inspection pipelines for production labeling systems with changing bottle formats, lighting conditions, and label-placement constraints.",
        "Combined classical computer vision and deep-learning approaches for label alignment, orientation checks, and defect inspection.",
        "Evaluated pipeline behavior under label shifts, bottle-orientation variation, and real production constraints."
      ],
      technicalContributions: [
        "Implemented C++ and Python OpenCV pipelines for segmentation, feature matching, and geometric alignment.",
        "Used homography estimation to reason about label pose and format-specific alignment.",
        "Benchmarked candidate classical and learned methods for robustness across industrial conditions."
      ],
      visualNote:
        "Makro Labelling internship photo used as contextual visual support for the machine-vision inspection work."
    }
  },
  {
    title: "Automation Studio Programming for Labeling Machines",
    slug: "automation-studio-programming",
    type: "Work Experience",
    role: "Software Engineer Intern",
    organization: "Makro Labelling SRL",
    location: "Goito, Mantua, Italy",
    dates: "May 2023 – Aug 2023",
    summary:
      "Worked with B&R Automation Studio, Structured Text, Ladder programming, and Visual Components while supporting activation, testing, alarm validation, and sensor calibration for industrial labeling machines.",
    bullets: [
      "Worked in the B&R Automation Studio development environment using Structured Text, Ladder programming, and Visual Components.",
      "Completed Automation Studio Basic and Automation Studio Motion training certificates.",
      "Supported activation and testing of industrial labeling machines, including alarm checks for labeling groups and full-machine startup behavior.",
      "Calibrated sensors and photocells used for bottle orientation based on marks or welds on the machine carousel."
    ],
    technologies: [
      "Automation Studio",
      "Structured Text",
      "Ladder Logic",
      "Visual Components",
      "Industrial Automation",
      "Machine Activation",
      "Sensor Calibration",
      "Labeling Machines"
    ],
    featured: false,
    image: "/images/experience/makro-labelling-logo.png",
    detail: {
      workedOn: [
        "Supported industrial labeling-machine activation and testing workflows.",
        "Worked with Automation Studio tooling and motion-control training material.",
        "Validated alarms and calibrated sensors used for bottle orientation on labeling systems."
      ],
      technicalContributions: [
        "Used Structured Text, Ladder programming, and Visual Components in the B&R automation environment.",
        "Checked alarm behavior for individual labeling groups and full-machine operation during activation.",
        "Calibrated sensors and photocells for bottle-orientation logic based on physical marks and welds."
      ],
      visualNote:
        "Makro Labelling visual identity used as contextual cover media for automation programming and labeling-machine activation work."
    }
  },
  {
    title: "Electrical Pre-Assembly for Industrial Labeling Machines",
    slug: "electrical-preassembly-labeling-machines",
    type: "Work Experience",
    role: "Electrician Intern",
    organization: "Makro Labelling SRL",
    location: "Goito, Mantua, Italy",
    dates: "May 2022 – Aug 2022",
    summary:
      "Supported electrical pre-assembly of industrial labeling-machine groups and heads by installing ground leads, routing power cables, assembling wiring fixtures, and following electrical schematics.",
    bullets: [
      "Installed ground leads and connected power cables for industrial labeling-machine equipment.",
      "Assembled fixtures to support wiring installation for machine groups and heads.",
      "Connected wiring to circuit breakers, transformers, and related electrical components.",
      "Followed electrical schematics to confirm job specifications and plan installation layouts."
    ],
    technologies: [
      "Electrical Assembly",
      "Industrial Machinery",
      "Wiring",
      "Circuit Breakers",
      "Transformers",
      "Schematics",
      "Hand Tools",
      "Power Tools"
    ],
    featured: false,
    image: "/images/experience/makro-labelling-logo.png",
    detail: {
      workedOn: [
        "Performed hands-on pre-assembly tasks for industrial labeling-machine groups and heads.",
        "Installed wiring fixtures, ground leads, and power cable connections.",
        "Built familiarity with industrial electrical layouts and machine-level assembly constraints."
      ],
      technicalContributions: [
        "Connected wires to circuit breakers, transformers, and related electrical components.",
        "Replaced wiring, equipment, and fixtures using hand tools and power tools.",
        "Read and followed electrical schematics to plan and verify installation layouts."
      ],
      visualNote:
        "Makro Labelling visual identity used as contextual cover media for industrial electrical pre-assembly work."
    }
  }
];

export const getExperienceBySlug = (slug: string) =>
  experience.find((item) => item.slug === slug);
