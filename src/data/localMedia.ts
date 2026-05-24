import type { PortfolioMediaItem } from "./portfolioMedia";

export const localMediaBySlug: Record<string, PortfolioMediaItem[]> = {
  "industrial-robotics-copilot": [
    {
      type: "image",
      src: "/images/experience/br-industrial-automation-logo-lobby.jpg",
      title: "B&R Industrial Automation Lobby",
      description: "Non-confidential company-site photo used as visual context for the industrial robotics R&D internship."
    },
    {
      type: "image",
      src: "/images/experience/br-industrial-automation-sign.jpg",
      title: "ABB / B&R Campus Sign",
      description: "Campus photo used as non-confidential context for the B&R internship in Eggelsberg."
    },
    {
      type: "image",
      src: "/images/experience/br-industrial-automation-atrium.jpg",
      title: "B&R Campus Interior",
      description: "Interior campus photo used as contextual support without exposing confidential project details."
    },
    {
      type: "image",
      src: "/images/experience/br-industrial-automation-demo-space.jpg",
      title: "B&R Technical Space",
      description: "Technical environment photo used as contextual support without exposing confidential project details."
    }
  ],
  "machine-vision-inspection": [
    {
      type: "image",
      src: "/images/experience/makro-labelling-logo.png",
      title: "Makro Labelling",
      description: "Company visual identity used as supporting context for the machine vision and AI R&D internship."
    }
  ],
  "vr-teleoperation-interface": [
    {
      type: "video",
      src: "/videos/research/vr-teleoperation-interface-demo.mp4",
      title: "Multimodal VR Teleoperation Demo",
      description: "Local demo clip showing the multi-camera VR teleoperation interface and operator workflow.",
      poster: "/images/research/vr-teleoperation-interface-demo-poster.jpg"
    }
  ],
  "reinforcement-learning": [
    {
      type: "video",
      src: "/videos/projects/reinforce_video_1.mp4",
      title: "REINFORCE LunarLander Rollout",
      description: "Representative rollout from the policy-gradient baseline.",
      poster: "/images/projects/reinforcement-learning-reinforce-poster.jpg"
    },
    {
      type: "video",
      src: "/videos/projects/a2c_video_1.mp4",
      title: "A2C LunarLander Rollout",
      description: "Actor-critic evaluation rollout for the LunarLander task.",
      poster: "/images/projects/reinforcement-learning-a2c-poster.jpg"
    },
    {
      type: "video",
      src: "/videos/projects/a3c_kuka_video.mp4",
      title: "A3C PyBullet Kuka Grasping Rollout",
      description: "Asynchronous actor-critic policy evaluated on vision-based Kuka grasping.",
      poster: "/images/projects/reinforcement-learning.jpg"
    },
    {
      type: "image",
      src: "/images/projects/robot-learning-reinforce-training.png",
      title: "REINFORCE Training Curve",
      description: "Reward history from the LunarLander REINFORCE experiment."
    },
    {
      type: "image",
      src: "/images/projects/robot-learning-a2c-training.png",
      title: "A2C Training Curve",
      description: "Reward history from the LunarLander A2C experiment."
    },
    {
      type: "image",
      src: "/images/projects/robot-learning-a3c-training.png",
      title: "A3C Training Curve",
      description: "Training curve from the PyBullet Kuka A3C experiment."
    }
  ],
  "imitation-learning": [
    {
      type: "video",
      src: "/videos/projects/bc_rollout.mp4",
      title: "Behavioral Cloning PickPlaceCan Rollout",
      description: "Representative recurrent Behavioral Cloning rollout from the robomimic PickPlaceCan experiments.",
      poster: "/images/projects/imitation-learning-bc-poster.jpg"
    },
    {
      type: "video",
      src: "/videos/projects/diffusion_rollout.mp4",
      title: "Diffusion Policy Rollout",
      description: "Representative image-conditioned Diffusion Policy rollout.",
      poster: "/images/projects/imitation-learning-diffusion-poster.jpg"
    },
    {
      type: "video",
      src: "/videos/projects/diff_demo50_rollout.mp4",
      title: "50-Demonstration Diffusion Policy Rollout",
      description: "Final 50-demonstration diffusion policy rollout that reached 0.90 success in the logged evaluation.",
      poster: "/images/projects/imitation-learning-diff50-poster.jpg"
    }
  ],
  "visual-inertial-odometry": [
    {
      type: "video",
      src: "/videos/projects/VIO.mp4",
      title: "Classical Stereo MSCKF VIO Preview",
      description: "Web-optimized preview of the classical VIO trajectory visualization.",
      poster: "/images/projects/vio-trajectory-comparison.png"
    },
    {
      type: "image",
      src: "/images/projects/vio-trajectory-comparison.png",
      title: "VIO Trajectory Comparison",
      description: "Estimated trajectory plotted against reference trajectory for the classical stereo MSCKF run."
    },
    {
      type: "image",
      src: "/images/projects/vio-trajectory-top.png",
      title: "VIO Top-Down Trajectory",
      description: "Top-down SE(3) trajectory visualization from the VIO output plots."
    },
    {
      type: "image",
      src: "/images/projects/vio-trajectory-side.png",
      title: "VIO Side Trajectory",
      description: "Side-view SE(3) trajectory visualization from the VIO output plots."
    },
    {
      type: "image",
      src: "/images/projects/vio-translation-error.png",
      title: "Translation Error",
      description: "Translation error plot from the classical VIO evaluation."
    },
    {
      type: "image",
      src: "/images/projects/vio-rotation-error.png",
      title: "Rotation Error",
      description: "Rotation error plot from the classical VIO evaluation."
    },
    {
      type: "image",
      src: "/images/projects/vio-relative-translation-error.png",
      title: "Relative Translation Error",
      description: "Relative translation error from the VIO trajectory evaluation."
    }
  ],
  "einstein-vision": [
    {
      type: "video",
      src: "/videos/projects/einstein-vision-video-preview.mp4",
      title: "Einstein Vision Demo",
      description: "Monocular autonomous-driving scene understanding and 3D visualization demo.",
      poster: "/images/projects/einstein-vision.jpg"
    },
    {
      type: "video",
      src: "/videos/projects/einstein-vision-seq1-visualization.mp4",
      title: "Output Visualization Sequence 1",
      description: "Additional end-to-end perception and visualization sequence from the local Einstein Vision project repository.",
      poster: "/images/projects/einstein-vision-seq1-poster.jpg"
    }
  ],
  "seats4u": [
    {
      type: "video",
      src: "/videos/projects/seats4u-demo.mp4",
      title: "Seats4u Demo Clip",
      description: "Condensed demo clip showing venue-manager workflows from the original project media.",
      poster: "/images/projects/seats4u-video-poster.jpg"
    }
  ],
  "sfm-nerf": [
    {
      type: "image",
      src: "/images/projects/sfm-nerf-bundle-adjustment.png",
      title: "SfM Bundle Adjustment",
      description: "Sparse reconstruction before and after bundle adjustment."
    },
    {
      type: "image",
      src: "/images/projects/sfm-nerf-mlp-architecture.png",
      title: "NeRF MLP Architecture",
      description: "Neural radiance field architecture used for differentiable volume rendering."
    },
    {
      type: "image",
      src: "/images/projects/sfm-nerf-lego.gif",
      title: "NeRF Lego Novel View Synthesis",
      description: "Animated novel-view synthesis result from the NeRF implementation."
    },
    {
      type: "image",
      src: "/images/projects/sfm-nerf-ship.gif",
      title: "NeRF Ship Novel View Synthesis",
      description: "Animated novel-view synthesis result from the NeRF implementation."
    }
  ],
  "maxcal-swarm-control": [
    {
      type: "image",
      src: "/images/projects/maxcal-swarm-control-coverage.gif",
      title: "MaxCal Coverage Simulation",
      description: "Coverage behavior generated from local MaxCal transition rules."
    },
    {
      type: "image",
      src: "/images/projects/maxcal-swarm-control-coverage-main.png",
      title: "Coverage Controller Summary",
      description: "Coverage performance and occupancy behavior from the MaxCal coverage controller."
    },
    {
      type: "image",
      src: "/images/projects/maxcal-swarm-control-coverage-phase.png",
      title: "Coverage Phase View",
      description: "Phase-space view for the coverage controller."
    },
    {
      type: "image",
      src: "/images/projects/maxcal-swarm-control-coverage-speed-sweep.png",
      title: "Coverage Speed Sweep",
      description: "Validation sweep showing how speed affects the coverage controller."
    },
    {
      type: "image",
      src: "/images/projects/maxcal-swarm-control-uniform-target-maps.png",
      title: "Uniform Target Validation Maps",
      description: "Validation maps for coverage behavior under uniform target distributions."
    },
    {
      type: "image",
      src: "/images/projects/maxcal-swarm-control-info-diffusion.gif",
      title: "MaxCal Information-Diffusion Simulation",
      description: "Information-diffusion behavior from the MaxCal controller."
    },
    {
      type: "image",
      src: "/images/projects/maxcal-swarm-control-info-diffusion-main.png",
      title: "Information-Diffusion Summary",
      description: "Information spread and meeting dynamics from the MaxCal information-diffusion controller."
    },
    {
      type: "image",
      src: "/images/projects/maxcal-swarm-control-info-diffusion-spread.png",
      title: "Information Spread Validation",
      description: "Validation plot for information spread through the swarm."
    },
    {
      type: "image",
      src: "/images/projects/maxcal-swarm-control-hierarchical-linear.gif",
      title: "Hierarchical Linear Mode Selection",
      description: "Linear hierarchical controller switching between swarm modes."
    },
    {
      type: "image",
      src: "/images/projects/maxcal-swarm-control-hierarchical-linear-main.png",
      title: "Hierarchical Linear Summary",
      description: "Summary results for the linear hierarchical MaxCal controller."
    },
    {
      type: "image",
      src: "/images/projects/maxcal-swarm-control-hierarchical-linear-validation.png",
      title: "Hierarchical Linear Validation",
      description: "Validation output for linear hierarchical mode selection."
    },
    {
      type: "image",
      src: "/images/projects/maxcal-swarm-control-hierarchical-quadratic.gif",
      title: "Hierarchical Quadratic Mode Selection",
      description: "Oscillatory mode switching between coverage and information diffusion."
    },
    {
      type: "image",
      src: "/images/projects/maxcal-swarm-control-hierarchical-quadratic-main.png",
      title: "Hierarchical Quadratic Summary",
      description: "Summary results for the quadratic hierarchical MaxCal controller."
    },
    {
      type: "image",
      src: "/images/projects/maxcal-swarm-control-hierarchical-quadratic-psd.png",
      title: "Hierarchical Quadratic Frequency Analysis",
      description: "Power spectral density analysis for the quadratic mode-selection behavior."
    },
    {
      type: "image",
      src: "/images/projects/maxcal-swarm-control-hierarchical-quadratic-validation.png",
      title: "Hierarchical Quadratic Validation",
      description: "Validation output for quadratic hierarchical mode selection."
    },
    {
      type: "image",
      src: "/images/projects/maxcal-swarm-control-validation-baseline.png",
      title: "Coverage Validation Baseline",
      description: "Validation output for the coverage controller."
    }
  ]
};
