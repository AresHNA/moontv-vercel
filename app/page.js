'use client'
import { useState, useEffect } from 'react'

export default function Home() {
  const [list, setList] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/videos')
      .then(res => res.json())
      .then(data => {
        setList(data.list || [])
        setLoading(false)
      })
  }, [])

  return (
    <div style="max-width:1200px; margin:0 auto; padding:20px">
      <h1 style="text-align:center; margin-bottom:30px">🌙 MoonTV</h1>

      {loading && <p style="text-align:center">加载中...</p>}

      <div style="display:grid; grid-template-columns:repeat(4,1fr); gap:16px">
        {list.map((item) => (
          <a
            key={item.vod_id}
            href={item.vod_play_url}
            target="_blank"
            style="text-decoration:none; color:#fff"
          >
            <div style="background:#1a1a1a; border-radius:10px; overflow:hidden">
              <img
                src={item.vod_pic}
                style="width:100%; aspect-ratio:2/3; object-fit:cover"
                alt=""
              />
              <div style="padding:10px">
                <p style="margin:0; font-size:14px; line-height:1.4">{item.vod_name}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
