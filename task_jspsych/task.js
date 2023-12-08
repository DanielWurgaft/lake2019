var jsPsych = initJsPsych({
  use_webaudio: true,
  show_progress_bar: true,
  on_finish: function(){
      window.location = "https://app.prolific.com/submissions/complete?cc=C2RKYTUD"
  }
});

var subject_id = jsPsych.data.getURLVariable('PROLIFIC_PID');
var study_id = jsPsych.data.getURLVariable('STUDY_ID');
var session_id = jsPsych.data.getURLVariable('SESSION_ID');

  jsPsych.data.addProperties({
    subject_id: subject_id,
    study_id: study_id,
    session_id: session_id
  });



function shuffle(array) {
  return jsPsych.randomization.shuffle(array);
}


function matchNameColor(names, colors){
  shuffled_names = shuffle(names)
  shuffled_colors = shuffle(colors)
  var match_dict = {}
  for (let i = 0; i < shuffled_colors.length; i++) {
    match_dict[shuffled_names[i]] = shuffled_colors[i]
  }
  return [match_dict, shuffled_colors, shuffled_names]
}


var names = ['dax', 'lug', 'wif', 'zup', 'fep', 'blicket', 'kiki', 'tufa', 
'gazzer', 'ibb', 'hed', 'rish', 'pab', 'jeg', 'cag', 'fom', 'zun', 'yim', 'rab', 'lomp']
  

var colors = ["🔴",
              "🟠",
              "🟡",
              "🟢",
              "🔵",
              "🟣",
              "🟤",
              "⚫"]



var instructions = {
    type: jsPsychInstructions,
    pages: [
    'Welcome to the experiment! Click next to begin.',
    'Please read these instructions carefully. You will be quizzed on their content before the experiment begins.',
    'This study has to do with how people learn input-output associations.',
    'You will be asked to learn a set of commands and their corresponding outputs. Each command is a series of nonsense words, and the output for a command is a series of colored circles.',
    'The task is divided into 14 trials. Each trial introduces a new set of commands and their corresponding outputs. Given this information, you will then be asked to produce the output for a novel command.',
    'Each trial should be treated independently. Some words and colors may repeat across trials, but this should be ignored. Word meaning changes on every trial, and thus information from previous trials does not impact the current trial.',
    'There may be multiple reasonable answers for a given trial. Please try to always provide what you think is a reasonable guess. Ultimately, we are interested in your intuition.',
    'Please only use the information on the screen to complete the task. Do not take notes or use external aids to help with the task (do not use pen and paper, take a screen shot, etc.). This is important for the scientific validity of the study.'
    ],
    show_clickable_nav: true
}

var  instructions_quiz = {
  type: jsPsychSurveyMultiChoice,
  questions: [
    {
      prompt: "What are the word commands?", 
      name: 'commands', 
      options: ['Names of vegetables', 'Nonesense words', 'Categories of circles'], 
      required: true,
      horizontal: true
    }, 
    {
      prompt: "What is the output for a command?", 
      name: 'outputs', 
      options: ['colored circles', 'Nonesense words', 'Button clicks'], 
      required: true,
      horizontal: true
    },
    {
      prompt: "Do the same words and colors repeat in multiple trials?", 
      name: 'independence', 
      options: ['Yes', 'No', 'They may, but this should be ignored. Word and color meaning changes on every trial.'], 
      required: true,
      horizontal: true
    },
    {
      prompt: "What do you need to do in the main task?", 
      name: 'main task', 
      options: ['Click on random buttons', 'Respond with four green circles', 'Given a set of commands and their corresponding outputs, produce the output for a novel command.'], 
      required: true,
      horizontal: true
    }
  ],
  on_finish: function(data){
    
  }
};


var pre_task = {
    type: jsPsychInstructions,
    pages: [
    'Now, the real task will begin.',
    ],
    show_clickable_nav: true
}

var debrief = {
      type: jsPsychInstructions,
    pages: ['Thank you for your participation in the experiment! <br> This experiment examined how humans learn input-output associations. In particular, it looked at how human learning of such associations is impacted by three biases: the bias to match novel inputs to novel outputs, the bias to match a single input to a single output, and the bias to maintain the order of the inputs in the order of the outputs. <br> Please do not share this information with other potential participants. Thank you again for your participation!'],
    show_clickable_nav: true
}

