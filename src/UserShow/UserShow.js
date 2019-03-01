import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom'
import './UserShow.css'

class UserShow extends Component {
    state = {
        user: []
    }
    componentDidMount() {
        this.findUser()
    }

    findUser = async () => {
        try {
            const userResponse = await fetch(`http://localhost:8000/api/v1/users/${this.props.match.params.id}` ,{
                method: 'GET',
                credentials: 'include',
                headers: {
                "Content-Type": "application/json"
                }
            })
            
            const user = await userResponse.json()
            this.setState({
                user
            })
            console.log(user, 'got um')
        } catch(err) {
            console.log(err)
        }
    }



    deleteUser = async (e) => {
        console.log(e, 'THIS IS E')
        e.preventDefault();
        e.stopPropagation();
        try {
            const deletedResponse = await fetch(`http://localhost:8000/api/v1/users/${this.props.match.params.id}` ,{
                method: 'DELETE',
                body: JSON.stringify(this.state.user),
                credentials: 'include',
                headers: {
                "Content-Type": "application/json"
                }
            })
            
            const deletedParsed = await deletedResponse.json()
            this.props.history.push('/  ')
        
        } catch(err) {
            console.log(err)
        }
    }
    
    render() {
        const { user } = this.state
        return (
            <div className="UserShow">
                <div>
                    <h1>{user.username}</h1>
                    <button onClick={(e) => this.deleteUser(e)}>Delete User</button>
                    <Link to={`/edit-user/${user.id}`}><button>Edit User</button></Link>
                </div>
            </div>
        )
    }
}


export default withRouter(UserShow)