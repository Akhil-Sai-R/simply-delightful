export const profile = {
  name: "Akhil Sai Ravi Kumar",
  first: "Akhil",
  title: "Senior AI & Software Engineer",
  location: "Munich, Germany",
  email: "rakhilsai95@gmail.com",
  phone: "+49 15163661969",
  linkedin: "https://www.linkedin.com/in/akhil-sai-ravi-kumar-287830b5/",
  publication: "https://ojs.iscram.org/index.php/Proceedings/article/view/243",
};

export const nav = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export const expertise = [
  "Generative AI and agentic AI architecture",
  "Large language models and retrieval-augmented generation",
  "Computer vision and real-time video analytics",
  "GPU optimization and edge AI deployment",
  "Machine learning lifecycle management and MLOps",
  "Cloud-native software and API development",
  "AI evaluation, validation, and reliability",
  "Technical leadership and mentoring",
];

export const journey = [
  { year: "2016", label: "Software Engineering" },
  { year: "2021", label: "Data Science" },
  { year: "2021", label: "Computer Vision & Edge AI" },
  { year: "2022", label: "GenAI & Advanced AI Engineering" },
];

export const skills: { title: string; items: string[] }[] = [
  { title: "Programming & Software Engineering", items: ["Python", "Modern C++", "JavaScript", "React", "Object-Oriented Programming", "Design Patterns", "Clean Code", "Test-Driven Development", "Unit Testing", "Integration Testing", "Automated Testing", "Git", "GitLab CI/CD", "REST APIs", "FastAPI", "Flask"] },
  { title: "AI & Deep Learning", items: ["PyTorch", "TensorFlow", "scikit-learn", "NumPy", "Pandas", "Deep Learning", "Machine Learning", "Model Training", "Fine-Tuning", "Transfer Learning", "Hyperparameter Optimization", "Feature Engineering", "Model Evaluation", "Model Deployment"] },
  { title: "Computer Vision & Image AI", items: ["Computer Vision", "Image Classification", "Object Detection", "Object Recognition", "Image Preprocessing", "Image Generation Workflows", "CNNs", "YOLO", "OpenCV", "Real-Time Video Analytics", "Image and Video Dataset Preparation", "Model Benchmarking"] },
  { title: "GPU & Inference Optimization", items: ["CUDA", "cuDNN", "TensorRT", "ONNX", "OpenVINO", "NVIDIA Jetson", "AWS EC2 GPU Instances", "Hardware-Aware Optimization", "Inference Optimization", "Model Quantization", "Edge Deployment", "Latency and Throughput Benchmarking"] },
  { title: "Generative AI & LLMs", items: ["Large Language Models", "Hugging Face Transformers", "LangChain", "OpenAI APIs", "GPT", "Llama", "Mistral", "Sentence Transformers", "Prompt Engineering", "Context Engineering", "RAG", "Structured Outputs", "Grounded Generation"] },
  { title: "Model Development & Evaluation", items: ["Dataset Construction", "Data Preprocessing", "Labelling Quality Assurance", "Train/Validation/Test Design", "Data-Leakage Prevention", "Experiment Design", "Error Analysis", "Regression Testing", "Evaluation Datasets", "Accuracy and Performance Benchmarking", "Model Comparison", "Reproducible Experimentation"] },
  { title: "MLOps & Deployment", items: ["MLflow", "Experiment Tracking", "Model Versioning", "Artifact Management", "Docker", "Kubernetes", "Terraform", "GitLab CI/CD", "Automated Deployment", "Model Monitoring", "Performance Monitoring", "Rollback and Failure Handling"] },
  { title: "Cloud & Data Engineering", items: ["AWS", "Microsoft Azure", "GCP Vertex AI", "Azure Databricks", "Apache Spark", "PySpark", "PostgreSQL", "SQL", "Kafka", "MQTT", "Data Ingestion", "Data Transformation", "Data Pipelines"] },
];

export type Job = {
  company: string;
  location: string;
  role: string;
  period: string;
  current?: boolean;
  groups: { title: string; items: string[] }[];
};

