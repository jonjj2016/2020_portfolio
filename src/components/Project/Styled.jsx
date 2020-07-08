import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #333;
  color: #eee;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Slider = styled.div`
  height: 75%;
  width: 60%;
  /* overflow: hidden; */
  /* background-color: #000; */
  border-radius: 5px;
  position: relative;
  .menu {
    height: 7%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 4;
    background-color: #eee;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
    -webkit-box-shadow: -2px 21px 22px -10px rgba(0, 0, 0, 0.64);
    -moz-box-shadow: -2px 21px 22px -10px rgba(0, 0, 0, 0.64);
    box-shadow: -2px 21px 22px -10px rgba(0, 0, 0, 0.64);
    .title {
      font-weight: 700;
    }
    .circles {
      display: flex;

      .circle {
        height: 1rem;
        width: 1rem;
        border-radius: 100%;
        margin-right: 0.5rem;
      }
      .red {
        background-color: red;
      }
      .yellow {
        background-color: yellow;
      }
      .green {
        background-color: green;
      }
    }
  }
`;
export const Loader = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
`;
export const Image = styled.img`
  object-fit: fit;
  /* background-image: ${(props) => props.src};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center; */
  height: 100%;
  width: 100%;
`;
export const Main = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    border-radius: 3px solid red;
  }
`;
