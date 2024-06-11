import FromLogin from "../components/fragments/FormLogin"
import AuthLayout from "../components/layouts/AuthLayout"

const LoginPage = () => {
    return (
        <AuthLayout heading="Login">
            <FromLogin/>
        </AuthLayout>
    )
}

export default LoginPage