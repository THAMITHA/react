// const heading = React.createElement("h1",{ id: "heading"},"Hello World from React!")
const heading = React.createElement('div' ,{id: "parent"} ,React.createElement('div' ,{id: "children"} , [React.createElement('h1', {}, 'hello i am h1 tag'), React.createElement('h2',{}, 'hello i am h2 tag')]))
console.log('testing', heading)
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(heading)



{/* <div id="parent">
    <div id="child">
        <h1>hello i am h1 tag</h1>
        <h2>hello i am h2 tag</h2>
    </div>
</div> */}


