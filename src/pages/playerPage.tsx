import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import NavBar from '../components/navbar'
import Player from '../components/player'
import SideMenu from '../components/sideMenu'

import { Container } from '@material-ui/core'


function PlayerPage() {
  // const navigate = useNavigate();
  // const goBack = () => navigate(-1)

  const [songData, setSongData] = useState({
    album: '',
    completeFile: '',
    duration: '',
    name: '',
    price: 0,
    singer: '',
    _id:''
  })
  const [albumData, setAlbumData] = useState({})
  const { idSong } = useParams() as { idSong: string };

  useEffect(() => {
    async function getSong() {
      // 6281949fd86382a1663b22a9
      const urlBase = `http://3.218.67.164:10035/`
      const urlSong = `${urlBase}songs/${idSong}`
      const song = await fetch(urlSong).then((res) => res.json())
      setSongData(song.data.song)
      const urlAlbum =`${urlBase}album/${song.data.song.album}`
      const album = await fetch(urlAlbum).then((res) => res.json())
      console.log(album);

      setAlbumData(album.data.album)
    }
    getSong()
  },[])
  
  return (
    <Container maxWidth='sm'>
      <div className='border-nav'></div>
      <NavBar />
      <SideMenu />
      <div className='controls_right mt-2'>
        {/* <button className='btn-main' onClick={goBack}>
          Songs list
        </button> */}
      </div>
      <Player songData={songData} albumData={albumData}/>
    </Container>
  );
}

export default PlayerPage;