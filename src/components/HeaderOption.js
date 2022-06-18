import React from 'react'

import styles from "./header.module.scss" 

function HeaderOption({Icon ,title}) {
  return (
    <div>
        {Icon && <Icon className={styles.header_icon}/>}
        <h6>{title}</h6>
    </div>
  )
}

export default HeaderOption