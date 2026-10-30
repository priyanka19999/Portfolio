import { createSlice } from "@reduxjs/toolkit";

const initialTerminalLines = [
  { type: "system", text: "Initializing PriyDev Interactive Terminal v2.5.0..." },
  { type: "info", text: "Welcome to Priyanka Priyadarshani Biswal's Portfolio CLI!" },
  { type: "info", text: "Type 'help' to view available commands, or explore via UI." }
];

const initialVisionHistory = [
  {
    id: "img-1",
    prompt: "Cyberpunk futuristic metropolis at night, neon reflections in rainwater, cinematic lighting, 8k",
    style: "Cyberpunk",
    timestamp: "10 mins ago",
    url: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: "img-2",
    prompt: "Ethereal astronaut walking in cosmic glass desert with floating crystal orbs, purple nebula",
    style: "Cosmic Sci-Fi",
    timestamp: "2 hours ago",
    url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: "img-3",
    prompt: "Minimalist geometric architectural structure with lush biometric indoor gardens and skylights",
    style: "Architecture",
    timestamp: "Yesterday",
    url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop&q=80"
  }
];

const initialBlogPosts = [
  {
    id: "post-1",
    title: "Mastering Component Architecture with React & Framer Motion",
    author: "Priyanka Priyadarshani Biswal",
    category: "Frontend Architecture",
    readTime: "5 min read",
    date: "Oct 2025",
    content: "When engineering enterprise-grade frontends, modularity isn't just a best practice—it's the foundation of maintainability and render speed. By separating declarative motion hooks from core presentation primitives, we elevate UX without ballooning bundle metrics.",
    likes: 124,
    commentsCount: 3
  },
  {
    id: "post-2",
    title: "Appwrite & Serverless Integration: A Full-Stack Perspective",
    author: "Priyanka Priyadarshani Biswal",
    category: "Full Stack",
    readTime: "7 min read",
    date: "Aug 2025",
    content: "Integrating real-time databases and token-based authentication workflows with Appwrite transformed how we handled content updates in MEGABLOG. Real-time web sockets make reactive UIs effortless.",
    likes: 98,
    commentsCount: 2
  }
];

const initialBlogComments = [
  { id: 1, postId: "post-1", author: "Aman Sharma", text: "Brilliant breakdown of Framer Motion micro-animations! The timing curves look super smooth.", time: "2 hours ago" },
  { id: 2, postId: "post-1", author: "Sneha Patel", text: "Love the clean separation of UI components and Appwrite listeners. Great work Priyanka!", time: "5 hours ago" },
  { id: 3, postId: "post-2", author: "Rohan V.", text: "Appwrite with React 19 is an absolute game-changer. Looking forward to more posts!", time: "1 day ago" }
];

const initialSharePlateDonations = [
  {
    id: "don-1",
    title: "60 kg Shahi Dum Biryani, Mirchi Salan & Raita",
    donorName: "Mayfair Lagoon & Convention Hotel",
    locality: "Jayadev Vihar, Bhubaneswar",
    category: "Cooked Meals",
    diet: "Veg",
    quantity: "60 kg",
    mealsCount: 130,
    preparedTime: "1.5 hrs ago",
    expiryTime: "Within 3.5 hrs",
    storage: "Hot holding (>60°C)",
    status: "Available",
    handoverPin: "4821",
    claimedBy: null,
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: "don-2",
    title: "45 kg Traditional Dalma, Kanika & Chhena Poda",
    donorName: "Dalma Authentic Odia Restaurant",
    locality: "Saheed Nagar, Bhubaneswar",
    category: "Cooked Meals",
    diet: "Veg",
    quantity: "45 kg",
    mealsCount: 95,
    preparedTime: "2 hrs ago",
    expiryTime: "Within 4 hrs",
    storage: "Hot insulated boxes (>65°C)",
    status: "Available",
    handoverPin: "6319",
    claimedBy: null,
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: "don-3",
    title: "50 Packets of Fresh Artisan Bread & Multigrain Buns",
    donorName: "Priya Sweet & Bakery World",
    locality: "Patia (KIIT), Bhubaneswar",
    category: "Bakery",
    diet: "Veg",
    quantity: "50 packets",
    mealsCount: 100,
    preparedTime: "Baked this morning",
    expiryTime: "Within 24 hrs",
    storage: "Ambient dry racks",
    status: "Available",
    handoverPin: "7193",
    claimedBy: null,
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: "don-4",
    title: "40 kg Fresh Farm Produce (Tomatoes, Cauliflower, Beans)",
    donorName: "Smart Bazaar Wholesale Mart",
    locality: "Nayapalli (IRC Village), Bhubaneswar",
    category: "Produce",
    diet: "Veg",
    quantity: "40 kg",
    mealsCount: 110,
    preparedTime: "Morning shipment",
    expiryTime: "Within 48 hrs",
    storage: "Clean aerated crates",
    status: "Available",
    handoverPin: "9204",
    claimedBy: null,
    image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=800&auto=format&fit=crop&q=80"
  }
];

