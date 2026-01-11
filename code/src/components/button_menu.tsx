import React from 'react'
import style from "../assets/css/button.module.css"

const ButtonMenu = () => {
  return (
      <button className={style.buttonmenu}>
          <div className={style.barremenu}></div>
          <div className={style.barremenu}></div>
          <div className={style.barremenu}></div>
    </button>
  )
}

export default ButtonMenu;