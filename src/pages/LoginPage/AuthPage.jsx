import SignUpForm from '../../SignUpForm/SignUpForm'
import LoginForm from '../../components/LoginForm/LoginForm'

function AuthPage(props) {
    return (
        <main>
            <h1>Your very own To-Do</h1>
            <SignUpForm setUser={props.setUser} />
            <LoginForm setUser={props.setUser} />
        </main>
    )
}

export default AuthPage