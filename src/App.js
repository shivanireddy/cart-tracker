import React, {Suspense, lazy} from "react";
import {Switch, Route} from "react-router-dom";
import SideNavigation from "./components/sidenavbar/sidebar.component";
import ShoppingCart from "./components/shopping-cart/shopping-cart.component";
import Loader from "./components/loader/loader.component";
import HomePage from "./pahes/home-page/home-page.component";
import './App.scss';

const HistoryPage = lazy(() =>
  import("./pages/history-page/history-page.componnent")
);

const StatisticsPage = lazy(() =>
  import("./pages/statistics-page/statistics-page.component")
);

function App() {
  return (
  <>
    <SideNavigation />
    <div className="main__content">
      <Suspense fallback={<Loader/>}>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/history" exact component={HistoryPage} />
          <Route path="/statistics" exact component={StatisticsPage} />
        </Switch>
      </Suspense>
    </div>
    <div className="shopping__cart">
      <ShoppingCart />
    </div>
  );
}

export default App;
