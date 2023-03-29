import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { applyPolyfills, defineCustomElements } from 'h8k-components/loader';

const SLIDES = [
    {
        title: "Today's workout plan",
        text: "We're gonna do 3 fundamental exercises."
    },
    {
        title: "First, 10 push-ups",
        text: "Do 10 reps. Remember about full range of motion. Don't rush."
    },
    {
        title: "Next, 20 squats",
        text: "Squats are important. Remember to keep your back straight."
    },
    {
        title: "Finally, 15 sit-ups",
        text: "Slightly bend your knees. Remember about full range of motion."
    },
    {
        title: "Great job!",
        text: "You made it, have a nice day and see you next time!"
    }
];
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App slides={SLIDES} />
    </React.StrictMode>
);
registerServiceWorker();

applyPolyfills().then(() => {
    defineCustomElements(window);
})