// practice trial 

var practice_trial = {
  on_start: function(trial) {

    trial.html = '<p style="position: absolute; top: 5%; left: 11%;font-size:15px"> Here is how to use the response interface. Please practice making an output response by adding <b>four green circles</b> to the response box. <br><br> You can enter your response as follows: <br> - You can click one of the colored circles to move it to the response box.<br>- The Delete button deletes the last circle added.<br> - The Reset button clears the response box.<br><br>Please use the interface below to select your response.'
    
    trial.choices = ["🔴","🟠","🟡","🟢"]
      trial.data ={type: "practice trial",
     choices: trial.choices,
     pass: true
  }
  },
  type: jsPsychButtonsToText,
  html: '',
  choices: [],
  on_finish: function(data){
    if (data.response != "🟢🟢🟢🟢"){
      data.pass = false
    }
  }
}

var instructions = {
  type: jsPsychInstructions,
  pages: [
  'Welcome to the experiment! Click next to begin.',
  'Please read these instructions carefully. You will be quizzed on their content before the experiment begins.',
  'This study has to do with how people learn input-output associations.',
  'You will be asked to learn a set of commands and their corresponding outputs. Each command is a series of nonsense words, and the output for a command is a series of colored circles.',
  'The task is divided into 14 trials. Each trial introduces a new set of commands and their corresponding outputs. Given this information, you will then be asked to produce the output for a novel command.',
  'Each trial should be treated independently. Some words and colors may repeat across trials, but this should be ignored. Word meaning changes on every trial, and thus information from previous trials does not impact the current trial.',
  'There may be multiple reasonable answers for a given trial. Please try to always provide what you think is a reasonable guess. Ultimately, we are interested in your intuition.',
  'Please only use the information on the screen to complete the task. Do not take notes or use external aids to help with the task (do not use pen and paper, take a screen shot, etc.). This is important for the scientific validity of the study.'
  ],
  show_clickable_nav: true
}

var loop_timeline = false

var  instructions_quiz = {
  type: jsPsychSurveyMultiChoice,
  preamble: "Here are a few questions about the instructions, if you do not answer correctly, you will have to repeat the instructions.",
  questions: [
    {
      prompt: "What are the word commands?", 
      name: 'commands', 
      options: ['Names of vegetables', 'Nonsense words', 'Categories of circles'], 
      required: true,
      horizontal: true
    }, 
    {
      prompt: "What is the output for a command?", 
      name: 'outputs', 
      options: ['Colored circles', 'Nonsense words', 'Button clicks'], 
      required: true,
      horizontal: true
    },
    {
      prompt: "Do the same words and colors repeat in multiple trials?", 
      name: 'independence', 
      options: ['Yes', 'No', 'They may, but this should be ignored. Word and color meaning changes on every trial'], 
      required: true,
      horizontal: true
    },
    {
      prompt: "What do you need to do in the main task?", 
      name: 'main task', 
      options: ['Click on random buttons', 'Respond with four green circles', 'Given a set of commands and their corresponding outputs, produce the output for a novel command'], 
      required: true,
      horizontal: true
    }
  ],
  on_finish: function(data){
    if (data.response["commands"] != "Nonsense words" ||  data.response["outputs"] != "Colored circles" || data.response["independence"] != "They may, but this should be ignored. Word and color meaning changes on every trial" || data.response["main task"] != "Given a set of commands and their corresponding outputs, produce the output for a novel command") {
      loop_timeline = true
    }
    else{
      loop_timeline = false
    }
  }
};

var loop_node = {
  timeline: [instructions, practice_trial, instructions_quiz],
  loop_function: function(data){
      return loop_timeline
  }
}


//Trial types:
  // ME pool size 2, 0 counter
  // ME pool size 2, 1 counter
  // ME pool size 2, 2 counter
  // ME pool size 6, 0 counter
  // ME pool size 6, 1 counter
  // ME pool size 6, 2 counter



