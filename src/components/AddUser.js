import React from "react";

class AddUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: "",
            lastname: "",
            bio: "",
            age: "",
            isHappy: false
        };
    }

    render() {
        return (
            <form ref={(el) => this.myForm = el}>
                <input 
                    placeholder="Имя" 
                    value={this.state.firstname}
                    onChange={(event) => {
                        this.setState({ firstname: event.target.value });
                    }}
                />
                <input 
                    placeholder="Фамилия" 
                    value={this.state.lastname}
                    onChange={(event) => {
                        this.setState({ lastname: event.target.value });
                    }}
                />
                <textarea 
                    placeholder="Биография"
                    value={this.state.bio}
                    onChange={(event) => {
                        this.setState({ bio: event.target.value });
                    }}
                ></textarea>
                <input 
                    placeholder="Возраст"
                    value={this.state.age}
                    onChange={(event) => {
                        this.setState({ age: event.target.value });
                    }}
                />
                <label htmlFor="isHappy">Счастлив?</label>
                <input 
                    type="checkbox" 
                    id="isHappy" 
                    checked={this.state.isHappy}
                    onChange={(event) => {
                        this.setState({ isHappy: event.target.checked });
                    }}
                />
                <button type="button" onClick={() => {
                    this.myForm.reset()
                        const newUser = {
                            firstname: this.state.firstname,
                            lastname: this.state.lastname,
                            bio: this.state.bio,
                            age: this.state.age,
                            isHappy: this.state.isHappy
                        };
                        this.props.onAdd(newUser);
                        this.setState({
                            firstname: "",
                            lastname: "",
                            bio: "",
                            age: "",
                            isHappy: false
                        });
                    }}
                >
                    Добавить
                </button>
            </form>
        );
    }
}

export default AddUser;