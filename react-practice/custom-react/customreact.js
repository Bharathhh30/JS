function customRender(reactElement,container){
    /* basic code
    const domElement = document.createElement(reactElement.type) //Creating a element
    domElement.innerHTML = reactElement.children // adding the children part from the object to the element
    domElement.setAttribute('href',reactElement.props.href) //Setting the href of the anchhor tag
    domElement.setAttribute('target',reactElement.props.target) //Setting up the target as _blank to open the web page in new tab

    container.appendChild(domElement)
    */

    // Second version

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props){
        if (prop === 'children') continue;
        domElement.setAttribute(prop,reactElement.props[prop])
    }

    container.appendChild(domElement)
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}

const mainContainer = document.querySelector('#root');

customRender(reactElement,mainContainer)  // para 1 is what to render , para 2 is where to render or inject
// custom render is a render method to render the elements