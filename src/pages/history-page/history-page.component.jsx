import React from "react";
import {connect} from "react-redux";


const HistoryPage = ({ cartHistoryDetails}) => {
    return (
        <main className="u-page historypage">
            <h1 className="page__name">
                Your <span>Shopping</span>History
            </h1>
            <div className="historypage__content">
                
            </div>
        </main>
    )
};