const initialState = {
  themePreset: "mono",
  soundEnabled: true,
  activeSection: "hero",
  activeModal: null, // null | 'resume' | 'terminal' | 'vision-demo' | 'megablog-demo' | 'shareplate-demo'
  projectFilter: "all",
  likes: {
    vision: 47,
    megablog: 39,
    shareplate: 52,
    portfolio: 62
  },
  userLiked: {
    vision: false,
    megablog: false,
    shareplate: false,
    portfolio: false
  },
  terminalLines: initialTerminalLines,
  terminalInput: "",
  contactForm: {
    name: "",
    email: "",
    subject: "",
    message: "",
    status: "idle", // 'idle' | 'submitting' | 'success' | 'error'
    submittedCount: 0
  },
  visionDemo: {
    prompt: "Futuristic holographic AI interface with vibrant neon violet lights and sleek glass panels",
    style: "Sci-Fi Realism",
    isGenerating: false,
    history: initialVisionHistory,
    currentResult: initialVisionHistory[0]
  },
  megablogDemo: {
    posts: initialBlogPosts,
    activePostId: "post-1",
    comments: initialBlogComments,
    newCommentText: ""
  },
  shareplateDemo: {
    donations: initialSharePlateDonations,
    selectedCategory: "All",
    activeClaimedDonation: null,
    stats: {
      mealsRescued: 1435,
      kgDiverted: 685,
      activeShelters: 14
    }
  }
};

