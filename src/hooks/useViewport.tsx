import { useViewportSize } from '@mantine/hooks';

export const useViewport = () => {
  const viewportSize = useViewportSize();
  const isMobile = viewportSize.width > 850;
  const isDesktop = viewportSize.width > 1300;
  const height = viewportSize.height;

  return { isDesktop, isMobile, height };
};
