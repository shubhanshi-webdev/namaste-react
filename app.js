const heading = React.createElement('h1', {id: 'heading', xyz: 'hi'} , 'hello world from react');
// console.log(heading);
    // const root = ReactDOM.createRoot(document.getElementById('root'));
    // console.log(root);
    // root.render(heading);
    // console.log(root.render(heading));
    // create element 2 from react
    // const heading2 = React.createElement('h2', {}, 'heading 2');
    // const root2 = ReactDOM.createRoot(document.getElementById('root'));
    // root2.render(heading2);

    
    // nested element
    const section = React.createElement('div', {id: 'main-div'},
        React.createElement('div' ,{id: 'child'}, 
            React.createElement('h1', {id: 'heading1'}, 'hi'), React.createElement('h2', {}, 'React Sibling')
        )
    );
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(section);