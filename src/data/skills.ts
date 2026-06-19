export interface SkillCategory {
  category: string;
  skills: string[];
}

export const skills: SkillCategory[] = [
  {
    category: "Programming",
    skills: [
      "Python",
      "C++",
      "C",
      "C#",
      "MATLAB",
      "Java",
      "JavaScript",
      "SQL",
      "Buzz",
      "DrRacket"
    ]
  },
  {
    category: "Robotics & Simulation",
    skills: [
      "ROS",
      "ROS2",
      "Gazebo",
      "MuJoCo",
      "PyBullet",
      "ARGoS3",
      "robosuite",
      "robomimic",
      "Unity",
      "Blender",
      "Vicon",
      "VR/XR",
      "Robot Manipulation",
      "Robot Control",
      "Autonomous Navigation",
      "Human-Robot Interaction",
      "Industrial Automation",
      "Dynamixel",
      "ZED SDK",
      "Automation Studio",
      "3D Slicer"
    ]
  },
  {
    category: "Machine Learning & AI",
    skills: [
      "PyTorch",
      "TensorFlow",
      "Scikit-learn",
      "TensorRT",
      "CUDA",
      "Machine Learning",
      "Deep Learning",
      "Transformers",
      "LLMs",
      "RAG",
      "Generative AI",
      "Reinforcement Learning",
      "Imitation Learning",
      "Behavioral Cloning",
      "Diffusion Policy",
      "Actor-Critic Methods",
      "Physics-Informed Learning"
    ]
  },
  {
    category: "Computer Vision & 3D Perception",
    skills: [
      "OpenCV",
      "SfM",
      "NeRF",
      "Visual-Inertial Odometry",
      "SLAM",
      "MSCKF",
      "RANSAC",
      "PnP",
      "Bundle Adjustment",
      "Homography",
      "Segmentation",
      "Object Detection",
      "Monocular Depth",
      "Optical Flow",
      "Point Clouds",
      "Volumetric Rendering",
      "2D-3D Registration",
      "Pose Estimation",
      "Feature Matching",
      "Visual Servoing",
      "Medical Image Processing"
    ]
  },
  {
    category: "Tools & Infrastructure",
    skills: [
      "Git",
      "Docker",
      "Linux",
      "Jupyter",
      "Simulink",
      "Azure AI",
      "AWS",
      "AWS Lambda",
      "API Gateway",
      "React",
      "Node.js",
      "PostgreSQL",
      "MySQL",
      "HPC/Slurm"
    ]
  },
  {
    category: "CAD & Design",
    skills: ["SolidWorks", "Fusion 360"]
  },
  {
    category: "Languages",
    skills: ["Italian (Native)", "English (Fluent)", "Spanish (Advanced)"]
  }
];
