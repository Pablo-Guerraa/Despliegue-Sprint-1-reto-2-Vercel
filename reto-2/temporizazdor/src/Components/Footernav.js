import React from 'react'
import { Paginas, StyledFooterNav } from '../Styles/StyledFooterNav'

export default function Footernav() {
  return (
    <StyledFooterNav>
      <Paginas>
        <a href="https://www.facebook.com/" target="_blank"><img src="https://res.cloudinary.com/dxhgejzwc/image/upload/v1650767192/icon-facebook_mntk3r.svg" alt="Facebook" /></a>
        <a href="https://co.pinterest.com/" target="_blank"><img src="https://res.cloudinary.com/dxhgejzwc/image/upload/v1650767192/icon-pinterest_eefdx0.svg" alt="Pinterest" /></a>
        <a href="https://www.instagram.com/" target="_blank"><img src="https://res.cloudinary.com/dxhgejzwc/image/upload/v1650767192/icon-instagram_zcnznt.svg" alt="Pinterest" /></a>
      </Paginas>
    </StyledFooterNav>
  )
}
