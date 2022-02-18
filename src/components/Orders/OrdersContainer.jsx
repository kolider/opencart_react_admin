import {connect} from "react-redux";
import OrdersList from "./Orders";
import {getNewOrders, setOrderToMe} from "../../redux/orders-reducer";

const mapStateToProps = (state) => ({
    isFetching: state.ordersReducer.isFetching,
    orders: state.ordersReducer.orders
})

export default connect(mapStateToProps, {getNewOrders, setOrderToMe})(OrdersList)