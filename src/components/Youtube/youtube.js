import React, { useState, useEffect } from 'react';
import { YtdForm } from './styled';
import { GOOGLE_API_KEY } from '../../config/config.json';

export default function Youtube() {
  const [text, setText] = useState('');
  const [ytd, setYtd] = useState([]);
  const MAX_RESULTS = 50;

  function changeInput(event) {
    setText(event.target.value);
  }

  useEffect(async () => {
    await fetch(
      `https://www.googleapis.com/youtube/v3/search?&type=music&q=restart&part=snippet&maxResults=${MAX_RESULTS}&key=${GOOGLE_API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => setYtd(data.items));
  }, []);

  return (
    <>
      <input
        type="text"
        placeholder="Digite algo aqui"
        value={text}
        onChange={changeInput}
      />
      <YtdForm>
        {ytd.map((y) => (
          <div id="youtube" key={y.id.videoId}>
            <a
              href={`https://www.youtube.com/watch?v=${y.id.videoId}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {y.snippet.title}
            </a>
          </div>
        ))}
      </YtdForm>
    </>
  );
}
