import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {ProductFeedbackProvider} from "./Components/context/product_feedback_context";
import {ModalsProvider} from "./Components/context/modals_context";
import {AuthProvider} from "./Components/context/auth_context";

ReactDOM.render(
    <React.StrictMode>
        <ModalsProvider>
            <BrowserRouter>
                <AuthProvider>
                    <ProductFeedbackProvider>
                        <App/>
                    </ProductFeedbackProvider>
                </AuthProvider>
            </BrowserRouter>
        </ModalsProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

