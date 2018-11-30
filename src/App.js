import React from 'react'
import Snake from './Snake'

import { database } from './FirebaseConfig'

const App = (props) => (
  <div>
    <Snake
      firebaseDatabase={database}
    />
  </div>
)

export default App