// using of surveyJS framework

window.onbeforeunload = function() {
    return "Reload this web page? The system may not save your data and changes."
}

var randomCode = Math.floor(Math.random() * 1000000) + 1

var morphingJSON =
{
 title: "Visualize Journeys ",
 focusFirstQuestionAutomatic: false,
 pages: [
  {
   name: "Introduction",
   elements: [
    {
     type: "html",
     name: "welcomePage",
     html: "<p><span style=\"font-weight: 400;font-size:1.17em;\">Hello! Thank you for showing interest in our study.</span>&nbsp;</p>\n<p><span style=\"font-weight: 400;font-size:1.17em;\">We are interested in studying how to visualize lots of car journeys on a map.</span></p>\n<p><span style=\"font-weight: 400;font-size:1.17em;\">After </span><strong style=\"font-size:1.17em;\">consenting</strong><span style=\"font-weight: 400;font-size:1.17em;\"> to participate and completing a short </span><strong style=\"font-size:1.17em;\">demographics survey</strong><span style=\"font-weight: 400;font-size:1.17em;\">, we will teach you some simple <strong>concepts</strong> each accompanied by a question. Finally, we would like you to answer some <strong>questions</strong> using the skills you have gained. </span></p>\n<p><span style=\"font-weight: 400;font-size:1.17em;\">It should take 15-20 minutes to complete the whole quiz.</span></p>"
    }
   ]
  },
  {
   name: "ConsentForm",
   elements: [
    {
     type: "html",
     name: "consentFormText",
     html: "<p style=\"font-size:14px;\"><strong>Study Title: Visualizing movement data</strong></p>\n<p style=\"font-size:14px;\"><strong>Principle Investigator:</strong></p>\n<p><span style=\"font-weight: 400;font-size:14px;\">Name: Brian Lim</span></p>\n<p><span style=\"font-weight: 400;font-size:14px;\">Organisation: School of Computing, National University of Singapore</span></p>\n<p><span style=\"font-weight: 400;font-size:14px;\">Email: <a href=\"mailto:brianlim@comp.nus.edu.sg\">brianlim@comp.nus.edu.sg</a></span></p>\n<p><span style=\"font-weight: 400;font-size:14px;\">Name: Yan Lyu</span></p>\n<p><span style=\"font-weight: 400;font-size:14px;\">Organisation: School of Computing, National University of Singapore</span></p>\n<p><span style=\"font-weight: 400;font-size:14px;\">Email: </span><a href=\"mailto:dcslyuy@nus.edu.sg\">dcslyuy@nus.edu.sg</a></p>\n<p>&nbsp;</p>\n<p style=\"font-size:14px;\"><strong>Before deciding whether to participate in this research, please read the following.</strong></p>\n<p>&nbsp;</p>\n<p style=\"font-size:14px;\"><strong>Participation is voluntary</strong></p>\n<p><span style=\"font-weight: 400;font-size:14px;\">You must be at least 21 years of age to participate. It is your choice whether or not to participate in this research. &nbsp;If you choose to participate, you may change your mind and leave the study at any time. Refusal to participate or stopping your participation will involve no penalty.</span></p>\n<p style=\"font-size:14px;\"><strong>What is the purpose of this research?</strong></p>\n<p><span style=\"font-weight: 400;font-size:14px;\">This study aims to develop visualizations of moving objects such as taxis and cars.</span></p>\n<p style=\"font-size:14px;\"><strong>How long will I take part in this research?</strong></p>\n<p><span style=\"font-weight: 400;font-size:14px;\">From piloting our study, it takes 15-20 minutes to complete.</span></p>\n<p style=\"font-size:14px;\"><strong>What is the approximate number of research participants involved?</strong></p>\n<p><span style=\"font-weight: 400;font-size:14px;\">There will be approximately 50 participants in this study.</span></p>\n<p style=\"font-size:14px;\"><strong>What can I expect if I take part in this research?</strong></p>\n<p><span style=\"font-weight: 400;font-size:14px;\">Before the study, you will complete a demographic survey. After this, we will teach you 4 simple concepts each accompanied by a question. Finally, you will answer some questions using the skills you have gained.</span></p>\n<p style=\"font-size:14px;\"><strong>What are the risks and possible discomforts?</strong></p>\n<p><span style=\"font-weight: 400;font-size:14px;\">There are no known risks associated with your participation in this research beyond those of everyday life.</span></p>\n<p style=\"font-size:14px;\"><strong>Are there any benefits from being in this research study?</strong></p>\n<p><span style=\"font-weight: 400;font-size:14px;\">We cannot promise any direct benefits to you or others from your taking part in this research.</span></p>\n<p style=\"font-size:14px;\"><strong>Will I be compensated for participating in this research?</strong></p>\n<p><span style=\"font-weight: 400;font-size:14px;\">You will be paid USD$2.00.</span></p>\n<p style=\"font-size:14px;\"><strong>If I take part in this research, how will my privacy be protected? What happens to the information you collect?</strong></p>\n<p><span style=\"font-weight: 400;font-size:14px;\">Information from this study will be collected on secure servers, and strict confidentiality will be maintained. No identifying information is collected. All output of the research will be reported in the aggregate based on information from multiple respondents, anonymously.</span></p>\n<p><span style=\"font-weight: 400;font-size:14px;\">All data collected will be kept in accordance to the University&rsquo;s Research Data Management Policy. Research data used in any publication will be kept for a minimum of 10 years before being discarded, and email addresses stored will be deleted upon completion of the research.</span></p>\n<p style=\"font-size:14px;\"><strong>If I have any questions, concerns or complaints about this research study, who can I talk to?</strong></p>\n<p><span style=\"font-weight: 400;font-size:14px;\">The researcher for this study is Dr. Yan Lyu. If you have questions, concerns, or complaints, or think the research has hurt you, please feel free to contact Yan Lyu at dcslyuy@nus.edu.sg.</span></p>\n<p><span style=\"font-weight: 400;font-size:14px;\">For an independent opinion regarding the research and the rights of research participants, you may contact a staff member of the National University of Singapore Institutional Review Board (Attn: Dr. Chan Tuck Wai, at telephone (+65) 6516 1234 or email at irb@nus.edu.sg).</span></p>\n<p><span style=\"font-weight: 400;font-size:14px;\">You may print a copy of this Consent Document for your records. If you are interested in participating in the study, click the Accept button. If you are NOT interested in participating in the study, do not click accept.</span></p>\n<p><span style=\"font-weight: 400;font-size:14px;\">Do you consent to the study?</span></p>"
    },
    {
     type: "checkbox",
     name: "Accept",
     isRequired: true,
     titleLocation: "hidden",
     choices: [
      "Accept"
     ]
    }
   ],
   title: "Consent Form\n"
  },
  {
   name: "Demographics",
   elements: [
    {
     type: "text",
     name: "MTurk_ID",
     title: "Enter your MTurk ID",
     isRequired: true
    },
    {
     type: "checkbox",
     name: "Gender",
     title: "Gender",
     choices: [
      "Male",
      "Female",
      "Not listed"
     ]
    },
    {
     type: "text",
     name: "Age",
     title: "Age"
    },
    {
     type: "checkbox",
     name: "Education_Level",
     title: "Education Level",
     choices: [
      "Less than high school",
      "High school graduate",
      "Some college",
      "2 year degree",
      "4 year degree",
      "Professional degree",
      "Doctorate"
     ]
    },
    {
     type: "radiogroup",
     name: "English_Language_Proficiency",
     title: "English Language Proficiency",
     choices: [
      "Very good",
      "Good",
      "Average",
      "Bad",
      "Very bad"
     ]
    }
   ],
   title: "Demographics"
  },
  {
   name: "Learning Exercises Intro",
   elements: [
    {
     type: "html",
     name: "learningIntro",
     html: "<h3 style=\"font-weight:500;\">Now, we will teach you some concepts. <br/>Please read each lesson carefully and answer each question to the best of your ability!</h3>"
    }
   ]
  },
  {
   name: "Grids",
   elements: [
    {
     type: "panel",
     name: "panel1",
     elements: [
      {
       type: "html",
       name: "gridImage",
       html: "<h3 style=\"font-weight: 500;\">You can identify a part of a map by its grid square. For example, the blue square is D6.</h3>\n<span><img style=\"width: 500px;margin-top: 20px;\" src=\"https://www.dropbox.com/s/tpk307ryu2tjfzj/draw_region_image_grid.png?raw=1\"  /></span>"
      }
     ]
    },
    {
     type: "text",
     name: "Grid_Quiz",
     title: "Q1. Please enter the grid square of the red square.",
     correctAnswer: "B2",
     validators: [
      {
       type: "regex",
       text: "Please follow the example format (e.g., A1) and write down one answer only.",
       regex: "^[A-Z][0-9]$"
      }
     ],
     maxLength: 11
    },
    {
     type: "html",
     name: "gridCorrect",
     visible: false,
     visibleIf: "{Grid_Quiz} = \"B2\"",
     html: "<h3 style=\"font-weight:500;\">Correct!</h3>"
    },
    {
     type: "html",
     name: "gridIncorrect",
     visible: false,
     visibleIf: "{Grid_Quiz} <> 'B2' and {Grid_Quiz} notempty",
     html: "<h3 style=\"font-weight:500;\">The correct answer is B2 </h3>"
    }
   ],
   title: "Lesson 1 of 4: Grids on a Map\n"
  },
  {
   name: "Bundling",
   elements: [
    {
     type: "html",
     name: "bundleImage",
     html: "<h3 style=\"font-weight:500;\">A journey between two points can be shown by a straight line, but lots of journeys can look messy:</h3>\n<span><img style=\"width:500px;margin-top:20px;margin-bottom:20px;\" src=\"https://www.dropbox.com/s/d6h4tf03dgi7zkh/group_4_straightline_grid.png?raw=1\" /></span>\n<h3 style=\"font-weight:500;\">To make lots of journeys look clearer, we can group them together:</h3>\n<span><img style=\"width: 500px;margin-top: 20px;\" src=\"https://www.dropbox.com/s/b80jva6025lfvm0/Output%204%20First_00000.png?raw=1\" /></span>"
    },
    {
     type: "panel",
     name: "panel2",
     elements: [
      {
       type: "html",
       name: "bundleQuizImage",
       html: "<h3 style=\"font-weight:500;\">Q2. Using the graph below.</h3>\n<span><img style=\"width: 500px;margin-top: 15px;\" src=\"https://www.dropbox.com/s/npioxqntdtoer4c/Output%2058%20First_00000.png?raw=1\" /></span>"
      },
      {
       type: "checkbox",
       name: "Bundling_Quiz",
       title: "Please select the pair of grid squares that have the endpoints of journeys starting and finishing between them.",
       choices: [
        "D1 and D7",
        "E2 and C3",
        "A6 and B1",
        "A2 and D6"
       ],
       choicesOrder: "random",
       colCount: 4
      },
      {
       type: "html",
       name: "bundleCorrect",
       visible: false,
       visibleIf: "{Bundling_Quiz} = [\"D1 and D7\"]",
       html: "<h3 style=\"font-weight:500;\">Correct!</h3>"
      },
      {
       type: "html",
       name: "bundleIncorrect",
       visible: false,
       visibleIf: "({Bundling_Quiz} <> [\"D1 and D7\"] and {Bundling_Quiz} notempty)",
       html: "<h3 style=\"font-weight:500;\">The correct answer is D1 and D7 </h3>"
      }
     ]
    }
   ],
   title: "Lesson 2 of 4: Grouping Journeys on a Map"
  },
  {
   name: "HeatMap",
   elements: [
    {
     type: "html",
     name: "heatmapImage",
     html: "<h3><span style=\"font-weight: 500;\">To show how busy a road is, we can use colors from yellow to red. If a road is &ldquo;</span><strong>redder</strong><span style=\"font-weight: 500;\">&rdquo; it means more traffic is passing through it. This is called a &ldquo;</span><strong>heat map</strong><span style=\"font-weight: 500;\">&rdquo;.</span></h3>\n<span><img style=\"width: 500px; margin-top: 20px;;\" src=\"https://www.dropbox.com/s/a4wntsu26l8ifxf/Output%2058%20Last_00000.png?raw=1\" /></span>"
    },
    {
     type: "checkbox",
     name: "Heatmap_Quiz",
     title: "Q3. Please select the grid square containing busiest road.",
     choices: [
      "C6",
      "E2",
      "D1",
      "C7"
     ],
     choicesOrder: "random",
     colCount: 4
    },
    {
     type: "html",
     name: "heatmapCorrect",
     visible: false,
     visibleIf: "{Heatmap_Quiz} = [\"C6\"]",
     html: "<h3 style=\"font-weight:500;\">Correct!</h3>"
    },
    {
     type: "html",
     name: "heatmapIncorrect",
     visible: false,
     visibleIf: "({Heatmap_Quiz} notempty and {Heatmap_Quiz} <> [\"C6\"])",
     html: "<h3 style=\"font-weight:500;\">The correct answer is C6 </h3>"
    }
   ],
   title: "Lesson 3 of 4: Heat maps to show traffic levels"
  },
  {
   name: "Morphing",
   elements: [
    {
     type: "html",
     name: "morphingVedio",
     html: "<h3 style=\"font-weight: 500;\">Below is an animated visualization of grouped journeys changing into a heat map. <strong>You can start, pause, slow down, or speed up the video with the slider, so that you can get more information for answering the questions.</strong><br /><br />In this video, you will see the five journeys take three different path from left, four of them merge into one road in the middle of the map (C5), and then all of them merge into one road (C6). Finally, they split into five endpoints (D7).</h3>\n<span>\n<video controls=\"controls\" width=\"500\" height=\"425\" autoplay loop>\n<source src=\"https://www.dropbox.com/s/t550hhhgv4mm61v/Final%2058.mp4?raw=1\" /></video>\n</span>"
    },
    {
     type: "checkbox",
     name: "Morphing_Quiz",
     title: "Q4. From the video, please identify which grid square all journeys had to pass through.",
     choices: [
      "C6",
      "E1",
      "B4",
      "D4"
     ],
     choicesOrder: "random",
     colCount: 4
    },
    {
     type: "html",
     name: "morphingCorrect",
     visible: false,
     visibleIf: "{Morphing_Quiz} = [\"C6\"]",
     html: "<h3 style=\"font-weight:500;\">Correct!<br /><strong>If you play the video from 00:00 second to 00:06 second, you will see all the five journeys from left to right merging into C6. That's why C6 is the grid square all journeys passing through.</strong></h3>"
    },
    {
     type: "html",
     name: "morphingIncorrect",
     visible: false,
     visibleIf: "({Morphing_Quiz} notempty and {Morphing_Quiz} <> [\"C6\"])",
     html: "<h3 style=\"font-weight:500;\">The correct answer is C6.<br /><strong>If you play the video from 00:00 second to 00:06 second, you will see all the five journeys from left to right merging into C6. That's why C6 is the grid square all journeys passing through.</strong></h3>"
    }
   ],
   title: "Lesson 4 of 4: Animation of lots of journeys into a heat map\n"
  },
  {
   name: "TaskIntro",
   elements: [
    {
     type: "html",
     name: "taskIntroText",
     html: "<h3 style=\"font-weight: 500;\">Great!<br/> Now please complete 3 tasks related to what you just learnt.</h3>\n<h4 style=\"font-weight: 500;color:red;\">Your time on each question will be recorded. Your efforts on each question will be judged by time and correctness. We may not compensate your work if you go through each question in too short time or without paying any attention.</h4>"
    }
   ]
  },
  {
   name: "conn_img_1_g_50",
   elements: [
    {
     type: "panel",
     name: "panel3",
     elements: [
      {
       type: "html",
       name: "group_50",
       html: "<h3 style=\"font-weight: 500;\">Q1. Using the animated visualization below, please answer these <strong>two</strong> questions:</h3>\n<span><video controls=\"controls\" width=\"500\" height=\"425\" autoplay loop>\n<source src=\"https://www.dropbox.com/s/t8mcmyl9m33drrb/Final%2050.mp4?raw=1\" /></video></span>"
      },
      {
       type: "checkbox",
       name: "50_1_a",
       title: "1a. Please select a pair of grid squares which have the endpoints of journeys starting and finishing between them.",
       choices: [
        "A2 and E6",
        "D1 and B4",
        "E3 and C5",
        "D5 and C6"
       ],
       choicesOrder: "random",
       colCount: 4
      },
      {
       type: "text",
       name: "50_1_b",
       title: "1b. B2 contains the start points of some journeys. Please find all the grid squares that contains the end points of those journeys.",
       description: "Could be multiple answers. Please separate different answers with a comma, like A1,A2\n",
       validators: [
        {
         type: "regex",
         text: "Please follow the example format: A1,A2",
         regex: "^[A-Z][0-9](,\\s*[A-Z][0-9])*$"
        }
       ]
      }
     ]
    }
   ],
   title: "Task 1 of 3: Identifying the endpoints of journeys (part 1 of 6)"
  },
  {
   name: "conn_img_2_g_19",
   elements: [
    {
     type: "panel",
     name: "panel4",
     elements: [
      {
       type: "html",
       name: "group_19",
       html: "<h3 style=\"font-weight: 500;\">Q2. Using the animated visualization below, please answer these <strong>two</strong> questions:</h3>\n<span><video controls=\"controls\" width=\"500\" height=\"425\" autoplay loop>\n<source src=\"https://www.dropbox.com/s/nh3p4f2bmhuktu2/Final%2019.mp4?raw=1\" /></video></span>\n"
      },
      {
       type: "checkbox",
       name: "19_1_a",
       title: "2a. Please select a pair of grid squares which have the endpoints of journeys starting and finishing between them.",
       choices: [
        "E2 and A5",
        "B2 and D4",
        "D5 and A6",
        "D3 and C6"
       ],
       choicesOrder: "random",
       colCount: 4
      },
      {
       type: "text",
       name: "19_1_b",
       title: "2b. A6 contains the start points of some journeys. Please find all the grid squares that contains the end points of those journeys.",
       description: "Could be multiple answers. Please separate different answers with a comma, like A1,A2\n",
       validators: [
        {
         type: "regex",
         text: "Please follow the example format: A1,A2",
         regex: "^[A-Z][0-9](,\\s*[A-Z][0-9])*$"
        }
       ]
      }
     ]
    }
   ],
   title: "Task 1 of 3: Identifying the endpoints of journeys (part 2 of 6)"
  },
  {
   name: "conn_img_3_g_41",
   elements: [
    {
     type: "panel",
     name: "panel8",
     elements: [
      {
       type: "html",
       name: "question42",
       html: "<h3 style=\"font-weight: 500;\">Q3. Using the animated visualization below, please answer these <strong>two</strong> questions:</h3>\n<span><video controls=\"controls\" width=\"500\" height=\"425\" autoplay loop>\n<source src=\"https://www.dropbox.com/s/h1f67evka0lxj00/Final%2041.mp4?raw=1\" /></video></span>\n"
      },
      {
       type: "checkbox",
       name: "41_1_a",
       title: "3a. Please select a pair of grid squares which have the endpoints of journeys starting and finishing between them.",
       choices: [
        "E3 and C6",
        "D2 and C7",
        "D6 and A6",
        "B2 and D5"
       ],
       choicesOrder: "random",
       colCount: 4
      },
      {
       type: "text",
       name: "41_1_b",
       title: "3b. C7 contains the start points of some journeys. Please find all the grid squares that contains the end points of those journeys.",
       description: "Could be multiple answers. Please separate different answers with a comma, like A1,A2\n",
       validators: [
        {
         type: "regex",
         text: "Please follow the example format: A1,A2",
         regex: "^[A-Z][0-9](,\\s*[A-Z][0-9])*$"
        }
       ]
      }
     ]
    }
   ],
   title: "Task 1 of 3: Identifying the endpoints of journeys (part 3 of 6)"
  },
  {
   name: "conn_img_4_g_4",
   elements: [
    {
     type: "panel",
     name: "panel15",
     elements: [
      {
       type: "html",
       name: "question54",
       html: "<h3 style=\"font-weight: 500;\">Q4. Using the animated visualization below, please answer these <strong>two</strong> questions:</h3>\n<span><video controls=\"controls\" width=\"500\" height=\"425\" autoplay loop>\n<source src=\"https://www.dropbox.com/s/9inn3i5i5iuam53/Final%204.mp4?raw=1\" /></video></span>"
      },
      {
       type: "checkbox",
       name: "4_1_a",
       title: "4a. Please select a pair of grid squares which have the endpoints of journeys starting and finishing between them.",
       choices: [
        "D2 and B6",
        "C5 and E7",
        "C4 and E4",
        "A1 and D4"
       ],
       choicesOrder: "random",
       colCount: 4
      },
      {
       type: "text",
       name: "4_1_b",
       title: "4b. B6 contains the start points of some journeys. Please find all the grid squares that contains the end points of those journeys.",
       description: "Could be multiple answers. Please separate different answers with a comma, like A1,A2\n",
       validators: [
        {
         type: "regex",
         text: "Please follow the example format: A1,A2",
         regex: "^[A-Z][0-9](,\\s*[A-Z][0-9])*$"
        }
       ]
      }
     ]
    }
   ],
   title: "Task 1 of 3: Identifying the endpoints of journeys (part 4 of 6)"
  },
  {
   name: "conn_img_5_g_69",
   elements: [
    {
     type: "panel",
     name: "panel18",
     elements: [
      {
       type: "html",
       name: "question63",
       html: "<h3 style=\"font-weight: 500;\">Q5. Using the animated visualization below, please answer these <strong>two</strong> questions:</h3>\n<span><video controls=\"controls\" width=\"500\" height=\"425\" autoplay loop>\n<source src=\"https://www.dropbox.com/s/6egcv9tuovt093r/Final%2069.mp4?raw=1\" /></video></span>"
      },
      {
       type: "checkbox",
       name: "69_1_a",
       title: "5a. Please select a pair of grid squares which have the endpoints of journeys starting and finishing between them.",
       choices: [
        "C2 and D6",
        "E2 and D7",
        "C1 and A2",
        "A1 and E5"
       ],
       choicesOrder: "random",
       colCount: 4
      },
      {
       type: "text",
       name: "69_1_b",
       title: "5b. E6 contains the start points of some journeys. Please find all the grid squares that contains the end points of those journeys.",
       description: "Could be multiple answers. Please separate different answers with a comma, like A1,A2\n",
       validators: [
        {
         type: "regex",
         text: "Please follow the example format: A1,A2",
         regex: "^[A-Z][0-9](,\\s*[A-Z][0-9])*$"
        }
       ]
      }
     ]
    }
   ],
   title: "Task 1 of 3: Identifying the endpoints of journeys (part 5 of 6)"
  },
  {
   name: "conn_img_6_g_9",
   elements: [
    {
     type: "panel",
     name: "panel21",
     elements: [
      {
       type: "html",
       name: "question11",
       html: "<h3 style=\"font-weight: 500;\">Q6. Using the animated visualization below, please answer these <strong>two</strong> questions:</h3>\n<span><video controls=\"controls\" width=\"500\" height=\"425\" autoplay loop>\n<source src=\"https://www.dropbox.com/s/sky0kjxesknyi6p/Final%209.mp4?raw=1\" /></video></span>"
      },
      {
       type: "checkbox",
       name: "9_1_a",
       title: "6a. Please select a pair of grid squares which have the endpoints of journeys starting and finishing between them.",
       choices: [
        "D2 and B6",
        "C4 and E4",
        "A1 and D4",
        "C5 and E7"
       ],
       choicesOrder: "random",
       colCount: 4
      },
      {
       type: "text",
       name: "9_1_b",
       title: "6b. B7 contains the start points of some journeys. Please find all the grid squares that contains the end points of those journeys.",
       description: "Could be multiple answers. Please separate different answers with a comma, like A1,A2\n",
       validators: [
        {
         type: "regex",
         text: "Please follow the example format: A1,A2",
         regex: "^[A-Z][0-9](,\\s*[A-Z][0-9])*$"
        }
       ]
      }
     ]
    }
   ],
   title: "Task 1 of 3: Identifying the endpoints of journeys (part 6 of 6)"
  },
  {
   name: "PostQ_1",
   elements: [
    {
     type: "html",
     name: "question73",
     html: "<h3 style=\"font-weight:500;\">Congratulations! You just finished the first task.</h3>\n<h3 style=\"font-weight:500;\">Please let us know how do you feel about the visualization and the task.</h3>\n"
    },
    {
     type: "matrix",
     name: "PostQ_Conn",
     title: "Please check the box to describe how much the following questions apply to you.",
     columns: [
      "Strongly Disagree",
      "Moderately Disagree",
      "Slightly Disagree",
      "Neutral",
      "Slightly Agree",
      "Moderately Agree",
      "Strongly Agree"
     ],
     rows: [
      "I found the questions easy using the visualization.",
      "I am confident with my answers with the help of the visualization.",
      "I think the visualization helped me discover the information for answering the questions.",
      "I think the visualization is informative despite its difficulty.",
      "I think the visualization are overwhelming."
     ]
    }
   ]
  },
  {
   name: "path_img_1_g_19",
   elements: [
    {
     type: "panel",
     name: "panel25",
     elements: [
      {
       type: "html",
       name: "question91",
       html: "<h3 style=\"font-weight: 500;\">Q1. Using the animated visualization below, please answer these <strong>two</strong> questions:</h3>\n<span><video controls=\"controls\" width=\"500\" height=\"425\" autoplay loop>\n<source src=\"https://www.dropbox.com/s/nh3p4f2bmhuktu2/Final%2019.mp4?raw=1\" /></video></span>"
      },
      {
       type: "text",
       name: "19_2_a",
       title: "1a. Please identify the last grid square that the journeys need to pass through before entering E3.",
       validators: [
        {
         type: "regex",
         text: "Please follow the example format (e.g., A1) and write down one answer only.",
         regex: "^[A-Z][0-9]$"
        }
       ]
      },
      {
       type: "text",
       name: "19_2_b",
       title: "1b. Please identify all the grid squares that the journeys between E2 and A5 need to pass through.",
       description: "Could be multiple answers. Please separate different answers with a comma, like A1,A2\n",
       validators: [
        {
         type: "regex",
         text: "Please follow the example format: A1,A2",
         regex: "^[A-Z][0-9](,\\s*[A-Z][0-9])*$"
        }
       ]
      }
     ]
    }
   ],
   title: "Task 2 of 3: Identifying paths of journeys (part 1 of 6)"
  },
  {
   name: "path_img_2_g_41",
   elements: [
    {
     type: "panel",
     name: "panel5",
     elements: [
      {
       type: "html",
       name: "question14",
       html: "<h3 style=\"font-weight: 500;\">Q2. Using the animated visualization below, please answer these <strong>two</strong> questions:</h3>\n<span><video controls=\"controls\" width=\"500\" height=\"425\" autoplay loop>\n<source src=\"https://www.dropbox.com/s/h1f67evka0lxj00/Final%2041.mp4?raw=1\" /></video></span>"
      },
      {
       type: "text",
       name: "41_2_a",
       title: "2a. Please identify the last grid square that the journeys need to pass through before entering B7.",
       validators: [
        {
         type: "regex",
         text: "Please follow the example format (e.g., A1) and write down one answer only.",
         regex: "^[A-Z][0-9]$"
        }
       ]
      },
      {
       type: "text",
       name: "41_2_b",
       title: "2b. Please identify all the grid squares that the journeys between C2 and C7 need to pass through.",
       description: "Could be multiple answers. Please separate different answers with a comma, like A1,A2\n",
       validators: [
        {
         type: "regex",
         text: "Please follow the example format: A1,A2",
         regex: "^[A-Z][0-9](,\\s*[A-Z][0-9])*$"
        }
       ]
      }
     ]
    }
   ],
   title: "Task 2 of 3: Identifying paths of journeys (part 2 of 6)"
  },
  {
   name: "path_img_3_g_50",
   elements: [
    {
     type: "panel",
     name: "panel6",
     elements: [
      {
       type: "html",
       name: "question26",
       html: "<h3 style=\"font-weight: 500;\">Q3. Using the animated visualization below, please answer these <strong>two</strong> questions:</h3>\n<span><video controls=\"controls\" width=\"500\" height=\"425\" autoplay loop>\n<source src=\"https://www.dropbox.com/s/t8mcmyl9m33drrb/Final%2050.mp4?raw=1\" /></video></span>"
      },
      {
       type: "text",
       name: "50_2_a",
       title: "3a. Please identify the last grid square that the journeys need to pass through before entering E6.",
       validators: [
        {
         type: "regex",
         text: "Please follow the example format (e.g., A1) and write down one answer only.",
         regex: "^[A-Z][0-9]$"
        }
       ]
      },
      {
       type: "text",
       name: "50_2_b",
       title: "3b. Please identify all the grid squares that the journeys between A2 and E6 need to pass through.",
       description: "Could be multiple answers. Please separate different answers with a comma, like A1,A2\n",
       validators: [
        {
         type: "regex",
         text: "Please follow the example format: A1,A2",
         regex: "^[A-Z][0-9](,\\s*[A-Z][0-9])*$"
        }
       ]
      }
     ]
    }
   ],
   title: "Task 2 of 3: Identifying paths of journeys (part 3 of 6)"
  },
  {
   name: "path_img_4_g_69",
   elements: [
    {
     type: "panel",
     name: "panel9",
     elements: [
      {
       type: "html",
       name: "question30",
       html: "<h3 style=\"font-weight: 500;\">Q4. Using the animated visualization below, please answer these <strong>two</strong> questions:</h3>\n<span><video controls=\"controls\" width=\"500\" height=\"425\" autoplay loop>\n<source src=\"https://www.dropbox.com/s/6egcv9tuovt093r/Final%2069.mp4?raw=1\" /></video></span>"
      },
      {
       type: "text",
       name: "69_2_a",
       title: "4a. Please identify the last grid square that the journeys need to pass through before entering E6.",
       validators: [
        {
         type: "regex",
         text: "Please follow the example format (e.g., A1) and write down one answer only.",
         regex: "^[A-Z][0-9]$"
        }
       ]
      },
      {
       type: "text",
       name: "69_2_b",
       title: "4b. Please identify all the grid squares that the journeys between A2 and D6 need to pass through.",
       description: "Could be multiple answers. Please separate different answers with a comma, like A1,A2\n",
       validators: [
        {
         type: "regex",
         text: "Please follow the example format: A1,A2",
         regex: "^[A-Z][0-9](,\\s*[A-Z][0-9])*$"
        }
       ]
      }
     ]
    }
   ],
   title: "Task 2 of 3: Identifying paths of journeys (part 4 of 6)"
  },
  {
   name: "path_img_5_g_9",
   elements: [
    {
     type: "panel",
     name: "panel10",
     elements: [
      {
       type: "html",
       name: "question34",
       html: "<h3 style=\"font-weight: 500;\">Q5. Using the animated visualization below, please answer these <strong>two</strong> questions:</h3>\n<span><video controls=\"controls\" width=\"500\" height=\"425\" autoplay loop>\n<source src=\"https://www.dropbox.com/s/sky0kjxesknyi6p/Final%209.mp4?raw=1\" /></video></span>"
      },
      {
       type: "text",
       name: "9_2_a",
       title: "5a. Please identify the last grid square that the journeys need to pass through before entering C2.",
       validators: [
        {
         type: "regex",
         text: "Please follow the example format (e.g., A1) and write down one answer only.",
         regex: "^[A-Z][0-9]$"
        }
       ]
      },
      {
       type: "text",
       name: "9_2_b",
       title: "5b. Please identify all the grid squares that the journeys between A7 and C1 need to pass through.",
       description: "Could be multiple answers. Please separate different answers with a comma, like A1,A2\n",
       validators: [
        {
         type: "regex",
         text: "Please follow the example format: A1,A2",
         regex: "^[A-Z][0-9](,\\s*[A-Z][0-9])*$"
        }
       ]
      }
     ]
    }
   ],
   title: "Task 2 of 3: Identifying paths of journeys (part 5 of 6)"
  },
  {
   name: "path_img_6_g_4",
   elements: [
    {
     type: "panel",
     name: "panel11",
     elements: [
      {
       type: "html",
       name: "question38",
       html: "<h3 style=\"font-weight: 500;\">Q6. Using the animated visualization below, please answer these <strong>two</strong> questions:</h3>\n<span><video controls=\"controls\" width=\"500\" height=\"425\" autoplay loop>\n<source src=\"https://www.dropbox.com/s/9inn3i5i5iuam53/Final%204.mp4?raw=1\" /></video></span>"
      },
      {
       type: "text",
       name: "4_2_a",
       title: "6a. Please identify the last grid square that the journeys need to pass through before entering D2.",
       validators: [
        {
         type: "regex",
         text: "Please follow the example format (e.g., A1) and write down one answer only.",
         regex: "^[A-Z][0-9]$"
        }
       ]
      },
      {
       type: "text",
       name: "4_2_b",
       title: "6b. Please identify all the grid squares that the journeys between C1 and B6 need to pass through.",
       description: "Could be multiple answers. Please separate different answers with a comma, like A1,A2\n",
       validators: [
        {
         type: "regex",
         text: "Please follow the example format: A1,A2",
         regex: "^[A-Z][0-9](,\\s*[A-Z][0-9])*$"
        }
       ]
      }
     ]
    }
   ],
   title: "Task 2 of 3: Identifying paths of journeys (part 6 of 6)"
  },
  {
   name: "PostQ_2",
   elements: [
    {
     type: "html",
     name: "question15",
     html: "<h3 style=\"font-weight:500;\">Congratulations! You just finished the second task. </h3>\n<h3 style=\"font-weight:500;\">Please let us know how do you feel about the visualization and the task.</h3>\n"
    },
    {
     type: "matrix",
     name: "PostQ_Path",
     title: "Please check the box to describe how much the following questions apply to you.",
     columns: [
      "Strongly Disagree",
      "Moderately Disagree",
      "Slightly Disagree",
      "Neutral",
      "Slightly Agree",
      "Moderately Agree",
      "Strongly Agree"
     ],
     rows: [
      "I found the questions easy using the visualization.",
      "I am confident with my answers with the help of the visualization.",
      "I think the visualization helped me discover the information for answering the questions.",
      "I think the visualization is informative despite its difficulty.",
      "I think the visualization are overwhelming."
     ]
    }
   ]
  },
  {
   name: "traffic_img_1_g_41",
   elements: [
    {
     type: "panel",
     name: "panel32",
     elements: [
      {
       type: "html",
       name: "question112",
       html: "<h3 style=\"font-weight: 500;\">Q1. Using the animated visualization below, please answer these <strong>two</strong> questions:</h3>\n<span><video controls=\"controls\" width=\"500\" height=\"425\" autoplay loop>\n<source src=\"https://www.dropbox.com/s/h1f67evka0lxj00/Final%2041.mp4?raw=1\" /></video></span>"
      },
      {
       type: "text",
       name: "41_3_a",
       title: "1a. Please identify one grid square that you think most of the journeys had to pass through.",
       validators: [
        {
         type: "regex",
         text: "Please follow the example format (e.g., A1) and write down one answer only.",
         regex: "^[A-Z][0-9]$"
        }
       ]
      },
      {
       type: "text",
       name: "41_3_c",
       title: "1b. Please identify the other three grid squares that you think most of the journeys had to pass through.",
       description: "Could be multiple answers. Please separate different answers with a comma, like A1,A2",
       validators: [
        {
         type: "regex",
         text: "Please follow the example format: A1,A2",
         regex: "^[A-Z][0-9](,\\s*[A-Z][0-9])*$"
        }
       ]
      }
     ]
    }
   ],
   title: "Task 3 of 3: Identifying traffic on roads (part 1 of 6)"
  },
  {
   name: "traffic_img_2_g_50",
   elements: [
    {
     type: "panel",
     name: "panel7",
     elements: [
      {
       type: "html",
       name: "question12",
       html: "<h3 style=\"font-weight: 500;\">Q2. Using the animated visualization below, please answer these <strong>two</strong> questions:</h3>\n<span><video controls=\"controls\" width=\"500\" height=\"425\" autoplay loop>\n<source src=\"https://www.dropbox.com/s/t8mcmyl9m33drrb/Final%2050.mp4?raw=1\" /></video></span>"
      },
      {
       type: "text",
       name: "50_3_a",
       title: "2a. Please identify one grid square that you think most of the journeys had to pass through.",
       validators: [
        {
         type: "regex",
         text: "Please follow the example format (e.g., A1) and write down one answer only.",
         regex: "^[A-Z][0-9]$"
        }
       ]
      },
      {
       type: "text",
       name: "50_3_c",
       title: "2b. Please identify the other three grid squares that you think most of the journeys had to pass through.",
       description: "Could be multiple answers. Please separate different answers with a comma, like A1,A2",
       validators: [
        {
         type: "regex",
         text: "Please follow the example format: A1,A2",
         regex: "^[A-Z][0-9](,\\s*[A-Z][0-9])*$"
        }
       ]
      }
     ]
    }
   ],
   title: "Task 3 of 3: Identifying traffic on roads (part 2 of 6)"
  },
  {
   name: "traffic_img_3_g_19",
   elements: [
    {
     type: "panel",
     name: "panel12",
     elements: [
      {
       type: "html",
       name: "question25",
       html: "<h3 style=\"font-weight: 500;\">Q3. Using the animated visualization below, please answer these <strong>two</strong> questions:</h3>\n<span><video controls=\"controls\" width=\"500\" height=\"425\" autoplay loop>\n<source src=\"https://www.dropbox.com/s/nh3p4f2bmhuktu2/Final%2019.mp4?raw=1\" /></video></span>"
      },
      {
       type: "text",
       name: "19_3_a",
       title: "3a. Please identify one grid square that you think most of the journeys had to pass through.",
       validators: [
        {
         type: "regex",
         text: "Please follow the example format (e.g., A1) and write down one answer only.",
         regex: "^[A-Z][0-9]$"
        }
       ]
      },
      {
       type: "text",
       name: "19_3_c",
       title: "3b. Please identify the other three grid squares that you think most of the journeys had to pass through.",
       description: "Could be multiple answers. Please separate different answers with a comma, like A1,A2",
       validators: [
        {
         type: "regex",
         text: "Please follow the example format: A1,A2",
         regex: "^[A-Z][0-9](,\\s*[A-Z][0-9])*$"
        }
       ]
      }
     ]
    }
   ],
   title: "Task 3 of 3: Identifying traffic on roads (part 3 of 6)"
  },
  {
   name: "traffic_img_4_g_9",
   elements: [
    {
     type: "panel",
     name: "panel13",
     elements: [
      {
       type: "html",
       name: "question29",
       html: "<h3 style=\"font-weight: 500;\">Q4. Using the animated visualization below, please answer these <strong>two</strong> questions:</h3>\n<span><video controls=\"controls\" width=\"500\" height=\"425\" autoplay loop>\n<source src=\"https://www.dropbox.com/s/sky0kjxesknyi6p/Final%209.mp4?raw=1\" /></video></span>"
      },
      {
       type: "text",
       name: "9_3_a",
       title: "4a. Please identify one grid square that you think most of the journeys had to pass through.",
       validators: [
        {
         type: "regex",
         text: "Please follow the example format (e.g., A1) and write down one answer only.",
         regex: "^[A-Z][0-9]$"
        }
       ]
      },
      {
       type: "text",
       name: "9_3_c",
       title: "4b. Please identify the other three grid squares that you think most of the journeys had to pass through.",
       description: "Could be multiple answers. Please separate different answers with a comma, like A1,A2",
       validators: [
        {
         type: "regex",
         text: "Please follow the example format: A1,A2",
         regex: "^[A-Z][0-9](,\\s*[A-Z][0-9])*$"
        }
       ]
      }
     ]
    }
   ],
   title: "Task 3 of 3: Identifying traffic on roads (part 4 of 6)"
  },
  {
   name: "traffic_img_5_g_4",
   elements: [
    {
     type: "panel",
     name: "panel14",
     elements: [
      {
       type: "html",
       name: "question33",
       html: "<h3 style=\"font-weight: 500;\">Q5. Using the animated visualization below, please answer these <strong>two</strong> questions:</h3>\n<span><video controls=\"controls\" width=\"500\" height=\"425\" autoplay loop>\n<source src=\"https://www.dropbox.com/s/9inn3i5i5iuam53/Final%204.mp4?raw=1\" /></video></span>"
      },
      {
       type: "text",
       name: "4_3_a",
       title: "5a. Please identify one grid square that you think most of the journeys had to pass through.",
       validators: [
        {
         type: "regex",
         text: "Please follow the example format (e.g., A1) and write down one answer only.",
         regex: "^[A-Z][0-9]$"
        }
       ]
      },
      {
       type: "text",
       name: "4_3_c",
       title: "5b. Please identify the other three grid squares that you think most of the journeys had to pass through.",
       description: "Could be multiple answers. Please separate different answers with a comma, like A1,A2",
       validators: [
        {
         type: "regex",
         text: "Please follow the example format: A1,A2",
         regex: "^[A-Z][0-9](,\\s*[A-Z][0-9])*$"
        }
       ]
      }
     ]
    }
   ],
   title: "Task 3 of 3: Identifying traffic on roads (part 5 of 6)"
  },
  {
   name: "traffic_img_6_g_69",
   elements: [
    {
     type: "panel",
     name: "panel16",
     elements: [
      {
       type: "html",
       name: "question37",
       html: "<h3 style=\"font-weight: 500;\">Q6. Using the animated visualization below, please answer these <strong>two</strong> questions:</h3>\n<span><video controls=\"controls\" width=\"500\" height=\"425\" autoplay loop>\n<source src=\"https://www.dropbox.com/s/6egcv9tuovt093r/Final%2069.mp4?raw=1\" /></video></span>"
      },
      {
       type: "text",
       name: "69_3_a",
       title: "6a. Please identify one grid square that you think most of the journeys had to pass through.",
       validators: [
        {
         type: "regex",
         text: "Please follow the example format (e.g., A1) and write down one answer only.",
         regex: "^[A-Z][0-9]$"
        }
       ]
      },
      {
       type: "text",
       name: "69_3_c",
       title: "6b. Please identify the other three grid squares that you think most of the journeys had to pass through.",
       description: "Could be multiple answers. Please separate different answers with a comma, like A1,A2",
       validators: [
        {
         type: "regex",
         text: "Please follow the example format: A1,A2",
         regex: "^[A-Z][0-9](,\\s*[A-Z][0-9])*$"
        }
       ]
      }
     ]
    }
   ],
   title: "Task 3 of 3: Identifying traffic on roads (part 6 of 6)"
  },
  {
   name: "PostQ_3",
   elements: [
    {
     type: "html",
     name: "question27",
     html: "<h3 style=\"font-weight:500;\">Congratulations! You just finished the third task. </h3>\n<h3 style=\"font-weight:500;\">Please let us know how do you feel about the visualization and the task.</h3>\n"
    },
    {
     type: "matrix",
     name: "PostQ_Traffic",
     title: "Please check the box to describe how much the following questions apply to you.",
     columns: [
      "Strongly Disagree",
      "Moderately Disagree",
      "Slightly Disagree",
      "Neutral",
      "Slightly Agree",
      "Moderately Agree",
      "Strongly Agree"
     ],
     rows: [
      "I found the questions easy using the visualization.",
      "I am confident with my answers with the help of the visualization.",
      "I think the visualization helped me discover the information for answering the questions.",
      "I think the visualization is informative despite its difficulty.",
      "I think the visualization are overwhelming."
     ]
    },
    {
     type: "text",
     name: "Survey_Code",
     visible: false,
     defaultValue: randomCode
    },
    {
     type: "text",
     name: "Technique",
     visible: false,
     defaultValue: "Morphing"
    }
   ]
  }
 ],
 sendResultOnPageNext: true,
 showPrevButton: false,
 showQuestionNumbers: "off",
 questionErrorLocation: "bottom",
 showProgressBar: "top",
 storeOthersAsComment: false,
 clearInvisibleValues: "none",
 firstPageIsStarted: true,
 completedHtml: "<h3>Thank you for completing our survey.</h3><br><h3>Your response has been recorded.</h3><br><br><br><h4>Your MTurk completion code is: "+randomCode+"</h4>",
}
//randomCode
//completedHtml: "<h3>Thank you for completing our survey.</h3><br><h3>Your response has been recorded.</h3><br><br><br><h4>Your MTurk completion code is: "+randomCode+"</h4>",



