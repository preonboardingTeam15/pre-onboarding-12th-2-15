import { styled } from 'styled-components'

import { AD_URL } from '../../api/constants'
import AdImage from '../../image/AdImage.webp'

const AdBanner = () => {
  return (
    <Box>
      <ImageBtn
        onClick={() => {
          window.open(AD_URL)
        }}
      >
        <Image src={AdImage} alt="광고이미지" />
      </ImageBtn>
    </Box>
  )
}

const Box = styled.div`
  display: flex;
  width: 50%;
  height: 5rem;
  margin-top: 1rem;
`
const ImageBtn = styled.button`
  width: 100%;
  height: inherit;
`
const Image = styled.img`
  width: inherit;
  height: inherit;
`

export default AdBanner