var MEtrial_0counter_2pool = {
  on_start: function(trial) {
    shuffled_values  = matchNameColor(names, colors)
    example_color = shuffled_values[1][0]
    examples = shuffled_values[2][0] + " " + example_color
    for (let i = 0; i < 0 + 1; i++) {
      if (i < 0){
        examples += ", "+ shuffled_values[2][i+1] + " " + example_color
      }
      else{
        var target = shuffled_values[2][i+1]
      }
    }
    
    trial.html = '<p style="position: absolute; top: 20%; left: 6%;"> Remember that there may be multiple reasonable answers. If necessary, rely on your intuition to pick one. Each trial should be treated independently.<br><br> Here is a set of commands and their corresponding outputs: <b>'+examples+'</b><br> Please evaluate the following command: <b>'+target+'</b></p>'
    
    trial.choices = shuffled_values[1].slice(0, 2)
    
    trial.data ={type: "ME trial",
     example_color: example_color,
     examples: examples, choices: trial.choices,
     target: target, num_counters: 0,
      pool_size: 2
    }
  },
  type: jsPsychButtonsToText,
  html: '',
  choices: []
}

var MEtrial_1counter_2pool = {
  on_start: function(trial) {
    shuffled_values  = matchNameColor(names, colors)
    example_color = shuffled_values[1][0]
    examples = shuffled_values[2][0] + " " + example_color
    for (let i = 0; i < 1 + 1; i++) {
      if (i < 1){
        examples += ", "+ shuffled_values[2][i+1] + " " + example_color
      }
      else{
        var target = shuffled_values[2][i+1]
      }
    }
    
    trial.html = '<p style="position: absolute; top: 20%; left: 6%;"> Remember that there may be multiple reasonable answers. If necessary, rely on your intuition to pick one. Each trial should be treated independently.<br><br> Here is a set of commands and their corresponding outputs: <b>'+examples+'</b><br> Please evaluate the following command: <b>'+target+'</b></p>'
    
    trial.choices = shuffled_values[1].slice(0, 2)
    
    trial.data ={type: "ME trial",
    example_color: example_color,
    examples: examples, choices: trial.choices,
    target: target, num_counters: 1,
      pool_size: 2
    }
  },
  type: jsPsychButtonsToText,
  html: '',
  choices: []
}


var MEtrial_2counter_2pool = {
 on_start: function(trial) {
    shuffled_values  = matchNameColor(names, colors)
    example_color = shuffled_values[1][0]
    examples = shuffled_values[2][0] + " " + example_color
    for (let i = 0; i < 2 + 1; i++) {
      if (i < 2){
        examples += ", "+ shuffled_values[2][i+1] + " " + example_color
      }
      else{
        var target = shuffled_values[2][i+1]
      }
    }
    
    trial.html = '<p style="position: absolute; top: 20%; left: 6%;"> Remember that there may be multiple reasonable answers. If necessary, rely on your intuition to pick one. Each trial should be treated independently.<br><br> Here is a set of commands and their corresponding outputs: <b>'+examples+'</b><br> Please evaluate the following command: <b>'+target+'</b></p>'
    
    trial.choices = shuffled_values[1].slice(0, 2)
    
    trial.data ={type: "ME trial",
    example_color: example_color,
    examples: examples, choices: trial.choices,
    target: target, num_counters: 2,
      pool_size: 2
    }
  },
  type: jsPsychButtonsToText,
  html: '',
  choices: []
}

var MEtrial_0counter_6pool = {
  on_start: function(trial) {
    shuffled_values  = matchNameColor(names, colors)
    example_color = shuffled_values[1][0]
    examples = shuffled_values[2][0] + " " + example_color
    for (let i = 0; i < 0 + 1; i++) {
      if (i < 0){
        examples += ", "+ shuffled_values[2][i+1] + " " + example_color
      }
      else{
        var target = shuffled_values[2][i+1]
      }
    }
    
    trial.html = '<p style="position: absolute; top: 20%; left: 6%;"> Remember that there may be multiple reasonable answers. If necessary, rely on your intuition to pick one. Each trial should be treated independently.<br><br> Here is a set of commands and their corresponding outputs: <b>'+examples+'</b><br> Please evaluate the following command: <b>'+target+'</b></p>'
    
    trial.choices = shuffled_values[1].slice(0, 6)
    
    trial.data ={type: "ME trial",
    example_color: example_color,
    examples: examples, choices: trial.choices,
    target: target, num_counters: 0,
      pool_size: 6
    }
  },
  type: jsPsychButtonsToText,
  html: '',
  choices: []
}

