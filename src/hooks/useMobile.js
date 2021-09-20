import { useWindowSize } from './useWindowSize';

const useMobile = (maxWidth) => {
    const { width } = useWindowSize();
    return width > maxWidth
}

export { useMobile }
