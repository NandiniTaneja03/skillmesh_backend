// Demo data and default SkillMesh application state.
const STORAGE_KEY = "skillmesh-v1";
const seedPeople = [
 {id:1,name:"Aarav Mehta",role:"Full-stack Developer",initials:"AM",color:"#dce4ff",skills:["React","Node.js","PostgreSQL","API Design"],interests:["AI/ML","Startups","Hackathons"],availability:"Weekends",bio:"Turns messy ideas into reliable products. Loves shipping fast and learning in public.",score:96,online:true,rep:92},
 {id:2,name:"Ishita Kapoor",role:"UI/UX Designer",initials:"IK",color:"#ffe2dd",skills:["Figma","Prototyping","Design Systems","Research"],interests:["Design","Startups","Social Impact"],availability:"Evenings",bio:"Designs thoughtful digital experiences from first sketch to polished prototype.",score:93,online:true,rep:88},
 {id:3,name:"Kabir Singh",role:"AI/ML Engineer",initials:"KS",color:"#e6dcff",skills:["Python","Machine Learning","NLP","Data Science"],interests:["AI/ML","Research","Hackathons"],availability:"Flexible",bio:"Interested in practical AI, recommendation systems, and turning data into useful products.",score:91,online:false,rep:95},
 {id:4,name:"Meera Joshi",role:"Backend Developer",initials:"MJ",color:"#d7f3e7",skills:["Java","Spring Boot","SQL","System Design"],interests:["Startups","Fintech","Hackathons"],availability:"Weekends",bio:"Builds scalable APIs and clean backend architecture. Big fan of solving real problems.",score:89,online:true,rep:86},
 {id:5,name:"Rohan Bedi",role:"Product Manager",initials:"RB",color:"#fff0ca",skills:["Product Strategy","Agile","Research","Analytics"],interests:["Startups","Social Impact","Fintech"],availability:"Evenings",bio:"Connects user problems to product strategy and helps teams stay focused on outcomes.",score:87,online:true,rep:90},
 {id:6,name:"Ananya Rao",role:"Frontend Developer",initials:"AR",color:"#d6edff",skills:["JavaScript","HTML/CSS","React","Accessibility"],interests:["Design","AI/ML","Hackathons"],availability:"Flexible",bio:"Makes the web feel fast, accessible, and delightful. Always building something new.",score:86,online:false,rep:84},
 {id:7,name:"Dev Malhotra",role:"Cloud & DevOps",initials:"DM",color:"#f6ddeb",skills:["Docker","AWS","CI/CD","Linux"],interests:["Startups","Fintech","Hackathons"],availability:"Weekends",bio:"Enjoys automating deployments and making products resilient from day one.",score:82,online:true,rep:81},
 {id:8,name:"Simran Gill",role:"Data Analyst",initials:"SG",color:"#e7e8ec",skills:["SQL","Python","Power BI","Statistics"],interests:["AI/ML","Research","Social Impact"],availability:"Evenings",bio:"Finds the story inside data and turns analysis into decisions teams can use.",score:80,online:true,rep:87}
];
const initialState = {
 profile:{name:"Nandini",role:"Engineering Student & Builder",bio:"I love building practical technology that solves real problems. Currently exploring AI, web development, and system design.",skills:["JavaScript","HTML/CSS","Java","SQL"],interests:["AI/ML","Startups","Hackathons"],availability:"Weekends",github:"",portfolio:""},
 people:seedPeople, teams:[{id:101,name:"Project Nova",goal:"AI-powered student productivity platform",members:[1,2,3],status:"In progress",created:Date.now()}],
 messages:{1:[{mine:false,text:"Hey Nandini! I saw you're exploring AI projects. Want to brainstorm a team idea?",time:"10:14 AM"},{mine:true,text:"That sounds great! I'm working on a team formation platform.",time:"10:18 AM"}],2:[{mine:false,text:"Hi! I can help with the product UI and user journey.",time:"Yesterday"}]},
 availability:{days:["Saturday","Sunday"],hours:"Flexible"},
 activities:[{icon:"✳",title:"Your SkillMesh space is ready",detail:"Complete your profile to get better matches.",time:"Just now"},{icon:"◇",title:"Project Nova is waiting",detail:"Invite teammates and start planning.",time:"Today"}],
 requests:[], joined:[]
};
