
let innput = document.getElementById('inputid');
let bttnn = document.getElementById('buttonbox');

bttnn.addEventListener('click' , (e)=>{
    
    let innputvalue = innput.value;
    innput.value = '';
    if(innputvalue.trim()!=0){

    let task = localStorage.getItem("tasklocal");
    if(task == null){
        taskobj = [];
    }
    else{
        taskobj = JSON.parse(task);
    }
    taskobj.push(innputvalue);
    localStorage.setItem("tasklocal" , JSON.stringify(taskobj));

   
}
    show();
})

let show=()=>{
    let task = localStorage.getItem("tasklocal");
    if(task == null){
        taskobj = [];
    }
    else{
        taskobj = JSON.parse(task);
    }
    let blank = '';
    let tasklist = document.getElementById("todo");
    taskobj.forEach((item , index) => {
        blank +=` <li id="taskk">${item}
        

        <button onclick = "edit(${index})" ><i class="fa fa-edit"  id="edit" style="font-size:24px"></i> </button>
        
        <button onclick = "deleteitem(${index})" ><i class="fa fa-trash-o" id="deletebttn"   style="font-size:24px"></i></button>
    </li> `
    });
    tasklist.innerHTML = blank;
}
{/* <button onclick = "checkk(${index})"><input type="checkbox" id="checkboxx"></button> */}
let edit=(index)=>{
    let hiddeninput = document.getElementById("hiddenid");
    let addbttn = document.getElementById("buttonbox");
    let savebttn = document.getElementById("buttonsavebox");
    hiddeninput.value = index;
    let task = localStorage.getItem("tasklocal");
    let taskobj = JSON.parse(task);
    innput.value = taskobj[index];
    addbttn.style.display = "none";
    savebttn.style.display = "block";
}

let savebttn = document.getElementById("buttonsavebox");
savebttn.addEventListener('click' , function(){
    let addbttn = document.getElementById("buttonbox");
    let task = localStorage.getItem("tasklocal");
    let taskobj = JSON.parse(task);

    let hiddeninput = document.getElementById("hiddenid").value;
    taskobj[hiddeninput] = innput.value;
    savebttn.style.display = "none";
    addbttn.style.display = "block";
    localStorage.setItem("tasklocal" , JSON.stringify(taskobj));
    innput.value = '';
    show();

})


let deleteitem=(index)=>{
    let task = localStorage.getItem("tasklocal");
    let taskobj = JSON.parse(task);
    taskobj.splice(index , 1);
    localStorage.setItem("tasklocal" , JSON.stringify(taskobj));
    show();
}

