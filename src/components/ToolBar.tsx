import React from 'react';
import {BarMain} from "../styles/components/Bar";

export const ToolBar = () => {
    return (
        <BarMain>
            <div>
                <button>Brush</button>
                <button>Rect</button>
                <button>Circle</button>
                <button>Eraser</button>
                <button>Line</button>
                <input type='color'/>
            </div>
            <div>
                <button>Undo</button>
                <button>Redo</button>
                <button>Save</button>
            </div>
        </BarMain>
    );
};
