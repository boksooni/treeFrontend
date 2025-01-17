import styled from 'styled-components'
import { ReactComponent as Search } from '../../assets/icons/search_icon.svg'

export const SearchButton = styled.button`
  max-width: calc(100% - 28px);
  width: 100%;
  height: 53px;
  border: none;
  background-color: #fff;
  box-shadow: 0px 4px 5px 1px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  position: absolute;
  left: 50%;
  padding: 0;
  transform: translateX(-50%);
  z-index: 2;
`

export const SearchIcon = styled(Search)`
  vertical-align: bottom;
  float: left;
  margin: 13px 0 0 16px;
`

export const Text = styled.span`
  color: #aeaeae;
  font-weight: 400;
  font-size: 14px;
  line-height: 53px;
  float: left;
  margin-left: 10px;
`
