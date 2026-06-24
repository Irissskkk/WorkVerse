import React from "react";
import AddUser from "./AddUser";
import { IoCloseCircleSharp, IoHammerSharp } from 'react-icons/io5';

class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editForm: false
        };
        console.log('User constructor, editForm:', this.state.editForm); // ← ЛОГ
    }

    toggleEditForm = () => {
        console.log('Клик по молотку! Текущий editForm:', this.state.editForm); // ← ЛОГ
        this.setState({ 
            editForm: !this.state.editForm 
        }, () => {
            console.log('Новый editForm:', this.state.editForm); // ← ЛОГ
        });
    };

    render() {
        const { user, onDelete, onEdit } = this.props;  
        console.log('User render, editForm:', this.state.editForm); // ← ЛОГ
        
        return (
            <div className="user">
                <IoCloseCircleSharp 
                    onClick={() => onDelete(user.id)} 
                    className="delete-icon" 
                />
                <IoHammerSharp 
                    onClick={this.toggleEditForm} 
                    className="edit-icon" 
                />
                <h3>{user.firstname} {user.lastname}</h3>
                <p>{user.bio}</p>
                <b>{user.isHappy ? 'Хапи' : 'Бедни'}</b>

                {this.state.editForm && (
                    <div style={{border: '2px solid red', padding: '10px'}}> {/* ← ВИЗУАЛЬНАЯ ПРОВЕРКА */}
                        <h4>Форма редактирования открыта!</h4>
                        <AddUser 
                            user={user} 
                            onAdd={onEdit} 
                        />
                    </div>
                )}
            </div>
        );
    }
}

export default User;