import styled from 'styled-components'

export const Container = styled.div`
    margin: 30px 0;
    cursor: pointer;
    
    
        @media (max-width: 768px){
            display: flex;    
            align-items: center;
            justify-content: center;
            border: 1px solid purple;
            gap: 2rem;
            
            .containerLink{
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
            }
    }

    a{
        display: flex;
        align-items: center;
        text-decoration: none;
    }
`;

export const Info = styled.div`
    flex: 1;
    width: 100%
    
`;

export const Title = styled.div`
    text-align: right;
    font-weight: bold;
    margin-bottom: 5px;
    font-size: 15px;
    color: #FFF;

    @media (max-width: 768px){
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        border: 1px solid red;
        
    }
`;

export const Description = styled.div`
    text-align: right;
    font-size: 13px;
    color: #B8B8D4;

    @media (max-width: 768px){
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        border: 1px solid red;
        
    }

`;

export const IconArea = styled.div<{ active: boolean; }>`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: ${props => props.active ? '#25CD89' : '#494A7C'};
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px){
        
        
    }
`;

export const Point = styled.div<{ active: boolean; }>`
    width: 6px;
    height: 6px;
    border: 3px solid #494A7C;
    border-radius: 50%;
    margin-left: 30px;
    margin-right: -6px;
    background-color: ${props => props.active ? '#25CD89' : '#02044A'};

    @media (max-width: 768px){
        margin-top: 0.5rem;    
        margin-left: 0px;
        margin-right: 0px;
    }
`;
