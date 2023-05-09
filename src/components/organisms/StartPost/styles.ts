import styled from "styled-components";
import { Input, Button } from 'antd'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    & .start-post-text {
        display: flex;
        align-items: flex-end;
        gap: 1rem;
    }

    & .start-post-multimedia {
        display: flex;
        justify-content: space-between;
        gap: 1rem;
        .post-multimedia-item {
            cursor: pointer;
            display: flex;
            gap: 0.5rem;
            align-items: center;
            
            img {
                height: 20px;
            }
        }
    }
`;

export const StartPostInput = styled(Input.TextArea)`
    width: 100%;
    border-radius: 15px 15px;
    padding: 0.5rem;
`;

export const SendButton = styled(Button)`
    
`