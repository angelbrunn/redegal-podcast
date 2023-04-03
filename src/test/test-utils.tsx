import { ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";

// info - Here you can wrap all the necessary providers
// note - https://testing-library.com/docs/react-testing-library/setup
// const AllTheProviders = ({children}) => {
//   return (
//     <ThemeProvider theme="light">
//       <TranslationProvider messages={defaultStrings}>
//         {children}
//       </TranslationProvider>
//     </ThemeProvider>
//   )
// }

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui);

export * from "@testing-library/react";
export { customRender as render };
