import React from 'react';

import { Container, Text } from './styles';

export default function Main() {
    return (
      <Container>
          <Text>Styled Component</Text>
      </Container>
    );
};

Main.navigationOptions = {
    title: 'Usuários',
};
