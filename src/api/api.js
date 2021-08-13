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
                    setTimeout(() => resolve({status: 200, message: 'user logged in successfully', data: {fullName: user.fullName, email: user.email}}),3000);
                } else {
                    setTimeout(() => resolve({status: 404, message: 'email or password is incorrect'}),3000);
                }
                break;
            }
            default: {
                resolve({status: 500, message: 'Something whent wrong'})
            }
        }
    })
}