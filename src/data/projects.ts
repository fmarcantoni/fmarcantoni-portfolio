export interface ProjectItem {
  title: string;
  slug: string;
  type: "Project";
  course: string;
  dates: string;
  summary: string;
  bullets: string[];
  technologies: string[];
  featured: boolean;
  image: string;
  video?: string;
  imagePosition?: string;
  links?: {
    label: string;
    href: string;
  }[];
  detail: {
    problem: string;
    implementation: string[];
    results: string[];
    visualNote: string;
  };
}

export const projects: ProjectItem[] = [
  {
    title: "Reinforcement Learning: REINFORCE, A2C & A3C",
    slug: "reinforcement-learning",
    type: "Project",
    course: "RBE 577 – Machine Learning for Robotics",
    dates: "Spring 2026",
    summary:
      "Implemented policy-gradient and actor-critic reinforcement-learning agents for LunarLander and PyBullet Kuka vision-based grasping, including REINFORCE, A2C, and asynchronous A3C.",
    bullets: [
      "Implemented REINFORCE and A2C for LunarLander with PyTorch actors, critics, checkpointing, reward-history plots, and rollout export.",
      "Implemented asynchronous A3C with multiprocessing workers and a shared CNN actor-critic model for PyBullet Kuka grasping.",
      "Evaluated trained policies with deterministic rollouts and saved representative videos.",
      "Reached 55% grasp success with the CNN actor-critic Kuka policy."
    ],
    technologies: [
      "PyTorch",
      "Reinforcement Learning",
      "Policy Gradients",
      "REINFORCE",
      "A2C",
      "A3C",
      "PyBullet",
      "Robot Learning"
    ],
    featured: true,
    image: "/images/projects/reinforcement-learning.jpg",
    video: "/videos/projects/a3c_kuka_video.mp4",
    links: [
      {
        label: "Technical Report",
        href: "/reports/projects/robot-learning-rl-report.pdf"
      },
      {
        label: "GitHub",
        href: "https://github.com/fmarcantoni/rl-robotic-grasping-a2c-a3c"
      }
    ],
    detail: {
      problem:
        "Reinforcement-learning agents for robotics need to learn useful policies from sparse rewards, high-variance policy-gradient updates, and visual observations in simulated control tasks.",
      implementation: [
        "Implemented REINFORCE and A2C baselines for LunarLander with configurable training and evaluation scripts.",
        "Built a PyTorch A3C pipeline for PyBullet Kuka grasping using asynchronous workers and shared actor-critic parameters.",
        "Added checkpoint saving, deterministic evaluation, reward-history plotting, and rollout video export."
      ],
      results: [
        "Generated rollout videos for REINFORCE, A2C, and A3C policies.",
        "Reached 55% grasp success with a CNN actor-critic Kuka policy.",
        "Produced training curves and a technical report documenting the implementation and evaluation."
      ],
      visualNote:
        "RL rollouts and training curves are included below."
    }
  },
  {
    title: "Imitation Learning: Behavioral Cloning & Diffusion Policy",
    slug: "imitation-learning",
    type: "Project",
    course: "RBE 577 – Machine Learning for Robotics",
    dates: "Spring 2026",
    summary:
      "Trained and evaluated Behavioral Cloning and Diffusion Policy models for robosuite PickPlaceCan manipulation using robomimic, Panda demonstrations, rollout logs, and data-efficiency experiments.",
    bullets: [
      "Trained robomimic policies on 59 successful PickPlaceCan demonstrations with low-dimensional state and RGB observations.",
      "Improved recurrent Behavioral Cloning success from 0.02 to 0.80 using sequence modeling.",
      "Reached 0.90 success with image-conditioned Diffusion Policy on the 50-demonstration setting.",
      "Compared BC and Diffusion Policy across 5, 10, 20, and 50 demonstrations to study data efficiency."
    ],
    technologies: [
      "PyTorch",
      "Imitation Learning",
      "Behavioral Cloning",
      "Diffusion Policy",
      "robomimic",
      "robosuite",
      "MuJoCo",
      "Robot Learning"
    ],
    featured: true,
    image: "/images/projects/imitation-learning.jpg",
    video: "/videos/projects/diff_demo50_rollout.mp4",
    links: [
      {
        label: "Technical Report",
        href: "/reports/projects/RBE577_ML_Project4_Report (1).pdf"
      },
      {
        label: "GitHub",
        href: "https://github.com/fmarcantoni/imitation-learning-robotic-manipulation"
      }
    ],
    detail: {
      problem:
        "Robotic manipulation policies must learn reliable contact-rich behavior from limited demonstrations while balancing low-dimensional state, RGB observations, and rollout robustness.",
      implementation: [
        "Used robomimic and robosuite to train Behavioral Cloning, recurrent BC, GMM BC, and Diffusion Policy variants.",
        "Evaluated policies on PickPlaceCan with a Panda robot using rollout success rate as the primary metric.",
        "Organized training configurations, logs, and rollout videos into a reproducible GitHub artifact."
      ],
      results: [
        "Improved LSTM Behavioral Cloning success from 0.02 to 0.80.",
        "Reached 0.90 success with image-conditioned Diffusion Policy using 50 demonstrations.",
        "Showed stronger final performance as the number of demonstrations increased from 5 to 50."
      ],
      visualNote:
        "BC and Diffusion Policy rollout videos are included below."
    }
  },
  {
    title: "Classical MSCKF & Deep Visual-Inertial Odometry",
    slug: "visual-inertial-odometry",
    type: "Project",
    course: "RBE/CS 549 – Computer Vision",
    dates: "Spring 2026",
    summary:
      "Implemented a stereo MSCKF VIO backend with IMU propagation, camera-state cloning, stereo feature tracking, nullspace EKF updates, and deep VIO models.",
    bullets: [
      "Implemented stereo MSCKF VIO backend.",
      "Added IMU propagation, camera-state cloning, stereo feature tracking, and nullspace EKF updates.",
      "Evaluated on EuRoC and RPG datasets.",
      "Trained IMU-only, vision-only, and fused deep VIO networks on synthetic Blender trajectories.",
      "Used geodesic SO(3) and trajectory-composition losses."
    ],
    technologies: [
      "VIO",
      "MSCKF",
      "EKF",
      "IMU",
      "Stereo Vision",
      "PyTorch",
      "State Estimation",
      "Computer Vision"
    ],
    featured: true,
    image: "/images/projects/vio-trajectory-comparison.png",
    video: "/videos/projects/VIO.mp4",
    links: [
      {
        label: "Classical MSCKF Report",
        href: "/reports/projects/visual-inertial-odometry-msckf-report.pdf"
      },
      {
        label: "Deep VIO Report",
        href: "/reports/projects/visual-inertial-odometry-deep-vio-report.pdf"
      },
      {
        label: "GitHub",
        href: "https://github.com/fmarcantoni/visual-inertial-odometry-msckf-deep-vio"
      }
    ],
    detail: {
      problem:
        "Visual-inertial odometry needs stable state estimation from noisy IMU data, tracked visual features, and learned motion representations.",
      implementation: [
        "Implemented stereo MSCKF with IMU propagation and camera-state cloning.",
        "Added stereo feature tracking and nullspace EKF update steps.",
        "Trained IMU-only, vision-only, and fused deep VIO networks on synthetic Blender trajectories.",
        "Used geodesic SO(3) and trajectory-composition losses for learned models."
      ],
      results: [
        "Evaluated classical VIO behavior on EuRoC and RPG datasets.",
        "Compared classical filtering structure with deep VIO training pipelines."
      ],
      visualNote:
        "Trajectory and visual-inertial odometry demo media are included below."
    }
  },
  {
    title: "Einstein Vision: Monocular Autonomous-Driving 3D Visualization",
    slug: "einstein-vision",
    type: "Project",
    course: "RBE/CS 549 – Computer Vision",
    dates: "Spring 2026",
    summary:
      "Built a monocular perception pipeline integrating Detic, YOLOv8, DETR, Mask R-CNN, ZoeDepth, MiDaS, YOLO-3D, PyMAF, RAFT, and Blender visualization.",
    bullets: [
      "Built a Tesla-inspired monocular perception pipeline.",
      "Integrated detection, segmentation, depth estimation, 3D human/vehicle reasoning, and optical flow.",
      "Reconstructed 3D driving scenes in Blender.",
      "Represented lanes, vehicles, pedestrians, traffic objects, orientation, motion state, and collision-risk estimation."
    ],
    technologies: [
      "YOLOv8",
      "DETR",
      "Mask R-CNN",
      "Detic",
      "ZoeDepth",
      "MiDaS",
      "RAFT",
      "Optical Flow",
      "Monocular Depth",
      "Blender",
      "Autonomous Driving",
      "3D Perception"
    ],
    featured: true,
    image: "/images/projects/einstein-vision.jpg",
    video: "/videos/projects/einstein-vision-video-preview.mp4",
    links: [
      {
        label: "Technical Report",
        href: "/reports/projects/RBE549_CV_Project3_Report (1).pdf"
      },
      {
        label: "GitHub",
        href: "https://github.com/fmarcantoni/einstein-vision-monocular-driving-visualization"
      }
    ],
    detail: {
      problem:
        "Monocular autonomous-driving perception requires extracting 3D scene structure, motion cues, and object semantics from a single camera stream.",
      implementation: [
        "Integrated detection, segmentation, depth estimation, optical flow, and 3D reasoning models.",
        "Combined Detic, YOLOv8, DETR, Mask R-CNN, ZoeDepth, MiDaS, YOLO-3D, PyMAF, and RAFT.",
        "Built Blender visualization for reconstructed driving scenes."
      ],
      results: [
        "Represented lanes, vehicles, pedestrians, traffic objects, orientation, and motion state.",
        "Added collision-risk estimation to the scene visualization pipeline.",
        "Created an end-to-end monocular 3D perception prototype for autonomous-driving scenes."
      ],
      visualNote:
        "The end-to-end monocular perception and Blender visualization demo is included below."
    }
  },
  {
    title: "3D Scene Reconstruction: Classical SfM & NeRF",
    slug: "sfm-nerf",
    type: "Project",
    course: "RBE/CS 549 – Computer Vision",
    dates: "Spring 2026",
    summary:
      "Implemented Structure-from-Motion from scratch and built a PyTorch NeRF with positional encoding, 5D MLPs, hierarchical sampling, and differentiable volume rendering.",
    bullets: [
      "Implemented Structure-from-Motion from scratch.",
      "Built SIFT tracking, RANSAC, 8-point fundamental matrix, essential-matrix recovery, cheirality, PnP-RANSAC, triangulation, and bundle adjustment.",
      "Built a PyTorch NeRF with positional encoding.",
      "Implemented 5D MLPs, hierarchical sampling, and differentiable volume rendering."
    ],
    technologies: [
      "SfM",
      "NeRF",
      "RANSAC",
      "PnP",
      "Bundle Adjustment",
      "PyTorch",
      "3D Reconstruction",
      "Computer Vision"
    ],
    featured: true,
    image: "/images/projects/sfm-nerf.png",
    links: [
      {
        label: "SfM Report",
        href: "/reports/projects/sfm-report.pdf"
      },
      {
        label: "NeRF Report",
        href: "/reports/projects/nerf-report.pdf"
      },
      {
        label: "GitHub",
        href: "https://github.com/fmarcantoni/sfm-nerf-3d-reconstruction"
      }
    ],
    detail: {
      problem:
        "3D reconstruction pipelines need to recover camera geometry, sparse structure, and continuous scene appearance from image observations.",
      implementation: [
        "Built a classical SfM pipeline from SIFT tracking through bundle adjustment.",
        "Implemented RANSAC, 8-point fundamental matrix estimation, essential-matrix recovery, cheirality checks, PnP-RANSAC, and triangulation.",
        "Built a PyTorch NeRF with positional encoding, 5D MLPs, hierarchical sampling, and differentiable volume rendering."
      ],
      results: [
        "Connected classical multi-view geometry with neural scene representation.",
        "Produced a full reconstruction pipeline spanning sparse geometry and volumetric rendering.",
        "Used the project to compare algorithmic 3D vision with learned scene synthesis."
      ],
      visualNote:
        "Sparse reconstruction, bundle adjustment, NeRF architecture, and novel-view synthesis media are included below."
    }
  },
  {
    title: "MaxCal-Derived Swarm Control",
    slug: "maxcal-swarm-control",
    type: "Project",
    course: "RBE 511 – Swarm Intelligence",
    dates: "Spring 2026",
    summary:
      "Developed a Maximum-Caliber decentralized swarm controller deriving local Markov transition rules from coverage and information-diffusion constraints.",
    bullets: [
      "Developed a Maximum-Caliber decentralized swarm controller.",
      "Derived local Markov transition rules from coverage and information-diffusion constraints.",
      "Integrated inverse MaxCal solving.",
      "Added quadratic mode selection for state-driven oscillation."
    ],
    technologies: [
      "Swarm Intelligence",
      "Maximum Caliber",
      "Markov Chains",
      "Decentralized Control",
      "Stochastic Control",
      "Information Diffusion",
      "Coverage Control"
    ],
    featured: false,
    image: "/images/projects/maxcal-swarm-control.png",
    links: [
      {
        label: "Technical Report",
        href: "/reports/projects/maxcal-swarm-control-report.pdf"
      }
    ],
    detail: {
      problem:
        "Decentralized swarms need local transition rules that satisfy global coverage and information-diffusion constraints without centralized control.",
      implementation: [
        "Derived local Markov transition rules from Maximum-Caliber constraints.",
        "Integrated inverse MaxCal solving into the controller design.",
        "Added quadratic mode selection for state-driven oscillation."
      ],
      results: [
        "Produced a decentralized controller grounded in stochastic transition design.",
        "Connected coverage objectives with information-diffusion constraints.",
        "Explored MaxCal as a principled way to generate local swarm behavior rules."
      ],
      visualNote:
        "Coverage, information-diffusion, and hierarchical MaxCal simulation media are included below."
    }
  },
  {
    title: "Quadrotor Controller Design",
    slug: "quadrotor-controller-design",
    type: "Project",
    course: "Robot Control",
    dates: "December 2025",
    summary:
      "Designed position and altitude controllers for a quadrotor to track diamond and circular trajectories, then compared simulation and real-flight behavior using trajectory tracking error and RMSE.",
    bullets: [
      "Developed position and altitude controllers for quadrotor trajectory tracking.",
      "Evaluated diamond and circular trajectory execution in simulation and real-world flight.",
      "Compared simulation and hardware behavior using RMSE and trajectory tracking error plots."
    ],
    technologies: [
      "Quadrotor Control",
      "Robot Control",
      "Trajectory Tracking",
      "Simulation",
      "RMSE",
      "MATLAB",
      "Real-World Flight"
    ],
    featured: false,
    image: "/images/projects/quadrotor-controller-design.jpg",
    video: "/videos/projects/quadrotor-controller-design.mp4",
    links: [
      {
        label: "Final Report",
        href: "/reports/projects/Final Report Control.pdf"
      },
      {
        label: "GitHub",
        href: "https://github.com/fmarcantoni/quadrotor-controllers"
      }
    ],
    detail: {
      problem:
        "Quadrotors need controllers that can reliably track position, altitude, and velocity commands when moving from simulation into real flight experiments.",
      implementation: [
        "Implemented position and altitude control loops for a quadrotor.",
        "Generated diamond and circular reference trajectories for tracking experiments.",
        "Compared simulation output against real-world flight data."
      ],
      results: [
        "Evaluated controller behavior with RMSE and trajectory tracking error plots.",
        "Used the comparison to reason about the simulation-to-real-world gap.",
        "Documented controller design, experiment structure, and tracking performance in a final report."
      ],
      visualNote:
        "Flight media and controller-evaluation visuals are included below."
    }
  },
  {
    title: "VR-Guided Inverse Kinematics for a 6-DoF Manipulator",
    slug: "vr-inverse-kinematics",
    type: "Project",
    course: "Robot Dynamics",
    dates: "May 2025",
    summary:
      "Compared inverse-kinematics methods for moving a 6-DoF manipulator end effector from VR headset motion, supporting dynamic viewpoints for tele-manipulation and grasping tasks.",
    bullets: [
      "Mapped VR headset motion to a non-grasping arm end-effector target.",
      "Compared four inverse-kinematics methods for 6-DoF manipulator motion.",
      "Studied how dynamic camera viewpoint control can reduce occlusion during tele-manipulation."
    ],
    technologies: [
      "Inverse Kinematics",
      "Robot Dynamics",
      "6-DoF Manipulation",
      "VR",
      "Teleoperation",
      "Humanoid Robotics",
      "MATLAB"
    ],
    featured: false,
    image: "/images/projects/vr-inverse-kinematics.png",
    links: [
      {
        label: "Poster Presentation",
        href: "https://docs.google.com/presentation/d/1ZFRVa0W73Ox40_b4IeqUTn97RDWBCOhq/edit?usp=drive_link&rtpof=true&sd=true"
      },
      {
        label: "Final Report",
        href: "/reports/projects/vr-inverse-kinematics-report.pdf"
      }
    ],
    detail: {
      problem:
        "Tele-manipulated robots can suffer from occlusion during grasping, motivating dynamic viewpoint control through a secondary arm and camera system.",
      implementation: [
        "Mapped VR headset movement into a desired end-effector position for a non-grasping manipulator arm.",
        "Compared four inverse-kinematics approaches for controlling the 6-DoF manipulator.",
        "Separated positional IK evaluation from future autonomous camera-orientation adjustment work."
      ],
      results: [
        "Built a comparative IK study for VR-driven tele-manipulation support.",
        "Connected user head motion with robot arm positioning for flexible viewpoint control.",
        "Documented the method and comparison in a report and poster presentation."
      ],
      visualNote:
        "Manipulator and VR-guided inverse-kinematics visuals are included below."
    }
  },
  {
    title: "Active Neck for Enhanced Visual Feedback",
    slug: "active-neck-iona",
    type: "Project",
    course: "RBE/CS 526 – Human-Robot Interaction",
    dates: "October 2024",
    summary:
      "Integrated a two-degree-of-freedom active neck and redesigned visual-feedback workflow for IONA, the Intelligent Robotic Nursing Assistant, to improve operator situational awareness during teleoperation.",
    bullets: [
      "Integrated a 2-DoF active-neck mechanism for immersive camera motion during teleoperation.",
      "Connected real-time visual feedback with IONA platform design constraints.",
      "Supported a redesigned robot chest and camera viewpoint concept intended to improve teleoperation efficiency."
    ],
    technologies: [
      "Human-Robot Interaction",
      "Teleoperation",
      "Active Camera",
      "Dynamixel",
      "ROS",
      "Robot Design",
      "IONA",
      "User Study"
    ],
    featured: false,
    image: "/images/projects/active-neck-iona.png",
    imagePosition: "center 12%",
    links: [
      {
        label: "Final Report",
        href: "/reports/projects/active-neck-iona-report.pdf"
      },
      {
        label: "GitHub",
        href: "https://github.com/fmarcantoni/active_neck"
      }
    ],
    detail: {
      problem:
        "Teleoperated assistive robots need camera viewpoints that provide useful visual context while preserving manipulation access and reducing operator cognitive effort.",
      implementation: [
        "Integrated a 2-DoF gimbal as an active neck for IONA.",
        "Connected active camera motion to teleoperation visual-feedback requirements.",
        "Documented hardware, software, and platform-design tradeoffs for the IONA 2.0 concept."
      ],
      results: [
        "Prepared the active-neck interface for user-study evaluation in the Human-inspired Robotics Lab.",
        "Evaluated the design around teleoperation visibility, immersion, and operator awareness.",
        "Established a platform component that later informed multimodal and multi-camera teleoperation work."
      ],
      visualNote:
        "Active-neck camera modes, IONA hardware, and teleoperation demo media are included below."
    }
  },
  {
    title: "Exploring Flora as a Nature-Based Solution to Beach Erosion",
    slug: "beach-erosion-flora-iqp",
    type: "Project",
    course: "Interactive Qualifying Project",
    dates: "April 2024",
    summary:
      "Studied coastal flora as a nature-based strategy to combat beach erosion along the Cádiz coast, combining field context, lab testing, comparative flora analysis, and public-facing recommendations.",
    bullets: [
      "Investigated coastal erosion threats and existing management practices in Cádiz, Spain.",
      "Evaluated study sites and beach morphology for erosion patterns.",
      "Developed flora-based beach protection recommendations and public-awareness signage."
    ],
    technologies: [
      "Field Research",
      "Environmental Analysis",
      "Coastal Erosion",
      "Nature-Based Solutions",
      "Data Synthesis",
      "Technical Communication"
    ],
    featured: false,
    image: "/images/projects/beach-erosion-flora-iqp.png",
    links: [
      {
        label: "Project Report",
        href: "/reports/projects/beach-erosion-flora-iqp-report.pdf"
      },
      {
        label: "Final Presentation",
        href: "https://docs.google.com/presentation/d/e/2PACX-1vQY3No2yuBoLtpeVh1XXwgDfxOHcgtwvzLS-Q45lnQIt863YJS1601FP2wzS2jitkKR1uSWurPycH7U/pub?start=true&loop=false&delayms=5000"
      }
    ],
    detail: {
      problem:
        "Beaches on the Cádiz coast face erosion driven by natural processes, coastal development, and climate change, threatening local ecosystems and tourism.",
      implementation: [
        "Investigated coastal management practices and nature-based alternatives.",
        "Compared flora species for dune protection and erosion mitigation potential.",
        "Synthesized site-specific recommendations for eroded beaches."
      ],
      results: [
        "Produced beach-protection recommendations using coastal flora.",
        "Designed public-facing signage concepts for erosion awareness.",
        "Delivered the project through a report and final presentation for local stakeholders."
      ],
      visualNote:
        "Field and project visuals from the coastal erosion study are included below."
    }
  },
  {
    title: "Seats4u Ticketing Platform",
    slug: "seats4u",
    type: "Project",
    course: "Software Engineering",
    dates: "November 2023",
    summary:
      "Built a ticketing web platform with React, AWS Lambda, API Gateway, and MySQL for consumer, venue-manager, and administrator workflows.",
    bullets: [
      "Developed role-based workflows for consumers, venue managers, and administrators.",
      "Connected a React frontend to AWS Lambda functions through API Gateway.",
      "Implemented venue, show, block pricing, purchase, reporting, and sold-out behaviors backed by MySQL."
    ],
    technologies: [
      "React",
      "JavaScript",
      "AWS Lambda",
      "API Gateway",
      "MySQL",
      "SQL",
      "Software Engineering",
      "Role-Based Workflows"
    ],
    featured: false,
    image: "/images/projects/seats4u.png",
    video: "/videos/projects/seats4u-demo.mp4",
    links: [
      {
        label: "Video Demonstration",
        href: "https://www.youtube.com/watch?v=fALFIBM9eoY&t=31s"
      },
      {
        label: "GitHub",
        href: "https://github.com/fmarcantoni/seats4u-software-engineering"
      }
    ],
    detail: {
      problem:
        "Ticketing systems need reliable seat inventory, venue management, pricing, purchasing, and reporting workflows across multiple user roles.",
      implementation: [
        "Built the frontend in React and JavaScript.",
        "Implemented backend actions with AWS Lambda and API Gateway.",
        "Used MySQL for venue, show, seat, purchase, and reporting data."
      ],
      results: [
        "Delivered consumer search and purchasing workflows with sold-out handling.",
        "Implemented venue-manager workflows for venues, shows, blocks, pricing, and activation.",
        "Added administrator reporting and venue/show management functionality."
      ],
      visualNote:
        "A local demo clip and cover frame from the original project media are included below."
    }
  },
  {
    title: "Square Push NinjaSe",
    slug: "square-push-ninjase",
    type: "Project",
    course: "Software Engineering",
    dates: "November 2023",
    summary:
      "Implemented a React puzzle game where a 2x2 character pushes colored tiles around NxN boards with wrapping, scoring, reset, and solved-state logic.",
    bullets: [
      "Built a solitaire SquarePush puzzle in React and JavaScript.",
      "Implemented board movement, tile pushing, wrapping, removal, scoring, and reset rules.",
      "Supported valid 4x4, 5x5, and 6x6 board configurations."
    ],
    technologies: [
      "React",
      "JavaScript",
      "Game Logic",
      "State Management",
      "Software Engineering",
      "Puzzle Design"
    ],
    featured: false,
    image: "/images/projects/square-push-ninjase.png",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/fmarcantoni/squarePush-software-engineering"
      }
    ],
    detail: {
      problem:
        "The puzzle requires deterministic board-state updates for moving a 2x2 player character while pushing and wrapping colored tiles.",
      implementation: [
        "Implemented the puzzle as a React application.",
        "Encoded movement, collision, wrapping, 2x2 color-group removal, scoring, and reset behavior.",
        "Handled multiple board sizes and color limits."
      ],
      results: [
        "Delivered a playable software-engineering assignment with full puzzle mechanics.",
        "Tracked move count and score until the solved state.",
        "Practiced careful UI state transitions and board-rule implementation."
      ],
      visualNote:
        "Game demonstration media and board-state visuals are included below."
    }
  },
  {
    title: "Robotic Pick and Place System",
    slug: "robotic-pick-and-place",
    type: "Project",
    course: "Robotics Manipulation",
    dates: "October 2023",
    summary:
      "Built a robotic sorting system that combined forward and inverse kinematics, trajectory generation, differential kinematics, and computer vision for object localization and pick-and-place behavior.",
    bullets: [
      "Integrated kinematics and trajectory generation for robot manipulation.",
      "Added computer vision to identify and localize targets relative to the robot.",
      "Developed a sorting behavior that moved toward objects, grasped them, and placed them by category."
    ],
    technologies: [
      "MATLAB",
      "Forward Kinematics",
      "Inverse Kinematics",
      "Trajectory Generation",
      "Computer Vision",
      "Manipulation",
      "Sorting"
    ],
    featured: false,
    image: "/images/projects/robotic-pick-and-place.png",
    links: [
      {
        label: "Final Project Report",
        href: "/reports/projects/Lab5_Report_RBE3001A23_Gangaram_Marcantoni_Manfredi.pdf"
      },
      {
        label: "Video Demonstration",
        href: "https://www.youtube.com/watch?v=2cv498b8PI4&t=57s"
      },
      {
        label: "GitHub",
        href: "https://github.com/fmarcantoni/robotic-pick-and-place-system"
      }
    ],
    detail: {
      problem:
        "A complete pick-and-place system needs to connect robot kinematics, trajectory planning, vision-based localization, grasping, and sorting.",
      implementation: [
        "Used MATLAB implementations of forward kinematics, inverse kinematics, and trajectory generation.",
        "Integrated computer vision for target identification and localization.",
        "Combined motion and perception modules into a sorting workflow."
      ],
      results: [
        "Delivered a robotic pick-and-place sorting system.",
        "Iterated experimentally to identify a practical final approach.",
        "Documented the system in a final report and repository."
      ],
      visualNote:
        "Pick-and-place demo media and system visuals are included below."
    }
  },
  {
    title: "Bench Press CAD Design",
    slug: "bench-press-solidworks",
    type: "Project",
    course: "Mechanical Engineering Design",
    dates: "August 2023",
    summary:
      "Designed a gym bench press assembly in SolidWorks for an Introduction to CAD final project.",
    bullets: [
      "Modeled a bench press assembly for gym use.",
      "Used SolidWorks to create the CAD design.",
      "Documented the mechanical design in a project report."
    ],
    technologies: [
      "SolidWorks",
      "CAD",
      "Mechanical Design",
      "Assembly Modeling",
      "Technical Documentation"
    ],
    featured: false,
    image: "/images/projects/bench-press-solidworks.png",
    links: [
      {
        label: "Project Report",
        href: "https://docs.google.com/document/d/e/2PACX-1vQTXi6lDsTOZfQL_ihU5t7zzQ5sJKqLvk-tDU9HGcYPRZEF8noNkt1wwQRx-2KWXMqblh-6dkMVdYUk/pub"
      }
    ],
    detail: {
      problem:
        "The CAD project required a complete mechanical design for a functional gym bench press assembly.",
      implementation: [
        "Modeled the bench press geometry in SolidWorks.",
        "Organized the design as a mechanical assembly.",
        "Prepared supporting documentation for the final CAD submission."
      ],
      results: [
        "Completed a SolidWorks bench press design.",
        "Practiced CAD modeling and mechanical design communication.",
        "Delivered the final project report."
      ],
      visualNote:
        "CAD assembly renders, engineering drawings, and project video are included below."
    }
  },
  {
    title: "Robotic Maze Escape",
    slug: "robotic-maze-escape",
    type: "Project",
    course: "Robotics",
    dates: "May 2023",
    summary:
      "Customized and programmed three Romi robots to cooperate in a grid-based maze using IR sensing, AprilTags, MQTT communication, ESP32 modules, and task-specific roles.",
    bullets: [
      "Customized three Romi robots for cooperative maze escape tasks.",
      "Used IR sensing, an OpenMV camera, AprilTags, and MQTT communication.",
      "Coordinated robots to find a beacon, identify the door, transmit a code, and complete the escape sequence."
    ],
    technologies: [
      "Romi Robots",
      "ESP32",
      "MQTT",
      "OpenMV",
      "AprilTags",
      "IR Sensing",
      "State Machines",
      "Embedded Robotics"
    ],
    featured: false,
    image: "/images/projects/robotic-maze-escape.png",
    links: [
      {
        label: "State Machine and Pinout",
        href: "https://docs.google.com/document/d/e/2PACX-1vRSP_2FxE5vQfkosHO-wazdECzN14mG2NQAmsR6GaJrdbhbGyatahwc6Y45M0MAupmWoYJDvGhkrWKj/pub"
      },
      {
        label: "GitHub",
        href: "https://github.com/fmarcantoni/robotic-maze-escape"
      }
    ],
    detail: {
      problem:
        "A multi-robot maze task required distributed sensing, communication, state coordination, and role-specific behavior across three small robots.",
      implementation: [
        "Equipped one robot with an IR positioning camera, one with an OpenMV camera, and one with an IR emitter.",
        "Used MQTT over ESP32 modules to exchange maze information between robots.",
        "Implemented a cooperative sequence for beacon detection, ramp traversal, AprilTag reading, code transfer, and escape."
      ],
      results: [
        "Delivered a coordinated multi-robot maze demonstration.",
        "Produced state-machine and pinout documentation.",
        "Integrated embedded sensing, communication, and task planning."
      ],
      visualNote:
        "Robot photos, maze layouts, and demonstration videos are included below."
    }
  },
  {
    title: "MSP430 Hero",
    slug: "msp430-hero",
    type: "Project",
    course: "Embedded Systems",
    dates: "February 2023",
    summary:
      "Built a Guitar Hero-inspired embedded game on the MSP430F5529 LaunchPad lab board using timers, keypad input, LEDs, push buttons, and buzzer feedback.",
    bullets: [
      "Implemented a two-song menu with keypad selection.",
      "Used timers to synchronize notes, LEDs, buzzer output, and button checks.",
      "Added real-time player feedback and reset behavior."
    ],
    technologies: [
      "C",
      "MSP430F5529",
      "Embedded Systems",
      "Timers",
      "Keypad Input",
      "LEDs",
      "Buzzer",
      "State Machines"
    ],
    featured: false,
    image: "/images/projects/msp430-hero.jpg",
    links: [
      {
        label: "Project Report",
        href: "https://docs.google.com/document/d/e/2PACX-1vRAV_IK-0_L3BhCfhswYqI2gMbiVdrOlI5RFtHtJ_namtN9rpDcZ3MU7BN24bVBIiBp9MuWTktAvgol/pub"
      },
      {
        label: "GitHub",
        href: "https://github.com/fmarcantoni/MSP430-guitar-hero-embedded-systems"
      }
    ],
    detail: {
      problem:
        "The embedded game needed synchronized sound, LEDs, keypad input, button feedback, and reset behavior on a constrained microcontroller platform.",
      implementation: [
        "Configured LEDs, LaunchPad user LEDs, push buttons, keypad input, and timer-driven events.",
        "Mapped songs to timed note prompts and corresponding user inputs.",
        "Implemented feedback through red and green LaunchPad LEDs."
      ],
      results: [
        "Delivered a playable MSP430 Guitar Hero-style game.",
        "Practiced timer-based embedded programming and real-time input handling.",
        "Documented the implementation in a report and repository."
      ],
      visualNote:
        "Embedded game demonstration videos and board visuals are included below."
    }
  },
  {
    title: "Simon Game",
    slug: "simon-game",
    type: "Project",
    course: "Embedded Systems",
    dates: "January 2023",
    summary:
      "Created a Simon-style embedded game on the MSP430F5529 LaunchPad lab board with LED sequences, buzzer tones, keypad input, reset logic, and state-machine structure.",
    bullets: [
      "Generated LED and buzzer sequences for the player to repeat.",
      "Used keypad input to validate user responses.",
      "Implemented reset behavior, port configuration, functions, and state-machine logic in C."
    ],
    technologies: [
      "C",
      "MSP430F5529",
      "Embedded Systems",
      "State Machines",
      "Keypad Input",
      "LEDs",
      "Buzzer"
    ],
    featured: false,
    image: "/images/projects/simon-game.png",
    links: [
      {
        label: "Project Report",
        href: "https://docs.google.com/document/d/e/2PACX-1vTGwn_G1WSGYHs4wKqEbqRGyp1VoQ7PcrIWjfuOQgJHlXgAALahRejn32WLBK_lNTecLJ0w_gwfceVE/pub"
      },
      {
        label: "GitHub",
        href: "https://github.com/fmarcantoni/simon-game-embedded-systems"
      }
    ],
    detail: {
      problem:
        "The game required deterministic embedded control for sequence generation, user input validation, feedback, and reset behavior.",
      implementation: [
        "Implemented the game in C on the MSP430F5529 LaunchPad lab board.",
        "Configured LEDs, buzzer tones, keypad input, push-button reset, and state transitions.",
        "Increased sequence length and speed after successful user input."
      ],
      results: [
        "Delivered a working Simon-style embedded game.",
        "Practiced state machines, port configuration, and embedded functions.",
        "Documented the project in a report and GitHub repository."
      ],
      visualNote:
        "Embedded game demonstration videos and board visuals are included below."
    }
  },
  {
    title: "Robotic Replacement of Solar Collector Panels",
    slug: "solar-collector-panel-replacement",
    type: "Project",
    course: "Robotics",
    dates: "October 2022",
    summary:
      "Built a robotics project simulating solar collector panel replacement, where a robot removes old panels, navigates to staging, and places new panels at specified roof angles.",
    bullets: [
      "Simulated a robot replacing old solar collector panels.",
      "Handled panels mounted at 25-degree and 45-degree angles.",
      "Designed behavior for removing old panels, staging them, and placing replacements."
    ],
    technologies: [
      "Robotics",
      "Robot Design",
      "Manipulation",
      "Autonomous Task Execution"
    ],
    featured: false,
    image: "/images/projects/solar-collector-panel-replacement.png",
    detail: {
      problem:
        "The task simulated a robot replacing old solar collector panels on a roof with different collector angles and material types.",
      implementation: [
        "Designed the robot task flow around removing an old collector from the roof.",
        "Planned navigation to a staging block for old-panel deposit.",
        "Added replacement behavior for picking and placing the new panel on the roof."
      ],
      results: [
        "Completed a robotics task scenario focused on manipulation and placement.",
        "Practiced translating game-field constraints into robot behavior.",
        "Built experience with autonomous replacement workflows."
      ],
      visualNote:
        "Motion-analysis and mechanism visuals are included below."
    }
  },
  {
    title: "Robotic Pizza Delivery",
    slug: "robotic-pizza-delivery",
    type: "Project",
    course: "Robotics",
    dates: "March 2022",
    summary:
      "Designed and built a semi-autonomous and autonomous robot for a pizza-delivery game involving pickup, field navigation, line/vision/range sensing, and remote operation.",
    bullets: [
      "Designed a robot to pick up and deliver wooden pizza blocks.",
      "Supported autonomous field navigation with sensing and remote-control phases.",
      "Built around competition-style constraints with pickup and multi-floor delivery targets."
    ],
    technologies: [
      "Robotics",
      "Autonomous Navigation",
      "Line Tracking",
      "Range Sensing",
      "Vision",
      "Robot Design",
      "Remote Control"
    ],
    featured: false,
    image: "/images/projects/robotic-pizza-delivery.png",
    links: [
      {
        label: "Project Report",
        href: "https://docs.google.com/document/d/e/2PACX-1vQbwTHq1T6HUAq_4oJeSOGYFJtWC_jT0TZvdrFmu4STwtyde3rDxQ-RZszcSdtVXw6Q2zP03ObcjX5F/pub"
      }
    ],
    detail: {
      problem:
        "The robot needed to pick up pizza blocks and deliver them to target dorm locations under autonomous and remote-control phases.",
      implementation: [
        "Designed and built the delivery robot for a competition-style game field.",
        "Used sensing strategies such as vision, line tracking, and range finding for autonomous navigation.",
        "Implemented pickup and delivery behavior for multiple target locations."
      ],
      results: [
        "Completed a robotics project spanning mechanical design, sensing, and navigation.",
        "Supported both autonomous and remote-controlled operation phases.",
        "Documented the project in a final report."
      ],
      visualNote:
        "Robot mechanism media and delivery-task visuals are included below."
    }
  }
];

export const getProjectBySlug = (slug: string) =>
  projects.find((item) => item.slug === slug);