export const experience: Job[] = [
  {
    company: "ASTRIAL GmbH",
    location: "Germany",
    role: "Senior Software Developer and Research Engineer — GenAI, AI, and ML",
    period: "June 2022 – Present",
    current: true,
    groups: [
      { title: "Agentic AI and GenAI", items: [
        "Architected a modular, enterprise-level agentic software-development harness coordinating specialized AI agents for requirements interpretation, planning, implementation support, code generation, code analysis, validation, and technical documentation.",
        "Designed iterative agent-assisted engineering workflows using technical requirements, coding constraints, automated tests, validation criteria, feedback loops, and human approval.",
        "Built ingestion and retrieval pipelines for engineering documents, system requirements, interface specifications, source code, APIs, operational data, logs, and test results.",
        "Integrated AI components with Python and C++ services, REST APIs, databases, external tools, and GitLab CI/CD.",
        "Implemented enterprise AI safeguards including schema-constrained outputs, validation, evidence-grounded responses, controlled tool execution, retries, fallback handling, evaluation datasets, and human-review checkpoints.",
        "Developed reusable LangChain workflows covering ingestion, semantic retrieval, context assembly, task planning, tool selection, model invocation, response validation, and downstream integration.",
        "Evaluated and optimized LLM inference using model selection, prompt and context reduction, streaming, caching, batching, hardware-aware deployment, and latency, quality, throughput, and cost benchmarking.",
        "Fine-tuned and adapted pre-trained models using PyTorch, TensorFlow, and Hugging Face for domain-specific NLP, speech, computer vision, and engineering applications.",
      ]},
      { title: "Cybersecurity AI", items: [
        "Built cybersecurity copilots for the SEQURED and TRITON projects using GPT, Llama, SecureBERT, LangChain, RAG, embeddings, FAISS, pgvector, and Neo4j.",
        "Modelled tactics, techniques, procedures, security gaps, and contextual threat intelligence in Neo4j for explainable cybersecurity analysis.",
        "Developed Python and FastAPI services connecting LLMs with PostgreSQL, vector databases, Neo4j, REST APIs, streaming systems, and backend applications.",
      ]},
      { title: "Computer Vision and Edge AI", items: [
        "Developed edge and real-time AI systems for UAV monitoring, multimodal sensing, emergency logistics, and speech processing using ONNX, OpenVINO, NVIDIA Jetson, Kafka, MQTT, RTSP, and WebSockets.",
        "Built real-time video analytics pipelines for object detection, tracking, abnormal-activity detection, event recognition, metadata extraction, and monitoring.",
      ]},
      { title: "Intelligent Logistics and Speech Systems", items: [
        "Developed a multimodal logistics decision-support platform for emergency response using Python, FastAPI, PostgreSQL, OSRM, VROOM, Streamlit, Folium, and GenAI/RAG explanations.",
        "Developed an offline English and German speech-to-text workflow for emergency-response form filling using Whisper, Speechmatics, voice activity detection, noise testing, address validation, structured extraction, and confirmation logic.",
        "Defined evaluation harnesses and acceptance criteria for LLM, NLP, speech, and computer-vision systems, including groundedness, response quality, structured-output compliance, WER, field-level accuracy, false-positive analysis, performance KPIs, regression testing, and failure scenarios.",
      ]},
      { title: "MLOps and Technical Leadership", items: [
        "Deployed containerized services with Docker, Kubernetes, Terraform, and GitLab CI/CD.",
        "Owned AI engineering workstreams across APPRAISE, iFLOWS, SYNERGIES, FORESIGHT, SEQURED, TRITON, ORQESTRA, and ENGAGE.",
        "Collaborated with consortium partners, customers, research organizations, and engineering teams to translate requirements into architectures, technical specifications, validation criteria, delivery plans, and maintainable solutions.",
        "Led and mentored engineers, interns, and master's thesis students while establishing implementation, code review, testing, documentation, deployment, and validation standards.",
      ]},
    ],
  },
  {
    company: "AVL Software and Functions GmbH",
    location: "Germany",
    role: "Working Student and Master Thesis — AI, CV and Edge AI",
    period: "June 2021 – May 2022",
    groups: [{ title: "Responsibilities", items: [
      "Designed and developed a web-based CNN Model Tester and Trainer using Python, TensorFlow, and computer-vision libraries.",
      "Built end-to-end workflows for dataset upload, real-time image capture, preprocessing, augmentation, model configuration, training, transfer learning, fine-tuning, prediction testing, benchmarking, and export.",
      "Fine-tuned computer-vision models on domain-specific datasets with structured data splits, labelling-quality checks, leakage prevention, and error analysis.",
      "Automated preprocessing, testing, and export of models in H5, JSON, and ONNX formats.",
      "Developed the MOWME autonomous-driving rover prototype using Raspberry Pi, Arduino, cameras, ultrasonic sensors, GPS, Bluetooth, MQTT, and cloud storage.",
      "Integrated IoT sensors for vehicle and environmental data monitoring.",
      "Collaborated with automotive and embedded teams on AI for ADAS and software-defined vehicles, including sensor integration and CAN and SOME/IP environments.",
      "Optimized models for edge deployment using TensorFlow, OpenVINO, ONNX, CUDA, cuDNN, Raspberry Pi, NVIDIA Jetson Nano, and AWS EC2 GPU instances.",
      "Used AWS CDK to provision cloud infrastructure supporting GPU-based model training and testing.",
      "Worked with SOME/IP, VSOME/IP, and CAN communication protocols.",
    ]}],
  },
  {
    company: "Camelot Management Consultants AG",
    location: "Germany",
    role: "Working Student — Data Science, Python Development and Machine Learning",
    period: "April 2021 – September 2021",
    groups: [{ title: "Responsibilities", items: [
      "Developed Python-based simulation frameworks for DDMRP and MRP demand-planning and inventory workflows.",
      "Built Flask web applications to display, edit, validate, and manage simulation inputs and outputs.",
      "Developed WMAPE error-identification dashboards with heatmaps and visual analytics.",
      "Applied statistical analysis and experiment design to time-series generation, anomaly detection, and demand prediction.",
      "Used Random Forest, Isolation Forest, and LSTM models with structured data splits and leakage checks.",
      "Performed preprocessing, feature preparation, model evaluation, and result interpretation.",
      "Worked with model lifecycle management, experiment tracking, model and data versioning, reproducible training, deployment, monitoring, drift monitoring, and CI/CD.",
    ]}],
  },
  {
    company: "Tech Mahindra Ltd",
    location: "India",
    role: "Software Design and Development Engineer",
    period: "June 2016 – August 2019",
    groups: [{ title: "Responsibilities", items: [
      "Developed enterprise applications and cloud-based solutions using Python, .NET, HTML, CSS, JavaScript, AWS, and Microsoft Azure.",
      "Automated Azure infrastructure provisioning with PowerShell for resource groups, virtual machines, web applications, storage, access configurations, and firewall rules.",
      "Built responsive web applications using JavaScript, React, HTML, CSS, Bootstrap, and media queries.",
      "Integrated frontend components with backend services and APIs.",
      "Configured and managed IIS web servers for application hosting, deployment, monitoring, and troubleshooting.",
      "Built CI/CD pipelines using AWS CodePipeline, CodeCommit, and CodeDeploy.",
      "Deployed and supported enterprise applications across Azure IaaS and PaaS environments.",
      "Managed access controls, SSO configuration, monitoring, production troubleshooting, Git, GitHub, TFS, branching, and release workflows.",
    ]}],
  },
];

