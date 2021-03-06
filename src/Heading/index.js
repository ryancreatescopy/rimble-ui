import React from 'react'

import styled from 'styled-components'
import Text from '../Text'

// body size + 6 headings
const Heading = styled(Text)``

Heading.defaultProps = {
  as: 'h3',
  fontSize: 4,
  fontWeight: 3,
  textAlign: 'left',
  my: 3
}

Heading.h1 = styled(Heading)``
Heading.h1.defaultProps = {
  as: 'h1',
  fontSize: 6,
  fontWeight: 3,
  textAlign: 'left',
  my: 3
}

Heading.h2 = styled(Heading)``
Heading.h2.defaultProps = {
  as: 'h2',
  fontSize: 5,
  fontWeight: 3,
  textAlign: 'left',
  my: 3
}
Heading.h3 = styled(Heading)``
Heading.h3.defaultProps = {
  as: 'h3',
  fontSize: 4,
  fontWeight: 3,
  textAlign: 'left',
  my: 3
}
Heading.h4 = styled(Heading)``
Heading.h4.defaultProps = {
  as: 'h4',
  fontSize: 3,
  fontWeight: 3,
  textAlign: 'left',
  my: 3
}
Heading.h5 = styled(Heading)``
Heading.h5.defaultProps = {
  as: 'h5',
  fontSize: 2,
  fontWeight: 3,
  textAlign: 'left',
  my: 3
}
Heading.h6 = styled(Heading)``
Heading.h6.defaultProps = {
  as: 'h6',
  fontSize: 1,
  fontWeight: 3,
  textAlign: 'left',
  my: 3
}

Heading.displayName = 'Heading'

export default Heading
