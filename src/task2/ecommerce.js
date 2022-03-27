////////////////////////////////////////////// Helper code, do not edit /////////////////////////////////////////
import { allIds, fetchOrderById } from "../api";

////////////////////////////////// Your code tasks is below //////////////////////////////////////////////////////

const fetchAllOrders = async () => {
    let orders = [];
    const ids = allIds;
    for (let id in ids) {
        const order = await fetchOrderById(id);
        orders = [...orders, order];
    }
    return orders;
    // .....
    //   1. TODO: fetch all ids using the "fetchOrderById" and the given ids, make it work as efficient and clean as possible.
};

const bucketOrdersByUsers = async () => {
    let ordersByUsers = {};
    const orders = await fetchAllOrders();
    orders.map(order => {
        if (!ordersByUsers[order.userId])
            ordersByUsers[order.userId] = [order];
        else
            ordersByUsers[order.userId].push(order);
    })
    //   2. TODO: using the function from section 1 you should now bucket the orders by user.
    // each key in the object (ordersByUsers) represents a userId and each value is an array of the orders of that user.
    return ordersByUsers;
};

const getLast2WeeksOrders = async () => {
    const maxDays = 14;
    const orders = await fetchAllOrders();
    let twoWeeksOrders = [];
    orders.map(order => {
        const daysPassed = (Date.now() - order.timestamp) / (1000 * 3600 * 24);
        if (daysPassed <= maxDays)
            twoWeeksOrders.push(order);
    })
    return twoWeeksOrders;
    //   3. TODO: fetch all Ids and return array with only the last 2 weeks orders. make it work as efficient and clean as possible.
};

const bucketOrdersByDate = async () => {
    let ordersByDate = {};
    const twoWeeksOrders = await getLast2WeeksOrders();

    twoWeeksOrders.map(order => {
        if (!twoWeeksOrders[order.timestamp]) {
            ordersByDate[order.timestamp] = [order];
        }
        else {
            ordersByDate[order.timestamp].push(order);
        }
    })
    //   4. TODO: using the function from section 3 bucket the orders by date.
    // each key in the object (ordersByDate) represents a day and each value is an array of the orders in that date.
    return ordersByDate;
};

fetchAllOrders();
// .then(console.log);

bucketOrdersByUsers();
// .then(console.log);

getLast2WeeksOrders();
// .then(console.log);

bucketOrdersByDate();
// .then(console.log);

////////////////////////////////////////
