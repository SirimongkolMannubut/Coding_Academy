export interface TestCase {
  callCode: string;
  expectedReturn: any;
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  category: string; // NEW: For Weakness Analysis
  theory: string;
  defaultCode: string;
  expectedOutput?: string;
  validationRegex?: RegExp;
  testCases?: TestCase[];
  xpReward: number;
  whyExplanation: string;
  hint: string;
}

export const javascriptCourse: Lesson[] = [
  // --- STAGE 1: BASICS ---
  {
    category: "Basics",
    id: "js-01",
    title: "01 ก้าวแรกสู่ JavaScript",
    description: "เรียนรู้การใช้ console.log",
    theory: "# สวัสดี JavaScript! 👋\n\nเวลาเราเขียนโค้ด เราต้องมีวิธีให้คอมพิวเตอร์คุยกับเรา คำสั่งแรกคือ `console.log()`\n\n**ตัวอย่าง:**\n```javascript\nconsole.log(\"Hello, World!\");\n```\n\n### 🎯 ภารกิจ\nใช้ `console.log` พิมพ์คำว่า `\"Start\"` ออกมา",
    defaultCode: "// พิมพ์โค้ดที่นี่\n\n",
    validationRegex: /console\.log\(['"]Start['"]\)/,
    expectedOutput: "Start",
    xpReward: 50,
    hint: "console.log(\"Start\");",
    whyExplanation: "ใช้สำหรับปริ้นข้อความออกมาดูผลลัพธ์บนหน้าจอ"
  },
  {
    category: "Basics",
    id: "js-02",
    title: "02 กล่องเก็บความจำ (let)",
    description: "เรียนรู้วิธีสร้างตัวแปร",
    theory: "# ตัวแปร (Variables) 📦\n\nตัวแปรคือกล่องเก็บข้อมูล ถ้าของในกล่องเปลี่ยนได้เราจะใช้ `let`\n\n**ตัวอย่าง:**\n```javascript\nlet score = 0;\nscore = 10;\nconsole.log(score);\n```\n\n### 🎯 ภารกิจ\nสร้างตัวแปร `hp` ด้วย `let` ให้ค่าเท่ากับ `100` แล้วใช้ `console.log(hp)`",
    defaultCode: "",
    validationRegex: /let\s+hp\s*=\s*100/,
    expectedOutput: "100",
    xpReward: 50,
    hint: "let hp = 100;\nconsole.log(hp);",
    whyExplanation: "ตัวแปรช่วยให้เราจำค่าไว้ใช้ต่อได้"
  },
  {
    category: "Basics",
    id: "js-03",
    title: "03 กล่องที่ห้ามเปลี่ยน (const)",
    description: "ปกป้องข้อมูลสำคัญไม่ให้ถูกเปลี่ยนแปลง",
    theory: "# กฎเหล็กของกล่อง (const) 🔒\n\nถ้าข้อมูลนั้นห้ามเปลี่ยนเด็ดขาด เราจะใช้ `const`\n\n**ตัวอย่าง:**\n```javascript\nconst name = \"Hero\";\n```\n\n### 🎯 ภารกิจ\nสร้างตัวแปร `role` ด้วย `const` ให้ค่าเท่ากับ `\"Admin\"` แล้ว `console.log` ออกมา",
    defaultCode: "",
    validationRegex: /const\s+role\s*=\s*['"]Admin['"]/,
    expectedOutput: "Admin",
    xpReward: 50,
    hint: "const role = \"Admin\";\nconsole.log(role);",
    whyExplanation: "ป้องกันความผิดพลาดจากการเผลอไปเปลี่ยนค่าสำคัญ"
  },
  
  // --- STAGE 2: MATH ---
  {
    category: "Variables",
    id: "js-04",
    title: "04 การบวก (+)",
    description: "จับตัวเลขมารวมกัน",
    theory: "# การบวก ➕\n\nคอมพิวเตอร์บวกเลขได้ง่ายๆ ด้วย `+`\n\n### 🎯 ภารกิจ\nสร้างตัวแปร `result` ให้เท่ากับ `15 + 25` แล้วปริ้นออกมา",
    defaultCode: "",
    validationRegex: /15\s*\+\s*25/,
    expectedOutput: "40",
    xpReward: 50,
    hint: "const result = 15 + 25;\nconsole.log(result);",
    whyExplanation: "การบวกเลขเป็นพื้นฐานที่สุดของคณิตศาสตร์ในคอมพิวเตอร์"
  },
  {
    category: "Variables",
    id: "js-05",
    title: "05 การลบ (-)",
    description: "การหักลบค่า",
    theory: "# การลบ ➖\n\nใช้สัญลักษณ์ `-`\n\n### 🎯 ภารกิจ\nคุณมีพลัง `100` โดนโจมตี `35` จงสร้างตัวแปร `hp` ที่เกิดจาก `100 - 35` แล้วปริ้นออกมา",
    defaultCode: "",
    validationRegex: /100\s*-\s*35/,
    expectedOutput: "65",
    xpReward: 50,
    hint: "const hp = 100 - 35;\nconsole.log(hp);",
    whyExplanation: "ใช้เวลาคำนวณการลดลงของพลังชีวิตหรือสินค้า"
  },
  {
    category: "Variables",
    id: "js-06",
    title: "06 การคูณ (*)",
    description: "การคูณด้วยดอกจัน",
    theory: "# การคูณ ✖️\n\nในคอมพิวเตอร์เราใช้ดอกจัน `*` แทนเครื่องหมายคูณ\n\n### 🎯 ภารกิจ\nซื้อของราคา `50` บาท จำนวน `3` ชิ้น จงสร้างตัวแปร `total` นำ `50 * 3` แล้วปริ้น",
    defaultCode: "",
    validationRegex: /50\s*\*\s*3/,
    expectedOutput: "150",
    xpReward: 50,
    hint: "const total = 50 * 3;\nconsole.log(total);",
    whyExplanation: "ในคีย์บอร์ดไม่มีเครื่องหมายคูณ (x) จึงใช้ดอกจันแทน"
  },
  {
    category: "Data Types",
    id: "js-07",
    title: "07 การหาร (/)",
    description: "การแบ่งส่วนด้วยสแลช",
    theory: "# การหาร ➗\n\nเราใช้เครื่องหมายสแลช `/` แทนการหาร\n\n### 🎯 ภารกิจ\nมีเงิน `200` แบ่งให้ `4` คน สร้างตัวแปร `share` เอา `200 / 4` แล้วปริ้น",
    defaultCode: "",
    validationRegex: /200\s*\/\s*4/,
    expectedOutput: "50",
    xpReward: 50,
    hint: "const share = 200 / 4;\nconsole.log(share);",
    whyExplanation: "ใช้คำนวณการแบ่งสัดส่วน"
  },
  {
    category: "Data Types",
    id: "js-08",
    title: "08 หารเอาเศษ (%)",
    description: "Modulo",
    theory: "# Modulo (หารเอาเศษ) 🍕\n\nเครื่องหมาย `%` ไม่ใช่เปอร์เซ็นต์ แต่คือการ \"หารเอาเศษ\" เช่น `10 % 3` ได้เศษ `1`\n\n### 🎯 ภารกิจ\nเอา `10 % 2` (เลขคู่หาร 2) เก็บในตัวแปร `remainder` แล้วปริ้นดูว่าเศษเป็นเท่าไหร่",
    defaultCode: "",
    validationRegex: /10\s*%\s*2/,
    expectedOutput: "0",
    xpReward: 80,
    hint: "const remainder = 10 % 2;\nconsole.log(remainder);",
    whyExplanation: "เราใช้ % บ่อยมากเพื่อเช็คว่าเลขนั้นเป็นเลขคู่หรือเลขคี่ (ถ้า %2 ได้ 0 คือเลขคู่)"
  },

  // --- STAGE 3: STRINGS ---
  {
    category: "Data Types",
    id: "js-09",
    title: "09 ต่อข้อความ",
    description: "นำคำสองคำมาชนกัน",
    theory: "# ต่อข้อความ (String Concatenation) 🔗\n\nเราเอาข้อความมาบวกกันได้!\n```javascript\nconsole.log(\"Spider\" + \"man\"); // Spiderman\n```\n\n### 🎯 ภารกิจ\nจงต่อคำว่า `\"Bat\"` และ `\"man\"` เข้าด้วยกันด้วย `+` แล้วปริ้นออกมา",
    defaultCode: "",
    validationRegex: /['"]Bat['"]\s*\+\s*['"]man['"]/,
    expectedOutput: "Batman",
    xpReward: 50,
    hint: "console.log(\"Bat\" + \"man\");",
    whyExplanation: "การบวกข้อความช่วยให้เราสร้างประโยคใหม่ๆ จากข้อมูลได้"
  },
  {
    category: "If/Else",
    id: "js-10",
    title: "10 นับความยาวตัวอักษร",
    description: "ใช้งาน property .length",
    theory: "# ความยาวข้อความ (.length) 📏\n\nถ้าอยากรู้ว่าข้อความยาวแค่ไหน เติม `.length` ต่อท้าย\n```javascript\nconsole.log(\"Apple\".length); // 5\n```\n\n### 🎯 ภารกิจ\nจงปริ้นความยาวของคำว่า `\"JavaScript\"` ออกมา",
    defaultCode: "",
    validationRegex: /['"]JavaScript['"]\.length/,
    expectedOutput: "10",
    xpReward: 60,
    hint: "console.log(\"JavaScript\".length);",
    whyExplanation: ".length เป็นคุณสมบัติ (Property) พิเศษที่มีอยู่ในข้อความทุกตัว"
  },
  {
    category: "If/Else",
    id: "js-11",
    title: "11 ตัวพิมพ์ใหญ่",
    description: "ใช้งาน method .toUpperCase()",
    theory: "# แปลงเป็นตัวพิมพ์ใหญ่ ⬆️\n\nเราสามารถเสกให้ตัวอักษรใหญ่หมดด้วย `.toUpperCase()`\n\n### 🎯 ภารกิจ\nจงแปลงคำว่า `\"hello\"` ให้เป็นตัวพิมพ์ใหญ่แล้วปริ้นออกมา",
    defaultCode: "const word = \"hello\";\n\n",
    validationRegex: /word\.toUpperCase\(\)/,
    expectedOutput: "HELLO",
    xpReward: 60,
    hint: "console.log(word.toUpperCase());",
    whyExplanation: "มักใช้ในการปรับ Format ของข้อมูลที่ผู้ใช้พิมพ์เข้ามาให้ตรงกัน"
  },

  // --- STAGE 4: BOOLEANS & LOGIC ---
  {
    category: "If/Else",
    id: "js-12",
    title: "12 ความจริงและความเท็จ",
    description: "รู้จัก Boolean",
    theory: "# Boolean (ค่าความจริง) ⚖️\n\nในโลกคอมพิวเตอร์ ข้อมูลบางอย่างมีแค่ ใช่ (`true`) หรือ ไม่ใช่ (`false`)\n\n### 🎯 ภารกิจ\nสร้างตัวแปร `isReady` ให้เท่ากับ `true` (ไม่ต้องมีเครื่องหมายคำพูด) แล้วปริ้น",
    defaultCode: "",
    validationRegex: /let\s+isReady\s*=\s*true|const\s+isReady\s*=\s*true/,
    expectedOutput: "true",
    xpReward: 50,
    hint: "const isReady = true;\nconsole.log(isReady);",
    whyExplanation: "Boolean เป็นตัวตัดสินใจว่าจะให้โปรแกรมทำงานซ้ายหรือขวา"
  },
  {
    category: "Array",
    id: "js-13",
    title: "13 การเปรียบเทียบ (> และ <)",
    description: "เปรียบเทียบมากกว่าน้อยกว่า",
    theory: "# มากกว่า / น้อยกว่า 📊\n\nเราถามคอมพิวเตอร์ได้ว่าเลขไหนมากกว่ากัน โดยใช้ `>` หรือ `<`\n```javascript\nconsole.log(10 > 5); // true\n```\n\n### 🎯 ภารกิจ\nถามคอมพิวเตอร์ว่า `50 < 20` ใช่หรือไม่? (ให้ปริ้นค่านั้นออกมา)",
    defaultCode: "",
    validationRegex: /50\s*<\s*20/,
    expectedOutput: "false",
    xpReward: 70,
    hint: "console.log(50 < 20);",
    whyExplanation: "คอมพิวเตอร์จะประเมินสมการและคืนค่ากลับมาเป็น true หรือ false เสมอ"
  },
  {
    category: "Array",
    id: "js-14",
    title: "14 การเช็คความเท่ากัน (===)",
    description: "เครื่องหมายเท่ากับ 3 ตัว",
    theory: "# เท่ากันเป๊ะๆ (===) 👯\n\nใน JS ถ้าอยากเช็คว่า 2 สิ่ง \"เท่ากัน\" ไหม เราใช้ `===` (เท่ากับ 3 ตัว)\n\n### 🎯 ภารกิจ\nเช็คว่ารหัสผ่าน `\"1234\"` เท่ากับ `\"1234\"` หรือไม่ โดยปริ้น `\"1234\" === \"1234\"`",
    defaultCode: "",
    validationRegex: /===/,
    expectedOutput: "true",
    xpReward: 70,
    hint: "console.log(\"1234\" === \"1234\");",
    whyExplanation: "ควรใช้ === แทน == เสมอใน JavaScript เพราะมันจะเช็คชนิดข้อมูลด้วยเพื่อความแม่นยำ"
  },

  // --- STAGE 5: IF ELSE ---
  {
    category: "Array",
    id: "js-15",
    title: "15 เงื่อนไข If",
    description: "การสร้างทางแยกให้โปรแกรม",
    theory: "# ถ้าเกิดว่า... (If) 🚦\n\nเราสั่งให้โปรแกรมทำบางอย่าง **เฉพาะเมื่อเงื่อนไขเป็นจริง**\n```javascript\nif (score > 50) {\n  console.log(\"Pass\");\n}\n```\n\n### 🎯 ภารกิจ\nเขียน `if` เช็คว่าถ้า `hp > 0` ให้ปริ้นคำว่า `\"Alive\"` (เราตั้งตัวแปร hp ไว้ให้แล้ว)",
    defaultCode: "const hp = 10;\n\n// เขียน if ตรงนี้\n",
    validationRegex: /if\s*\(\s*hp\s*>\s*0\s*\)/,
    expectedOutput: "Alive",
    xpReward: 100,
    hint: "if (hp > 0) {\n  console.log(\"Alive\");\n}",
    whyExplanation: "if คือหัวใจของ AI และ Logic ทุกอย่างในเกม!"
  },
  {
    category: "Loop",
    id: "js-16",
    title: "16 เงื่อนไข Else",
    description: "ถ้าไม่ใช่... แล้วให้ทำอะไร?",
    theory: "# มิฉะนั้น (Else) 🚧\n\nถ้าเงื่อนไขใน if เป็นเท็จ เราจะให้มันตกมาที่ `else`\n```javascript\nif (money >= 100) {\n  console.log(\"Buy\");\n} else {\n  console.log(\"Not enough\");\n}\n```\n\n### 🎯 ภารกิจ\nให้เช็คว่า `hp > 0` ถ้าจริงให้ปริ้น `\"Alive\"` แต่ถ้าไม่ใช่ (else) ให้ปริ้น `\"Dead\"` (ตอนนี้ hp = 0)",
    defaultCode: "const hp = 0;\n\n// เขียน if / else ตรงนี้\n",
    validationRegex: /else\s*\{/,
    expectedOutput: "Dead",
    xpReward: 100,
    hint: "if (hp > 0) {\n  console.log(\"Alive\");\n} else {\n  console.log(\"Dead\");\n}",
    whyExplanation: "else ช่วยครอบคลุมกรณีที่เงื่อนไขแรกไม่เป็นจริง"
  },

  // --- STAGE 6: ARRAYS ---
  {
    category: "Loop",
    id: "js-17",
    title: "17 การเก็บข้อมูลแบบกลุ่ม (Array)",
    description: "สร้างรายการสิ่งของ",
    theory: "# กล่องเก็บของหลายชิ้น (Array) 🛍️\n\nถ้ามีของหลายชิ้น แทนที่จะสร้างกล่องหลายใบ เราเอามาใส่ Array `[]` ได้เลย\n\n### 🎯 ภารกิจ\nสร้างตัวแปร `items` ให้เป็น Array ที่มีคำว่า `\"Sword\"` และ `\"Shield\"` อยู่ข้างใน จากนั้นปริ้นมันออกมา",
    defaultCode: "",
    validationRegex: /\[\s*['"]Sword['"]\s*,\s*['"]Shield['"]\s*\]/,
    expectedOutput: "Sword Shield", // Using join in validation trick or array print
    xpReward: 100,
    hint: "const items = [\"Sword\", \"Shield\"];\nconsole.log(items.join(\" \"));",
    whyExplanation: "Array เป็นเครื่องมือที่ใช้เก็บ รายชื่อเพื่อน, รายการสินค้า ฯลฯ"
  },
  {
    category: "Loop",
    id: "js-18",
    title: "18 ดึงของออกจาก Array",
    description: "การใช้ Index",
    theory: "# หยิบของชิ้นที่ X (Index) 🎯\n\nคอมพิวเตอร์เริ่มนับที่เลข **0**!\nชิ้นแรก = `[0]`, ชิ้นสอง = `[1]`\n\n### 🎯 ภารกิจ\nเรามี `fruits = [\"Apple\", \"Banana\", \"Orange\"]` จงปริ้นคำว่า `\"Banana\"` ออกมาโดยใช้ Index",
    defaultCode: "const fruits = [\"Apple\", \"Banana\", \"Orange\"];\n\n",
    validationRegex: /fruits\[1\]/,
    expectedOutput: "Banana",
    xpReward: 100,
    hint: "console.log(fruits[1]);",
    whyExplanation: "การเข้าใจว่าคอมพิวเตอร์นับจาก 0 เป็นพื้นฐานสำคัญมาก!"
  },
  {
    category: "Loop",
    id: "js-19",
    title: "19 ยัดของเพิ่มเข้า Array (.push)",
    description: "การเพิ่มสมาชิก",
    theory: "# เพิ่มของต่อท้าย (.push) ➕\n\nเราใช้คำสั่ง `.push()` เพื่อเอาของไปต่อท้ายแถว\n\n### 🎯 ภารกิจ\nจงใช้คำสั่ง `bag.push(\"Potion\")` เพื่อเพิ่มยาลงในกระเป๋า แล้วปริ้น `bag[0]` ออกมาดู",
    defaultCode: "const bag = [];\n\n",
    validationRegex: /bag\.push\(['"]Potion['"]\)/,
    expectedOutput: "Potion",
    xpReward: 100,
    hint: "bag.push(\"Potion\");\nconsole.log(bag[0]);",
    whyExplanation: "การจัดการตะกร้าสินค้าในเว็บช็อปปิ้ง ก็ใช้ push เช่นกัน"
  },

  // --- STAGE 7: LOOPS ---
  {
    category: "Loop",
    id: "js-20",
    title: "20 ลูปซ้ำๆ (For Loop)",
    description: "ทำงานซ้ำๆ ไม่เหนื่อย",
    theory: "# การวนซ้ำ (For Loop) 🔄\n\nให้คอมพิวเตอร์ทำสิ่งเดิม 100 ครั้งไม่ต้องพิมพ์เอง 100 บรรทัด\n```javascript\nfor (let i = 0; i < 3; i++) {\n  console.log(\"Hi\");\n}\n```\n\n### 🎯 ภารกิจ\nจงเขียน For Loop ให้วนทำงาน **5 รอบ** (ตั้งให้ `i < 5`) และให้ปริ้นตัวแปร `i` ออกมาดูว่ามันนับเลขอย่างไร",
    defaultCode: "// ลบโค้ดเก่าแล้วเขียน For Loop\n",
    validationRegex: /for\s*\(\s*let\s+i\s*=\s*0\s*;\s*i\s*<\s*5\s*;\s*i\+\+\s*\)/,
    expectedOutput: "4",
    xpReward: 150,
    hint: "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
    whyExplanation: "ลูปช่วยประหยัดเวลา และเป็นหัวใจในการแสดงผลสินค้า 100 รายการบนหน้าจอ"
  },

  // --- STAGE 8: PROFESSIONAL MODE (BOSS FIGHTS) ---
  {
    category: "Function",
    id: "js-pro-01",
    title: "BOSS: ระบบคำนวณภาษี",
    description: "เขียนฟังก์ชันเพื่อใช้งานจริงแบบมืออาชีพ",
    theory: "# การเขียนฟังก์ชันระดับ Pro 🏢\n\nมืออาชีพไม่ได้แค่พิมพ์คำสั่ง 1 บรรทัด แต่เราสร้าง **Function** ที่รับค่า Input และประมวลผลส่ง Output คืนกลับไป (Return)\n\n### 🎯 ภารกิจระดับมืออาชีพ\nในฐานะโปรแกรมเมอร์ของระบบ E-commerce คุณได้รับมอบหมายให้เขียนฟังก์ชัน `calculateTax(price)`\n- รับค่า `price` เข้ามา\n- ภาษี = 7% (หรือ 0.07)\n- ฟังก์ชันต้อง **return** ราคาสุทธิ (ราคาเดิม + ภาษี)\n\n*(ตัวอย่าง: ถ้าราคา 100 ต้อง return 107)*",
    defaultCode: "function calculateTax(price) {\n  // เขียนลอจิกของคุณที่นี่\n  \n}",
    testCases: [
      { callCode: "calculateTax(100)", expectedReturn: 107 },
      { callCode: "calculateTax(200)", expectedReturn: 214 },
      { callCode: "calculateTax(50)", expectedReturn: 53.5 }
    ],
    xpReward: 500,
    hint: "return price + (price * 0.07);",
    whyExplanation: "ในโลกการทำงานจริง ระบบจะมีการส่งข้อมูลสุ่มเข้ามาทดสอบ (Unit Test) โค้ดของคุณเสมอ ถ้ามันผ่านทุกเคส (Test Cases) ถึงจะถือว่าเสร็จสมบูรณ์"
  },
  {
    category: "If/Else",
    id: "js-pro-02",
    title: "BOSS: คัดกรองผู้ใช้งาน",
    description: "ประยุกต์ใช้ If/Else และ Array",
    theory: "# วิเคราะห์ผู้ใช้งาน (Filtering) 🛡️\n\n### 🎯 ภารกิจระดับมืออาชีพ\nคุณต้องสร้างฟังก์ชัน `canEnterClub(age, hasTicket)` เพื่อเช็คคนเข้าผับ\n- ต้องอายุ **20 ปีขึ้นไป** (`age >= 20`)\n- **และ** ต้องมีตั๋ว (`hasTicket === true`)\n- ถ้าผ่านทั้ง 2 เงื่อนไขให้ **return true**\n- นอกนั้นให้ **return false**",
    defaultCode: "function canEnterClub(age, hasTicket) {\n  // เขียนลอจิกของคุณที่นี่\n  \n}",
    testCases: [
      { callCode: "canEnterClub(25, true)", expectedReturn: true },
      { callCode: "canEnterClub(19, true)", expectedReturn: false },
      { callCode: "canEnterClub(21, false)", expectedReturn: false }
    ],
    xpReward: 600,
    hint: "if (age >= 20 && hasTicket) { return true; } else { return false; }",
    whyExplanation: "นี่คือวิธีการทำงานของระบบ Login และ Authentication ระดับโลกในการตรวจสอบสิทธิ์ (Authorization)"
  }
,
  {
    category: "Function",
    id: "js-pro-03",
    title: "BOSS: ตามหาตัวเลขที่มากที่สุด",
    description: "ค้นหาค่ามากที่สุดใน Array",
    theory: "# หาแชมเปี้ยน 🏆\n\n### 🎯 ภารกิจระดับมืออาชีพ\nคุณต้องสร้างฟังก์ชัน `findMax(numbers)` เพื่อหาตัวเลขที่มากที่สุดใน Array\n- รับค่า `numbers` ที่เป็น Array ของตัวเลข เช่น `[10, 50, 30]`\n- ฟังก์ชันต้อง **return** ตัวเลขที่เยอะที่สุดออกมา (เช่น 50)\n- ห้ามตอบผิดแม้แต่เคสเดียว!",
    defaultCode: "function findMax(numbers) {\n  // เขียนลอจิกของคุณที่นี่\n  \n}",
    testCases: [
      { callCode: "findMax([10, 50, 30])", expectedReturn: 50 },
      { callCode: "findMax([-1, -5, -2])", expectedReturn: -1 },
      { callCode: "findMax([100])", expectedReturn: 100 }
    ],
    xpReward: 700,
    hint: "ใช้ Math.max(...numbers) หรือเขียนลูปวนหาเอาเองก็ได้!",
    whyExplanation: "การเรียงลำดับ หรือค้นหาค่าที่มากที่สุดเป็นโจทย์คลาสสิกเวลาไปสัมภาษณ์งานโปรแกรมเมอร์"
  },
  {
    category: "If/Else",
    id: "js-pro-04",
    title: "BOSS: ระบบตัดเกรดอัตโนมัติ",
    description: "แปลงคะแนนเป็นเกรด A, B, C, D, F",
    theory: "# การให้เกรด 🎓\n\n### 🎯 ภารกิจระดับมืออาชีพ\nระบบโรงเรียนต้องการฟังก์ชัน `calculateGrade(score)`\n- `score >= 80` return `'A'`\n- `score >= 70` return `'B'`\n- `score >= 60` return `'C'`\n- `score >= 50` return `'D'`\n- น้อยกว่า 50 return `'F'`",
    defaultCode: "function calculateGrade(score) {\n  // เขียนลอจิกของคุณที่นี่\n  \n}",
    testCases: [
      { callCode: "calculateGrade(85)", expectedReturn: "A" },
      { callCode: "calculateGrade(72)", expectedReturn: "B" },
      { callCode: "calculateGrade(59)", expectedReturn: "D" },
      { callCode: "calculateGrade(30)", expectedReturn: "F" }
    ],
    xpReward: 800,
    hint: "ใช้ if, else if, และ else ไล่เงื่อนไขจากคะแนนมากไปน้อย",
    whyExplanation: "If/Else ซ้อนกันหลายชั้น เรียกว่า Control Flow ช่วยจัดการตรรกะที่ซับซ้อนขึ้น"
  },
  {
    category: "Array",
    id: "js-pro-05",
    title: "BOSS: นินจาซ่อนตัว (Reverse String)",
    description: "ย้อนกลับข้อความจากหลังมาหน้า",
    theory: "# ย้อนกลับ (Reverse) 🥷\n\n### 🎯 ภารกิจระดับมืออาชีพ\nสร้างฟังก์ชัน `reverseText(text)`\n- รับข้อความเข้ามา แล้วต้อง **return** ข้อความที่ถูกอ่านจากหลังมาหน้า\n- เช่น `'apple'` ต้องคืนค่า `'elppa'`",
    defaultCode: "function reverseText(text) {\n  // เขียนลอจิกของคุณที่นี่\n  \n}",
    testCases: [
      { callCode: "reverseText('hello')", expectedReturn: "olleh" },
      { callCode: "reverseText('boss')", expectedReturn: "ssob" },
      { callCode: "reverseText('js')", expectedReturn: "sj" }
    ],
    xpReward: 900,
    hint: "ลองแปลง string เป็น array ด้วย .split('') แล้วใช้ .reverse() จากนั้นต่อกลับด้วย .join('')",
    whyExplanation: "กระบวนการแปลงชนิดข้อมูลไปมา (String <-> Array) เป็นหนึ่งในทักษะที่ใช้แก้ปัญหาได้เยอะมากๆ"
  },
  {
    category: "Math",
    id: "js-pro-06",
    title: "BOSS: คัดกรองเลขคู่ (Filter Even Numbers)",
    description: "คัดกรองเอาเฉพาะเลขคู่ออกมาจาก Array",
    theory: "# เครื่องแยกกาก (Filter) 🌀\n\n### 🎯 ภารกิจระดับมืออาชีพ\nสร้างฟังก์ชัน `filterEven(numbers)`\n- รับ Array ของตัวเลข\n- **return** Array ใหม่ที่มีเฉพาะเลขคู่เท่านั้น\n- เช่น `[1, 2, 3, 4, 5]` ต้องคืนค่า `[2, 4]`\n*(Hint: เลขคู่คือเลขที่ % 2 === 0)*",
    defaultCode: "function filterEven(numbers) {\n  // เขียนลอจิกของคุณที่นี่\n  \n}",
    testCases: [
      { callCode: "JSON.stringify(filterEven([1, 2, 3, 4, 5]))", expectedReturn: "[2,4]" },
      { callCode: "JSON.stringify(filterEven([10, 15, 20]))", expectedReturn: "[10,20]" },
      { callCode: "JSON.stringify(filterEven([1, 3, 5]))", expectedReturn: "[]" }
    ],
    xpReward: 1000,
    hint: "จะใช้ For Loop แล้ว if เช็คทีละตัวแล้ว .push() ลง Array ใหม่ก็ได้ หรือจะใช้ numbers.filter() ก็เทพเลย!",
    whyExplanation: "การจัดการและคัดกรองข้อมูลจาก Array เป็นหัวใจของแอปพลิเคชันยุคใหม่ (เช่น ระบบกรองสินค้าในเว็บ)"
  }

];