var MEtrial_1counter_6pool = {
  on_start: function(trial) {
    shuffled_values  = matchNameColor(names, colors)
    example_color = shuffled_values[1][0]
    examples = shuffled_values[2][0] + " " + example_color
    for (let i = 0; i < 1 + 1; i++) {
      if (i < 1){
        examples += ", "+ shuffled_values[2][i+1] + " " + example_color
      }
      else{
        var target = shuffled_values[2][i+1]
      }
    }
    
    trial.html = '<p style="position: absolute; top: 20%; left: 6%;"> Remember that there may be multiple reasonable answers. If necessary, rely on your intuition to pick one. Each trial should be treated independently.<br><br> Here is a set of commands and their corresponding outputs: <b>'+examples+'</b><br> Please evaluate the following command: <b>'+target+'</b></p>'
    
    trial.choices = shuffled_values[1].slice(0, 6)
    
    trial.data ={type: "ME trial",
    example_color: example_color,
    examples: examples, choices: trial.choices,
    target: target, num_counters: 1,
      pool_size: 6
    }
  },
  type: jsPsychButtonsToText,
  html: '',
  choices: []
}

var MEtrial_2counter_6pool = {
  on_start: function(trial) {
    shuffled_values  = matchNameColor(names, colors)
    example_color = shuffled_values[1][0]
    examples = shuffled_values[2][0] + " " + example_color
    for (let i = 0; i < 2 + 1; i++) {
      if (i < 2){
        examples += ", "+ shuffled_values[2][i+1] + " " + example_color
      }
      else{
        var target = shuffled_values[2][i+1]
      }
    }
    
    trial.html = '<p style="position: absolute; top: 20%; left: 6%;"> Remember that there may be multiple reasonable answers. If necessary, rely on your intuition to pick one. Each trial should be treated independently.<br><br> Here is a set of commands and their corresponding outputs: <b>'+examples+'</b><br> Please evaluate the following command: <b>'+target+'</b></p>'
    
    trial.choices = shuffled_values[1].slice(0, 6)
    
    trial.data ={type: "ME trial",
    example_color: example_color,
    examples: examples, choices: trial.choices,
    target: target, num_counters: 2,
      pool_size: 6
    }
  },
  type: jsPsychButtonsToText,
  html: '',
  choices: []
}



  // iconic concatanation, 2 examples, concated test 
  // iconic concatanation, 2 examples (dax lug), lug dax dax
  // iconic concatanation, 2 examples (dax lug. but each have more than one circle associated with them), dax lug
 
 var simpleConcatTrial = {
  on_start: function(trial) {
    shuffled_values  = matchNameColor(names, colors)
    examples = shuffled_values[2][0] + " " + shuffled_values[1][0] + ", " + shuffled_values[2][1] + " " + shuffled_values[1][1]
    target = shuffled_values[2][0] + " " + shuffled_values[2][1]
    
    trial.html = '<p style="position: absolute; top: 20%; left: 6%;"> Remember that there may be multiple reasonable answers. If necessary, rely on your intuition to pick one. Each trial should be treated independently.<br><br> Here is a set of commands and their corresponding outputs: <b>'+examples+'</b><br> Please evaluate the following command: <b>'+target+'</b></p>'
    
    trial.choices = [shuffled_values[1][0], shuffled_values[1][1]]
    trial.data ={type: "simple concat trial",
     example1_name: shuffled_values[2][0],
     example1_color: shuffled_values[1][0],
     example2_name: shuffled_values[2][1],
     example2_color: shuffled_values[1][1],
     examples: examples,
     target: target,
     choices: trial.choices
  }
    
  },
  type: jsPsychButtonsToText,
  html: '',
  choices: []
}

