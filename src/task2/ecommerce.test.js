import { fetchOrderById } from "../api";

const ORDER_ID = "70ef599e5eca171b2bce84d1"
test("Ecommerce - fetchOrderById", async () => {
    let orders = await fetchOrderById(ORDER_ID);
    expect(orders).toBeTruthy();

    //Modules are not exported from ecommerce.js so commented the tests
    // let allOrders = await fetchAllOrders();
    // expect(allOrders).toBeTruthy();

    // let usersOrders = await bucketOrdersByUsers();
    // expect(usersOrders).toBeTruthy();

    // let twoWeeksOrders = await getLast2WeeksOrders();
    // expect(twoWeeksOrders).toBeTruthy();

    // let ordersByDate = await bucketOrdersByDate();
    // expect(ordersByDate).toBeTruthy();


});