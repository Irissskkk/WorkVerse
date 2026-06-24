import React from "react";
import Header from "./components/Header";
import Users from "./components/Users";
import ErrorBoundary from "./components/ErrorBoundary";
import AddUser from "./components/AddUser";
import axios from "axios"

const baseUrl = "http://reqres.in/api/users?page=2"

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [
                {
                    id: 1,
                    firstname: 'Bob',
                    lastname: 'Marley',
                    bio: 'Получил высшее образование, сдал все сессии',
                    age: 40,
                    isHappy: true
                },
                {
                    id: 2,
                    firstname: 'John',
                    lastname: 'Doe',
                    bio: 'Ничего не сдал, его скоро выгонят',
                    age: 22,
                    isHappy: false
                }
            ]
        };
        this.addUser = this.addUser.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
        this.editUser = this.editUser.bind(this);
    }

    deleteUser(id) {
        this.setState({
            users: this.state.users.filter((el) => el.id !== id)
        });
    }

    addUser(user) {
        console.log('Добавляем пользователя:', user);
        const id = this.state.users.length + 1;
        this.setState({
            users: [
                ...this.state.users,
                {
                    ...user,
                    id: id
                }
            ]
        });
    }

    editUser(user) {
        console.log('Редактируем пользователя:', user);
        this.setState({
            users: this.state.users.map((el) => {
                if (el.id === user.id) {
                    return { ...el, ...user };
                }
                return el;
            })
        });
    }

    render() {
        return (
            <div>
                <Header title="Список пользователей"/>
                <main>
                    <ErrorBoundary>
                        <Users 
                            users={this.state.users} 
                            onEdit={this.editUser} 
                            onDelete={this.deleteUser} 
                        />
                    </ErrorBoundary>
                </main>
                <aside>
                    <AddUser onAdd={this.addUser} />
                </aside>
            </div>
        );
    }
}

export default App;