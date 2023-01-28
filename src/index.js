document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.querySelector('form')
  const addClick = document.addEventListener('submit', (e)=>{
    e.preventDefault()
    let taskName = e.target.new_task_description.value
    let p = document.createElement('p')
    let button = document.createElement('button')
    button.addEventListener('click', handleDelete)
    button.textContent = 'x'
    p.textContent=taskName
    p.appendChild(button)
    document.querySelector('#list').appendChild(p)
    form.reset()
  })
 
}); 
function handleDelete(e){
  e.target.parentNode.remove()
}