import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

    background-color: #02044A;
    color: #FFF;
    min-height: 100vh;
    padding-top: 3rem;
`;

export const Area = styled.div`
    margin: auto;
    max-width: 980px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    @media (max-width: 768px){
        min-height: 100%;
    }
`;

export const Steps = styled.div`
    flex: 1;
    display: flex;
    
    @media (max-width: 768px){
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        
    }
`;

export const Sidebar = styled.div`
    width: 250px;
    border-right: 1px solid #16195C;
    @media (max-width: 768px){
        display: flex;
        width: 90%;
        border: none;
    }
`;

export const Page = styled.div`
    flex: 1;
    padding-left: 40px;
    padding-top: 40px;

    @media (max-width: 768px){
        padding-left: 0px;
        padding-top: 20px;
        display: flex;
        align-items: center;
        justify-content: center;    
}
`;