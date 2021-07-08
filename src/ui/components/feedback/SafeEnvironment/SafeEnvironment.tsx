import { Container } from '@material-ui/core';
import React from 'react';
import { SafeEnvorimentContainer } from './SafeEnvironment.style';

export const SafeEnvironment = () => {
  return (
    <SafeEnvorimentContainer>
      <Container>
        Ambiente seguro
        <i className="twf-lock" />
      </Container>
    </SafeEnvorimentContainer>
  );
};
