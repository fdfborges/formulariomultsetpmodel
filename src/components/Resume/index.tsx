import * as C from './styles';
import { useForm, FormActions } from '../../contexts/FormContext';

type Props = {
    icon: string;
}

export const Resume = ({ icon }: Props) => {
    const { state, dispatch } = useForm();
    return (
        <C.Container>
            <C.icon>{icon}</C.icon>
            <C.info>
                <C.title>Seu Nome: <strong>{state.name}</strong></C.title>
                <C.title>Seu Nível: <strong>{state.level}</strong></C.title>
                <C.title>Seu Email: <strong>{state.email}</strong></C.title>
                <C.title>Seu Gihub: <strong>{state.github}</strong></C.title>
            </C.info>
        </C.Container>
    )
}