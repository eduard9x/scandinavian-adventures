import useWindowSize from '../hooks/window-size'

const isMobile = (): boolean => {
  const windowWidth = useWindowSize();
  return windowWidth.width <= 425;
}

export default isMobile
