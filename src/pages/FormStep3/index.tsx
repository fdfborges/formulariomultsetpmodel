import { useNavigate, Link } from 'react-router';
import * as C from './styles';
import { useForm, FormActions } from '../../contexts/FormContext';
import { Theme } from '../../components/Theme/';
import { useEffect } from 'react';
import { object, string } from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Steps } from '../../components/Steps/Steps';


export const FormStep3 = () => {
    const navigate = useNavigate();
    const { state, dispatch } = useForm();

    useEffect(() => {
        if (state.name === '') {
            navigate('/');
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 3
            });
        }
    }, [dispatch, navigate, state.name]);

    const validationSchema = object({
        email: string().email('Formato de E-mail Inválido').required('Campo obrigatório'),
        github: string().url('URL Inválida').required('Campo obrigatório')
    });

    const handleFormSubmit = (values: { email: string; github: string; }) => {
        dispatch({
            type: FormActions.setEmail,
            payload: values.email
        });
        dispatch({
            type: FormActions.setGithub,
            payload: values.github
        });
        navigate('/step4');
    };

    return (
        <Theme>
            <C.Container>
                <Steps />
                <h1>Legal {state.name}! Onde te achamos?</h1>
                <p>Preencha com seus contatos para conseguirmos entrar em contato:</p>

                <hr />

                <Formik
                    initialValues={{
                        email: state.email,
                        github: state.github
                    }}
                    validationSchema={validationSchema}
                    onSubmit={handleFormSubmit}
                >
                    <Form>
                        <label>
                            Qual seu e-mail?
                            <Field name="email" type="email" autoFocus />
                            <ErrorMessage name="email" component="div" className="error-message" />
                        </label>

                        <label>
                            Qual seu Github?
                            <Field name="github" type="url" />
                            <ErrorMessage name="github" component="div" className="error-message" />
                        </label>

                        <Link className='backButton' to={"/step2"}>Voltar</Link>
                        <button type='submit'>Próximo</button>
                    </Form>
                </Formik>

            </C.Container>
        </Theme>
    )
}