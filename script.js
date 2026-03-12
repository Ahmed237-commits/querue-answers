// بيانات الإجابات (وده هو الـ JSON file اللي انت طلبته)
const answersData = [
    // Level 21
    { level: 21, lesson: 1, code: "let science = 100;if (science == 100) {console.log(\"Reward: steak\");}" },
    { level: 21, lesson: 1, code: "// 2 let science = 80;if (science == 100) {console.log(\"Reward: steak\");} else if ( science >= 80 ){console.log(\"Reward: ice cream\");} else {console.log(\"No games for 1 week.\");}" },
    { level: 21, lesson: 2, code: "// 1 score >= 80  " },
    { level: 21, lesson: 2, code: "// 2 score <= 40" },
    { level: 21, lesson: 2, code: "// 3\nnumberOfPeople  >= 3 && total == 3333" },
    { level: 21, lesson: 2, code: "// 4\nnumberOfPeople >= 10 || total >= 12000" },
    { level: 21, lesson: 5, code: "// 1\nlet score = 90;\nif(score >= 80 ) {\n    console.log(\"Test Passed\")\n}" },
    { level: 21, lesson: 5, code: "// 2 \nlet score = 90;\nlet rank = 1;\nif (score >= 80) {\nconsole.log(\"Test Passed\");\nif (rank == 1) {\nconsole.log(\"Trophy Acquired\");\n}\n}" },
    { level: 21, lesson: 5, code: "// 3 \nlet rank = 1; \nif(rank == 1) {\n    console.log(\"Regional Champion\")\n}" },
    { level: 21, lesson: 5, code: "// 4 \nlet rank = 1;\nlet fishCaught = 27;\nif (rank == 1) {\n  console.log(\"Regional Champion\");\n  if (fishCaught >= 30) {\n    console.log(\"New Tournament Record\");\n  }\n}" },
    // Level 22
    { level: 22, lesson: 1, code: "//1 and 2 \nfor ( let i = 0; i < 3; i++ )" },
    { level: 22, lesson: 1, code: "// 3 \nfor (let i =0 ; i < 10; i++) {\n    console.log(\"silk\")\n}" },
    { level: 22, lesson: 3, code: "//1\nfor (let i = 0; i < 5 ; i ++) {\n    console.log(\"sit-up\")\n}" },
    { level: 22, lesson: 3, code: "// 2 \nfor (let i = 0; i < 5; i++) {\n  console.log(\"sit-up\");\n  if (i == 2) {\n    console.log(\"running\");\n  }\n}" },
    { level: 22, lesson: 4, code: "// 1\nfor (let i = 0; i<5 ; i++) {\n console.log(\"lunch box\")   \n}" },
    { level: 22, lesson: 4, code: " // 2\n for (let i = 0; i < 5; i++) {\n  console.log(\"lunch box\");\n  if (i == 3) {\n    console.log(\"fruit\");\n  }\n}" },
    { level: 22, lesson: 5, code: " //1\n let i = 0;\ni += 3;\nconsole.log(i); \n// 2 \nlet num = 0;\nnum += 5;\nconsole.log(num);" },
    // Level 23
    { level: 23, lesson: 1, code: "// 1\nfunction divide6(total) {\n  let per = total / 6;\n  return per;\n}\n//2\nconsole.log(divide6(72));\n// 3\nfunction split5(total) {\n  let per = total / 5;\n  return per;\n}\nconsole.log(split5(6250));" },
    { level: 23, lesson: 3, code: "// 1\nfunction goodMorning() {\n    let greeting = \"Good morning!\"\n    return greeting\n}\nconsole.log(goodMorning())" },
    { level: 23, lesson: 4, code: "//1\nfunction sum (num1, num2) {\n    let result = num1 + num2;\n    return result\n}\n// 2\nconsole.log(sum(50 , 100)) " },
    // Level 24
    { level: 24, lesson: 1, code: "// 1\nlet score = 82;\nif (score == 100) {\n  console.log(\"Perfect Score\");\n} else if (score >= 75) {\n  console.log(\"Pass\");\n} else {\n  console.log(\"Retest\");\n}\n//2\nlet score = 90;\nlet rank = 1;\nif (score >= 80) {\n  console.log(\"Test Passed\");\n  if (rank == 1) {\n    console.log(\"Trophy Acquired\");\n  }\n}\n// 3\nfor (let i = 0; i < 3; i++) {\n  console.log(\"Apple\");\n  if (i == 1) {\n    console.log(\"Banana\");\n  }\n}\n// 4\nfunction goodNight(){\n  let greeting = \"Good night!\";\n  return greeting;\n}\nconsole.log(goodNight());\n// 5\nfunction calc (num1 , num2) {\n    let result = num1 * num2\nreturn result\n}\nconsole.log(calc(55 , 75))" },
    // Level 25
    { level: 25, lesson: 2, code: "// 1\nlet num = 1;\nfor(let i = 0; i < 5; i++){\n  num = num * 2;\n}\nconsole.log(num);\n// 2 \nlet i = 1; i <= 4; i++" },
    // Level 26
    { level: 26, lesson: 1, code: "//1\nlet tempList = [36.2, 36.5, 36.3, 36.8, 36.4];\n//2\nlet tempList = [36.2, 36.5, 36.3, 36.8, 36.4, 36.9, 37.0];\n // 3\n let tempList = [36.2, 36.5, 36.3, 36.8, 36.4, 36.9, 37.0];\nlet sum = 0;\nfor(let i = 0; i < 7; i++){\n  sum = sum + tempList[i];\n}\nconsole.log(sum / 7);\n// \n14\n// 5\nlet i = 0; i < tempList.length; i++\n// 6\nlet tempList = [36.0, 36.5, 36.3, 36.8, 36.4, 36.9, 36.6, 37.0, 37.1, 36.9, 36.4, 36.6, 36.7, 36.5];\nfor (let i = 0; i < tempList.length; i++) {\n  if (tempList[i] >= 37.0) {\n    console.log(\"Be careful!\");\n  }\n} \n// 7\nlet tempList = [36.0, 36.5, 36.3, 36.8, 36.4, 36.9, 36.6, 37.0, 37.1, 36.9, 36.4, 36.6, 36.7, 36.5];\nfor (let i = 0; i < tempList.length; i++) {\n  if (tempList[i] >= 37.5) {\n    console.log(\"Avoid going outside!\");\n  }\n}" },
    { level: 26, lesson: 2, code: "// 1\nlet num = 1;\nfor (let i = 0 ; i < 7 ; i++) {\n    num  = num * 7;\n}\nconsole.log(num) \n//2\nlet num = 1;\nfor (let i = 1; i <= 5; i++) {\n  num = num * i;\n}\nconsole.log(num);\n// 3\nlet num = 1;\nfor (let i = 1; i <= 15; i++) {\n  num = num * i;\n}\nconsole.log(num); \n// 4 \nconsole.log(tempList[4])\n//5\ntempList.length\n// 6\nlet tempList = [36.0, 36.5, 36.3, 36.8, 36.4, 36.9, 36.6, 37.0, 37.1, 36.9, 36.4, 36.6, 36.7, 36.5];\nfor (let i = 0; i < tempList.length; i++) {\n  if (tempList[i] >= 37.0) {\n    console.log(\"Be careful!\");\n  }\n}" },
    // Level 28
    { level: 28, lesson: 1, code: "//1 \nlet degreeList = [2, 1, 2, 1, 0, 1, 1];\nconsole.log(degreeList[4]); " },
    { level: 28, lesson: 2, code: "//1\nfor (let degree of degreeList) {\n  console.log(degree);\n} \n//2\nlet numList = [5, 10, 15, 20];\nfor (let num of numList) {\n  console.log(num);\n}" },
    // Level 29
    { level: 29, lesson: 1, code: "//1\nlet score = 100;\nif (score == 100) {\n  console.log(\"Reward is steak\");\n} \n// 2\nlet score = 85;\nif (score == 100) {\n  console.log(\"Reward is steak\");\n} else if (score >= 80) {\n  console.log(\"Reward is cake\");\n} \n//3\nlet score = 62;\nif (score == 100) {\n  console.log(\"Reward is steak\");\n} else if (score >= 80) {\n  console.log(\"Reward is cake\");\n} else {\n  console.log(\"No games for a week\");\n}" },
    { level: 29, lesson: 2, code: "//1 \nlet fish = 50;\nif (fish >= 50) {\n  console.log(\"Big catch!\");\n} \n// 2\nlet fish = 50;\nlet  count = 0;\nif (fish >= 50) {\n  console.log(\"Big catch!\");\n  count =  count + 1;\n  console.log(\"Big fish counter:\" +  count);\n} \n//3 \nlet fish = 120;\nlet  count = 0;\nif (fish >= 100) {\n  console.log(\"Super big catch!\");  \n  count =  count + 1;\n  console.log(\"Super big fish counter:\" +  count);\n}" },
    { level: 29, lesson: 3, code: "//1\nlet weather = \"sunny\";\nif (weather == \"sunny\") {\n  console.log(\"Picnic in the park\");\n} else {\n  console.log(\"Lunch at home\");\n}" },
    // Level 30
    { level: 30, lesson: 1, code: "//1\nfor (let degree of degreeList) {\n  console.log(degree);\n} \n// 2\nlet wordList = [\"tomato\", \"carrot\", \"onion\"];\nfor (let word of wordList) {\n  console.log(word);\n} \n// 3\nlet fish = 50;\nlet big = 0;\nif (fish >= 50) {\n  console.log(\"Big catch!！\");\n  big = big + 1;\n  console.log(\"Big fish counter:\" + big);\n} \n//4 \nlet weather = \"sunny\";\nlet shop = \"OPEN\";\n\nif (weather == \"sunny\") {\n  if (shop == \"OPEN\") {\n    console.log(\"Buy bread and have a picnic\");\n  }\n} else {\n  console.log(\"Lunch at home\");\n} \n// 5\nlet weather = \"sunny\";\nlet group = \"Group B\";\n\nif (weather == \"sunny\") {\n  if (group == \"Group A\") {\n    console.log(\"Destination is the zoo\");\n  } else if (group == \"Group B\") {\n    console.log(\"Destination is the museum\");\n  } else {\n    console.log(\"Destination is the art museum\");\n  }\n} else {\n  console.log(\"Field trip canceled\");\n}" },
    // Level 31
    { level: 31, lesson: 1, code: "// 1\nfunction sum(freestyle, breaststroke) {\n  let result = freestyle + breaststroke;\n  return result;\n} \n// 2\nconsole.log(sum(39.5,60.5));\n // 3\n let teamRed = sum(39.5,60.5);\nconsole.log(teamRed); \n// 4\nfunction sum(freestyle, breaststroke, backstroke) {\n  let time = freestyle + breaststroke + backstroke;\n  return time;\n}\nlet teamRed = sum(39.5, 60.5, 58.5);\nconsole.log(teamRed);\nlet teamBlue = sum(40, 62, 58);\nconsole.log(teamBlue); \n// 5\nfunction sum(freestyle, breaststroke, backstroke) {\n  let time = freestyle + breaststroke + backstroke;\n  return time;\n}\nlet teamRed = sum(39.5, 60.5, 58.5);\nconsole.log(teamRed);\nlet teamBlue = sum(40, 62, 58);\nconsole.log(teamBlue);\nlet teamGreen = sum(41, 59.5, 60);\nconsole.log(teamGreen);" },
    { level: 31, lesson: 3, code: "//1 \nMath.min(158.5, 160, 160.5) \n//2 \nMath.min(teamRed, teamBlue, teamGreen); " },
    // Level 32
    { level: 32, lesson: 1, code: "//1 \nlet day of volunteerList \n// 2\n if (day == \"Yes\") {\n    count++;\n  }\n  //3 \n  let volunteerList = [\"Yes\", \"No\", \"Yes\", \"Yes\", \"Yes\", \"Yes\", \"No\", \"No\", \"Yes\", \"Yes\", \"Yes\", \"No\", \"Yes\", \"No\"];\nlet count = 0;\nfor (let day of volunteerList) {\n  if (day == \"No\") {\n    count++;\n  }\n}\nconsole.log(count); " },
    { level: 32, lesson: 3, code: "// 1\nlet sandwichType = \"strawberry jam\";\nif (sandwichType == \"savory\") {\n  console.log(\"Check what's inside the sandwich\");\n} else {\n  console.log(\"Eat strawberry jam sandwich\");\n} \n// 2  \nlet sandwichType = \"savory\";\nlet savory = \"tuna\";\nif (sandwichType == \"savory\") {\n  if (savory == \"tuna\") {\n    console.log(\"Exchange with Cody\");\n  } else {\n    console.log(\"Eat ham sandwich\");\n  }\n} else {\n  console.log(\"Eat strawberry jam sandwich\");\n}" },
    // Level 33
    { level: 33, lesson: 1, code: "// 1\nfunction sum(freestyle, breaststroke, backstroke) {\n  let result = freestyle + breaststroke + backstroke;\n  return result;\n} \n// 2\nfunction sum(freestyle, breaststroke,backstroke) {\n  let result = freestyle + breaststroke +backstroke;\n  return result;\n}\nlet teamRed = sum(39.5, 60.5, 58.5);\nconsole.log(teamRed); \n// 3\nfunction sum(freestyle, breaststroke, backstroke) {\n  let time = freestyle + breaststroke + backstroke;\n  return time;\n}\nlet teamRed = sum(39.5, 60.5, 58.5);\nconsole.log(teamRed);\nlet teamBlue = sum(40, 62, 58);\nconsole.log(teamBlue);\nlet teamGreen = sum(41, 59.5, 60);\nconsole.log(teamGreen); \n// 4\n Math.min(teamRed, teamBlue, teamGreen) \n // 5\n let day of volunteerList \n // 6\n if (day == \"Yes\") {\n    count++;\n  }\n  // 7\n  let weather = \"sunny\";\nif (weather == \"sunny\") {\n  console.log(\"exercise\");\n} else {\n  console.log(\"read a book\");\n}\n// 7\nlet sandwichType = \"savory\";\nlet savory = \"tuna\";\nif (sandwichType == \"savory\") {\n  if (savory == \"tuna\") {\n    console.log(\"Exchange with Cody\");\n  } else {\n    console.log(\"Eat ham sandwich\");\n  }\n} else {\n  console.log(\"Eat strawberry jam sandwich\");\n}" },
    // Level 34
    { level: 34, lesson: 1, code: "Copy Paste" },
    { level: 34, lesson: 2, code: "// 1\n<span></span>\n// 2\n<p>My favorite fruit is <span class=\"apple\">Apple</span></p>\n<p>My favorite animal is <span class=\"giraffe\">Giraffe</span></p>\n<p>Today's shoes are <span class=\"sneaker\">Light blue sneakers</span></p>" },
    { level: 34, lesson: 3, code: "Copy Paste" },
    // Level 35
    { level: 35, lesson: 3, code: "//1 \n.btn1:hover {\n  background-color: lime;\n  transition: 2s;\n}\n.btn2:hover {\n  background-color: yellow;\n}\n//2\n.btn1:hover {\n  background-color: lime;\n  transition: 2s;\n}\n.btn2:hover {\n  background-color: yellow;\n  transition: 5s;\n}" },
    { level: 35, lesson: 4, code: "// 1\nh1 {\n  border: 5px solid red;\n}" },
    { level: 35, lesson: 1, code: "// 1\n<h1>Sports Festival Program</h1>\n<img src=\"sports.png\"> \n// 2\n<p>My favorite fruit is <span class=\"apple\">Apple</span></p>\n<p>My favorite animal is <span class=\"giraffe\">Giraffe</span></p> \n// 3\n<h1>Event Content Survey</h1>\n<p>Opinion</p>\n<input type=\"text\">\n<input type=\"button\" value=\"Submit\"> \n // 4\n h1 {\n  background-color: pink;\n}\nli {\n  font-weight: bold;\n}\n.red {\n  color: red;\n} \n// 5\n.btn1:hover {\n  background-color: lime;\n}\n.btn2:hover {\n  background-color: yellow;\n  transition: 2s;\n} \n// 6\nh1 {\n  border: 10px double red;\n}" },
    // Level 37
    { level: 37, lesson: 1, code: "//1 \nlet bloodType = \"A\";\n\nif (bloodType == \"A\") {\n  console.log(\"Today's fortune is decent\");\n} \n// 2\nlet bloodType = \"B\";\n\nif (bloodType == \"A\") {\n  console.log(\"Today's fortune is decent\");\n} else if (bloodType == \"B\") {\n  console.log(\"Today's fortune is excellent!\");\n} else if (bloodType == \"O\") {\n  console.log(\"Today's fortune looks good!\");\n} else if (bloodType == \"AB\") {\n  console.log(\"Today's fortune might not be so good...\");\n} \n// 3\nlet bloodType = \"Unknown\";\n\nif (bloodType == \"A\") {\n  console.log(\"Today's fortune is decent\");\n} else if (bloodType == \"B\") {\n  console.log(\"Today's fortune is excellent!\");\n} else if (bloodType == \"O\") {\n  console.log(\"Today's fortune looks good!\");\n} else if (bloodType == \"AB\") {\n  console.log(\"Today's fortune might not be so good...\");\n} else {\n  console.log(\"Let's find out your blood type!\");\n}" },
    { level: 37, lesson: 2, code: " // 1\n let bloodType = \"A\";\n\nswitch (bloodType) {\n  case \"A\":\n    console.log(\"Today's fortune is decent\");\n    break;\n} \n// 2\nlet bloodType = \"B\";\n\nswitch (bloodType) {\n  case \"A\":\n    console.log(\"Today's fortune is decent\");\n    break;\n  case \"B\":\n    console.log(\"Today's fortune is excellent!\");\n    break;\n} \n// 3\nlet bloodType = \"AB\";\n\nswitch (bloodType) {\n  case \"A\":\n    console.log(\"Today's fortune is decent\");\n    break;\n  case \"B\":\n    console.log(\"Today's fortune is excellent!\");\n    break;\n  case \"O\":\n    console.log(\"Today's fortune looks good!\");\n    break;\n  case \"AB\":\n    console.log(\"Today's fortune might not be so good...\");\n    break;\n} \n// 4\nlet bloodType = \"Unknown\";\n\nswitch (bloodType) {\n  case \"A\":\n    console.log(\"Today's fortune is decent\");\n    break;\n  case \"B\":\n    console.log(\"Today's fortune is excellent!\");\n    break;\n  case \"O\":\n    console.log(\"Today's fortune looks good!\");\n    break;\n  case \"AB\":\n    console.log(\"Today's fortune might not be so good...\");\n    break;\n  default:\n    console.log(\"Let's find out your blood type!\");\n    break;\n}" },
    // Level 38
    { level: 38, lesson: 1, code: "// 1\ncookies / 3 \n// 2\nsnacks % 6 " },
    { level: 38, lesson: 2, code: "// 1 \nconsole.log(members % 6);\n// 2\nif (snacks % 3 > 0) {\n  console.log(\"Rick gets it\");\n} " },
    { level: 38, lesson: 3, code: "// 1\nlet donuts = 20;\n\nswitch (donuts % 3) {\n  case 0:\n    console.log(\"Let's clean up the trash neatly\");\n    break;\n  case 1:\n    console.log(\"Give it to Mom\");\n    break;\n  case 2:\n    console.log(\"Give it to Mom and Dad\");\n    break;\n}" },
    // Level 39
    { level: 39, lesson: 1, code: "// 1\nlet bloodType = \"Unknown\";\n\nswitch (bloodType) {\n  case \"A\":\n    console.log(\"Today's fortune is decent\");\n    break;\n  case \"B\":\n    console.log(\"Today's fortune is excellent!\");\n    break;\n  default:\n    console.log(\"Let's find out your blood type!\");\n    break;\n} \n// 2\nlet cookies = 20;\nconsole.log(cookies % 3); \n// 3 \nlet cookies = 20;\nif (cookies % 3 > 0) {\n  console.log(\"Cody gets it\");\n} \n// 4\nlet orange = 85;\n\nswitch (orange % 3) {\n  case 0:\n    console.log(\"They were divided equally\");\n    break;\n  case 1:\n    console.log(\"Give it to Grandma\");\n    break;\n  case 2:\n    console.log(\"Give it to the neighbors\");\n    break;\n}" },
    // Level 40
    { level: 40, lesson: 1, code: " // 1\n const day = 7;\n// 2\nlet day = 30;\n// 3\nconst myBirthday = \"September 1st\";" },
    { level: 40, lesson: 2, code: "// 1\nconst myScore = 90;\n\nif (myScore != 100){\n  console.log(\"Aim for a perfect score!\");\n}" },
    
    // ========== إجابات نهاية كل فصل (جديدة) ==========

    // Level 21 - نهاية الفصل
    { level: 21, lesson: 0, code: "score == 50" },
    { level: 21, lesson: 0, code: "else if (A < B)" },
    { level: 21, lesson: 0, code: "A < B" },
    { level: 21, lesson: 0, code: "score >= 50" },
    { level: 21, lesson: 0, code: "&&" },
    { level: 21, lesson: 0, code: "||" },
    { level: 21, lesson: 0, code: "numberOfPeople <=10 || weight<=800" },
    { level: 21, lesson: 0, code: "ينتج عنه خطأ" },
    { level: 21, lesson: 0, code: "if(science==100){\nconsole.log(\"Math and science are 100 points\");\n}" },

    // Level 22 - نهاية الفصل
    { level: 22, lesson: 0, code: "for" },
    { level: 22, lesson: 0, code: "i++" },
    { level: 22, lesson: 0, code: "for (let i = 0; i < 10; i++) {\n  specified process;\n}" },
    { level: 22, lesson: 0, code: "let i=0; i<3; i++" },
    { level: 22, lesson: 0, code: "for (let i=0 ; i < 7 ; i++){\n console.log(\"Good morning\");\n}" },
    { level: 22, lesson: 0, code: "يؤدي الي خطأ" },
    { level: 22, lesson: 0, code: "if(i==4){\nconsole.log(\"End\")\n}" },
    { level: 22, lesson: 0, code: "AABA" },
    { level: 22, lesson: 0, code: "i+=2" },

    // Level 23 - نهاية الفصل
    { level: 23, lesson: 0, code: "function move() {\n  Program to Run\n}" },
    { level: 23, lesson: 0, code: "55" },
    { level: 23, lesson: 0, code: "30" },
    { level: 23, lesson: 0, code: "divide5(35)" },
    { level: 23, lesson: 0, code: "ينتج عنه خطأ" },
    { level: 23, lesson: 0, code: "function goodNight() {\n  let greeting = \"Good night!\";\n  return greeting;\n}\nconsole.log(goodNight());" },
    { level: 23, lesson: 0, code: "console.log(mul(9, 7));" },

    // Level 24 - نهاية الفصل
    { level: 24, lesson: 0, code: "else if (A < B) {\n  console.log(\"B is larger\");\n}" },
    { level: 24, lesson: 0, code: "&&" },
    { level: 24, lesson: 0, code: "if (math == 100) {\n    console.log(\"Science and Math are 100 points\");\n  }" },
    { level: 24, lesson: 0, code: "for (let i=0 ; i < 7 ; i++){\n console.log(\"Good morning\");\n}" },
    { level: 24, lesson: 0, code: "ينتج خطأ" },
    { level: 24, lesson: 0, code: "00010" },
    { level: 24, lesson: 0, code: "i += 5" },
    { level: 24, lesson: 0, code: "console.log(divide3(12345));" },
    { level: 24, lesson: 0, code: "function move() {\n  Program to Run\n}" },
    { level: 24, lesson: 0, code: "function mul(num1, num2) {\n    let result = num1 * num2;\n    return result;\n}\nconsole.log(mul(9, 7));" },

    // Level 25 - نهاية الفصل
    { level: 25, lesson: 0, code: "8" },
    { level: 25, lesson: 0, code: "let num = 1;\nfor(let i = 0; i < 5; i++){\n  num = num * 7;\n}\nconsole.log(num);" },
    { level: 25, lesson: 0, code: "1234567" },
    { level: 25, lesson: 0, code: "let num = 0;\nfor (let i = 0; i < 6; i++) {\n  num = num + i;\n}\nconsole.log(num);" },
    { level: 25, lesson: 0, code: "let num = 5040;\nfor(let i = 1; i <= 5; i++){\n  num = num / i;\n}\nconsole.log(num);" },

    // Level 26 - نهاية الفصل
    { level: 26, lesson: 0, code: "79" },
    { level: 26, lesson: 0, code: "console.log(scoreList[5]);" },
    { level: 26, lesson: 0, code: "let sum = 0;\nfor(let i = 0; i < 7; i++){\n  sum = sum + scoreList[i];\n}\nconsole.log(sum / 7);" },
    { level: 26, lesson: 0, code: "console.log(scoreList.length);" },
    { level: 26, lesson: 0, code: "for (let i = 0; i < scoreList.length; i++) {\n  if (scoreList[i] >= 80) {\n    console.log(\"80 points or higher\");\n  }\n}" },

    // Level 27 - نهاية الفصل
    { level: 27, lesson: 0, code: "let num = 1;\nfor (let i = 0; i < 3; i++) {\n  num = num * 9;\n}\nconsole.log(num);" },
    { level: 27, lesson: 0, code: "1234" },
    { level: 27, lesson: 0, code: "let num = 5040;\nfor (let i = 1; i <= 5; i++) {\n  num = num / i;\n}\nconsole.log(num);" },
    { level: 27, lesson: 0, code: "scoreList[4]" },
    { level: 27, lesson: 0, code: "scoreList.length" },
    { level: 27, lesson: 0, code: "for (let i = 0; i < scoreList.length; i++) {\n  if (scoreList[i] >= 80) {\n    console.log(\"Pass\");\n  }\n}" },

    // Level 28 - نهاية الفصل
    { level: 28, lesson: 0, code: "11" },
    { level: 28, lesson: 0, code: "10\n11\n12" },
    { level: 28, lesson: 0, code: "5\n6\n7" },
    { level: 28, lesson: 0, code: "for (let num of numList) {\n  console.log(num);\n}" },
    { level: 28, lesson: 0, code: "for (let word of wordList) {\n  console.log(word);\n}" },

    // Level 29 - نهاية الفصل
    { level: 29, lesson: 0, code: "} else if (A < B) {\n  console.log(\"B is bigger\");\n}" },
    { level: 29, lesson: 0, code: "100" },
    { level: 29, lesson: 0, code: "Destination is the amusement park" },
    { level: 29, lesson: 0, code: "let weather = \"sunny\";\nlet shop = \"OPEN\";\n\nif (weather == \"sunny\") {\n  if (shop == \"OPEN\") {\n    console.log(\"Go to the shop\");\n  }\n} else {\n  console.log(\"Staying at home\");\n}" },
    { level: 29, lesson: 0, code: "let weather = \"rain\";\nlet time = \"morning\";\n\nif (weather == \"rain\") {\n  if (time == \"morning\") {\n    console.log(\"Let's go to the movie theater\");\n  } else if (time == \"noon\") {\n    console.log(\"Let's go to the library\");\n  } else {\n    console.log(\"Let's stay at home\");\n  }\n} else {\n  console.log(\"Let's go for a walk\");\n}" },

    // Level 30 - نهاية الفصل
    { level: 30, lesson: 0, code: "5\n6\n7" },
    { level: 30, lesson: 0, code: "for (let num of numList) {\n  console.log(num);\n}" },
    { level: 30, lesson: 0, code: "for (let word of wordList) {\n  console.log(word);\n}" },
    { level: 30, lesson: 0, code: "100" },
    { level: 30, lesson: 0, code: "Destination is the amusement park" },
    { level: 30, lesson: 0, code: "let weather = \"rain\";\nlet time = \"morning\";\n\nif (weather == \"rain\") {\n  if (time == \"morning\") {\n    console.log(\"Let's go to the movie theater\");\n  } else if (time == \"noon\") {\n    console.log(\"Let's go to the library\");\n  } else {\n    console.log(\"Let's stay at home\");\n  }\n} else {\n  console.log(\"Let's go for a walk\");\n}" },

    // Level 31 - نهاية الفصل
    { level: 31, lesson: 0, code: "function calculation3(a, b, c){\n  let result = a * b * c;\n  return result;\n}\nconsole.log(calculation3(2, 3, 4));" },
    { level: 31, lesson: 0, code: "console.log(calculation3(3, 5, 10));" },
    { level: 31, lesson: 0, code: "function calculation3(a, b, c) {\n  let result = a * b * c;\n  return result;\n}\nlet num1 = calculation3(5, 10, 15);\nconsole.log(num1);" },
    { level: 31, lesson: 0, code: "function calculation3(a, b, c) {\n  let result = a * b * c;\n  return result;\n}\nlet num1 = calculation3(5, 10, 15);\nconsole.log(num1);\nlet num2 = calculation3(4, 4, 4);\nconsole.log(num2);" },
    { level: 31, lesson: 0, code: "console.log(Math.min(num1, num2, num3));" },

    // Level 32 - نهاية الفصل
    { level: 32, lesson: 0, code: "let score of scoreList" },
    { level: 32, lesson: 0, code: "80 88 92" },
    { level: 32, lesson: 0, code: "let heightList = [154, 138, 140, 180, 170];\n\nfor (let height of heightList) {\n  if (height >= 150) {\n    console.log(height);\n  }\n}" },
    { level: 32, lesson: 0, code: "إذا كان طولك 140 سم أو أكثر، يمكنك الركوب بمفردك." },
    { level: 32, lesson: 0, code: "let height = 148;\nlet age = 14;\n\nif (height >= 140) {\n  if (age >= 12) {\n    console.log(\"You can ride alone\");\n  } else {\n    console.log(\"Please ride with someone who is 18 years or older\");\n  }\n} else {\n  console.log(\"You cannot ride\");\n}" },

    // Level 33 - نهاية الفصل (لاحظت تكرار 32، فخليتها 33)
    { level: 33, lesson: 0, code: "console.log(calc3(3, 5, 10));" },
    { level: 33, lesson: 0, code: "function calc3(a, b, c) {\n  let result = a * b * c;\n  return result;\n}\nlet num1 = calc3(5, 10, 15);\nconsole.log(num1);" },
    { level: 33, lesson: 0, code: "function calc3(a, b, c) {\n  let result = a * b * c;\n  return result;\n}\nlet num1 = calc3(5, 10, 15);\nconsole.log(num1);\nlet num2 = calc3(4, 4, 4);\nconsole.log(num2);" },
    { level: 33, lesson: 0, code: "console.log(Math.min(num1, num2, num3));" },
    { level: 33, lesson: 0, code: "80 88 92" },
    { level: 33, lesson: 0, code: "let heightList = [154, 138, 140, 180, 170];\n\nfor (let height of heightList) {\n  if (height >= 150) {\n    console.log(height);\n  }\n}" },
    { level: 33, lesson: 0, code: "إذا كان عمرك 12 سنة أو أكثر وكان طولك 140 سم أو أكثر، يمكنك الركوب بمفردك." },

    // Level 34 - نهاية الفصل
    { level: 34, lesson: 0, code: "<p>Menu</p>\n<ul>\n    <li>Hamburger</li>\n    <li>Pizza</li>\n    <li>Sandwich</li>\n</ul>" },
    { level: 34, lesson: 0, code: "<img src=\"cody.png\">" },
    { level: 34, lesson: 0, code: "يتم عرض النص \"Tomato\" باللون الأحمر" },
    { level: 34, lesson: 0, code: "<p>Phone Number</p>\n<input type=\"text\">\n<input type=\"button\" value=\"Enter\">" },
    { level: 34, lesson: 0, code: "<input type=\"button\" value=\"Submit\">" },

    // Level 35 - نهاية الفصل
    { level: 35, lesson: 0, code: "<p class=\"cat\">CAT</p>" },
    { level: 35, lesson: 0, code: ".btn:hover {\n    background-color: red;\n}" },
    { level: 35, lesson: 0, code: ".btn:hover {\n  background-color: red;\n  transition: 5s;\n}" },
    { level: 35, lesson: 0, code: "double" },
    { level: 35, lesson: 0, code: "h1 {\n  border: 10px solid blue;\n}" },

    // Level 36 - نهاية الفصل
    { level: 36, lesson: 0, code: "<p>Menu</p>\n<ul>\n    <li>Hamburger</li>\n    <li>Pizza</li>\n    <li>Sandwich</li>\n</ul>" },
    { level: 36, lesson: 0, code: "يتم عرض النص \"Tomato\" باللون الأحمر" },
    { level: 36, lesson: 0, code: "<p>Phone Number</p>\n<input type=\"text\">\n<input type=\"button\" value=\"Enter\">" },
    { level: 36, lesson: 0, code: "<input type=\"button\" value=\"Submit\">" },
    { level: 36, lesson: 0, code: ".btn:hover {\n    background-color: red;\n}" },
    { level: 36, lesson: 0, code: ".btn:hover {\n  background-color: red;\n  transition: 5s;\n}" },
    { level: 36, lesson: 0, code: "double" },
    { level: 36, lesson: 0, code: "h1 {\n  border: 10px solid blue;\n}" },

    // Level 37 - نهاية الفصل
    { level: 37, lesson: 0, code: "let color = \"green\";\n\nif (color == \"red\") {\n  console.log(\"Red\");\n} else if (color == \"blue\") {\n  console.log(\"Blue\");\n} else if (color == \"green\") {\n  console.log(\"Green\");\n}" },
    { level: 37, lesson: 0, code: "عندما لا تتطابق القيمة مع أيٍّ من الحالات (cases)" },
    { level: 37, lesson: 0, code: "500~1500" },
    { level: 37, lesson: 0, code: "let letter = \"B\";\n\nswitch (letter) {\n  case \"A\":\n    console.log(\"Well done!\");\n    break;\n  case \"B\":\n    console.log(\"Keep up the good work\");\n    break;\n  case \"C\":\n    console.log(\"Let's try a little harder\");\n    break;\n}" },
    { level: 37, lesson: 0, code: "let letter = \"D\";\n\nswitch (letter) {\n  case \"A\":\n    console.log(\"Well done!\");\n    break;\n  case \"B\":\n    console.log(\"Keep up the good work\");\n    break;\n  case \"C\":\n    console.log(\"Let's try a little harder\");\n    break;\n  default:\n    console.log(\"The notation is incorrect\");\n    break;\n}" },

    // Level 38 - نهاية الفصل
    { level: 38, lesson: 0, code: "1" },
    { level: 38, lesson: 0, code: "year % 12 == 0" },
    { level: 38, lesson: 0, code: "let dayCount = 14;\n\nif (dayCount % 7 == 0) {\n  console.log(\"Let's eat a hamburger!\");\n}" },
    { level: 38, lesson: 0, code: "let dayCount = 11;\n\nswitch (dayCount % 7) {\n  case 0:\n    console.log(\"Let's eat a hamburger!\");\n    break;\n  case 4:\n    console.log(\"Let's eat steak!\");\n    break;\n}" },
    { level: 38, lesson: 0, code: "let number = 20;\n\nswitch (number % 3) {\n  case 0:\n    console.log(\"Group A\");\n    break;\n  case 1:\n    console.log(\"Group B\");\n    break;\n  case 2:\n    console.log(\"Group C\");\n    break;\n}" },

    // Level 39 - نهاية الفصل
    { level: 39, lesson: 0, code: "عندما لا تتطابق القيمة مع أي من الحالات" },
    { level: 39, lesson: 0, code: "500~1500" },
    { level: 39, lesson: 0, code: "let letter = \"B\";\n\nswitch (letter) {\n  case \"A\":\n    console.log(\"Well done!\");\n    break;\n  case \"B\":\n    console.log(\"Keep up the good work\");\n    break;\n  case \"C\":\n    console.log(\"Let's try a little harder\");\n    break;\n}" },
    { level: 39, lesson: 0, code: "1" },
    { level: 39, lesson: 0, code: "let dayCount = 14;\n\nif (dayCount % 7 == 0) {\n  console.log(\"Let's eat a hamburger!\");\n}" },
    { level: 39, lesson: 0, code: "let number = 20;\n\nswitch (number % 3) {\n  case 0:\n    console.log(\"Group A\");\n    break;\n  case 1:\n    console.log(\"Group B\");\n    break;\n  case 2:\n    console.log(\"Group C\");\n    break;\n}" },

    // Level 40 - نهاية الفصل
    { level: 40, lesson: 0, code: "const num;" },
    { level: 40, lesson: 0, code: "let" },
    { level: 40, lesson: 0, code: "let num;\nnum = 3;\nnum = 5;\nconsole.log(num);" },
    { level: 40, lesson: 0, code: "a != 100" },
    { level: 40, lesson: 0, code: "const answer1 = 1023;\nconst answer2 = 1024;\n\nif (answer1 != answer2) {\n  console.log(\"Let's review once more!\");\n}" },

    // Level 41 - نهاية الفصل
    { level: 41, lesson: 0, code: "for (let i = 0; i < 3; i++) {\n  console.log(\"Programming\");\n}" },
    { level: 41, lesson: 0, code: "while ( condition ) {\n  process;\n}" },
    { level: 41, lesson: 0, code: "0\n1\n2" },
    { level: 41, lesson: 0, code: "let money = 1000;\nconst snacks = 230;\nwhile (money > snacks) {\n  money = money - snacks;\n  console.log(money);\n}" },
    { level: 41, lesson: 0, code: "let money = 600;\nlet month = 0;\nwhile (money < 4000) {\n  month ++;\n  money += 800;\n}\nconsole.log(\"Save for \" + month + \" months\");" },

    // Level 42 - نهاية الفصل
    { level: 42, lesson: 0, code: "let" },
    { level: 42, lesson: 0, code: "let num;\nnum = 3;\nnum = 5;\nconsole.log(num);" },
    { level: 42, lesson: 0, code: "a != 100" },
    { level: 42, lesson: 0, code: "while ( condition ) {\n  process;\n}" },
    { level: 42, lesson: 0, code: "let money = 1000;\nconst snacks = 230;\nwhile (money > snacks) {\n  money = money - snacks;\n  console.log(money);\n}" },
    { level: 42, lesson: 0, code: "let money = 600;\nlet month = 0;\nwhile (money < 4000) {\n  month ++;\n  money += 800;\n}\nconsole.log(\"Save for \" + month + \" months\");" }
];

