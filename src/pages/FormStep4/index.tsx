import { useNavigate, Link } from 'react-router';
import * as C from './styles';
import { useForm, FormActions } from '../../contexts/FormContext';
import { Theme } from '../../components/Theme';
import { ChangeEvent, useEffect } from 'react';
import { Resume } from '../../components/Resume';



export const FormStep4 = () => {
    const navigate = useNavigate();
    const { state, dispatch } = useForm();

    useEffect(() => {
        if (state.name === '') {
            // navigate('/');
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
                <p>Passo {state.currentStep}/3</p>
                <h1>{state.name}, confirme suas informações!</h1>
                <p>Garanta que preencheu os dados corretamente para ter mais chances de coonseguir um trabalho.</p>

                <hr />

                <Resume icon="👤"/>

                <Link className='backButton' to={"/"}>Voltar</Link>
                <button onClick={handleNextStep}>Enviar</button>

            </C.Container>
        </Theme>
    )
}
