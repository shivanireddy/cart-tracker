import React from "react";
import {connect} from "react-redux";
import GroceryList from "../../components/grocery-list/grocery-list.component";
import {selectCartHistoryDetails} from "../../redux/shopping-history/shopping-history.selectors";
import "./history-page.styles.scss";
const HistoryPage = ({ cartHistoryDetails}) => {
    return (
        <main className="u-page historypage">
            <h1 className="page__name">
                Your <span>Shopping</span>History
            </h1>
            <div className="historypage__content">
                {cartHistoryDetails.map((cartHistory) => {
                    return <GroceryList key={cartHistory.id} cartDetails={cartHistory} />;
                })}
            </div>
        </main>
    );
};

const mapStateToProps = (state) => {
    return {
        cartHistoryDetails : selectCartHistoryDetails(state),
    };
};

export default connect(mapStateToProps)(HistoryPage);