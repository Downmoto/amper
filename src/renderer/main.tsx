import React from "react";
import {createRoot} from "react-dom/client";

import {Options} from './components/optionarea/options'
import {TextArea} from './components/textarea/text'


const root = createRoot(
    document.getElementById('root'),
)

root.render(
    <>
        <TextArea />
        <Options />
    </>
)