// دالة لعرض الإجابات في صفحة answers.html
// دالة لعرض الإجابات في صفحة answers.html
// دالة لعرض الإجابات في صفحة answers.html
function displayAnswers() {
    const container = document.getElementById('answers-container');
    if (!container) return;

    container.innerHTML = '';

    const groupedByLevel = {};
    answersData.forEach(item => {
        if (!groupedByLevel[item.level]) {
            groupedByLevel[item.level] = {};
        }
        if (!groupedByLevel[item.level][item.lesson]) {
            groupedByLevel[item.level][item.lesson] = [];
        }
        groupedByLevel[item.level][item.lesson].push(item.code);
    });

    const sortedLevels = Object.keys(groupedByLevel).sort((a, b) => a - b);

    sortedLevels.forEach(level => {
        const levelCard = document.createElement('div');
        levelCard.className = 'level-card';
        
        const levelTitle = document.createElement('h2');
        // إضافة أيقونة للمستوى
        levelTitle.innerHTML = `<i class="fas fa-layer-group"></i> المستوى ${level}`;
        levelCard.appendChild(levelTitle);

        const lessons = groupedByLevel[level];
        const sortedLessons = Object.keys(lessons).sort((a, b) => a - b);

        sortedLessons.forEach(lesson => {
            const lessonCard = document.createElement('div');
            lessonCard.className = 'lesson-card';
            
            const lessonTitle = document.createElement('h3');
            
            // إضافة أيقونات مناسبة لكل نوع درس
            if (lesson == 0) {
                lessonTitle.innerHTML = `<i class="fas fa-graduation-cap" style="color: #7c3aed;"></i> 🎓 نهاية الفصل`;
            } else {
                lessonTitle.innerHTML = `<i class="fas fa-book-open"></i> الدرس ${lesson}`;
            }
            
            lessonCard.appendChild(lessonTitle);

            const answersList = document.createElement('ul');
            answersList.className = 'answers-list-ul';

            lessons[lesson].forEach(code => {
                const listItem = document.createElement('li');
                listItem.className = 'answer-item';
                // إضافة أيقونة صغيرة لكل إجابة
                listItem.innerHTML = `<i class="fas fa-code"></i> ${code}`;
                answersList.appendChild(listItem);
            });

            lessonCard.appendChild(answersList);
            levelCard.appendChild(lessonCard);
        });

        container.appendChild(levelCard);
    });
}
// دالة لتحميل البيانات كملف JSON
function downloadJSON() {
    const dataStr = JSON.stringify(answersData, null, 2); // نحول البيانات لنص JSON منسق
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = 'answers.json'; // اسم الملف اللي هيتحمل
    link.click();

    // ننظف الـ URL بعد ما خلصنا
    URL.revokeObjectURL(url);
}

// دالة لتحميل البيانات كملف JSON
function downloadJSON() {
    const dataStr = JSON.stringify(answersData, null, 2); // نحول البيانات لنص JSON منسق
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = 'answers.json'; // اسم الملف اللي هيتحمل
    link.click();

    // ننظف الـ URL بعد ما خلصنا
    URL.revokeObjectURL(url);
}

// ========== Dark/Light Mode ==========
function initTheme() {
    const themeToggle = document.getElementById('theme-toggle');
    if (!themeToggle) return;

    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    updateThemeIcon(savedTheme);

    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });
}

function updateThemeIcon(theme) {
    const themeToggle = document.getElementById('theme-toggle');
    if (!themeToggle) return;
    
    const icon = themeToggle.querySelector('i');
    if (theme === 'dark') {
        icon.className = 'fas fa-moon';
    } else {
        icon.className = 'fas fa-sun';
    }
}

// نشغل الدوال أول ما الصفحة تتحمل
document.addEventListener('DOMContentLoaded', () => {
    displayAnswers();
    initTheme(); // <===== ده السطر اللي كان ناقص !!!
    
    // نضيف حدث للزرار بتاع التحميل لو هو موجود
    const downloadBtn = document.getElementById('download-json');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', downloadJSON);
    }
});