import React, {useEffect} from "react";
import AdminHeaderComponents from "../../layouts/AdminHeaderComponents";
import AdminAsideComponents from "../../layouts/AdminAsideComponents";
import AdminFooterComponents from "../../layouts/AdminFooterComponents";
import {useDispatch, useSelector} from "react-redux";
import {getBookOrderListByLoginUser} from "../../../../store/reducers/bookOrderSlice";

function OrderListComponents() {
    let dispatch = useDispatch();
    let userId = localStorage.getItem("userId");
    let orderData = useSelector((state) => state.bookOrder.data);

    console.log(userId);

    useEffect(() => {
        dispatch(getBookOrderListByLoginUser(userId));
    }, []);
    return (
        <div>
            <AdminHeaderComponents/>
            <AdminAsideComponents/>
            <main id="main" className="main">
                <section className="section">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card">
                                <div className="card-body">
                                    <h1 className="card-title-dp">
                                        <i className="bi bi-bag-plus-fill"></i> Order List
                                    </h1>
                                    <table className="table">
                                        <thead>
                                        <tr>
                                            <th>S.n</th>
                                            <th>Book Name</th>
                                            <th>Order By</th>
                                            <th>Order Data</th>
                                            <th>Status</th>
                                            <th>Action</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {orderData.map((order, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td>{index + 1}</td>
                                                    <td>{order.book}</td>
                                                    <td>{order.user}</td>
                                                    <td>{order.createdAt}</td>
                                                    <td>{order.status}</td>
                                                    <td>
                                                        <button className="btn btn-success">Edit</button>
                                                        <button className="btn btn-danger">Delete</button>
                                                    </td>
                                                </tr>
                                            );
                                        })}

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            </main>
            <AdminFooterComponents/>
        </div>
    )
}

export default OrderListComponents;