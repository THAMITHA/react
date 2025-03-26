import React from "react";
import ReactDom from "react-dom/client";

const heading = <h1>Namaste React 🚀</h1>
const HeadingComponent = () => (<div>
        <h1 id= 'heading'>Namaste React thamitha 🚀</h1>
    </div>)
const root = ReactDom.createRoot(document.getElementById('root'))
root.render(<HeadingComponent />)


