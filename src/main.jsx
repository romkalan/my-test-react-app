import ReactDOM from 'react-dom/client';
import React from "react";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <div>
        <button onClick={() => console.log('clicked')}>
            <span>
                Click me!
            </span>
        </button>
        <button>
            <span>
                Click me!
            </span>
        </button>
        <button>
            <span>
                Click me!
            </span>
        </button>
    </div>
);
