import React from 'react'
import { useState } from 'react'

import { IiMusicS } from '../../icons'

function DropMusic() {
  const [show, setShow] = useState(false)

  return (
    <div className=" dropdown dropdown-right relative">
      <div className=" w-16" onClick={() => setShow((p) => !p)}>
        <IiMusicS />
      </div>

      <iframe
        className={`absolute top-100 right-0 w-[300px] ${
          show ? 'visible' : 'invisible'
        }`}
        title="Spotify Playlist"
        src="https://open.spotify.com/embed/playlist/2DQu4yw3Bx58eNEZYIevDl?utm_source=generator"
        width="100%"
        height="150"
        allowFullScreen={true}
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      />
    </div>
  )
}

export default DropMusic
