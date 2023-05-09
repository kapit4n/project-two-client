import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h3 {
      color: white;
    }
`;

export const InfoContainer = styled.div`
    border-radius: 15px 15px;
    border: 1px solid white;
    display: flex;
    padding: 1rem;

    img {
        border-radius: 50%;
        height: 2.5rem;
        width: 2.5rem;
    }

    .icon-container {
      padding-right: 1rem;
    }

    .company-info {
      h4 {
        color: white;
      }

      p {
          color: #d2d7d9;
      }
      button {
        color: black;
        padding: 0.2rem 0.4rem;
      }
    }
`;