export const portfolioSlice = createSlice({
  name: "portfolio",
  initialState,
  reducers: {
    setThemePreset: (state, action) => {
      state.themePreset = action.payload;
    },
    toggleSound: (state) => {
      state.soundEnabled = !state.soundEnabled;
    },
    setActiveSection: (state, action) => {
      state.activeSection = action.payload;
    },
    openModal: (state, action) => {
      state.activeModal = action.payload;
    },
    closeModal: (state) => {
      state.activeModal = null;
    },
    setProjectFilter: (state, action) => {
      state.projectFilter = action.payload;
    },
    toggleLikeProject: (state, action) => {
      const projectId = action.payload;
      if (state.userLiked[projectId]) {
        state.likes[projectId] -= 1;
        state.userLiked[projectId] = false;
      } else {
        state.likes[projectId] += 1;
        state.userLiked[projectId] = true;
      }
    },
    addTerminalCommand: (state, action) => {
      const cmd = action.payload.trim().toLowerCase();
      state.terminalLines.push({ type: "user", text: `$ ${action.payload}` });
      
      switch (cmd) {
        case "help":
          state.terminalLines.push({
            type: "output",
            text: "Available commands:\n• bio       - View Priyanka's profile summary\n• skills    - List technical stack & competencies\n• projects  - Showcase highlighted projects (VISION, MEGABLOG, SHAREPLATE)\n• education - Academic achievements & scores\n• contact   - View contact info & links\n• resume    - Open the full resume viewer modal\n• demo      - Launch interactive VISION AI simulator\n• clear     - Clear terminal history"
          });
          break;
        case "bio":
          state.terminalLines.push({
            type: "output",
            text: "Priyanka Priyadarshani Biswal: Innovative Frontend Software Developer with deep expertise in React.js, Tailwind CSS, Framer Motion, and modern UI engineering. Currently building at Cybertrack Solution Pvt Ltd."
          });
          break;
        case "skills":
          state.terminalLines.push({
            type: "output",
            text: "• Frontend: React.js, JavaScript (ES6+), TypeScript, HTML5, CSS3, Tailwind CSS, Material UI, ShadCN UI, Aceternity UI, Framer Motion\n• Backend & Tools: Express.js, Node.js (Basics), Appwrite (Auth & DB), Python, RESTful APIs, Git, GitHub, Postman\n• Core: Component Architecture, Responsive Web Design, UI/UX, State Management"
          });
          break;
        case "projects":
          state.terminalLines.push({
            type: "output",
            text: "1. VISION - AI Image Generator Web Platform\n2. MEGABLOG - Real-Time Content & Blogging Platform\n3. SHAREPLATE - Surplus Food Rescue & Distribution Coordination"
          });
          break;
        case "education":
          state.terminalLines.push({
            type: "output",
            text: "• B.Tech (2021-2025): Gandhi Institute of Excellent and Technocrats, Bhubaneswar (CGPA: 8.78 / 10)\n• +2 Science (2019-2021): Chandbali College, Bhadrak (Score: 83.33%)"
          });
          break;
        case "contact":
          state.terminalLines.push({
            type: "output",
            text: "📞 Phone: +91 8114895019\n✉️ Email: priyankapbiswal99@gmail.com\n📍 Location: Bhubaneswar, India\n🔗 LinkedIn: linkedin.com/in/priyanka-priyadarshani-biswal"
          });
          break;
        case "resume":
          state.activeModal = "resume";
          state.terminalLines.push({ type: "success", text: "Opening Priyanka's official resume..." });
          break;
        case "demo":
          state.activeModal = "vision-demo";
          state.terminalLines.push({ type: "success", text: "Launching VISION AI Interactive Simulator..." });
          break;
        case "clear":
          state.terminalLines = [{ type: "system", text: "Terminal cleared. Type 'help' for commands." }];
          break;
        default:
          if (cmd.length > 0) {
            state.terminalLines.push({
              type: "error",
              text: `Command not recognized: "${action.payload}". Type 'help' for available commands.`
            });
          }
      }
    },
    updateContactFormField: (state, action) => {
      const { field, value } = action.payload;
      state.contactForm[field] = value;
    },
    setContactFormStatus: (state, action) => {
      state.contactForm.status = action.payload;
      if (action.payload === "success") {
        state.contactForm.submittedCount += 1;
        state.contactForm.name = "";
        state.contactForm.email = "";
        state.contactForm.subject = "";
        state.contactForm.message = "";
      }
    },
    // Vision AI Demo Simulator Actions
    setVisionPrompt: (state, action) => {
      state.visionDemo.prompt = action.payload;
    },
    setVisionStyle: (state, action) => {
      state.visionDemo.style = action.payload;
    },
    startVisionGeneration: (state) => {
      state.visionDemo.isGenerating = true;
    },
    completeVisionGeneration: (state, action) => {
      state.visionDemo.isGenerating = false;
      const newImg = action.payload;
      state.visionDemo.currentResult = newImg;
      state.visionDemo.history.unshift(newImg);
    },
    // MegaBlog Demo Actions
    setActivePostId: (state, action) => {
      state.megablogDemo.activePostId = action.payload;
    },
    setNewCommentText: (state, action) => {
      state.megablogDemo.newCommentText = action.payload;
    },
    addBlogComment: (state, action) => {
      const { postId, text, author } = action.payload;
      state.megablogDemo.comments.unshift({
        id: Date.now(),
        postId,
        author: author || "Visiting Tech Lead",
        text,
        time: "Just now"
      });
      state.megablogDemo.newCommentText = "";
    },
    // SharePlate Demo Actions
    claimSharePlateDonation: (state, action) => {
      const donationId = action.payload;
      const donation = state.shareplateDemo.donations.find(d => d.id === donationId);
      if (donation && donation.status === "Available") {
        donation.status = "Claimed";
        donation.claimedBy = "Asha Care Shelter & Kitchen";
        state.shareplateDemo.stats.mealsRescued += donation.mealsCount;
        state.shareplateDemo.stats.kgDiverted += parseInt(donation.quantity, 10) || 40;
        state.shareplateDemo.activeClaimedDonation = donation;
      }
    },
    closeSharePlateClaimPass: (state) => {
      state.shareplateDemo.activeClaimedDonation = null;
    },
    setSharePlateCategory: (state, action) => {
      state.shareplateDemo.selectedCategory = action.payload;
    }
  }
});

export const {
  setThemePreset,
  toggleSound,
  setActiveSection,
  openModal,
  closeModal,
  setProjectFilter,
  toggleLikeProject,
  addTerminalCommand,
  updateContactFormField,
  setContactFormStatus,
  setVisionPrompt,
  setVisionStyle,
  startVisionGeneration,
  completeVisionGeneration,
  setActivePostId,
  setNewCommentText,
  addBlogComment,
  claimSharePlateDonation,
  closeSharePlateClaimPass,
  setSharePlateCategory
} = portfolioSlice.actions;

export default portfolioSlice.reducer;
