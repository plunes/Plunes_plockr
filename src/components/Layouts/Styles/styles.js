import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  position: relative;
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;

  @media (min-width: 1200px) {
    max-width: 1200px;
  }
`;

export const PlunesBtn = styled.div`
  border-radius: ${props => (props.brdRadius ? props.brdRadius : '50px')};
  box-shadow: ${props =>(props.brdShadow ? props.brdShadow :'none')};
  background-color: ${props => (props.mbgClr ? props.mbgClr : '#ffff')};
  width: ${props => (props.mcWidth ? props.mcWidth : '6rem')};
  display: flex;
  color: ${props => (props.mcolor ? props.mcolor : '#000')};
  border: solid 1px
  ${props => (props.mborderClr ? props.mborderClr : '#ffff')};
  justify-content: space-between;
  align-items: center;
  padding: 15px 15px 0px;
  height: ${props => (props.mcHeight ? props.mcHeight : '40px')};
  p {
    font-size: 15px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
   
  }
  p {
    font-size: 15px;
  }
  @media (min-width: 576px) {
    height: 40px;
    width: ${props => (props.cWidth ? props.cWidth : '100%')};
    background-color: ${props => (props.bgClr ? props.bgClr : 'transparent')};
    color: ${props => (props.Color ? props.Color : '#000')};
     border: solid 1px
       ${props => (props.borderClr ? props.borderClr : '#000')};
    p {
      font-size: 15px;
    }
  }
  @media (min-width: 1200px) {
    height: 40px;
    p {
      font-size: 15px;
    }
  }
  @media (min-width: 1400px) {
    height: 50px;
  }
  @media (min-width: 1900px) {
    height: 40px;
    p {
      font-size: 20px;
    }
  }
`;