var surveyJSON = {}
surveyJSON["bundle"] = [morphingJSON, "0790e1a8-4ad9-475a-be5d-8e23c1108528"]
surveyJSON["trajectory"] = [morphingJSON, "0790e1a8-4ad9-475a-be5d-8e23c1108528"]
surveyJSON["bundlePlustrajectory"] = [morphingJSON, "0790e1a8-4ad9-475a-be5d-8e23c1108528"]
surveyJSON["morphing"] = [morphingJSON, "0790e1a8-4ad9-475a-be5d-8e23c1108528"]
//0790e1a8-4ad9-475a-be5d-8e23c1108528   bundleJSON
//fd4240d0-e94b-4582-b130-bdaba054f999   trajectoryJSON
//1fcfa1c6-b6e0-4317-82a2-06899042d7b1   bundlePlustrajectoryJSON
//7b1246d7-89f6-4e8b-a92d-638fef74bed5   morphingJSON

var randomSurvey = Math.floor(Math.random() * 4)
//console.log(randomSurvey)

var surveySubject = ["bundle", "trajectory", "bundlePlustrajectory", "morphing"]

//Survey.Survey.cssType = "bootstrap";

var survey = new Survey.Model(surveyJSON[surveySubject[randomSurvey]][0])

// survey.clear(false, false)
// survey.render()