var doubleInTest_ConcatTrial = {
  on_start: function(trial) {
    shuffled_values  = matchNameColor(names, colors)
    examples = shuffled_values[2][0] + " " + shuffled_values[1][0] + ", " + shuffled_values[2][1] + " " + shuffled_values[1][1]
    target = shuffled_values[2][1] + " " + shuffled_values[2][0] + " " + shuffled_values[2][0]
    
    trial.html = '<p style="position: absolute; top: 20%; left: 6%;"> Remember that there may be multiple reasonable answers. If necessary, rely on your intuition to pick one. Each trial should be treated independently.<br><br> Here is a set of commands and their corresponding outputs: <b>'+examples+'</b><br> Please evaluate the following command: <b>'+target+'</b></p>'
    
    trial.choices = [shuffled_values[1][0], shuffled_values[1][1]]
    trial.data ={type: "doubleInTest concat trial",
     example1_name: shuffled_values[2][0],
     example1_color: shuffled_values[1][0],
     example2_name: shuffled_values[2][1],
     example2_color: shuffled_values[1][1],
     examples: examples,
     target: target,
     choices: trial.choices
  }
  },
  type: jsPsychButtonsToText,
  html: '',
  choices: []
}

var multiplecircles_ConcatTrial = {
  on_start: function(trial) {
    shuffled_values  = matchNameColor(names, colors)
    examples = shuffled_values[2][0] + " " + shuffled_values[1][0]+ shuffled_values[1][0] + shuffled_values[1][0]+  ", " + shuffled_values[2][1] + " " + shuffled_values[1][1] + shuffled_values[1][1]
    target = shuffled_values[2][0] + " " + shuffled_values[2][1]
    
    trial.html = '<p style="position: absolute; top: 20%; left: 6%;"> Remember that there may be multiple reasonable answers. If necessary, rely on your intuition to pick one. Each trial should be treated independently.<br><br> Here is a set of commands and their corresponding outputs: <b>'+examples+'</b><br> Please evaluate the following command: <b>'+target+'</b></p>'
    
    trial.choices = [shuffled_values[1][0], shuffled_values[1][1]]
    trial.data ={type: "multipleCircles concat trial",
     example1_name: shuffled_values[2][0],
     example1_color: shuffled_values[1][0],
     example2_name: shuffled_values[2][1],
     example2_color: shuffled_values[1][1],
     examples: examples,
     target: target,
     choices: trial.choices
  }
  },
  type: jsPsychButtonsToText,
  html: '',
  choices: []
} 


  // ME vs one-to-one: dax lug , wif
  // ME vs one to one: dax lug, dax wif lug 
  // ME vs one to one: dax lug, dax wif
  
 var ME_vs_OneToOne_simple = {
  on_start: function(trial) {
    shuffled_values  = matchNameColor(names, colors)
    examples = shuffled_values[2][0] + " " + shuffled_values[1][0] + ", " + shuffled_values[2][1] + " " + shuffled_values[1][1]
    target = shuffled_values[2][2]
    
    trial.html = '<p style="position: absolute; top: 20%; left: 6%;"> Remember that there may be multiple reasonable answers. If necessary, rely on your intuition to pick one. Each trial should be treated independently.<br><br> Here is a set of commands and their corresponding outputs: <b>'+examples+'</b><br> Please evaluate the following command: <b>'+target+'</b></p>'
    
    trial.choices = [shuffled_values[1][0], shuffled_values[1][1]]
    trial.data ={type: "ME_vs_OneToOne trial, simple",
     example1_name: shuffled_values[2][0],
     example1_color: shuffled_values[1][0],
     example2_name: shuffled_values[2][1],
     example2_color: shuffled_values[1][1],
     examples: examples,
     target: target,
     choices: trial.choices
  }
  },
  type: jsPsychButtonsToText,
  html: '',
  choices: []
}

 var ME_vs_OneToOne_concat = {
  on_start: function(trial) {
    shuffled_values  = matchNameColor(names, colors)
    examples = shuffled_values[2][0] + " " + shuffled_values[1][0] + ", " + shuffled_values[2][1] + " " + shuffled_values[1][1]
    target = shuffled_values[2][0] + " " + shuffled_values[2][2] + " " + shuffled_values[2][1]
    
    trial.html = '<p style="position: absolute; top: 20%; left: 6%;"> Remember that there may be multiple reasonable answers. If necessary, rely on your intuition to pick one. Each trial should be treated independently.<br><br> Here is a set of commands and their corresponding outputs: <b>'+examples+'</b><br> Please evaluate the following command: <b>'+target+'</b></p>'
    
    trial.choices = [shuffled_values[1][0], shuffled_values[1][1]]
      trial.data ={type: "ME_vs_OneToOne trial, concat",
     example1_name: shuffled_values[2][0],
     example1_color: shuffled_values[1][0],
     example2_name: shuffled_values[2][1],
     example2_color: shuffled_values[1][1],
     examples: examples,
     target: target,
     choices: trial.choices
  }
  },
  type: jsPsychButtonsToText,
  html: '',
  choices: []
}

