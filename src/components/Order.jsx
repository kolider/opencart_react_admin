import {useParams} from "react-router-dom";

const Order = (props) => {
    let params = useParams();
    return <div>
        Order #{params.orderId}
    </div>
}

export default Order