import { useNavigate, Link } from 'react-router';
import * as C from './styles';
import { useForm, FormActions } from '../../contexts/FormContext';
import { Theme } from '../../components/Theme/';
import { ChangeEvent, useEffect } from 'react';
import { SelectOption } from '../../components/SelectOption';



export const FormStep2 = () => {
    const navigate = useNavigate();
    const { state, dispatch } = useForm();

    useEffect(() => {
        if (state.name === '') {
            navigate('/');
        };

        dispatch({
            type: FormActions.setCurrentStep,
            payload: 2
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
                <h1>{state.name}, o que melhor descreve você?</h1>
                <p>Escolha a opção que melhor descreve seu estado?</p>

                <hr />

                <SelectOption
                    title="Sou iniciante"
                    description="Comecei a programar em menos de 2 anos."
                    icon="💂‍♂️"
                    selected={state.level === 0}
                    onClick={() => setLevel(0)}
                />

                <SelectOption
                    title="Sou programador"
                    description="Já programo a 2 anos ou mais"
                    icon="👀"
                    selected={state.level === 1}
                    onClick={() => setLevel(1)}
                />

                <Link className='backButton' to={"/"}>Voltar</Link>
                <button onClick={handleNextStep}>Próximo</button>

            </C.Container>
        </Theme>
    )
}
