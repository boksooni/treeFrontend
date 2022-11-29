import styled from 'styled-components'

export const Container = styled.article`
  position: absolute;
  bottom: 98px;
  left: 22px;
  width: 90%;
  margin-bottom: 15px;
  box-sizing: border-box;
  /* height: 35%; */
  background: #ffffff;
  box-shadow: 0px -4px 4px rgb(0 0 0 / 5%);
  border-radius: 10px;
  z-index: 100;
`

export const ImgSection = styled.section`
  width: 100%;
  text-align: center;
`

export const ImgItems = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5px;
  padding: 14px 24px;
`
