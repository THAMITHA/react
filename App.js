import React from "react";
import ReactDom from "react-dom/client";

const jsxHeading = (
    <h1 className="head" tabIndex="5">
        Namaste React using JSX 🚀 
    </h1>
)

const root = ReactDom.createRoot(document.getElementById('root'))
root.render(jsxHeading)



