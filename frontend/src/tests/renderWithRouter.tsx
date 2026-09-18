import { render } from '@testing-library/react';
import type { RenderOptions } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import type { ReactElement } from 'react';

export function renderWithRouter(
  ui: ReactElement,
  { route = '/' }: { route?: string } = {},
  options?: Omit<RenderOptions, 'wrapper'>
) {
  return render(
    <MemoryRouter initialEntries={[route]}>
      {ui}
    </MemoryRouter>,
    options
  );
}