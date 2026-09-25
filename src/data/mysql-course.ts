import { Lesson } from './javascript-course';

export const mysqlCourse: Lesson[] = [
  // --- STAGE 1: BASIC SELECT ---
  {
    category: 'MySQL Basics',
    id: "sql-01",
    title: "01 ดึงข้อมูลทั้งหมด",
    description: "เรียนรู้วิธีสั่งให้ฐานข้อมูลดึงข้อมูลด้วย SELECT *",
    theory: "# คุยกับฐานข้อมูล 🗄️\n\nฐานข้อมูล (Database) เหมือนโกดังเก็บตารางข้อมูล เราจะใช้ภาษา **SQL** ในการสั่งงาน\nคำสั่งพื้นฐานที่สุดคือ **SELECT** (ดึงข้อมูล)\n\n**ตัวอย่าง:**\n```sql\nSELECT * FROM users;\n```\n*(ดอกจัน `*` แปลว่า เอามาทุกคอลัมน์ และจบคำสั่งด้วย `;` เสมอ)*\n\n### 🎯 ภารกิจ\nเรามีตารางที่ชื่อว่า `students` จงดึงข้อมูล **ทุกอย่าง** จากตารางนี้",
    defaultCode: "",
    validationRegex: /^\s*SELECT\s+\*\s+FROM\s+students\s*;\s*$/i,
    expectedOutput: "| id | name  | score | class |\n|----|-------|-------|-------|\n| 1  | Louis | 100   | A     |\n| 2  | John  | 85    | B     |\n| 3  | Anna  | 92    | A     |",
    xpReward: 50,
    hint: "SELECT * FROM students;",
    whyExplanation: "SELECT * มีประโยชน์ตอนต้องการดูโครงสร้างตารางคร่าวๆ แต่ในการทำงานจริงบนระบบใหญ่ๆ มักจะไม่ใช้กันเพราะมันเปลืองความจำ"
  },
  {
    category: 'MySQL Basics',
    id: "sql-02",
    title: "02 ระบุคอลัมน์ที่ต้องการ",
    description: "เลือกเฉพาะคอลัมน์ที่จำเป็น",
    theory: "# ระบุคอลัมน์ 🎯\n\nถ้าไม่อยากได้ `*` (ทั้งหมด) เราสามารถระบุชื่อคอลัมน์ที่อยากได้คั่นด้วยลูกน้ำ (`,`)\n\n**ตัวอย่าง:**\n```sql\nSELECT name, email FROM users;\n```\n\n### 🎯 ภารกิจ\nจงดึงเฉพาะคอลัมน์ `name` และ `score` จากตาราง `students`",
    defaultCode: "",
    validationRegex: /^\s*SELECT\s+name\s*,\s*score\s+FROM\s+students\s*;\s*$/i,
    expectedOutput: "| name  | score |\n|-------|-------|\n| Louis | 100   |\n| John  | 85    |\n| Anna  | 92    |",
    xpReward: 60,
    hint: "SELECT name, score FROM students;",
    whyExplanation: "การเลือกเฉพาะคอลัมน์ที่ใช้ ทำให้เซิร์ฟเวอร์ส่งข้อมูลกลับมาเร็วกว่าการใช้ *"
  },

  // --- STAGE 2: FILTERING ---
  {
    category: 'MySQL Basics',
    id: "sql-03",
    title: "03 กรองข้อมูลด้วย WHERE",
    description: "ดึงเฉพาะข้อมูลที่คุณต้องการจริงๆ",
    theory: "# การใช้ฟิลเตอร์ 🔍\n\nเราใช้ **WHERE** เพื่อสร้างเงื่อนไข เช่น ดึงเฉพาะคนที่อายุมากกว่า 18\n\n**ตัวอย่าง:**\n```sql\nSELECT * FROM users WHERE age > 18;\n```\n\n### 🎯 ภารกิจ\nดึงข้อมูลทั้งหมดจากตาราง `students` แต่เอาเฉพาะคนที่ `score > 90`",
    defaultCode: "",
    validationRegex: /^\s*SELECT\s+\*\s+FROM\s+students\s+WHERE\s+score\s*>\s*90\s*;\s*$/i,
    expectedOutput: "| id | name  | score | class |\n|----|-------|-------|-------|\n| 1  | Louis | 100   | A     |\n| 3  | Anna  | 92    | A     |",
    xpReward: 70,
    hint: "SELECT * FROM students WHERE score > 90;",
    whyExplanation: "ถ้าไม่มี WHERE ฐานข้อมูลจะส่งข้อมูลกลับมาหมดทั้งโกดัง ซึ่งอันตรายและช้ามาก"
  },
  {
    category: 'MySQL Basics',
    id: "sql-04",
    title: "04 กรองข้อความ (Text Match)",
    description: "การเปรียบเทียบข้อความใน SQL",
    theory: "# กรองข้อความ 📝\n\nถ้าเราเปรียบเทียบข้อความ เราต้องครอบข้อความด้วยเครื่องหมายคำพูดเดี่ยว `' '`\n\n**ตัวอย่าง:**\n```sql\nSELECT * FROM users WHERE country = 'Thailand';\n```\n\n### 🎯 ภารกิจ\nจงดึงข้อมูลทั้งหมดจาก `students` เฉพาะนักเรียนที่เรียนอยู่ `class = 'A'`",
    defaultCode: "",
    validationRegex: /^\s*SELECT\s+\*\s+FROM\s+students\s+WHERE\s+class\s*=\s*['"]A['"]\s*;\s*$/i,
    expectedOutput: "| id | name  | score | class |\n|----|-------|-------|-------|\n| 1  | Louis | 100   | A     |\n| 3  | Anna  | 92    | A     |",
    xpReward: 70,
    hint: "SELECT * FROM students WHERE class = 'A';",
    whyExplanation: "ข้อมูลตัวหนังสือใน SQL บังคับต้องอยู่ในเครื่องหมายคำพูดเสมอ"
  },
  {
    category: 'MySQL Basics',
    id: "sql-05",
    title: "05 เงื่อนไขคู่ (AND)",
    description: "กรองข้อมูลหลายเงื่อนไข",
    theory: "# ต้องเป็นจริงทั้งคู่ (AND) 🤝\n\nถ้าอยากกรอง 2 เงื่อนไขพร้อมกัน ให้เชื่อมด้วยคำว่า `AND`\n\n**ตัวอย่าง:**\n```sql\nSELECT * FROM cars WHERE color = 'Red' AND price < 50000;\n```\n\n### 🎯 ภารกิจ\nดึงข้อมูลจาก `students` ที่อยู่ `class = 'A'` **และ** ได้ `score > 95`",
    defaultCode: "",
    validationRegex: /^\s*SELECT\s+\*\s+FROM\s+students\s+WHERE\s+(class\s*=\s*['"]A['"]\s+AND\s+score\s*>\s*95|score\s*>\s*95\s+AND\s+class\s*=\s*['"]A['"])\s*;\s*$/i,
    expectedOutput: "| id | name  | score | class |\n|----|-------|-------|-------|\n| 1  | Louis | 100   | A     |",
    xpReward: 90,
    hint: "SELECT * FROM students WHERE class = 'A' AND score > 95;",
    whyExplanation: "AND ใช้เมื่อต้องการบีบผลลัพธ์ให้แคบลงและแม่นยำขึ้น"
  },

  // --- STAGE 3: SORTING & LIMITING ---
  {
    category: 'MySQL Basics',
    id: "sql-06",
    title: "06 การจัดเรียง (ORDER BY)",
    description: "เรียงข้อมูลมากไปน้อย",
    theory: "# จัดเรียงข้อมูล 📊\n\nเราใช้ **ORDER BY** ต่อท้ายเพื่อเรียงลำดับ\n- เพิ่ม `ASC` ถ้าน้อยไปมาก (ค่าเริ่มต้น)\n- เพิ่ม `DESC` ถ้ามากไปน้อย\n\n**ตัวอย่าง:**\n```sql\nSELECT * FROM users ORDER BY age DESC;\n```\n\n### 🎯 ภารกิจ\nดึงข้อมูลทั้งหมดจาก `students` แล้วจัดเรียงตาม `score` จาก **มากไปน้อย (DESC)**",
    defaultCode: "",
    validationRegex: /^\s*SELECT\s+\*\s+FROM\s+students\s+ORDER\s+BY\s+score\s+DESC\s*;\s*$/i,
    expectedOutput: "| id | name  | score | class |\n|----|-------|-------|-------|\n| 1  | Louis | 100   | A     |\n| 3  | Anna  | 92    | A     |\n| 2  | John  | 85    | B     |",
    xpReward: 80,
    hint: "SELECT * FROM students ORDER BY score DESC;",
    whyExplanation: "ใช้ทำหน้าระบบ Ranking (กระดานผู้นำ) ได้ง่ายๆ"
  },
  {
    category: 'MySQL Basics',
    id: "sql-07",
    title: "07 การจำกัดจำนวน (LIMIT)",
    description: "ดึงแค่บางส่วน",
    theory: "# จำกัดจำนวน (LIMIT) 🛑\n\nถ้าคนมีเป็นล้าน เราอาจจะดึงมาแค่ 10 คนแรกเพื่อแสดงผลให้เร็ว\n\n**ตัวอย่าง:**\n```sql\nSELECT * FROM users LIMIT 10;\n```\n\n### 🎯 ภารกิจ\nรวมคอมโบ! จงดึงนักเรียนจาก `students` ที่คะแนนสูงสุดแค่ **2 อันดับแรก** \n*(เรียงจากมากไปน้อย แล้ว จำกัด 2 คน)*",
    defaultCode: "",
    validationRegex: /^\s*SELECT\s+\*\s+FROM\s+students\s+ORDER\s+BY\s+score\s+DESC\s+LIMIT\s+2\s*;\s*$/i,
    expectedOutput: "| id | name  | score | class |\n|----|-------|-------|-------|\n| 1  | Louis | 100   | A     |\n| 3  | Anna  | 92    | A     |",
    xpReward: 120,
    hint: "SELECT * FROM students ORDER BY score DESC LIMIT 2;",
    whyExplanation: "LIMIT คือเทคนิคเบื้องหลังการทำ Pagination (เปลี่ยนหน้าเว็บทีละ 10-20 รายการ)"
  }
];
