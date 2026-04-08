import { styled, keyframes } from '@mui/system';

const blink = keyframes`
  0%, 49% { opacity: 1; }
  50%, 100% { opacity: 0; }
`;

const Cursor = styled('span')({
  display: 'inline-block',
  backgroundColor: 'currentColor',
  width: '4px',
  height: '0.9em',
  marginLeft: '6px',
  animation: `${blink} 1s steps(1) infinite`,
  verticalAlign: 'baseline',
});

export default function BlinkingBar() {
  return <Cursor />;
}