import 'dotenv/config';
import React, { useState, useEffect } from 'react';
import { YtdForm } from './styled';
import { GOOOGLE_API_KEY } from '../../config/config.json';

export default function Youtube() {
  const [text, setText] = useState('');
  const [ytd, setYtd] = useState([]);

  function undke(event) {
    setText(event.target.value);
  }

  useEffect(() => {
    async function YoutubeAPI() {
      const request = await fetch(
        `https://www.googleapis.com/youtube/v3/search?&type=video&q=${text}&part=snippet&key=${GOOOGLE_API_KEY}`
      );
      const response = request.json();
      console.log(response);
    }
    YoutubeAPI();
  }, []);

  return (
    <>
      <YtdForm>
        <input
          type="text"
          placeholder="Digite algo aqui"
          value={text}
          onChange={undke}
        />
      </YtdForm>
    </>
  );
}
