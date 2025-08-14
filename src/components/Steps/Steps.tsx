import * as C from './styles';
import { useForm } from '../../contexts/FormContext';

export const Steps = () => {

    const { state, dispatch } = useForm();

    return (
        <C.Container>
            <p>Passo {state.currentStep}/4</p>
        </C.Container>
    );
}