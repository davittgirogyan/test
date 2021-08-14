export default async (type, data) => {
    return new Promise(resolve => {
        switch(type) {
            case 'register': {
                const users = JSON.parse(localStorage.getItem('users'));
                if (!users) {
                    localStorage.setItem('users', JSON.stringify([{...data, id: 1}]))
                } else {
                    const user = users.find(usr => usr.email === data.email);
                    if (!user) {
                        users.push({ ...data, id: users[users.length-1].id + 1 });
                        localStorage.setItem('users', JSON.stringify(users))
                        setTimeout(() => resolve({status: 200, message: 'user successfully registered'}), 3000);
                    } else {
                        setTimeout(() => resolve({status: 422, message: 'user is alredy exists with email' + data.email}),3000)
                    }
                }
                break;
            }
            case 'login': {
                const users = JSON.parse(localStorage.getItem('users'));
                const user = Array.isArray(users) && users.find(usr => (usr.email === data.email && usr.password === data.password));
                if (user) {
                    // mock unique token with user id
                    localStorage.setItem('token', user.id);
                    setTimeout(() => resolve({status: 200, message: 'user logged in successfully', data: {fullName: user.fullName, email: user.email}}),1000);
                } else {
                    setTimeout(() => resolve({status: 404, message: 'email or password is incorrect'}),1.000);
                }
                break;
            }
            case 'all-products': {
                const products = JSON.parse(localStorage.getItem('products'));
                const initalProducts = [
                    { id: 1, user_id: 1, name: 'prod1', description:'desc1', category: 'categ1', price: 55},
                    { id: 2, user_id: 1, name: 'prod2', description:'desc2', category: 'categ2', price: 22},
                    { id: 3, user_id: 2, name: 'prod3', description:'desc3', category: 'categ3', price: 55},
                    { id: 4, user_id: 3, name: 'prod4', description:'desc4', category: 'categ4', price: 55},
                    { id: 5, user_id: 4, name: 'prod5', description:'desc5', category: 'categ5', price: 55},
                ]
                if(!products) {
                    localStorage.setItem('products', JSON.stringify(initalProducts))
                }
                setTimeout(() => resolve({status: 200, data: products || initalProducts}),2000);
                break;
            }
            case 'my-products': {
                const userId = localStorage.getItem('token');
                if (!userId) {
                    setTimeout(() => resolve({status: 403, message: 'please login for see your products'}));
                } else {
                    const products = JSON.parse(localStorage.getItem('products'));
                    if (Array.isArray(products) && products.length) {
                        const data = products.filter(e => e.user_id === +userId)
                        setTimeout(() => resolve({status: 200, data }), 2000)
                    } else {
                        setTimeout(() => resolve({status: 200, data: []}),2000);
                    }
                }
                break;
            }
            default: {
                resolve({status: 500, message: 'Something whent wrong'})
            }
        }
    })
}