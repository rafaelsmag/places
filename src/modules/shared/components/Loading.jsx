import React from 'react'
import { Loader as LoaderSemantic, Dimmer } from 'semantic-ui-react'

export const Loader = () => (
    <Dimmer active>
        <LoaderSemantic />
    </Dimmer>
)
