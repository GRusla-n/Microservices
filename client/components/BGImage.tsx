import Image from 'next/image';
import { styled } from '@mui/material';
import { FC } from 'react';

const Wrapper = styled('div')({
  position: 'fixed',
  height: '100vh',
  width: '100vw',
  overflow: 'hidden',
  zIndex: -1,
});

type Props = {}

const BGImage: FC<Props> = (props) => {

  return <Wrapper>
    <Image
      src="/../public/images/auth.jpg"
      layout="fill"
      objectFit="cover"
      quality={100}
      loading="eager"
    />
  </Wrapper>;
};

export default BGImage;
