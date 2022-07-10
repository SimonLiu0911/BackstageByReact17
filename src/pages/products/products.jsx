import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import ProductHome from "./productHome";
import ProductAddUpdate from "./addUpdate";
import ProductDetail from "./detail";

/**
 * Product的默認子路由組件
 */

const Products = () => {
  return (
    <div>
      <Switch>
        <Route path="/products" component={ProductHome} exact/> {/** 路徑完全匹配 */}
        <Route path="/products/addupdate" component={ProductAddUpdate} />
        <Route path="/products/detail" component={ProductDetail} />
		<Redirect to="/products"/>
      </Switch>
    </div>
  );
};

export default Products;
