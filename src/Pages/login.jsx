import FromLogin from "../components/fragments/FormLogin"
import AuthLayout from "../components/layouts/AuthLayout"

const LoginPage = () => {
    return (
        <AuthLayout heading="Login" type="login">
            <FromLogin/>
        </AuthLayout>
    )
}

export default LoginPage