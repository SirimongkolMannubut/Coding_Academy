import { Lesson } from './javascript-course';

export const gitCourse: Lesson[] = [
  // --- STAGE 1: BASICS ---
  {
    category: "Git Basics",
    id: "git-01",
    title: "01 สร้าง Repository",
    description: "เรียนรู้วิธีเริ่มต้นสร้างคลังเก็บโค้ด",
    theory: "# เริ่มต้นใช้งาน Git 🌳\n\nGit จะทำหน้าที่เหมือนกล้องวงจรปิดที่คอยบันทึกการเปลี่ยนแปลงของไฟล์ในโฟลเดอร์ \nก่อนจะใช้งานได้ เราต้องสร้างคลังข้อมูล (Repository) ขึ้นมาก่อน\n\n**คำสั่ง:**\n```bash\ngit init\n```\n\n### 🎯 ภารกิจ\nพิมพ์คำสั่งเพื่อเริ่มต้นใช้งาน Git",
    defaultCode: "",
    validationRegex: /^\s*git\s+init\s*$/,
    expectedOutput: "Initialized empty Git repository in /project/.git/",
    xpReward: 50,
    hint: "พิมพ์แค่คำว่า git init",
    whyExplanation: "คำสั่งนี้จะสร้างโฟลเดอร์ .git ซ่อนไว้ ซึ่งใช้เก็บประวัติการแก้ไขทั้งหมด"
  },
  {
    category: "Git Basics",
    id: "git-02",
    title: "02 ตรวจสอบสถานะ",
    description: "การดูว่ามีไฟล์ไหนเปลี่ยนแปลงบ้าง",
    theory: "# ดูสถานะ (Status) 📋\n\nถ้าเราอยากรู้ว่าตอนนี้มีไฟล์ไหนบ้างที่แก้ไขไปแล้ว หรือไฟล์ไหนที่เพิ่งสร้างใหม่ เราจะใช้คำสั่งนี้เช็คได้เสมอ\n\n**คำสั่ง:**\n```bash\ngit status\n```\n\n### 🎯 ภารกิจ\nพิมพ์คำสั่งเพื่อเช็คสถานะไฟล์",
    defaultCode: "",
    validationRegex: /^\s*git\s+status\s*$/,
    expectedOutput: "On branch main\nUntracked files:\n  index.js",
    xpReward: 50,
    hint: "พิมพ์ git status",
    whyExplanation: "status เป็นคำสั่งที่เราจะใช้บ่อยที่สุดเพื่อเช็คความชัวร์ก่อนเซฟไฟล์"
  },
  {
    category: "Git Basics",
    id: "git-03",
    title: "03 นำไฟล์ใส่ตะกร้า (Add)",
    description: "เลือกไฟล์ที่ต้องการจะเซฟ",
    theory: "# ใส่ตะกร้า (Add) 🛒\n\nก่อนจะเซฟ เราต้องเอาไฟล์ใส่ตะกร้าเตรียมไว้ก่อน (เรียกว่า Staging Area) \nเราสามารถเลือกเฉพาะบางไฟล์ หรือเอา **ทุกไฟล์** เลยก็ได้โดยใช้เครื่องหมาย `.` (จุด)\n\n**คำสั่ง:**\n```bash\ngit add .\n```\n\n### 🎯 ภารกิจ\nเตรียมเซฟไฟล์ทั้งหมดลงตะกร้า",
    defaultCode: "",
    validationRegex: /^\s*git\s+add\s+\.\s*$/,
    expectedOutput: "Added all files to staging area",
    xpReward: 50,
    hint: "พิมพ์ git add .",
    whyExplanation: "จุด (.) หมายถึงทุกสิ่งทุกอย่างในโฟลเดอร์ปัจจุบัน"
  },
  {
    category: "Git Basics",
    id: "git-04",
    title: "04 บันทึกประวัติ (Commit)",
    description: "เซฟจุด Checkpoint",
    theory: "# เซฟงาน (Commit) 📸\n\nเมื่อของอยู่ในตะกร้าแล้ว เราจะทำการผูกป้ายชื่อและเซฟมันเก็บไว้ (Checkpoint)\n\n**คำสั่ง:**\n```bash\ngit commit -m \"ข้อความ\"\n```\n\n### 🎯 ภารกิจ\nจง Commit โค้ดพร้อมตั้งชื่อว่า `\"first commit\"`",
    defaultCode: "",
    validationRegex: /^\s*git\s+commit\s+-m\s+['"]first\s+commit['"]\s*$/,
    expectedOutput: "[main (root-commit) 1a2b3c4] first commit",
    xpReward: 80,
    hint: "พิมพ์ git commit -m \"first commit\"",
    whyExplanation: "การ commit ควรทำบ่อยๆ และเขียนข้อความให้ชัดเจนว่าเราแก้อะไรไป"
  },

  // --- STAGE 2: LOG & BRANCH ---
  {
    category: "Branching",
    id: "git-05",
    title: "05 ดูประวัติย้อนหลัง",
    description: "การใช้คำสั่ง log",
    theory: "# เช็คประวัติการเซฟ (Log) 📜\n\nถ้าเราอยากดูว่าเราเคย commit อะไรไปบ้างในอดีต\n\n**คำสั่ง:**\n```bash\ngit log\n```\n\n### 🎯 ภารกิจ\nขอดูประวัติการ commit ทั้งหมดหน่อย",
    defaultCode: "",
    validationRegex: /^\s*git\s+log\s*$/,
    expectedOutput: "commit 1a2b3c4 (HEAD -> main)\nAuthor: Louis <louis@example.com>\nDate:   Today\n\n    first commit",
    xpReward: 50,
    hint: "พิมพ์ git log",
    whyExplanation: "คำสั่งนี้ทำให้เราเห็น Time Machine ของโค้ดเราทั้งหมด"
  },
  {
    category: "Branching",
    id: "git-06",
    title: "06 สร้างโลกคู่ขนาน (Branch)",
    description: "การสร้าง Branch ใหม่",
    theory: "# โลกคู่ขนาน (Branch) 🛤️\n\nถ้าเราอยากทดลองเขียนฟีเจอร์ใหม่ แต่กลัวโค้ดพัง เราสามารถสร้าง \"โลกคู่ขนาน\" (Branch) ออกมาแยกต่างหากได้\n\n**คำสั่ง:**\n```bash\ngit branch feature-login\n```\n\n### 🎯 ภารกิจ\nจงสร้าง Branch ใหม่ชื่อ `feature-login`",
    defaultCode: "",
    validationRegex: /^\s*git\s+branch\s+feature-login\s*$/,
    expectedOutput: "Created branch feature-login",
    xpReward: 60,
    hint: "พิมพ์ git branch feature-login",
    whyExplanation: "Branch ทำให้คนในทีมสามารถแบ่งงานกันทำหลายๆ ฟีเจอร์พร้อมกันได้โดยโค้ดไม่ตีกัน"
  },
  {
    category: "Branching",
    id: "git-07",
    title: "07 ย้ายไปยังโลกใหม่ (Checkout)",
    description: "การสลับ Branch",
    theory: "# ย้ายข้ามมิติ (Checkout/Switch) 🚪\n\nพอสร้างโลกใหม่เสร็จ เราต้องย้ายตัวเองเข้าไปทำงานในโลกนั้น\n\n**คำสั่ง:**\n```bash\ngit checkout feature-login\n```\n\n### 🎯 ภารกิจ\nย้ายตัวเองไปที่ Branch ชื่อ `feature-login`",
    defaultCode: "",
    validationRegex: /^\s*git\s+(checkout|switch)\s+feature-login\s*$/,
    expectedOutput: "Switched to branch 'feature-login'",
    xpReward: 60,
    hint: "พิมพ์ git checkout feature-login",
    whyExplanation: "ไฟล์โค้ดในคอมพิวเตอร์ของคุณจะเปลี่ยนหน้าตาไปตาม Branch ที่คุณยืนอยู่ทันที"
  },
  {
    category: "Branching",
    id: "git-08",
    title: "08 รวมโลกเข้าด้วยกัน (Merge)",
    description: "การรวม Branch",
    theory: "# การรวมร่าง (Merge) 🤝\n\nเมื่อเราเขียนระบบ Login เสร็จแล้ว เราต้องเอาโลก `feature-login` มารวมกลับเข้าโลกหลัก `main`\n*(เราต้องยืนอยู่ที่ main ก่อน)*\n\n**คำสั่ง:**\n```bash\ngit merge feature-login\n```\n\n### 🎯 ภารกิจ\nจงรวม Branch `feature-login` เข้ามา",
    defaultCode: "",
    validationRegex: /^\s*git\s+merge\s+feature-login\s*$/,
    expectedOutput: "Updating 1a2b3c4..f5g6h7i\nFast-forward\n login.js | 10 ++++++++++\n 1 file changed, 10 insertions(+)",
    xpReward: 100,
    hint: "พิมพ์ git merge feature-login",
    whyExplanation: "Merge คือขั้นตอนสำคัญเวลาเราทำงานเสร็จและต้องการส่งมอบงานเข้าสู่ตัวเกม/ระบบหลัก"
  },

  // --- STAGE 3: GITHUB / REMOTE ---
  {
    category: "Remote",
    id: "git-09",
    title: "09 เชื่อมต่อคลาวด์",
    description: "การตั้งค่า Remote Repository",
    theory: "# รู้จักกับ GitHub ☁️\n\nGit คือระบบในเครื่องเรา ส่วน GitHub คือเซิร์ฟเวอร์บนอินเทอร์เน็ต เราต้องเชื่อมมันเข้าหากัน\n\n**คำสั่ง:**\n```bash\ngit remote add origin <URL>\n```\n\n### 🎯 ภารกิจ\nพิมพ์คำสั่งเชื่อมต่อเซิร์ฟเวอร์ โดยตั้งชื่อว่า `origin` และใช้ URL เป็น `https://github.com/my/repo`",
    defaultCode: "",
    validationRegex: /^\s*git\s+remote\s+add\s+origin\s+https:\/\/github\.com\/my\/repo\s*$/,
    expectedOutput: "Remote 'origin' added",
    xpReward: 80,
    hint: "git remote add origin https://github.com/my/repo",
    whyExplanation: "เราตั้งชื่อเซิร์ฟเวอร์ว่า 'origin' (ต้นกำเนิด) เพื่อความง่ายเวลาพิมพ์คำสั่งส่งโค้ด"
  },
  {
    category: "Remote",
    id: "git-10",
    title: "10 อัปโหลดโค้ด (Push)",
    description: "ส่งโค้ดขึ้น GitHub",
    theory: "# ส่งขึ้นฟ้า (Push) 🚀\n\nเชื่อมต่อเสร็จแล้ว ก็ดันโค้ดขึ้นไปบน GitHub เลย!\n\n**คำสั่ง:**\n```bash\ngit push origin main\n```\n\n### 🎯 ภารกิจ\nจงดันโค้ดไปยังเซิร์ฟเวอร์ `origin` บน Branch `main`",
    defaultCode: "",
    validationRegex: /^\s*git\s+push\s+(-u\s+)?origin\s+main\s*$/,
    expectedOutput: "Counting objects: 100% (3/3), done.\nWriting objects: 100% (3/3), 256 bytes, done.\nTo https://github.com/my/repo\n * [new branch]      main -> main",
    xpReward: 120,
    hint: "git push origin main",
    whyExplanation: "การ Push ทำให้โค้ดของเราปลอดภัยจากกรณีคอมพิวเตอร์พัง และทำให้เพื่อนในทีมดึงโค้ดเราไปใช้ได้"
  }
];
