import ReactDOM from 'https://esm.sh/react-dom@18.2.0/client'
import React from 'https://esm.sh/react@18.2.0'

const appRootElement = document.getElementById("root")
const root = ReactDOM.createRoot(appRootElement)


const button = React.createElement("button", { class: 'greeting' }, 'Click me')

root.render(button)