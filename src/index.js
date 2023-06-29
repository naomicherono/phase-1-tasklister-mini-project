document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector("form")
  form.addEventListener('submit',(e)=>{
    e.preventDefault()

    taskDescription(e.target['new-task-description'].value)
    form.reset();
  })
  function taskDescription(task){
    let p = document.createElement('p')
    let btn = document.createElement('button')
    btn.addEventListener('click',deleteElement)
    btn.textContent = 'x'
    p.textContent = `${task}`
    p.appendChild(btn)
    console.log(p)
    document.querySelector('#list').appendChild(p)
  };
  function deleteElement(e){
    e.target.parentNode.remove()
  }
});
