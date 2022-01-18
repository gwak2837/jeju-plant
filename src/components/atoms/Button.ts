import { PRIMARY_COLOR, PRIMARY_GREY_COLOR, PRIMARY_RED_COLOR } from 'src/models/constants'
import styled, { css } from 'styled-components'

const ButtonCSS = css`
  border: 1px solid;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  transition: background 0.3s ease-out;
  width: 100%;
`

type PrimaryButtonProps = {
  disabled?: boolean
}

export const PrimaryButton = styled.button<PrimaryButtonProps>`
  ${ButtonCSS}
  background: ${(p) => (p.disabled ? PRIMARY_GREY_COLOR : PRIMARY_COLOR)};
  border-color: ${(p) => (p.disabled ? PRIMARY_GREY_COLOR : PRIMARY_COLOR)};
  color: #fff;
  cursor: ${(p) => (p.disabled ? 'not-allowed' : 'pointer')};

  :hover {
    background: ${(p) => (p.disabled ? PRIMARY_GREY_COLOR : PRIMARY_COLOR)}e0;
  }
`

export const RedButton = styled.button<PrimaryButtonProps>`
  ${ButtonCSS}
  background: ${(p) => (p.disabled ? PRIMARY_GREY_COLOR : '#fff')};
  border-color: ${(p) => (p.disabled ? PRIMARY_GREY_COLOR : PRIMARY_RED_COLOR)};
  color: ${(p) => (p.disabled ? PRIMARY_GREY_COLOR : PRIMARY_RED_COLOR)};
  cursor: ${(p) => (p.disabled ? 'not-allowed' : 'pointer')};

  :hover {
    background: ${(p) => (p.disabled ? PRIMARY_GREY_COLOR : PRIMARY_RED_COLOR)}20;
  }
`
