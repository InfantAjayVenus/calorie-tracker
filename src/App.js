import { MantineProvider, Tabs } from '@mantine/core';

function App() {
  return (
    <MantineProvider theme={{colorScheme: 'dark'}} withGlobalStyles withNormalizeCSS>
      <Tabs></Tabs>
    </MantineProvider>
  );
}

export default App;
