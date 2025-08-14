import { useNavigate, Link } from 'react-router';
import * as C from './styles';
import { useForm, FormActions } from '../../contexts/FormContext';
import { Theme } from '../../components/Theme/';
import { ChangeEvent, useEffect } from 'react';
import { SelectOption } from '../../components/SelectOption';
import { Steps } from '../../components/Steps/Steps';



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
            console.log(state.level)
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

    const setLevel = (level: string) => {
        dispatch({
            type: FormActions.setLevel,
            payload: level
        })
    }

    return (
        <Theme>
            <C.Container>
                <Steps />
                <h1>{state.name}, o que melhor descreve você?</h1>
                <p>Escolha a opção que melhor descreve seu estado?</p>

                <hr />

                <SelectOption
                    title="Sou iniciante"
                    description="Comecei a programar em menos de 2 anos."
                    icon="💂‍♂️"
                    selected={state.level === "iniciante"}
                    onClick={() => setLevel("iniciante")}
                />

                <SelectOption
                    title="Sou programador"
                    description="Já programo a 2 anos ou mais"
                    icon="👀"
                    selected={state.level === "profissional"}
                    onClick={() => setLevel("profissional")}
                />

                <Link className='backButton' to={"/"}>Voltar</Link>
                <button onClick={handleNextStep}>Próximo</button>

            </C.Container>
        </Theme>
    )
}
