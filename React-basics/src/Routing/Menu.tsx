import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Menu() {

    const [isGuest, setIsGuest] = useState<boolean>(true);
  return (
    <div>

        {
            isGuest? <> <Link to='/home'>Home</Link></> : <> <Link to='/home'>Home</Link>
            <Link to='/comment'>Comment</Link>
            <Link to='/login'>Login</Link></>
        }
     


<Outlet/>
    </div>
  )
}
