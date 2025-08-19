import { useNavigate, Link } from 'react-router';
import * as C from './styles';
import { useForm, FormActions } from '../../contexts/FormContext';
import { Theme } from '../../components/Theme';
import { ChangeEvent, useEffect } from 'react';
import { Resume } from '../../components/Resume';
import { Steps } from '../../components/Steps/Steps';
import { Example } from '../../components/ModalFinish'


export const FormStep4 = () => {
    const navigate = useNavigate();
    const { state, dispatch } = useForm();

    useEffect(() => {
        if (state.name === '' || state.email === '' || state.github === '') {
            navigate('/step3');
            console.log(state);
        };

        dispatch({
            type: FormActions.setCurrentStep,
            payload: 4
        });
    }, []);

    const handleNextStep = () => {
        if (state.name !== "") {
            navigate("/step3");
        } else {
            alert("Preencha os dados!");
        }
    }

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setName,
            payload: e.target.value
        })
    }

    const setLevel = (level: number) => {
        dispatch({
            type: FormActions.setLevel,
            payload: level
        })
    }

    return (
        <Theme>
            <C.Container>
                <Steps />
                <h1>{state.name}, confirme suas informações!</h1>
                <p>Garanta que preencheu os dados corretamente para ter mais chances de coonseguir um trabalho.</p>

                <hr />

                <Resume icon="👤" />
                <C.FooterForm>
                    <Link className='backButton' to={"/"}>Voltar</Link>
                    <Example />
                </C.FooterForm>


            </C.Container>
        </Theme>
    )
}
