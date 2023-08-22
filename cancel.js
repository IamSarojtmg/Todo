export default function cancle (section,main){
  const cancle = document.createElement('div')
  section.appendChild(cancle)
  cancle.textContent = 'X'

  cancle.addEventListener('click',()=>{
    main.removeChild(section)
  })
}