var ME_vs_OneToOne_oneDropped = {
  on_start: function(trial) {
    shuffled_values  = matchNameColor(names, colors)
    examples = shuffled_values[2][0] + " " + shuffled_values[1][0] + ", " + shuffled_values[2][1] + " " + shuffled_values[1][1]
    target = shuffled_values[2][0] + " " + shuffled_values[2][2] 
    
    trial.html = '<p style="position: absolute; top: 20%; left: 6%;"> Remember that there may be multiple reasonable answers. If necessary, rely on your intuition to pick one. Each trial should be treated independently.<br><br> Here is a set of commands and their corresponding outputs: <b>'+examples+'</b><br> Please evaluate the following command: <b>'+target+'</b></p>'
    
    trial.choices = [shuffled_values[1][0], shuffled_values[1][1]]
      trial.data ={type: "ME_vs_OneToOne trial, oneDropped",
     example1_name: shuffled_values[2][0],
     example1_color: shuffled_values[1][0],
     example2_name: shuffled_values[2][1],
     example2_color: shuffled_values[1][1],
     examples: examples,
     target: target,
     choices: trial.choices
  }
  },
  type: jsPsychButtonsToText,
  html: '',
  choices: []
}
 
  
  
  // catch: dax, dax
var catch_trial = {
  on_start: function(trial) {
    shuffled_values  = matchNameColor(names, colors)
    example = shuffled_values[2][0] + " " + shuffled_values[1][0]
    
    trial.html = '<p style="position: absolute; top: 20%; left: 6%;"> Remember that there may be multiple reasonable answers. If necessary, rely on your intuition to pick one. Each trial should be treated independently.<br><br> Here is a set of commands and their corresponding outputs: <b>'+example+'</b> <br> Please evaluate the following command: <b>'+shuffled_values[2][0]+'</b></p>'
    
    trial.choices = shuffled_values[1].slice(0, 6)
      trial.data ={type: "catch trial",
     example_name: shuffled_values[2][0],
     example_color: shuffled_values[1][0],
     example: example,
     choices: trial.choices,
     pass: true
  }
  },
  type: jsPsychButtonsToText,
  html: '',
  choices: [],
  on_finish: function(data){
    if (data.response != data.example_color){
      data.pass = false
    }
  }
}

var strategy_question = {
  type: jsPsychSurveyText,
  questions: [
    {prompt: 'Thank you for completing the task! Please specify some of the strategies you used for deciding how to answer:', name: "strategy", rows: 5, required: true},
  ]
}

var effort_mcq = {
  type: jsPsychSurveyMultiChoice,
  questions: [
    {
      prompt: "How much effort did you invest in the task? (Your answer will not impact your payment)", 
      name: 'effort', 
      options: ['Little effort', 'Little to moderate effort', 'Moderate effort', 'Moderate to high effort', 'High effort'], 
      required: true
    }
  ],
};

var timeline = [loop_node].concat([pre_task]).concat(shuffle([MEtrial_0counter_2pool,MEtrial_1counter_2pool,MEtrial_2counter_2pool,MEtrial_0counter_6pool, MEtrial_1counter_6pool, MEtrial_2counter_6pool, simpleConcatTrial, doubleInTest_ConcatTrial,
multiplecircles_ConcatTrial, ME_vs_OneToOne_simple, ME_vs_OneToOne_concat,
ME_vs_OneToOne_oneDropped, catch_trial, catch_trial])).concat([strategy_question, effort_mcq, debrief])

jsPsych.run(timeline);