export type Filter = "All" | "Generative AI" | "Computer Vision" | "Robotics" | "Data Science";
export const filters: Filter[] = ["All", "Generative AI", "Computer Vision", "Robotics", "Data Science"];

export type Project = {
  title: string;
  category: string;
  tags: Filter[];
  icon: "shield" | "map" | "drone" | "layers" | "scan" | "cpu" | "bot";
  description: string;
  capabilities?: string[];
  stackLabel?: string;
  stack: string;
};

export const projects: Project[] = [
  { title: "Cybersecurity GenAI Co-Pilot", category: "Generative AI | Cybersecurity | RAG", tags: ["Generative AI"], icon: "shield",
    description: "An LLM-powered cybersecurity assistant designed to interpret alerts, reduce false positives, prioritize threats, and analyze relationships between tactics, techniques, and procedures.",
    capabilities: ["LLM-assisted threat interpretation.", "Context-aware retrieval-augmented generation.", "Security knowledge representation and graph analysis.", "Evidence-grounded recommendations.", "Structured responses, input validation, and fallback handling."],
    stack: "GPT, Llama, SecureBERT, LangChain, Neo4j, FAISS, pgvector, RAG, embeddings, and backend APIs." },
  { title: "Multimodal Logistics Optimization Platform", category: "AI | Optimization | Emergency Response", tags: ["Generative AI", "Data Science"], icon: "map",
    description: "A decision-support platform for allocating ground vehicles and UAV drones during emergency-response scenarios.",
    capabilities: ["Vehicle and drone allocation.", "Route optimization.", "Warehouse selection.", "Capacity and inventory constraints.", "Estimated arrival-time calculation.", "GenAI/RAG-based explanations for operational decisions."],
    stack: "Python, Streamlit, PostgreSQL, OSRM, VROOM, Folium, FastAPI, JSON, and GenAI/RAG." },
  { title: "Drone-Based Abnormal Activity Detection", category: "Computer Vision | Real-Time Analytics | Edge AI", tags: ["Computer Vision"], icon: "drone",
    description: "A UAV-based video analytics system for detecting and tracking objects, recognizing accidents, analyzing abnormal activities, and extracting events from live video streams.",
    stack: "YOLO, OpenCV, RTSP, Kafka, MQTT, Docker, REST APIs, and MinIO." },
  { title: "Multimodal Vision and GenAI Decision Support System", category: "Multimodal AI | Computer Vision | Generative AI", tags: ["Generative AI", "Computer Vision"], icon: "layers",
    description: "An integrated platform combining visual detection pipelines with LLM and retrieval workflows to analyze detections, summarize contextual events, and support intelligent decision-making.",
    stack: "Computer vision, LLMs, RAG, vector databases, and knowledge-driven retrieval." },
  { title: "Parcel Inspection AI System", category: "Computer Vision | Multisensor AI | Security", tags: ["Computer Vision"], icon: "scan",
    description: "An AI-based parcel inspection and security-screening system that analyzes multiple sensor modalities to identify suspicious objects and anomalies.",
    stackLabel: "Sensor modalities", stack: "THz, X-ray, UWB, and infrared camera inputs." },
  { title: "Web-Based CNN Model Tester and Trainer", category: "Machine Learning | Computer Vision | Developer Tools", tags: ["Computer Vision", "Data Science"], icon: "cpu",
    description: "A no-code platform that allows users to prepare datasets, train and fine-tune CNN models, evaluate predictions, compare performance, and export deployable models.",
    capabilities: ["Dataset upload and preprocessing.", "Image classification and object detection.", "Training from scratch and transfer learning.", "Prediction testing and performance benchmarking.", "Model export in H5, JSON, and ONNX formats."],
    stack: "Python, TensorFlow, CNNs, computer-vision libraries, ONNX, and OpenVINO." },
  { title: "MOWME Autonomous Driving Rover", category: "Robotics | Autonomous Systems | Edge AI", tags: ["Robotics", "Computer Vision"], icon: "bot",
    description: "An autonomous-driving rover prototype combining embedded hardware, sensor inputs, computer vision, and cloud connectivity.",
    capabilities: ["Object classification.", "Obstacle avoidance.", "Waypoint navigation.", "Sensor data collection.", "MQTT communication and cloud storage.", "Self-learning capabilities."],
    stack: "Raspberry Pi, Arduino, camera modules, ultrasonic sensors, GPS, Bluetooth, MQTT, AWS cloud storage, and CNN models." },
];

export const certifications = [
  { title: "Amazon Web Services DevOps Engineer — Professional", issuer: "AWS" },
  { title: "Amazon Web Services Cloud Practitioner", issuer: "AWS" },
  { title: "Elements of AI", issuer: "University of Helsinki" },
  { title: "Faster AI", issuer: "Peltarion" },
  { title: "AI and ML — Microsoft Most Valuable Professional", issuer: "Microsoft" },
];

export const languages = [
  { name: "English", level: "Professional Working Proficiency", pct: 85 },
  { name: "German", level: "A2", pct: 30 },
];
