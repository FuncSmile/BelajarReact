import FormRegister from "../components/fragments/FormRegister"
import AuthLayout from "../components/layouts/AuthLayout"

const RegisterPage = () => {
    return (
        <AuthLayout heading="Resgister">
            <FormRegister/>
        </AuthLayout>
    )
}

export default RegisterPage