var myCss = {
    matrix: {
        root: "table table-striped"
    }
}

var timerId = null
var timeText = null

function renderTime(val) {
    var hours = Math.floor(val / 3600)
    var minutes = Math.floor((val - (hours*3600)) / 60)
    var seconds = Math.floor(val % 60)
    timeText = hours + ":" + minutes + ":" + seconds
    //console.log(timeText)
}

function timerCallback() {
    var page = survey.currentPage
    if(!page) return
    var valueName = "PageNo" + survey.pages.indexOf(page)
    var seconds = survey.getValue(valueName)
    if(seconds == null) seconds = 0
    else seconds ++
    survey.setValue(valueName, seconds)
    renderTime(seconds)
}

function sendDataToServer(survey) {
	  survey.sendResult(surveyJSON[surveySubject[randomSurvey]][1])
}

survey.onCurrentPageChanged.add(function(){
    timerCallback()
});

survey.onComplete.add(function(survey, options) {
    sendDataToServer(survey)
});

survey.onPartialSend.add(function(survey, options) {
    //console.log("partial",survey.pages,timeText)
});

$("#surveyContainer").Survey({
    model: survey,
    css: myCss,
})

timerCallback()
timerId = window.setInterval(function(){
  timerCallback()
}, 1000)


// sendResultOnPageNext : true,
// clearInvisibleValues: "none",
// completedHtml: "<h3>Thank you for completing our survey.</h3><br><h3>Your response has been recorded.</h3><br><br><br><h4>Your MTurk completion code is: "+randomCode+"</h4>",


