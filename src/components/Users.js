import React from "react";
import User from "./User";

class Users extends React.Component {
    render() {
        console.log('Users props:', this.props); // ← ЛОГ
        
        try {
            if (this.props.users && this.props.users.length > 0) {
                return (
                    <div>
                        {this.props.users.map((el) => {
                            console.log('Передаем в User:', { 
                                key: el.id, 
                                user: el, 
                                onEdit: this.props.onEdit, 
                                onDelete: this.props.onDelete 
                            }); 
                            return (
                                <User 
                                    key={el.id} 
                                    user={el} 
                                    onEdit={this.props.onEdit} 
                                    onDelete={this.props.onDelete} 
                                />
                            );
                        })}
                    </div>
                );
            } else {
                return (
                    <div className="user">
                        <h3>Пользователей нет</h3>
                    </div>
                );
            }
        } catch (error) {
            console.log('Render error:', error);
            return <div>Ошибка загрузки пользователей</div>;
        }
    }
}

export default Users;