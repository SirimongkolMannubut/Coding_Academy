const fs = require('fs');
function addCategories(filePath, courseType) {
  let content = fs.readFileSync(filePath, 'utf8');
  if (courseType === 'js') {
    content = content.replace(/id: "js-0[1-3]"/g, 'category: "Basics",\n    $&');
    content = content.replace(/id: "js-0[4-6]"/g, 'category: "Variables",\n    $&');
    content = content.replace(/id: "js-0[7-9]"/g, 'category: "Data Types",\n    $&');
    content = content.replace(/id: "js-1[0-2]"/g, 'category: "If/Else",\n    $&');
    content = content.replace(/id: "js-1[3-5]"/g, 'category: "Array",\n    $&');
    content = content.replace(/id: "js-1[6-9]"/g, 'category: "Loop",\n    $&');
    content = content.replace(/id: "js-20"/g, 'category: "Loop",\n    $&');
    content = content.replace(/id: "js-pro-01"/g, 'category: "Function",\n    $&');
    content = content.replace(/id: "js-pro-02"/g, 'category: "If/Else",\n    $&');
  } else if (courseType === 'git') {
    content = content.replace(/id: "git-0[1-4]"/g, 'category: "Git Basics",\n    $&');
    content = content.replace(/id: "git-0[5-8]"/g, 'category: "Branching",\n    $&');
    content = content.replace(/id: "git-09"/g, 'category: "Remote",\n    $&');
    content = content.replace(/id: "git-10"/g, 'category: "Remote",\n    $&');
  } else if (courseType === 'mysql') {
    content = content.replace(/id: "mysql-0[1-2]"/g, 'category: "SELECT",\n    $&');
    content = content.replace(/id: "mysql-0[3-5]"/g, 'category: "Filtering",\n    $&');
    content = content.replace(/id: "mysql-0[6-7]"/g, 'category: "Sorting",\n    $&');
  }
  fs.writeFileSync(filePath, content);
}
addCategories('./src/data/javascript-course.ts', 'js');
addCategories('./src/data/git-course.ts', 'git');
addCategories('./src/data/mysql-course.ts', 'mysql');
