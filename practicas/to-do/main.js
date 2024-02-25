
const input = document.querySelector('input');
const addBtn = document.querySelector('.btn-add');
const ul = document.querySelector('ul');
const empty = document.querySelector('.empty');

addBtn.addEventListener('click', (e) => {
  e.preventDefault()
  const text = input.value;
  if (!text) {
    alert("Ingresar una tarea")
  }
  if (text !== "") { /*Comprueba si el usuario ha introducido algún texto. Si la entrada está vacía, el código dentro del bloque if no se ejecutará.*/

    const li = document.createElement('li')
    li.innerHTML = `
    <label>
      <input type = "checkbox">
      <span class="texto-li"> ${text} </span>
     <label/>  
     <div class="container-btn">
     <span class = "add-edit"></span>
     <span class = "add-delete"> </span>
     <div/>
    `
    ul.appendChild(li);

    const checkbox = li.querySelector('input')
    const texto = li.querySelector('span')
    const addEdit = li.querySelector('.add-edit')
    const addDelete = li.querySelector('.add-delete')

    // tachar tarea completada 

    checkbox.addEventListener('click', () => {
      li.classList.toggle('completado', checkbox.checked)
    });
    // Actualizar tarea

    addEdit.addEventListener('click', () => {
      const update = prompt('Editar tarea:', texto.textContent);
      if (update !== null) {
        texto.textContent = update;
        li.classList.remove('completado')
      }
    })

    //Eliminar tarea

    addDelete.addEventListener('click', () => {
      if (confirm('Estas seguro que quiere eliminar esta tarea'))
        li.remove()
      const items = document.querySelectorAll('li');
      if (items.length === 0) {
        empty.style.display = "Block"
      }

    })
    input.value = "";
    empty.style.display = "none";
  }

});

//Otra manera de eliminar tarea
// Funcion para eliminar tarea
// function addDeleteBtn() {
//   const div = document.createElement('div')
//   const deleteBtn = document.createElement('button');
//   deleteBtn.className = "btn-delete";

//   div.appendChild(deleteBtn)
//   deleteBtn.addEventListener('click', (e) => {
//     const item = e.target.parentElement; /*Elimina el elemento padre*/
//     ul.removeChild(item);

//     const items = document.querySelectorAll('li');
//     if (items.length === 0) {
//       empty.style.display = "Block"
//     }
//   });
//   return deleteBtn;

// }




