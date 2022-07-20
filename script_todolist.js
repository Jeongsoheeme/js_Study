let taskinput = document.getElementById("task_input");
let addbutton = document.getElementById("add_button");
let tasklist = []
addbutton.addEventListener("click",addTask);


function addTask(){
  let task = {
    taskcontents: taskinput.value,
    iscomplete: false
  }
  tasklist.push(task);

  let resulthtml = ''
  for(let i = 0; i<tasklist.length;i++){
    resulthtml +=`<div class="task">
        <div>${tasklist[i].taskcontents}</div>
        <div>
          <button onclick="togglecomplete()">check</button>
          <button>delete</button>
        </div>
      </div>`;
  }
  document.getElementById("task_board").innerHTML = resulthtml;
}

function togglecomplete(){
  console.log("ok")
}

