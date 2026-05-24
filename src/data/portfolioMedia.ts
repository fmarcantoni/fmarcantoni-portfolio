export interface PortfolioMediaItem {
  type: "image" | "video";
  src: string;
  title: string;
  description?: string;
  poster?: string;
}

export const portfolioMediaBySlug: Record<string, PortfolioMediaItem[]> = {
  "fluoroscopy-registration": [
    {
      "type": "image",
      "src": "/images/research/fluoroscopy-registration-01-registration-results.png",
      "title": "Registration Results",
      "description": "Pose-estimation result on the 3D-printed aorta phantom."
    },
    {
      "type": "image",
      "src": "/images/research/fluoroscopy-registration-02-drrs-comparison-between-ct-scan-and-stl-derived-volu.png",
      "title": "CT-Derived and STL-Derived DRR Comparison",
      "description": "Comparison of digitally reconstructed radiographs generated from CT-derived and STL-derived volumes."
    },
    {
      "type": "image",
      "src": "/images/research/fluoroscopy-registration-03-manual-landmark-evaluation.png",
      "title": "Manual Landmark Evaluation",
      "description": "Manual landmark measurements used to evaluate registration quality."
    },
    {
      "type": "image",
      "src": "/images/research/fluoroscopy-registration-04-pipeline-diagram.png",
      "title": "Pipeline Diagram",
      "description": "End-to-end workflow covering STL volume generation, XVR preoperative/intraoperative setup, preprocessing, registration testing, and landmark evaluation."
    },
    {
      "type": "image",
      "src": "/images/research/fluoroscopy-registration-05-pre-processing-video-to-dicom.png",
      "title": "Pre-processing Video to DICOM",
      "description": "Preprocessing pipeline for extracting a fluoroscopy region of interest, suppressing catheter/background artifacts, balancing intensity, and converting frames to DICOM."
    }
  ],
  "quadrotor-controller-design": [
    {
      "type": "video",
      "src": "/videos/projects/quadrotor-controller-design-01-real-world-experiment-drone-performing-circular-traj.mp4",
      "title": "Real-World Circular Trajectory Experiment",
      "description": "Hardware flight test used to compare controller tracking performance against simulation and analyze the sim-to-real gap.",
      "poster": "/images/projects/quadrotor-controller-design-01-real-world-experiment-drone-performing-circular-traj-poster.jpg"
    }
  ],
  "vr-inverse-kinematics": [
    {
      "type": "video",
      "src": "/videos/projects/vr-inverse-kinematics-01-demonstration.mp4",
      "title": "VR-Guided IK Demonstration",
      "description": "Headset-driven arm motion benchmark comparing four inverse-kinematics methods by completion time, cumulative travel, and weighted joint motion.",
      "poster": "/images/projects/vr-inverse-kinematics-01-demonstration-poster.jpg"
    }
  ],
  "pielo-swarm-language": [
    {
      "type": "video",
      "src": "/videos/research/pielo-swarm-language-01-real-world-deployment.mp4",
      "title": "Real-World Deployment",
      "description": "PiELo barrier-test behavior deployed on Khepera IV robots with Vicon tracking in the NEST Lab.",
      "poster": "/images/research/pielo-swarm-language-01-real-world-deployment-poster.jpg"
    },
    {
      "type": "video",
      "src": "/videos/research/pielo-swarm-language-02-simulation.mp4",
      "title": "Simulation",
      "description": "ARGoS3 simulation of the PiELo barrier-test behavior before physical robot deployment.",
      "poster": "/images/research/pielo-swarm-language-02-simulation-poster.jpg"
    },
    {
      "type": "image",
      "src": "/images/research/pielo-swarm-language-03-mqp-team.jpg",
      "title": "PiELo MQP Team",
      "description": "Project team photo with Lorenzo Manfredi Segato and Emma Pollak, advised by Prof. Carlo Pinciroli."
    }
  ],
  "active-neck-iona": [
    {
      "type": "image",
      "src": "/images/projects/active-neck-iona-01-camera-modes.png",
      "title": "Camera Modes",
      "description": "Active Camera Mode (left) vs Workspace Camera Mode (right)"
    },
    {
      "type": "video",
      "src": "/videos/projects/active-neck-iona-02-demo.mp4",
      "title": "Active Neck Navigation Demo",
      "description": "Demonstration of the first path segment of the navigation task.",
      "poster": "/images/projects/active-neck-iona-02-demo-poster.jpg"
    },
    {
      "type": "image",
      "src": "/images/projects/active-neck-iona-03-iona-2-0.png",
      "title": "IONA 2.0 Platform",
      "description": "IONA 2.0 platform at the start of the navigation task."
    }
  ],
  "square-push-ninjase": [
    {
      "type": "video",
      "src": "/videos/projects/square-push-ninjase-01-squarepush-ninja-se-videogame-demonstration.mp4",
      "title": "Square Push NinjaSe Demonstration",
      "description": "Gameplay demonstration covering board configuration, movement, tile pushing, scoring, and reset behavior.",
      "poster": "/images/projects/square-push-ninjase-01-squarepush-ninja-se-videogame-demonstration-poster.jpg"
    }
  ],
  "robotic-pick-and-place": [
    {
      "type": "video",
      "src": "/videos/projects/robotic-pick-and-place-01-final-project-video.mp4",
      "title": "Pick-and-Place System Demonstration",
      "description": "Project video explaining the perception, kinematics, and manipulation workflow for the robotic pick-and-place system.",
      "poster": "/images/projects/robotic-pick-and-place-01-final-project-video-poster.jpg"
    }
  ],
  "bench-press-solidworks": [
    {
      "type": "video",
      "src": "/videos/projects/bench-press-solidworks-01-final-project-video.mp4",
      "title": "Bench Press CAD Demonstration",
      "description": "SolidWorks demonstration showing the assembly, exploded view, collapsed view, and mobile bench configuration.",
      "poster": "/images/projects/bench-press-solidworks-01-final-project-video-poster.jpg"
    },
    {
      "type": "image",
      "src": "/images/projects/bench-press-solidworks-02-sectioned-view-of-the-bench-press.png",
      "title": "Sectioned Bench Press Assembly",
      "description": "Sectioned assembly view with balloon tags tied to the bill of materials."
    },
    {
      "type": "image",
      "src": "/images/projects/bench-press-solidworks-03-exploded-view-of-the-bench-press.png",
      "title": "Exploded Bench Press Assembly",
      "description": "Exploded assembly view showing the major subassemblies and bill-of-materials references."
    },
    {
      "type": "image",
      "src": "/images/projects/bench-press-solidworks-04-bill-of-materials.png",
      "title": "Bill Of Materials",
      "description": "Bill of materials listing each part and subassembly, including material and quantity."
    },
    {
      "type": "image",
      "src": "/images/projects/bench-press-solidworks-05-engineering-drawing-of-the-seat.png",
      "title": "Engineering Drawing of the Seat",
      "description": "Dimensioned front, top, and side views of the bench seat."
    },
    {
      "type": "image",
      "src": "/images/projects/bench-press-solidworks-06-engineering-drawing-of-the-bar-for-seat.png",
      "title": "Seat Support Bar Drawing",
      "description": "Dimensioned drawing of the bar that supports the bench seat."
    },
    {
      "type": "image",
      "src": "/images/projects/bench-press-solidworks-07-engineering-drawing-of-the-back-support.png",
      "title": "Engineering Drawing of the Back Support",
      "description": "Dimensioned front, top, and side views of the back support."
    },
    {
      "type": "image",
      "src": "/images/projects/bench-press-solidworks-08-engineering-drawing-of-the-bar-for-back-support.png",
      "title": "Back Support Bar Drawing",
      "description": "Dimensioned drawing of the bar that supports the backrest assembly."
    },
    {
      "type": "image",
      "src": "/images/projects/bench-press-solidworks-09-engineering-drawing-of-the-rolley-cart.png",
      "title": "Rolling Cart Drawing",
      "description": "Dimensioned drawing of the rolling cart that connects the seat and back-support subassemblies along the main bar."
    },
    {
      "type": "image",
      "src": "/images/projects/bench-press-solidworks-10-engineering-drawing-of-the-main-bar.png",
      "title": "Engineering Drawing of the Main Bar",
      "description": "Dimensioned drawing of the main rail used by the rolling cart."
    },
    {
      "type": "image",
      "src": "/images/projects/bench-press-solidworks-11-engineering-drawing-of-the-arm-support.png",
      "title": "Engineering Drawing of the Arm Support",
      "description": "Dimensioned drawing of the arm support."
    },
    {
      "type": "image",
      "src": "/images/projects/bench-press-solidworks-12-engineering-drawing-of-the-bar-for-arm-support.png",
      "title": "Arm Support Bar Drawing",
      "description": "Dimensioned drawing of the bar that supports the arm-support assembly."
    },
    {
      "type": "image",
      "src": "/images/projects/bench-press-solidworks-13-engineering-drawing-of-the-right-bench-support.png",
      "title": "Engineering Drawing of the Right Bench Support",
      "description": "Dimensioned drawing of the right bench support connected to the main rail."
    },
    {
      "type": "image",
      "src": "/images/projects/bench-press-solidworks-14-engineering-drawing-of-the-left-bench-support.png",
      "title": "Engineering Drawing of the Left Bench Support",
      "description": "Dimensioned drawing of the left bench support connected to the main rail and arm-support assembly."
    }
  ],
  "robotic-maze-escape": [
    {
      "type": "image",
      "src": "/images/projects/robotic-maze-escape-01-possible-arena-layout.png",
      "title": "Possible Arena Layout",
      "description": "Candidate arena layout for the multi-robot maze escape task."
    },
    {
      "type": "image",
      "src": "/images/projects/robotic-maze-escape-02-first-robot-with-ir-positioning-camera-frontal-view.png",
      "title": "Robot 1 - IR Positioning Camera, Front View",
      "description": "Front view of the first Romi robot configured for IR beacon localization."
    },
    {
      "type": "image",
      "src": "/images/projects/robotic-maze-escape-03-first-robot-with-ir-positioning-camera-top-view.png",
      "title": "Robot 1 - IR Positioning Camera, Top View",
      "description": "Top view of the first Romi robot showing the IR positioning camera setup."
    },
    {
      "type": "image",
      "src": "/images/projects/robotic-maze-escape-04-second-robot-with-open-mv-camera-frontal-view.png",
      "title": "Robot 2 - OpenMV Camera, Front View",
      "description": "Front view of the second Romi robot configured for AprilTag perception."
    },
    {
      "type": "image",
      "src": "/images/projects/robotic-maze-escape-05-second-robot-with-open-mv-camera-top-view.png",
      "title": "Robot 2 - OpenMV Camera, Top View",
      "description": "Top view of the second Romi robot and OpenMV camera mount."
    },
    {
      "type": "image",
      "src": "/images/projects/robotic-maze-escape-06-third-robot-with-ir-emitter-frontal-view.png",
      "title": "Robot 3 - IR Emitter, Front View",
      "description": "Front view of the third Romi robot configured to transmit the final door code."
    },
    {
      "type": "image",
      "src": "/images/projects/robotic-maze-escape-07-third-robot-with-ir-emitter-top-view.png",
      "title": "Robot 3 - IR Emitter, Top View",
      "description": "Top view of the third Romi robot and IR emitter wiring."
    },
    {
      "type": "video",
      "src": "/videos/projects/robotic-maze-escape-08-demonstration-of-communication-between-the-first-two.mp4",
      "title": "Robot-to-Robot AprilTag Coordination",
      "description": "Demonstration of MQTT coordination between the first robot, which localizes the ramp column, and the second robot, which climbs the ramp and reads the AprilTag.",
      "poster": "/images/projects/robotic-maze-escape-08-demonstration-of-communication-between-the-first-two-poster.jpg"
    },
    {
      "type": "video",
      "src": "/videos/projects/robotic-maze-escape-09-final-demonstration-part-1.mp4",
      "title": "Final Demonstration Part 1",
      "description": "First phase of the final demonstration: the lead robot searches the maze, detects the IR beacon, and sends the ramp column to the second robot over MQTT.",
      "poster": "/images/projects/robotic-maze-escape-09-final-demonstration-part-1-poster.jpg"
    },
    {
      "type": "video",
      "src": "/videos/projects/robotic-maze-escape-10-final-demonstration-part-2.mp4",
      "title": "Final Demonstration Part 2",
      "description": "Second phase of the final demonstration: the second robot reads the AprilTag and coordinates with the third robot, which drives to the escape door and transmits the IR code.",
      "poster": "/images/projects/robotic-maze-escape-10-final-demonstration-part-2-poster.jpg"
    }
  ],
  "msp430-hero": [
    {
      "type": "video",
      "src": "/videos/projects/msp430-hero-01-game-demonstration-playing-smoke-on-the-water.mp4",
      "title": "MSP430 Hero - Smoke on the Water Demo",
      "description": "Gameplay demonstration showing note prompts, keypad input, and LaunchPad LED feedback for a Smoke on the Water sequence.",
      "poster": "/images/projects/msp430-hero-01-game-demonstration-playing-smoke-on-the-water-poster.jpg"
    },
    {
      "type": "video",
      "src": "/videos/projects/msp430-hero-02-game-demonstration-playing-three-blind-mice-and-rese.mp4",
      "title": "MSP430 Hero - Three Blind Mice Demo",
      "description": "Gameplay demonstration showing the Three Blind Mice sequence and keypad-based reset behavior.",
      "poster": "/images/projects/msp430-hero-02-game-demonstration-playing-three-blind-mice-and-rese-poster.jpg"
    }
  ],
  "simon-game": [
    {
      "type": "video",
      "src": "/videos/projects/simon-game-01-game-demonstration.mp4",
      "title": "Game Demonstration",
      "description": "Simon game demonstration showing sequence playback, keypad input, level progression, and increasing speed.",
      "poster": "/images/projects/simon-game-01-game-demonstration-poster.jpg"
    },
    {
      "type": "video",
      "src": "/videos/projects/simon-game-02-game-demonstration-using-reset-buttons.mp4",
      "title": "Simon Game Reset Demonstration",
      "description": "Demonstration of the game being reset using the two left push buttons on the board.",
      "poster": "/images/projects/simon-game-02-game-demonstration-using-reset-buttons-poster.jpg"
    }
  ],
  "robotic-pizza-delivery": [
    {
      "type": "image",
      "src": "/images/projects/robotic-pizza-delivery-01-overall-view-of-the-completed-robot.png",
      "title": "Completed Pizza Delivery Robot",
      "description": "Overall view of the completed robot built using a VEX kit."
    },
    {
      "type": "video",
      "src": "/videos/projects/robotic-pizza-delivery-02-rack-and-pinion-lift-mechanism.mp4",
      "title": "Rack-and-Pinion Lift Mechanism",
      "description": "Demonstration of the grabber motion driven by the rack-and-pinion lift mechanism.",
      "poster": "/images/projects/robotic-pizza-delivery-02-rack-and-pinion-lift-mechanism-poster.jpg"
    },
    {
      "type": "image",
      "src": "/images/projects/robotic-pizza-delivery-03-grabber-built-to-the-rack-and-pinion-lift-mechanism.png",
      "title": "Grabber and Lift Mechanism",
      "description": "Grabber built to the rack and pinion lift mechanism."
    }
  ],
  "solar-collector-panel-replacement": [
    {
      "type": "video",
      "src": "/videos/projects/solar-collector-panel-replacement-01-motion-analysis-of-the-lifting-mechanism.mp4",
      "title": "Lifting Mechanism Motion Analysis",
      "description": "SolidWorks motion analysis used to estimate torque requirements during panel placement at a 45-degree roof angle.",
      "poster": "/images/projects/solar-collector-panel-replacement-01-motion-analysis-of-the-lifting-mechanism-poster.jpg"
    },
    {
      "type": "video",
      "src": "/videos/projects/solar-collector-panel-replacement-02-exploded-view-of-the-lifting-mechanism-using-solidwo.mp4",
      "title": "Lifting Mechanism Exploded View",
      "description": "SolidWorks exploded view showing the lifting mechanism assembly intended for the Romi 32U4 platform.",
      "poster": "/images/projects/solar-collector-panel-replacement-02-exploded-view-of-the-lifting-mechanism-using-solidwo-poster.jpg"
    },
    {
      "type": "video",
      "src": "/videos/projects/solar-collector-panel-replacement-03-pick-up-from-roof-at-45-using-solidworks.mp4",
      "title": "Panel Pickup at 45 Degrees",
      "description": "SolidWorks animation of panel pickup from a 45-degree roof angle.",
      "poster": "/images/projects/solar-collector-panel-replacement-03-pick-up-from-roof-at-45-using-solidworks-poster.jpg"
    },
    {
      "type": "video",
      "src": "/videos/projects/solar-collector-panel-replacement-04-pick-up-from-roof-at-25-using-solidworks.mp4",
      "title": "Panel Pickup at 25 Degrees",
      "description": "SolidWorks animation of panel pickup from a 25-degree roof angle.",
      "poster": "/images/projects/solar-collector-panel-replacement-04-pick-up-from-roof-at-25-using-solidworks-poster.jpg"
    },
    {
      "type": "video",
      "src": "/videos/projects/solar-collector-panel-replacement-05-pick-up-from-staring-position-using-solidworks.mp4",
      "title": "Panel Pickup From Staging Position",
      "description": "SolidWorks animation of panel pickup from the staging block.",
      "poster": "/images/projects/solar-collector-panel-replacement-05-pick-up-from-staring-position-using-solidworks-poster.jpg"
    },
    {
      "type": "video",
      "src": "/videos/projects/solar-collector-panel-replacement-06-staging-block-placement.mp4",
      "title": "Staging Block Placement",
      "description": "Physical robot demonstration placing a panel onto the staging block.",
      "poster": "/images/projects/solar-collector-panel-replacement-06-staging-block-placement-poster.jpg"
    },
    {
      "type": "video",
      "src": "/videos/projects/solar-collector-panel-replacement-07-place-panel-at-25-degrees.mp4",
      "title": "Panel Placement at 25 Degrees",
      "description": "Physical robot demonstration placing the aluminum panel on the 25-degree roof section.",
      "poster": "/images/projects/solar-collector-panel-replacement-07-place-panel-at-25-degrees-poster.jpg"
    },
    {
      "type": "video",
      "src": "/videos/projects/solar-collector-panel-replacement-08-place-panel-at-45-degrees.mp4",
      "title": "Panel Placement at 45 Degrees",
      "description": "Physical robot demonstration placing the aluminum panel on the 45-degree roof section.",
      "poster": "/images/projects/solar-collector-panel-replacement-08-place-panel-at-45-degrees-poster.jpg"
    },
    {
      "type": "video",
      "src": "/videos/projects/solar-collector-panel-replacement-09-panel-pickup-at-45-degrees.mp4",
      "title": "Panel Pickup at 45 Degrees",
      "description": "Physical robot demonstration picking up the aluminum panel from the 45-degree roof section.",
      "poster": "/images/projects/solar-collector-panel-replacement-09-panel-pickup-at-45-degrees-poster.jpg"
    },
    {
      "type": "video",
      "src": "/videos/projects/solar-collector-panel-replacement-10-panel-pickup-at-25-degrees.mp4",
      "title": "Panel Pickup at 25 Degrees",
      "description": "Physical robot demonstration picking up the aluminum panel from the 25-degree roof section.",
      "poster": "/images/projects/solar-collector-panel-replacement-10-panel-pickup-at-25-degrees-poster.jpg"
    }
  ]
};
