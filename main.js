function createElement(tag, attributes, ...children) {
  const dom = document.createElement(tag)
  for (const attribute in attributes) {
    dom.setAttribute(attribute, attributes[attribute])
  }
  for (let child of children) {
    if (typeof child === 'string') { 
      child = document.createTextNode(child)
    }
    dom.appendChild(child)
  }
  return dom
}

const a = <div class='a' id='b'>
  <div></div>
  <p>text node</p>
</div>
console.log(a)

document.body.appendChild(a)