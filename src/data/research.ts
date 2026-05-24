export interface ResearchItem {
  title: string;
  slug: string;
  type: "Research";
  lab: string;
  location: string;
  dates: string;
  summary: string;
  bullets: string[];
  technologies: string[];
  featured: boolean;
  image: string;
  video?: string;
  links?: {
    label: string;
    href: string;
  }[];
  detail: {
    problem: string;
    contributions: string[];
    method: string[];
    validation: string[];
    visualNote: string;
  };
}

export const research: ResearchItem[] = [
  {
    title: "STL-to-Fluoroscopy 2D–3D Registration",
    slug: "fluoroscopy-registration",
    type: "Research",
    lab: "FuTURE Lab, WPI",
    location: "Worcester, MA",
    dates: "Aug 2025 – Dec 2025",
    summary:
      "Designed a self-supervised fluoroscopy-to-volume registration workflow using DiffDRR, 3D Slicer, and DICOM processing for image-guided endovascular procedures.",
    bullets: [
      "Designed a self-supervised fluoroscopy-to-volume registration workflow using DiffDRR, 3D Slicer, and DICOM processing.",
      "Built the workflow for image-guided endovascular procedures.",
      "Validated patient-specific pose estimation on a 3D-printed aorta phantom without ground-truth labels."
    ],
    technologies: [
      "DiffDRR",
      "3D Slicer",
      "DICOM",
      "Computer Vision",
      "2D-3D Registration",
      "Registration",
      "Pose Estimation",
      "Differentiable Rendering",
      "Medical Robotics"
    ],
    featured: true,
    image: "/images/research/fluoroscopy-registration.png",
    links: [
      {
        label: "Final Presentation",
        href: "https://docs.google.com/presentation/d/1t1XMghYhv8pOEANY6X8FkAI_hl1vfX1n/edit?usp=sharing&ouid=107334292253968243585&rtpof=true&sd=true"
      },
      {
        label: "GitHub",
        href: "https://github.com/fmarcantoni/stl-fluoro-registration"
      }
    ],
    detail: {
      problem:
        "Image-guided endovascular workflows need reliable alignment between patient-specific anatomy and fluoroscopic views without depending on dense ground-truth pose labels.",
      contributions: [
        "Designed the STL-to-fluoroscopy registration workflow around differentiable digitally reconstructed radiographs.",
        "Processed medical imaging data through DICOM and 3D Slicer tooling.",
        "Connected patient-specific geometry with self-supervised pose estimation for fluoroscopy alignment."
      ],
      method: [
        "Used DiffDRR to generate differentiable projections from patient-specific 3D anatomy.",
        "Built a registration loop that compares fluoroscopic observations with rendered projections.",
        "Structured the workflow for medical robotics and image-guided procedure development."
      ],
      validation: [
        "Validated pose estimation behavior on a 3D-printed aorta phantom.",
        "Tested the workflow without requiring ground-truth pose labels.",
        "Focused validation on patient-specific registration behavior for endovascular guidance."
      ],
      visualNote:
        "Registration results, DRR comparisons, landmark evaluation, and pipeline media are included below."
    }
  },
  {
    title: "PiELo: Reactive Swarm Programming Language",
    slug: "pielo-swarm-language",
    type: "Research",
    lab: "NEST Lab, WPI",
    location: "Worcester, MA",
    dates: "Aug 2024 – May 2025",
    summary:
      "Designed a reactive swarm-programming language with consensus and virtual stigmergy as first-class primitives, validated in ARGoS3 and on Khepera IV robots with Vicon tracking.",
    bullets: [
      "Designed PiELo, a reactive swarm-programming language with consensus and virtual stigmergy as first-class primitives.",
      "Implemented shared dictionary synchronization.",
      "Validated behaviors in ARGoS3 and on Khepera IV robots with Vicon tracking.",
      "Co-authored a peer-reviewed publication."
    ],
    technologies: [
      "Swarm Robotics",
      "Buzz",
      "ARGoS3",
      "Khepera IV",
      "Vicon",
      "Consensus",
      "Virtual Stigmergy",
      "Distributed Systems",
      "Reactive Programming"
    ],
    featured: true,
    image: "/images/research/pielo-swarm-language.png",
    links: [
      {
        label: "Final Report",
        href: "/reports/research/pielo-final-paper.pdf"
      },
      {
        label: "GitHub",
        href: "https://github.com/fmarcantoni/PiELo-MQP"
      }
    ],
    detail: {
      problem:
        "Swarm robotics programs can be difficult to express when distributed consensus, shared memory, and reactive behaviors are treated as low-level implementation details.",
      contributions: [
        "Helped design PiELo with consensus and virtual stigmergy as first-class language primitives.",
        "Implemented shared dictionary synchronization for distributed robot behaviors.",
        "Co-authored a peer-reviewed publication on the language and its robotics validation."
      ],
      method: [
        "Modeled swarm behaviors through reactive programming constructs.",
        "Used Buzz-inspired distributed coordination concepts.",
        "Validated programs in simulation before transferring behavior to physical Khepera IV robots."
      ],
      validation: [
        "Evaluated swarm behaviors in ARGoS3.",
        "Ran physical robot validation with Khepera IV platforms.",
        "Used Vicon tracking to observe and validate robot-level behavior."
      ],
      visualNote:
        "ARGoS3, Khepera IV deployment, and MQP team media are included below."
    }
  },
  {
    title: "VR-Based Multimodal Teleoperation Interface",
    slug: "vr-teleoperation-interface",
    type: "Research",
    lab: "HiRo Lab, WPI",
    location: "Worcester, MA",
    dates: "Jan 2025 – May 2025",
    summary:
      "Built a Unity + ROS multimodal teleoperation interface for a robotic nursing assistant, integrating Meta Quest head-motion mirroring, real-time multi-camera streaming, Whisper voice commands, and ZED-Mini object-detection-driven camera selection.",
    bullets: [
      "Built a Unity + ROS teleoperation system for a robotic nursing assistant.",
      "Integrated Meta Quest head-motion mirroring.",
      "Added real-time multi-camera streaming.",
      "Integrated Whisper voice commands.",
      "Added ZED-Mini object-detection-driven camera selection."
    ],
    technologies: [
      "Unity",
      "ROS",
      "Meta Quest",
      "Whisper",
      "ZED Mini",
      "VR/XR",
      "Human-Robot Interaction",
      "Teleoperation",
      "Multi-Camera Streaming",
      "Object Detection"
    ],
    featured: true,
    image: "/images/research/vr-teleoperation-interface.png",
    links: [
      {
        label: "Demo (YouTube)",
        href: "https://www.youtube.com/watch?v=--GtRnEMUFE"
      },
      {
        label: "Final Presentation",
        href: "https://docs.google.com/presentation/d/1gbI_Te3AwpHWuPnxkAREpaWoJ-5wY-PD/edit?usp=drive_link&ouid=107334292253968243585&rtpof=true&sd=true"
      },
      {
        label: "Final Report",
        href: "/reports/research/vr-teleoperation-interface-report.pdf"
      },
      {
        label: "GitHub",
        href: "https://github.com/fmarcantoni/multicamera_multimodal_Interface"
      },
      {
        label: "ROS-Unity Streaming Package",
        href: "https://github.com/fmarcantoni/udp_ros"
      }
    ],
    detail: {
      problem:
        "Assistive robots need teleoperation interfaces that combine operator awareness, intuitive viewpoint control, multimodal commands, and perception-driven context selection.",
      contributions: [
        "Built a Unity and ROS interface for a robotic nursing assistant.",
        "Integrated Meta Quest head-motion mirroring for intuitive camera control.",
        "Added speech and perception modules for voice commands and camera selection."
      ],
      method: [
        "Streamed multiple camera feeds into a VR teleoperation environment.",
        "Used Whisper for command recognition.",
        "Used ZED-Mini object detections to drive context-aware camera selection."
      ],
      validation: [
        "Tested multimodal teleoperation behavior across camera streams, headset motion, and voice command paths.",
        "Focused validation on operator awareness and practical human-robot interaction workflows.",
        "Integrated perception-driven view selection into the teleoperation loop."
      ],
      visualNote:
        "Unity, ROS, headset teleoperation, and interface media are included below."
    }
  }
];

export const getResearchBySlug = (slug: string) =>
  research.find((item) => item.slug === slug);
