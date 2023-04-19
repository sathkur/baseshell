import '../styles/globals.css'

// export default function Page() {
    
//     return (
//         <div>Page</div>
//     )
// }

import tailwindConfig  from '../tailwind.config';

export default () => {

    return (
        <div className='box my-10'>
            <Typography/>
            <Buttons/>
            <Colors/>
            <InputFields/>
        </div>
    );
}

const InputFields = () => {

    return (
        <>

            <input class="input" type="text" placeholder="Input element"></input>
        </>
    );
}

const Typography = () => {
    
    return (
        <>
            <h1 class="heading_h1">Headline H1</h1>
            <h2 class="heading_h2">Headline H2</h2>
            <h3 class="heading_h3">Headline H3</h3>
            <h4 class="heading_h4">Headline H4</h4>
            <h5 class="heading_h5">Headline H5</h5>
            <h6 class="heading_h6">Headline H6</h6>
            <p class="lead-text">Lead Text</p>
            <p class="body1">Body 1</p>
            <p class="body2">Body 2</p>
            <a class="link" href="#">Link</a>
            <p class="action-medium">Action Medium</p>
            <p class="nav-menu">Navigation Menu</p>
            <p class="nav-menu_inverted">Navigation Menu Inverted</p>
            <p class="overline">Overline</p>
            <p class="quote">Quote</p>
        </>
    )
}

const Colors = () => {
    const colors = tailwindConfig.theme.extend.colors;

    return (
        <>
            <div class="grid grid-cols-4 gap-4 font-mono text-white text-sm text-center font-bold leading-6 bg-stripes-fuchsia rounded-lg">
                {Object.keys(colors).length && Object.keys(colors).map((color) => { 
                    return (<>
                        <div class={"p-4 rounded-lg shadow-lg bg-" + color}>{color + " " + colors[color]}</div>
                    </>)
                })}
            </div>
        </>
    );
}


const Buttons = () => {
    
    return (
        <>
            <button className="button button-primary">Button Primary</button>
            <button className="button button-primary button-disabled">Button Disabled</button>
            <button className="button button-primary button-outline">Button Disabled</button>
            <button className="button button-primary button-sm">Button Small</button>
            <button className="button button-primary button-lg">Button Large</button>
        </>
    )
}
