export default {AddListItem, CreateDropdown}
// export default AddListItem
// export default CreateDropdown


const body = document.querySelector("body")
const nav = document.createElement("nav")
const dropdownMenu = document.createElement("ul")
const listItem = document.createElement("li")
const linkItem = document.createElement("a")


function CreateDropdown() 
{
  dropdownMenu.className = "drop-down closed"
  dropdownMenu.addEventListener('mouseleave', function(event){
    this.classList = ('drop-down closed')
    event.stopPropagation()
  }, false)

  linkItem.className = "nav-button"
  linkItem.href = "#" 
  linkItem.text = "Home"
  linkItem.addEventListener('mouseenter', function(event)
  {
    this.parentNode.parentNode.classList.toggle('closed')
    event.stopPropagation()
  }, false)

  listItem.appendChild(linkItem)
  dropdownMenu.appendChild(listItem)
  nav.appendChild(dropdownMenu)
  body.appendChild(nav)
}

function AddListItem(text)
{
  let list = document.createElement("li")
  let link = document.createElement("a")
  link.href = "#"
  link.text = text
  list.appendChild(link)
  dropdownMenu.appendChild(list)
}




CreateDropdown()
AddListItem("About")
AddListItem("Library")
AddListItem()
